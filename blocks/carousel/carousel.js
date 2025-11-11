import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Initializes a basic slider functionality using pure JavaScript.
 * This function handles slide transitions, navigation clicks, and pagination updates.
 * @param {HTMLElement} wrapper The main carousel container.
 */
function initializeCustomSlider(wrapper) {
  const slides = wrapper.querySelectorAll('.swiper-slide');
  const nextButton = wrapper.querySelector('.swiper-button-next') || wrapper.querySelector('.carousel-primary-swiper__buttonNext');
  const prevButton = wrapper.querySelector('.swiper-button-prev') || wrapper.querySelector('.carousel-primary-swiper__buttonPrev');
  const pagination = wrapper.querySelector('.carousel-swiper-pagination');

  if (slides.length === 0) return;

  let currentIndex = 0;
  const isLoop = wrapper.dataset.isLoop === 'true';

  // --- Core Slide Visibility Logic ---
  const showSlide = (index) => {
    // Clamp index for non-looping carousels
    if (!isLoop) {
      if (index < 0) index = 0;
      if (index >= slides.length) index = slides.length - 1;
    }
    
    // Handle looping (using modulus operator)
    currentIndex = index % slides.length;
    if (currentIndex < 0) currentIndex += slides.length; // Handle negative index for reverse looping

    slides.forEach((slide, i) => {
      slide.classList.remove('swiper-slide-active');
      if (i === currentIndex) {
        slide.classList.add('swiper-slide-active');
      }
    });

    // Update pagination dots (assuming they are children of the pagination container)
    if (pagination) {
      [...pagination.children].forEach((dot, i) => {
        dot.classList.remove('swiper-pagination-bullet-active');
        dot.setAttribute('aria-current', 'false');
        if (i === currentIndex) {
          dot.classList.add('swiper-pagination-bullet-active');
          dot.setAttribute('aria-current', 'true');
        }
      });
    }

    // Update button states (for non-looping)
    if (nextButton) nextButton.disabled = !isLoop && currentIndex === slides.length - 1;
    if (prevButton) prevButton.disabled = !isLoop && currentIndex === 0;
  };

  // --- Navigation Handlers ---
  if (nextButton) {
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
  }
  if (prevButton) {
    prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
  }

  // --- Pagination Handlers (if dynamically generated) ---
  if (pagination) {
    pagination.addEventListener('click', (e) => {
      const dot = e.target.closest('.swiper-pagination-bullet');
      if (dot) {
        // Find the index of the clicked dot
        const dotIndex = Array.from(pagination.children).indexOf(dot);
        if (dotIndex !== -1) {
          showSlide(dotIndex);
        }
      }
    });
  }

  // --- Autoplay Logic (if requested) ---
  if (wrapper.dataset.isAutoplay === 'true') {
    const delay = parseInt(wrapper.dataset.delay, 10) || 5000;
    let autoplayTimer = setInterval(() => showSlide(currentIndex + 1), delay);
    
    // Stop autoplay on hover/interaction (if not disabled)
    if (wrapper.dataset.autopauseDisabled !== 'true') {
        const resetAutoplay = () => {
            clearInterval(autoplayTimer);
            autoplayTimer = setInterval(() => showSlide(currentIndex + 1), delay);
        };
        
        wrapper.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
        wrapper.addEventListener('mouseleave', resetAutoplay);
        if (nextButton) nextButton.addEventListener('click', resetAutoplay);
        if (prevButton) prevButton.addEventListener('click', resetAutoplay);
    }
  }
  
  // --- Initial Setup ---
  showSlide(0);
}

export default function decorate(block) {
  // --- Start DOM Construction ---
  const carouselWrapper = document.createElement('div');
  const swiperId = `carousel-${Math.random().toString(36).substring(2, 11)}`;
  carouselWrapper.id = swiperId; 
  
  // Keep only essential classes for styling and the root container
  carouselWrapper.classList.add('swiper', 'carousel-primary-swiper');
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
  carouselWrapper.append(swiperWrapper);

  [...block.children].forEach((row, index) => {
    const swiperSlide = document.createElement('div');
    moveInstrumentation(row, swiperSlide);
    swiperSlide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    swiperSlide.setAttribute('role', 'tabpanel');
    swiperSlide.setAttribute('aria-roledescription', 'slide');
    // Hide all slides initially
    swiperSlide.style.display = 'none';

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
    }

    // Handle Image
    const img = imageCell?.querySelector('img');
    if (img) {
      // Corrected call: uses boolean for eager, omits breakpoints (uses default array)
      const optimizedPic = createOptimizedPicture(img.src, img.alt, img.loading === 'eager');
      optimizedPic.querySelector('img').setAttribute('fetchpriority', img.fetchPriority || 'auto');
      
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
  
  // Assuming the inner content includes elements that can be used as next/prev buttons, 
  // like children with classes 'swiper-button-prev' and 'swiper-button-next'.
  actionsDiv.innerHTML = block.querySelector('.carousel-cmp-carousel__actions')?.innerHTML || 
                         '<button class="swiper-button-prev">Prev</button><button class="swiper-button-next">Next</button>'; 
  carouselWrapper.append(actionsDiv);

  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('carousel-swiper-container');
  swiperContainer.innerHTML = block.querySelector('.carousel-swiper-container')?.innerHTML || '';
  carouselWrapper.append(swiperContainer);

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination');
  
  // Dynamically generate pagination dots based on the number of slides
  const slideCount = block.children.length;
  for(let i = 0; i < slideCount; i++) {
      const dot = document.createElement('span');
      dot.classList.add('swiper-pagination-bullet');
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.setAttribute('tabindex', '0');
      paginationDiv.append(dot);
  }
  
  carouselWrapper.append(paginationDiv);

  block.textContent = '';
  block.append(carouselWrapper);
  
  // --- Initialize Custom Slider Logic ---
  initializeCustomSlider(carouselWrapper);
}