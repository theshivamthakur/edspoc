import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const carouselPositionRelative = document.createElement('div');
  carouselPositionRelative.classList.add('carousel-position-relative');
  moveInstrumentation(block.firstElementChild, carouselPositionRelative);

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
  moveInstrumentation(block.firstElementChild, swiperContainer);

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');
  moveInstrumentation(block.firstElementChild, swiperWrapper);

  const slides = [...block.children];
  slides.forEach((slide) => {
    const slideWrapper = document.createElement('div');
    slideWrapper.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    slideWrapper.setAttribute('role', 'tabpanel');
    slideWrapper.setAttribute('aria-roledescription', 'slide');
    moveInstrumentation(slide, slideWrapper);

    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('carousel-banner');
    moveInstrumentation(slide.firstElementChild, bannerDiv);

    const section = document.createElement('section');
    section.classList.add('carousel-banner-section');
    moveInstrumentation(bannerDiv.firstElementChild, section);

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');
    moveInstrumentation(section.firstElementChild, wrapperDiv);

    const mediaContent = slide.querySelector('div:first-child > div:first-child > div:first-child > div:first-child > div:first-child');
    if (mediaContent) {
      if (mediaContent.querySelector('video')) {
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('carousel-video-wrapper');
        moveInstrumentation(mediaContent, videoWrapper);

        const video = mediaContent.querySelector('video');
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
        moveInstrumentation(mediaContent.querySelector('video'), video);
        videoWrapper.append(video);

        const playPauseWrapper = document.createElement('div');
        playPauseWrapper.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');
        moveInstrumentation(mediaContent.querySelector('div:nth-child(2)'), playPauseWrapper);

        const playButton = document.createElement('button');
        playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
        playButton.setAttribute('type', 'button');
        moveInstrumentation(mediaContent.querySelector('button:first-of-type'), playButton);
        playButton.innerHTML = mediaContent.querySelector('button:first-of-type').innerHTML;
        playPauseWrapper.append(playButton);

        const pauseButton = document.createElement('button');
        pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
        pauseButton.setAttribute('type', 'button');
        moveInstrumentation(mediaContent.querySelector('button:nth-of-type(2)'), pauseButton);
        pauseButton.innerHTML = mediaContent.querySelector('button:nth-of-type(2)').innerHTML;
        playPauseWrapper.append(pauseButton);
        videoWrapper.append(playPauseWrapper);

        const muteIconWrapper = document.createElement('div');
        muteIconWrapper.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');
        moveInstrumentation(mediaContent.querySelector('div:nth-child(3)'), muteIconWrapper);

        const muteButton = document.createElement('button');
        muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
        muteButton.setAttribute('type', 'button');
        moveInstrumentation(mediaContent.querySelector('div:nth-child(3) button:first-of-type'), muteButton);
        muteButton.innerHTML = mediaContent.querySelector('div:nth-child(3) button:first-of-type').innerHTML;
        muteIconWrapper.append(muteButton);

        const unmuteButton = document.createElement('button');
        unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
        unmuteButton.setAttribute('type', 'button');
        moveInstrumentation(mediaContent.querySelector('div:nth-child(3) button:nth-of-type(2)'), unmuteButton);
        unmuteButton.innerHTML = mediaContent.querySelector('div:nth-child(3) button:nth-of-type(2)').innerHTML;
        muteIconWrapper.append(unmuteButton);

        const noAudioButton = document.createElement('button');
        noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
        noAudioButton.setAttribute('type', 'button');
        moveInstrumentation(mediaContent.querySelector('div:nth-child(3) button:nth-of-type(3)'), noAudioButton);
        noAudioButton.innerHTML = mediaContent.querySelector('div:nth-child(3) button:nth-of-type(3)').innerHTML;
        muteIconWrapper.append(noAudioButton);
        videoWrapper.append(muteIconWrapper);

        wrapperDiv.append(videoWrapper);
      } else if (mediaContent.querySelector('img')) {
        const img = mediaContent.querySelector('img');
        img.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
        img.setAttribute('loading', 'eager');
        img.setAttribute('fetchpriority', 'high');
        img.setAttribute('decoding', 'async');
        moveInstrumentation(mediaContent.querySelector('img'), img);
        wrapperDiv.append(img);
      }
    }

    const ctaDiv = document.createElement('div');
    ctaDiv.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');
    moveInstrumentation(slide.querySelector('.carousel-banner-cta').parentElement, ctaDiv);

    const bannerCtaDiv = document.createElement('div');
    bannerCtaDiv.classList.add('carousel-banner-cta');
    moveInstrumentation(slide.querySelector('.carousel-banner-cta'), bannerCtaDiv);

    const textCenterDiv = document.createElement('div');
    textCenterDiv.classList.add('carousel-text-center');
    moveInstrumentation(slide.querySelector('.carousel-text-center'), textCenterDiv);

    const ctaLink = slide.querySelector('a.carousel-cmp-button');
    if (ctaLink) {
      ctaLink.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
      ctaLink.setAttribute('data-link-region', 'CTA');
      ctaLink.setAttribute('data-is-internal', 'false');
      ctaLink.setAttribute('data-enable-gating', 'false');
      moveInstrumentation(slide.querySelector('a.carousel-cmp-button'), ctaLink);

      const span = ctaLink.querySelector('span');
      if (span) {
        span.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
        moveInstrumentation(ctaLink.querySelector('span'), span);
      }
      textCenterDiv.append(ctaLink);
    }

    const popupDiv = slide.querySelector('.carousel-pop-up');
    if (popupDiv) {
      popupDiv.classList.add('carousel-pop-up', 'carousel-d-none');
      moveInstrumentation(slide.querySelector('.carousel-pop-up'), popupDiv);
      textCenterDiv.append(popupDiv);
    }

    const externalLinkPopup = slide.querySelector('.carousel-external-link-popup');
    if (externalLinkPopup) {
      externalLinkPopup.classList.add('carousel-external-link-popup');
      moveInstrumentation(slide.querySelector('.carousel-external-link-popup'), externalLinkPopup);

      const genericPopup = externalLinkPopup.querySelector('.carousel-generic-popup');
      if (genericPopup) {
        genericPopup.classList.add('carousel-generic-popup');
        moveInstrumentation(externalLinkPopup.querySelector('.carousel-generic-popup'), genericPopup);

        const offcanvas = genericPopup.querySelector('.carousel-offcanvas');
        if (offcanvas) {
          offcanvas.classList.add('carousel-offcanvas', 'carousel-offcanvas-bottom', 'carousel-boing-container', 'carousel-gating_offcanvas_bottom--wrapper', 'carousel-gating_offcanvas_bottom');
          offcanvas.setAttribute('tabindex', '-1');
          offcanvas.setAttribute('aria-labelledby', 'offcanvasBottomLabel');
          moveInstrumentation(genericPopup.querySelector('.carousel-offcanvas'), offcanvas);

          const offcanvasHeader = offcanvas.querySelector('.carousel-offcanvas-header');
          if (offcanvasHeader) {
            offcanvasHeader.classList.add('carousel-offcanvas-header', 'carousel-position-relative');
            moveInstrumentation(offcanvas.querySelector('.carousel-offcanvas-header'), offcanvasHeader);

            const closeBtn = offcanvasHeader.querySelector('.carousel-close-btn');
            if (closeBtn) {
              closeBtn.classList.add('carousel-close-btn', 'carousel-position-absolute');
              closeBtn.setAttribute('type', 'button');
              closeBtn.setAttribute('data-bs-dismiss', 'offcanvas');
              closeBtn.setAttribute('aria-label', 'Close');
              moveInstrumentation(offcanvasHeader.querySelector('.carousel-close-btn'), closeBtn);
            }
          }

          const offcanvasBody = offcanvas.querySelector('.carousel-offcanvas-body');
          if (offcanvasBody) {
            offcanvasBody.classList.add('carousel-offcanvas-body');
            moveInstrumentation(offcanvas.querySelector('.carousel-offcanvas-body'), offcanvasBody);

            const popContent = offcanvasBody.querySelector('.carousel-pop-content');
            if (popContent) {
              popContent.classList.add('carousel-pop-content', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
              moveInstrumentation(offcanvasBody.querySelector('.carousel-pop-content'), popContent);

              const popImageTextContainer = popContent.querySelector('.carousel-pop-image_text-container');
              if (popImageTextContainer) {
                popImageTextContainer.classList.add('carousel-pop-image_text-container', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
                moveInstrumentation(popContent.querySelector('.carousel-pop-image_text-container'), popImageTextContainer);

                const imgHolder = popImageTextContainer.querySelector('.carousel-img_holder');
                if (imgHolder) {
                  imgHolder.classList.add('carousel-img_holder', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
                  moveInstrumentation(popImageTextContainer.querySelector('.carousel-img_holder'), imgHolder);

                  const iconSvg = imgHolder.querySelector('.carousel-icon-svg');
                  if (iconSvg) {
                    iconSvg.classList.add('carousel-icon-svg');
                    iconSvg.setAttribute('alt', 'Popup Icon');
                    moveInstrumentation(imgHolder.querySelector('.carousel-icon-svg'), iconSvg);
                  }
                }

                const textBox = popImageTextContainer.querySelector('.carousel-text_box');
                if (textBox) {
                  textBox.classList.add('carousel-text_box', 'carousel-d-flex', 'carousel-flex-column', 'carousel-text-center', 'carousel-mt-4');
                  moveInstrumentation(popImageTextContainer.querySelector('.carousel-text_box'), textBox);
                }
              }

              const ctaBox = popContent.querySelector('.carousel-cta_box');
              if (ctaBox) {
                ctaBox.classList.add('carousel-cta_box');
                moveInstrumentation(popContent.querySelector('.carousel-cta_box'), ctaBox);

                const ctaLinkInsidePopup = ctaBox.querySelector('a');
                if (ctaLinkInsidePopup) {
                  ctaLinkInsidePopup.classList.add('carousel-text-white', 'carousel-popup-login-cta', 'carousel-text-decoration-none', 'carousel-boing--text__title-4', 'carousel-rounded-pill', 'carousel-bg-boing-primary', 'carousel-py-5', 'carousel-px-11', 'carousel-analytics_cta_click', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
                  moveInstrumentation(ctaBox.querySelector('a'), ctaLinkInsidePopup);
                }
              }
            }
          }
        }
      }
      textCenterDiv.append(externalLinkPopup);
    }

    bannerCtaDiv.append(textCenterDiv);
    ctaDiv.append(bannerCtaDiv);
    wrapperDiv.append(ctaDiv);
    section.append(wrapperDiv);
    bannerDiv.append(section);
    slideWrapper.append(bannerDiv);
    swiperWrapper.append(slideWrapper);
  });

  swiperContainer.append(swiperWrapper);

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('carousel-cmp-carousel__actions');
  moveInstrumentation(block.querySelector('.carousel-cmp-carousel__actions'), actionsDiv);

  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--previous');
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('aria-label', 'Previous');
  prevButton.setAttribute('data-cmp-hook-carousel', 'previous');
  moveInstrumentation(block.querySelector('.carousel-cmp-carousel__action--previous'), prevButton);
  prevButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Previous</span>';
  actionsDiv.append(prevButton);

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--next');
  nextButton.setAttribute('type', 'button');
  nextButton.setAttribute('aria-label', 'Next');
  nextButton.setAttribute('data-cmp-hook-carousel', 'next');
  moveInstrumentation(block.querySelector('.carousel-cmp-carousel__action--next'), nextButton);
  nextButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Next</span>';
  actionsDiv.append(nextButton);

  const pauseButton = document.createElement('button');
  pauseButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--pause');
  pauseButton.setAttribute('type', 'button');
  pauseButton.setAttribute('aria-label', 'Pause');
  pauseButton.setAttribute('data-cmp-hook-carousel', 'pause');
  moveInstrumentation(block.querySelector('.carousel-cmp-carousel__action--pause'), pauseButton);
  pauseButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Pause</span>';
  actionsDiv.append(pauseButton);

  const playButton = document.createElement('button');
  playButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--play', 'carousel-cmp-carousel__action--disabled');
  playButton.setAttribute('type', 'button');
  playButton.setAttribute('aria-label', 'Play');
  playButton.setAttribute('data-cmp-hook-carousel', 'play');
  moveInstrumentation(block.querySelector('.carousel-cmp-carousel__action--play'), playButton);
  playButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Play</span>';
  actionsDiv.append(playButton);

  swiperContainer.append(actionsDiv);

  const swiperNavContainer = document.createElement('div');
  swiperNavContainer.classList.add('carousel-swiper-container');
  moveInstrumentation(block.querySelector('.carousel-swiper-container'), swiperNavContainer);

  const nextNavDiv = document.createElement('div');
  moveInstrumentation(block.querySelector('.carousel-swiper-container > div:first-child'), nextNavDiv);
  const nextNavButton = document.createElement('button');
  nextNavButton.classList.add('carousel-primary-swiper__buttonNext', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click', 'carousel-disabled');
  nextNavButton.setAttribute('disabled', '');
  moveInstrumentation(block.querySelector('.carousel-primary-swiper__buttonNext'), nextNavButton);
  nextNavButton.innerHTML = block.querySelector('.carousel-primary-swiper__buttonNext').innerHTML;
  nextNavDiv.append(nextNavButton);
  swiperNavContainer.append(nextNavDiv);

  const prevNavDiv = document.createElement('div');
  moveInstrumentation(block.querySelector('.carousel-swiper-container > div:nth-child(2)'), prevNavDiv);
  const prevNavButton = document.createElement('button');
  prevNavButton.classList.add('carousel-primary-swiper__buttonPrev', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
  moveInstrumentation(block.querySelector('.carousel-primary-swiper__buttonPrev'), prevNavButton);
  prevNavButton.innerHTML = block.querySelector('.carousel-primary-swiper__buttonPrev').innerHTML;
  prevNavDiv.append(prevNavButton);
  swiperNavContainer.append(prevNavDiv);

  swiperContainer.append(swiperNavContainer);

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
  moveInstrumentation(block.querySelector('.carousel-swiper-pagination'), paginationDiv);
  paginationDiv.innerHTML = '<span class="carousel-swiper-pagination-bullet"></span><span class="carousel-swiper-pagination-bullet carousel-swiper-pagination-bullet-active"></span>';
  swiperContainer.append(paginationDiv);

  carouselPositionRelative.append(swiperContainer);
  block.textContent = '';
  block.append(carouselPositionRelative);
}