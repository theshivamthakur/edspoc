import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const carouselPositionRelative = document.createElement('div');
  carouselPositionRelative.classList.add('carousel-position-relative');

  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper', 'carousel-primary-swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
  swiperContainer.setAttribute('role', 'group');
  swiperContainer.setAttribute('aria-live', 'polite');
  swiperContainer.setAttribute('aria-roledescription', 'carousel');
  swiperContainer.setAttribute('data-is-autoplay', 'true');
  swiperContainer.setAttribute('data-delay', '5000');
  swiperContainer.setAttribute('data-autopause-disabled', 'true');
  swiperContainer.setAttribute('data-is-loop', 'false');
  swiperContainer.setAttribute('data-placeholder-text', 'false');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');

  const items = [...block.children];
  items.forEach((item, index) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    swiperSlide.setAttribute('role', 'tabpanel');
    swiperSlide.setAttribute('aria-roledescription', 'slide');
    if (index === 0) {
      swiperSlide.classList.add('carousel-cmp-carousel__item--active', 'swiper-slide-active');
      swiperSlide.setAttribute('data-active', '1');
    }

    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('carousel-banner');

    const section = document.createElement('section');
    section.classList.add('carousel-banner-section');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');

    const mediaDiv = item.children[0];
    const ctaDiv = item.children[1];

    if (mediaDiv && mediaDiv.querySelector('picture')) {
      const img = mediaDiv.querySelector('img');
      if (img) {
        img.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
        img.setAttribute('loading', 'eager');
        img.setAttribute('fetchpriority', 'high');
        img.setAttribute('decoding', 'async');
        wrapperDiv.append(img);
        moveInstrumentation(mediaDiv, img);
      }
    } else if (mediaDiv && mediaDiv.querySelector('video')) {
      const videoWrapper = document.createElement('div');
      videoWrapper.classList.add('carousel-video-wrapper');

      const video = mediaDiv.querySelector('video');
      if (video) {
        video.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
        video.setAttribute('title', 'Video');
        video.setAttribute('aria-label', 'Video');
        video.setAttribute('data-is-autoplay', 'true');
        video.setAttribute('playsinline', '');
        video.setAttribute('preload', 'metadata');
        video.setAttribute('fetchpriority', 'high');
        video.setAttribute('loop', 'false');
        video.setAttribute('muted', 'true');
        video.setAttribute('autoplay', 'true');
        videoWrapper.append(video);
        moveInstrumentation(mediaDiv.querySelector('video'), video);
      }

      const sources = mediaDiv.querySelectorAll('source');
      sources.forEach(source => {
        video.append(source);
        moveInstrumentation(source, source);
      });

      const playPauseContainer = document.createElement('div');
      playPauseContainer.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');

      const playButton = document.createElement('button');
      playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      playButton.setAttribute('type', 'button');
      playButton.innerHTML = mediaDiv.children[1].textContent.trim();
      moveInstrumentation(mediaDiv.children[1], playButton);

      const pauseButton = document.createElement('button');
      pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      pauseButton.setAttribute('type', 'button');
      pauseButton.innerHTML = mediaDiv.children[2].textContent.trim();
      moveInstrumentation(mediaDiv.children[2], pauseButton);

      playPauseContainer.append(playButton, pauseButton);
      videoWrapper.append(playPauseContainer);

      const muteContainer = document.createElement('div');
      muteContainer.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');

      const muteButton = document.createElement('button');
      muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
      muteButton.setAttribute('type', 'button');
      muteButton.innerHTML = mediaDiv.children[3].textContent.trim();
      moveInstrumentation(mediaDiv.children[3], muteButton);

      const unmuteButton = document.createElement('button');
      unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
      unmuteButton.setAttribute('type', 'button');
      unmuteButton.innerHTML = mediaDiv.children[4].textContent.trim();
      moveInstrumentation(mediaDiv.children[4], unmuteButton);

      const noAudioButton = document.createElement('button');
      noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      noAudioButton.setAttribute('type', 'button');
      noAudioButton.innerHTML = mediaDiv.children[5].textContent.trim();
      moveInstrumentation(mediaDiv.children[5], noAudioButton);

      muteContainer.append(muteButton, unmuteButton, noAudioButton);
      videoWrapper.append(muteContainer);
      wrapperDiv.append(videoWrapper);
    }

    if (ctaDiv) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');

      const bannerCtaDiv = document.createElement('div');
      bannerCtaDiv.classList.add('carousel-banner-cta');
      
      const textCenterDiv = document.createElement('div');
      textCenterDiv.classList.add('carousel-text-center');

      const link = ctaDiv.querySelector('a');
      if (link) {
        link.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
        link.setAttribute('data-link-region', 'CTA');
        link.setAttribute('data-is-internal', 'false');
        link.setAttribute('data-enable-gating', 'false');
        link.setAttribute('target', '_blank');

        const span = document.createElement('span');
        span.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'famlf-cta-btn');
        span.textContent = link.textContent.trim();
        link.textContent = '';
        link.append(span);
        moveInstrumentation(ctaDiv.querySelector('a'), link);
      }

      const popUpDiv = document.createElement('div');
      popUpDiv.classList.add('carousel-pop-up', 'carousel-d-none');
      const popupMessage = document.createElement('input');
      popupMessage.setAttribute('type', 'hidden');
      popupMessage.classList.add('carousel-popup-message');
      const proceedButton = document.createElement('input');
      proceedButton.setAttribute('type', 'hidden');
      proceedButton.classList.add('carousel-proceed-button-label');
      const cancelButton = document.createElement('input');
      cancelButton.setAttribute('type', 'hidden');
      cancelButton.classList.add('carousel-cancel-button-label');
      const backgroundColor = document.createElement('input');
      backgroundColor.setAttribute('type', 'hidden');
      backgroundColor.classList.add('carousel-background-color');
      popUpDiv.append(popupMessage, proceedButton, cancelButton, backgroundColor);

      const externalLinkPopup = document.createElement('div');
      externalLinkPopup.classList.add('carousel-external-link-popup');
      const genericPopup = document.createElement('div');
      genericPopup.classList.add('carousel-generic-popup');

      const offcanvas = document.createElement('div');
      offcanvas.classList.add('carousel-offcanvas', 'carousel-offcanvas-bottom', 'carousel-boing-container', 'carousel-gating_offcanvas_bottom--wrapper', 'carousel-gating_offcanvas_bottom');
      offcanvas.setAttribute('tabindex', '-1');

      const offcanvasHeader = document.createElement('div');
      offcanvasHeader.classList.add('carousel-offcanvas-header', 'carousel-position-relative');
      const closeButton = document.createElement('button');
      closeButton.classList.add('carousel-close-btn', 'carousel-position-absolute');
      closeButton.setAttribute('type', 'button');
      closeButton.setAttribute('data-bs-dismiss', 'offcanvas');
      closeButton.setAttribute('aria-label', 'Close');
      closeButton.innerHTML = ctaDiv.children[2].children[0].children[0].children[0].textContent.trim();
      moveInstrumentation(ctaDiv.children[2].children[0].children[0].children[0], closeButton);
      offcanvasHeader.append(closeButton);

      const offcanvasBody = document.createElement('div');
      offcanvasBody.classList.add('carousel-offcanvas-body');
      const popContent = document.createElement('div');
      popContent.classList.add('carousel-pop-content', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
      const popImageTextContainer = document.createElement('div');
      popImageTextContainer.classList.add('carousel-pop-image_text-container', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
      const imgHolder = document.createElement('div');
      imgHolder.classList.add('carousel-img_holder', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
      const iconSvg = document.createElement('img');
      iconSvg.setAttribute('alt', 'Popup Icon');
      iconSvg.classList.add('carousel-icon-svg');
      imgHolder.append(iconSvg);
      const textBox = document.createElement('div');
      textBox.classList.add('carousel-text_box', 'carousel-d-flex', 'carousel-flex-column', 'carousel-text-center', 'carousel-mt-4');
      popImageTextContainer.append(imgHolder, textBox);
      const ctaBox = document.createElement('div');
      ctaBox.classList.add('carousel-cta_box');
      const ctaLink = document.createElement('a');
      ctaLink.classList.add('carousel-text-white', 'carousel-popup-login-cta', 'carousel-text-decoration-none', 'carousel-boing--text__title-4', 'carousel-rounded-pill', 'carousel-bg-boing-primary', 'carousel-py-5', 'carousel-px-11', 'carousel-analytics_cta_click', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
      ctaLink.href = ctaDiv.children[2].children[0].children[1].children[0].children[0].href;
      ctaLink.innerHTML = ctaDiv.children[2].children[0].children[1].children[0].children[0].textContent.trim();
      moveInstrumentation(ctaDiv.children[2].children[0].children[1].children[0].children[0], ctaLink);
      ctaBox.append(ctaLink);
      popContent.append(popImageTextContainer, ctaBox);
      offcanvasBody.append(popContent);
      offcanvas.append(offcanvasHeader, offcanvasBody);
      genericPopup.append(offcanvas);
      externalLinkPopup.append(genericPopup);
      
      textCenterDiv.append(link, popUpDiv, externalLinkPopup);
      bannerCtaDiv.append(textCenterDiv);
      ctaWrapper.append(bannerCtaDiv);
      wrapperDiv.append(ctaWrapper);
      moveInstrumentation(ctaDiv, ctaWrapper);
    }

    section.append(wrapperDiv);
    bannerDiv.append(section);
    swiperSlide.append(bannerDiv);
    swiperWrapper.append(swiperSlide);
    moveInstrumentation(item, swiperSlide);
  });

  swiperContainer.append(swiperWrapper);

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('carousel-cmp-carousel__actions');

  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--previous');
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('aria-label', 'Previous');
  prevButton.setAttribute('data-cmp-hook-carousel', 'previous');
  prevButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Previous</span>';
  actionsDiv.append(prevButton);

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--next');
  nextButton.setAttribute('type', 'button');
  nextButton.setAttribute('aria-label', 'Next');
  nextButton.setAttribute('data-cmp-hook-carousel', 'next');
  nextButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Next</span>';
  actionsDiv.append(nextButton);

  const pauseButton = document.createElement('button');
  pauseButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--pause');
  pauseButton.setAttribute('type', 'button');
  pauseButton.setAttribute('aria-label', 'Pause');
  pauseButton.setAttribute('data-cmp-hook-carousel', 'pause');
  pauseButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Pause</span>';
  actionsDiv.append(pauseButton);

  const playButton = document.createElement('button');
  playButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--play', 'carousel-cmp-carousel__action--disabled');
  playButton.setAttribute('type', 'button');
  playButton.setAttribute('aria-label', 'Play');
  playButton.setAttribute('data-cmp-hook-carousel', 'play');
  playButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Play</span>';
  actionsDiv.append(playButton);
  swiperContainer.append(actionsDiv);

  const swiperNavContainer = document.createElement('div');
  swiperNavContainer.classList.add('carousel-swiper-container');

  const nextNavDiv = document.createElement('div');
  const nextNavButton = document.createElement('button');
  nextNavButton.classList.add('carousel-primary-swiper__buttonNext', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click', 'carousel-disabled');
  nextNavButton.setAttribute('disabled', '');
  nextNavButton.innerHTML = '&nbsp;';
  nextNavDiv.append(nextNavButton);
  swiperNavContainer.append(nextNavDiv);

  const prevNavDiv = document.createElement('div');
  const prevNavButton = document.createElement('button');
  prevNavButton.classList.add('carousel-primary-swiper__buttonPrev', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
  prevNavButton.innerHTML = '&nbsp;';
  prevNavDiv.append(prevNavButton);
  swiperNavContainer.append(prevNavDiv);
  swiperContainer.append(swiperNavContainer);

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
  items.forEach((_, index) => {
    const bullet = document.createElement('span');
    bullet.classList.add('carousel-swiper-pagination-bullet');
    if (index === 0) {
      bullet.classList.add('carousel-swiper-pagination-bullet-active');
    }
    paginationDiv.append(bullet);
  });
  swiperContainer.append(paginationDiv);

  carouselPositionRelative.append(swiperContainer);
  block.textContent = '';
  block.append(carouselPositionRelative);
}