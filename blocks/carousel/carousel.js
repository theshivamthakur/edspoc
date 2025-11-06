import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('carousel-position-relative');
  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper', 'carousel-primary-swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
  swiperContainer.setAttribute('role', 'group');
  swiperContainer.setAttribute('aria-live', 'polite');
  swiperContainer.setAttribute('aria-roledescription', 'carousel');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');

  const nextButtonDiv = document.createElement('div');
  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-primary-swiper__buttonNext', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
  nextButtonDiv.append(nextButton);

  const prevButtonDiv = document.createElement('div');
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-primary-swiper__buttonPrev', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
  prevButtonDiv.append(prevButton);

  const swiperButtonContainer = document.createElement('div');
  swiperButtonContainer.classList.add('carousel-swiper-container');
  swiperButtonContainer.append(nextButtonDiv, prevButtonDiv);

  [...block.children].forEach((row, index) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    if (index === 0) {
      slide.classList.add('carousel-cmp-carousel__item--active', 'swiper-slide-prev');
      nextButton.classList.add('carousel-disabled');
      nextButton.setAttribute('disabled', '');
      paginationDiv.innerHTML += '<span class="carousel-swiper-pagination-bullet"></span>';
    } else if (index === 1) {
      slide.classList.add('swiper-slide-active');
      paginationDiv.innerHTML += '<span class="carousel-swiper-pagination-bullet carousel-swiper-pagination-bullet-active"></span>';
    } else {
      paginationDiv.innerHTML += '<span class="carousel-swiper-pagination-bullet"></span>';
    }
    slide.setAttribute('role', 'tabpanel');
    slide.setAttribute('aria-roledescription', 'slide');
    moveInstrumentation(row, slide);

    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('carousel-banner');

    const section = document.createElement('section');
    section.classList.add('carousel-banner-section');

    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');

    const mediaDiv = row.children[0];
    const ctaDiv = row.children[1];

    if (mediaDiv && mediaDiv.querySelector('picture')) {
      const img = mediaDiv.querySelector('img');
      const optimizedPic = createOptimizedPicture(img.src, img.alt, index === 0, [{ width: '2000' }]);
      optimizedPic.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
      wrapper.append(optimizedPic);
    } else if (mediaDiv && mediaDiv.querySelector('video')) {
      const videoWrapper = document.createElement('div');
      videoWrapper.classList.add('carousel-video-wrapper');
      const video = mediaDiv.querySelector('video');
      video.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
      video.setAttribute('playsinline', '');
      video.setAttribute('preload', 'metadata');
      video.setAttribute('fetchpriority', 'high');
      video.setAttribute('autoplay', '');

      const playPauseOverlay = document.createElement('div');
      playPauseOverlay.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');

      const playButton = document.createElement('button');
      playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      playButton.innerHTML = mediaDiv.children[1].innerHTML;

      const pauseButton = document.createElement('button');
      pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      pauseButton.innerHTML = mediaDiv.children[2].innerHTML;
      playPauseOverlay.append(playButton, pauseButton);

      const muteOverlay = document.createElement('div');
      muteOverlay.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');

      const muteButton = document.createElement('button');
      muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
      muteButton.innerHTML = mediaDiv.children[3].innerHTML;

      const unmuteButton = document.createElement('button');
      unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
      unmuteButton.innerHTML = mediaDiv.children[4].innerHTML;

      const noAudioButton = document.createElement('button');
      noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      noAudioButton.innerHTML = mediaDiv.children[5].innerHTML;
      muteOverlay.append(muteButton, unmuteButton, noAudioButton);

      videoWrapper.append(video, playPauseOverlay, muteOverlay);
      wrapper.append(videoWrapper);
    }

    if (ctaDiv) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');
      const bannerCta = document.createElement('div');
      bannerCta.classList.add('carousel-banner-cta');
      bannerCta.append(...ctaDiv.children);
      ctaWrapper.append(bannerCta);
      wrapper.append(ctaWrapper);

      const link = ctaDiv.querySelector('a');
      if (link) {
        link.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
        const span = link.querySelector('span');
        if (span) {
          span.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
        }
        const popUp = ctaDiv.querySelector('.carousel-pop-up');
        if (popUp) {
          popUp.classList.add('carousel-d-none');
        }
        const externalLinkPopup = ctaDiv.querySelector('.carousel-external-link-popup');
        if (externalLinkPopup) {
          const offcanvas = externalLinkPopup.querySelector('.carousel-offcanvas');
          if (offcanvas) {
            offcanvas.classList.add('carousel-offcanvas', 'carousel-offcanvas-bottom', 'carousel-boing-container', 'carousel-gating_offcanvas_bottom--wrapper', 'carousel-gating_offcanvas_bottom');
            const closeBtn = offcanvas.querySelector('.carousel-close-btn');
            if (closeBtn) {
              closeBtn.classList.add('carousel-close-btn', 'carousel-position-absolute');
            }
            const popContent = offcanvas.querySelector('.carousel-pop-content');
            if (popContent) {
              popContent.classList.add('carousel-pop-content', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
            }
            const imgHolder = offcanvas.querySelector('.carousel-img_holder');
            if (imgHolder) {
              imgHolder.classList.add('carousel-img_holder', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
            }
            const textBox = offcanvas.querySelector('.carousel-text_box');
            if (textBox) {
              textBox.classList.add('carousel-text_box', 'carousel-d-flex', 'carousel-flex-column', 'carousel-text-center', 'carousel-mt-4');
            }
            const ctaBox = offcanvas.querySelector('.carousel-cta_box');
            if (ctaBox) {
              ctaBox.classList.add('carousel-cta_box');
            }
            const popupLoginCta = offcanvas.querySelector('.carousel-popup-login-cta');
            if (popupLoginCta) {
              popupLoginCta.classList.add('carousel-text-white', 'carousel-popup-login-cta', 'carousel-text-decoration-none', 'carousel-boing--text__title-4', 'carousel-rounded-pill', 'carousel-bg-boing-primary', 'carousel-py-5', 'carousel-px-11', 'carousel-analytics_cta_click', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
            }
          }
        }
      }
    }

    section.append(wrapper);
    bannerDiv.append(section);
    slide.append(bannerDiv);
    swiperWrapper.append(slide);
  });

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('carousel-cmp-carousel__actions');

  const prevButtonAction = document.createElement('button');
  prevButtonAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--previous');
  prevButtonAction.setAttribute('type', 'button');
  prevButtonAction.setAttribute('aria-label', 'Previous');
  prevButtonAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Previous</span>';

  const nextButtonAction = document.createElement('button');
  nextButtonAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--next');
  nextButtonAction.setAttribute('type', 'button');
  nextButtonAction.setAttribute('aria-label', 'Next');
  nextButtonAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Next</span>';

  const pauseButtonAction = document.createElement('button');
  pauseButtonAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--pause');
  pauseButtonAction.setAttribute('type', 'button');
  pauseButtonAction.setAttribute('aria-label', 'Pause');
  pauseButtonAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Pause</span>';

  const playButtonAction = document.createElement('button');
  playButtonAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--play', 'carousel-cmp-carousel__action--disabled');
  playButtonAction.setAttribute('type', 'button');
  playButtonAction.setAttribute('aria-label', 'Play');
  playButtonAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Play</span>';

  actionsDiv.append(prevButtonAction, nextButtonAction, pauseButtonAction, playButtonAction);

  swiperContainer.append(swiperWrapper, actionsDiv);
  swiperButtonContainer.append(nextButtonDiv, prevButtonDiv);
  swiperContainer.append(swiperButtonContainer, paginationDiv);

  block.textContent = '';
  block.append(swiperContainer);
}
