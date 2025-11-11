import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Handles the video controls (Play/Pause/Mute) and binds event listeners.
 */
function handleVideoControls(videoElement, playButton, pauseButton, muteButton, unmuteButton, noAudioButton) {
    const hasAudioTrack = videoElement.audioTracks && videoElement.audioTracks.length > 0;

    // --- Initial State ---
    if (hasAudioTrack) {
        if (videoElement.muted) {
            muteButton.classList.remove('carousel-d-none');
        } else {
            unmuteButton.classList.remove('carousel-d-none');
        }
    } else {
        // Show 'No Audio' icon if no audio track exists
        noAudioButton.classList.remove('carousel-d-none');
    }
    
    // Set initial play/pause state
    if (videoElement.paused) {
        playButton.classList.remove('carousel-d-none');
        pauseButton.classList.add('carousel-d-none');
    } else {
        playButton.classList.add('carousel-d-none');
        pauseButton.classList.remove('carousel-d-none');
    }

    // --- Toggle Mute/Unmute ---
    muteButton.addEventListener('click', () => {
        videoElement.muted = false;
        muteButton.classList.add('carousel-d-none');
        unmuteButton.classList.remove('carousel-d-none');
    });

    unmuteButton.addEventListener('click', () => {
        videoElement.muted = true;
        muteButton.classList.remove('carousel-d-none');
        unmuteButton.classList.add('carousel-d-none');
    });

    // --- Toggle Play/Pause ---
    playButton.addEventListener('click', () => {
        videoElement.play().catch(e => console.error('Video play failed:', e));
        playButton.classList.add('carousel-d-none');
        pauseButton.classList.remove('carousel-d-none');
    });

    pauseButton.addEventListener('click', () => {
        videoElement.pause();
        playButton.classList.remove('carousel-d-none');
        pauseButton.classList.add('carousel-d-none');
    });
}

/**
 * Implements a simple vanilla JavaScript carousel/slider.
 */
function initVanillaSlider(carouselWrapper, slides) {
    const isLoop = carouselWrapper.getAttribute('data-is-loop') === 'true';
    const isAutoplay = carouselWrapper.getAttribute('data-is-autoplay') === 'true';
    const delay = parseInt(carouselWrapper.getAttribute('data-delay'), 10) || 5000;
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoplayInterval;

    const paginationContainer = carouselWrapper.querySelector('.carousel-primary-swiper-pagination');
    const nextButton = carouselWrapper.querySelector('.swiper-button-next');
    const prevButton = carouselWrapper.querySelector('.swiper-button-prev');

    /**
     * Updates slide visibility and video state.
     */
    const goToSlide = (index) => {
        // Calculate the next index, handling loop boundaries
        let nextIndex = index;
        if (nextIndex >= totalSlides) {
            nextIndex = isLoop ? 0 : totalSlides - 1;
        } else if (nextIndex < 0) {
            nextIndex = isLoop ? totalSlides - 1 : 0;
        }

        // Only proceed if the slide actually changes (or if it's the first initialization)
        if (nextIndex === currentSlide && currentSlide !== 0) return;

        // 1. Pause all videos and remove active classes
        slides.forEach((slide, i) => {
            const video = slide.querySelector('.carousel-banner-video');
            if (video && !video.paused) {
                video.pause();
            }
            slide.classList.remove('swiper-slide-active');
            slide.style.transform = `translateX(-${nextIndex * 100}%)`; // Simple translateX for movement
            slide.style.opacity = '0'; // Hide slides
        });
        
        // 2. Set new active slide
        currentSlide = nextIndex;
        const activeSlide = slides[currentSlide];
        activeSlide.classList.add('swiper-slide-active');
        activeSlide.style.opacity = '1';
        
        // 3. Update pagination bullets
        if (paginationContainer) {
            Array.from(paginationContainer.children).forEach((bullet, i) => {
                if (i === currentSlide) {
                    bullet.classList.add('swiper-pagination-bullet-active');
                    bullet.setAttribute('aria-current', 'true');
                } else {
                    bullet.classList.remove('swiper-pagination-bullet-active');
                    bullet.removeAttribute('aria-current');
                }
            });
        }
        
        // 4. Play video on the active slide (if configured to autoplay)
        const activeVideo = activeSlide.querySelector('.carousel-banner-video');
        if (activeVideo && activeVideo.getAttribute('data-is-autoplay') === 'true') {
            activeVideo.play().catch(e => console.warn('Autoplay failed for slide video:', e));
        }
    };

    // --- Autoplay Logic ---
    const startAutoplay = () => {
        if (isAutoplay && !autoplayInterval) {
            autoplayInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, delay);
        }
    };

    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    };
    
    // Add interaction pause on hover
    carouselWrapper.addEventListener('mouseenter', stopAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);

    // --- Navigation Controls (Next/Prev) ---
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutoplay();
            goToSlide(currentSlide + 1);
            startAutoplay();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutoplay();
            goToSlide(currentSlide - 1);
            startAutoplay();
        });
    }

    // --- Pagination Creation & Controls (Since these are likely empty placeholders) ---
    if (paginationContainer && paginationContainer.children.length === 0) {
        for (let i = 0; i < totalSlides; i++) {
            const bullet = document.createElement('span');
            bullet.classList.add('swiper-pagination-bullet');
            bullet.setAttribute('tabindex', '0');
            bullet.setAttribute('role', 'button');
            bullet.setAttribute('aria-label', `Go to slide ${i + 1}`);
            bullet.addEventListener('click', () => {
                stopAutoplay();
                goToSlide(i);
                startAutoplay();
            });
            paginationContainer.append(bullet);
        }
    } else if (paginationContainer) {
        // If bullets are already there (copied from the original block structure)
        Array.from(paginationContainer.children).forEach((bullet, i) => {
            bullet.addEventListener('click', () => {
                stopAutoplay();
                goToSlide(i);
                startAutoplay();
            });
        });
    }

    // Initialize the first slide and start autoplay
    goToSlide(0);
    startAutoplay();
}

export default function decorate(block) {
    const carouselWrapper = document.createElement('div');
    carouselWrapper.classList.add('swiper', 'carousel-primary-swiper', 'carousel-primary-swiper-carousel-419d8524f7', 'swiper-horizontal', 'swiper-backface-hidden');
    // Remove swiper-initialized class as we are manually managing the state
    carouselWrapper.setAttribute('role', 'group');
    carouselWrapper.setAttribute('aria-live', 'polite');
    carouselWrapper.setAttribute('aria-roledescription', 'carousel');
    carouselWrapper.setAttribute('data-is-autoplay', block.dataset.isAutoplay || 'true');
    carouselWrapper.setAttribute('data-delay', block.dataset.delay || '5000');
    carouselWrapper.setAttribute('data-autopause-disabled', block.dataset.autopauseDisabled || 'true');
    carouselWrapper.setAttribute('data-is-loop', block.dataset.isLoop || 'false');
    carouselWrapper.setAttribute('data-placeholder-text', block.dataset.placeholderText || 'false');

    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');
    // Add custom style for vanilla JS transition
    swiperWrapper.style.display = 'flex';
    swiperWrapper.style.width = '100%';
    swiperWrapper.style.height = '100%';
    carouselWrapper.append(swiperWrapper);

    const slides = [];

    [...block.children].forEach((row) => {
        const swiperSlide = document.createElement('div');
        moveInstrumentation(row, swiperSlide);
        swiperSlide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
        swiperSlide.setAttribute('role', 'tabpanel');
        swiperSlide.setAttribute('aria-roledescription', 'slide');
        // Add custom styles for vanilla JS slide positioning
        swiperSlide.style.flexShrink = '0';
        swiperSlide.style.width = '100%';
        swiperSlide.style.position = 'absolute';
        swiperSlide.style.transition = 'opacity 0.5s ease-in-out';
        swiperSlide.style.top = '0';
        swiperSlide.style.left = '0';
        swiperSlide.style.opacity = '0'; // Start hidden
        
        slides.push(swiperSlide);

        const carouselBanner = document.createElement('div');
        carouselBanner.classList.add('carousel-banner');
        swiperSlide.append(carouselBanner);

        const section = document.createElement('section');
        section.classList.add('carousel-banner-section');
        carouselBanner.append(section);

        const sectionWrapper = document.createElement('div');
        sectionWrapper.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');
        section.append(sectionWrapper);

        const cells = [...row.children];
        const videoCell = cells[0];
        const imageCell = cells[1];
        const ctaCell = cells[2];

        // Handle Video
        const video = videoCell?.querySelector('video');
        if (video) {
            const videoWrapper = document.createElement('div');
            videoWrapper.classList.add('carousel-video-wrapper');
            sectionWrapper.append(videoWrapper);

            const newVideo = document.createElement('video');
            newVideo.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
            newVideo.title = video.title;
            newVideo.ariaLabel = video.ariaLabel;
            newVideo.setAttribute('data-is-autoplay', video.dataset.isAutoplay);
            newVideo.playsInline = video.playsInline;
            newVideo.preload = video.preload;
            newVideo.fetchPriority = video.fetchPriority;
            newVideo.loop = video.loop;
            newVideo.muted = video.muted;
            newVideo.autoplay = video.autoplay;

            [...video.querySelectorAll('source')].forEach((source) => {
                const newSource = document.createElement('source');
                newSource.src = source.src;
                newSource.type = source.type;
                newVideo.append(newSource);
            });
            videoWrapper.append(newVideo);

            // Add play/pause buttons
            const playPauseWrapper = document.createElement('div');
            playPauseWrapper.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');
            videoWrapper.append(playPauseWrapper);

            const playButton = document.createElement('button');
            playButton.type = 'button';
            playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
            playButton.innerHTML = videoCell.querySelector('.carousel-icon-play')?.innerHTML || '';
            playPauseWrapper.append(playButton);

            const pauseButton = document.createElement('button');
            pauseButton.type = 'button';
            pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
            pauseButton.innerHTML = videoCell.querySelector('.carousel-icon-pause')?.innerHTML || '';
            playPauseWrapper.append(pauseButton);

            // Add mute/unmute buttons
            const muteWrapper = document.createElement('div');
            muteWrapper.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');
            videoWrapper.append(muteWrapper);

            const muteButton = document.createElement('button');
            muteButton.type = 'button';
            muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
            muteButton.innerHTML = videoCell.querySelector('.carousel-icon-mute')?.innerHTML || '';
            muteWrapper.append(muteButton);

            const unmuteButton = document.createElement('button');
            unmuteButton.type = 'button';
            unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
            unmuteButton.innerHTML = videoCell.querySelector('.carousel-icon-unmute')?.innerHTML || '';
            muteWrapper.append(unmuteButton);

            const noAudioButton = document.createElement('button');
            noAudioButton.type = 'button';
            noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
            noAudioButton.innerHTML = videoCell.querySelector('.carousel-no-audio-icon')?.innerHTML || '';
            muteWrapper.append(noAudioButton);
            
            // Apply controls logic
            handleVideoControls(newVideo, playButton, pauseButton, muteButton, unmuteButton, noAudioButton);
        }

        // Handle Image
        const img = imageCell?.querySelector('img');
        if (img) {
            const optimizedPic = createOptimizedPicture(img.src, img.alt);
            moveInstrumentation(img, optimizedPic.querySelector('img'));
            optimizedPic.querySelector('img').classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
            sectionWrapper.append(optimizedPic);
        }

        // Handle CTA
        const ctaLink = ctaCell?.querySelector('a');
        if (ctaLink) {
            const ctaWrapper = document.createElement('div');
            ctaWrapper.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');
            sectionWrapper.append(ctaWrapper);

            const bannerCta = document.createElement('div');
            bannerCta.classList.add('carousel-banner-cta');
            ctaWrapper.append(bannerCta);

            const textCenter = document.createElement('div');
            textCenter.classList.add('carousel-text-center');
            bannerCta.append(textCenter);

            const newCtaLink = document.createElement('a');
            newCtaLink.id = ctaLink.id;
            newCtaLink.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
            newCtaLink.setAttribute('data-link-region', ctaLink.dataset.linkRegion);
            newCtaLink.setAttribute('data-is-internal', ctaLink.dataset.isInternal);
            newCtaLink.setAttribute('data-enable-gating', ctaLink.dataset.enableGating);
            newCtaLink.href = ctaLink.href;
            newCtaLink.target = ctaLink.target;

            const spanText = document.createElement('span');
            spanText.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
            spanText.textContent = ctaLink.textContent.trim();
            newCtaLink.append(spanText);
            textCenter.append(newCtaLink);

            // Add popup elements if they exist
            const popUp = ctaCell.querySelector('.carousel-pop-up');
            if (popUp) {
                textCenter.append(popUp.cloneNode(true));
            }
            const externalLinkPopup = ctaCell.querySelector('.carousel-external-link-popup');
            if (externalLinkPopup) {
                bannerCta.append(externalLinkPopup.cloneNode(true));
            }
        }
        swiperWrapper.append(swiperSlide);
    });

    // Add navigation and pagination elements
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('carousel-cmp-carousel__actions');
    actionsDiv.innerHTML = block.querySelector('.carousel-cmp-carousel__actions')?.innerHTML || '';
    // If navigation buttons are not present in the block HTML, we manually add them
    if (actionsDiv.children.length === 0) {
        actionsDiv.innerHTML = `
            <button type="button" class="swiper-button-prev" aria-label="Previous slide"></button>
            <button type="button" class="swiper-button-next" aria-label="Next slide"></button>
        `;
    }
    carouselWrapper.append(actionsDiv);

    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('carousel-swiper-container');
    swiperContainer.innerHTML = block.querySelector('.carousel-swiper-container')?.innerHTML || '';
    carouselWrapper.append(swiperContainer);

    const paginationDiv = document.createElement('div');
    paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
    paginationDiv.innerHTML = block.querySelector('.carousel-swiper-pagination')?.innerHTML || '';
    carouselWrapper.append(paginationDiv);

    block.textContent = '';
    block.append(carouselWrapper);
    
    // ------------------------------------------------------------------
    // 🚀 PURE JS SLIDER IMPLEMENTATION CALL
    // ------------------------------------------------------------------
    if (slides.length > 0) {
        initVanillaSlider(carouselWrapper, slides);
    }
}