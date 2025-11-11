import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const carouselWrapper = document.createElement('div');
  carouselWrapper.classList.add('swiper', 'carousel-primary-swiper', 'carousel-primary-swiper-carousel-419d8524f7', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
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

  [...block.children].forEach((row) => {
    const swiperSlide = document.createElement('div');
    moveInstrumentation(row, swiperSlide);
    swiperSlide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    swiperSlide.setAttribute('role', 'tabpanel');
    swiperSlide.setAttribute('aria-roledescription', 'slide');

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
      const optimizedPic = createOptimizedPicture(img.src, img.alt, img.loading, img.fetchPriority);
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
}
