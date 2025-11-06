import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('carousel-position-relative');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');

  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper', 'carousel-primary-swiper', 'carousel-primary-swiper-carousel-419d8524f7', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
  swiperContainer.setAttribute('data-swiper-id', '.carousel-primary-swiper-carousel-419d8524f7');
  swiperContainer.setAttribute('id', 'carousel-419d8524f7');
  swiperContainer.setAttribute('role', 'group');
  swiperContainer.setAttribute('aria-live', 'polite');
  swiperContainer.setAttribute('aria-roledescription', 'carousel');
  swiperContainer.setAttribute('data-is-autoplay', 'true');
  swiperContainer.setAttribute('data-delay', '5000');
  swiperContainer.setAttribute('data-autopause-disabled', 'true');
  swiperContainer.setAttribute('data-is-loop', 'false');
  swiperContainer.setAttribute('data-placeholder-text', 'false');

  const pagination = document.createElement('div');
  pagination.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');

  const navigationContainer = document.createElement('div');
  navigationContainer.classList.add('carousel-swiper-container');

  const nextButtonDiv = document.createElement('div');
  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-primary-swiper__buttonNext', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click', 'carousel-disabled');
  nextButton.setAttribute('disabled', '');
  nextButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302341.svg+xml';
  nextButtonDiv.append(nextButton);

  const prevButtonDiv = document.createElement('div');
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-primary-swiper__buttonPrev', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
  prevButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302355.svg+xml';
  prevButtonDiv.append(prevButton);

  navigationContainer.append(nextButtonDiv, prevButtonDiv);

  [...block.children].forEach((row, index) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    slide.setAttribute('role', 'tabpanel');
    slide.setAttribute('aria-roledescription', 'slide');
    if (index === 0) {
      slide.classList.add('carousel-cmp-carousel__item--active', 'swiper-slide-prev');
      slide.setAttribute('data-active', '1');
    } else if (index === 1) {
      slide.classList.add('swiper-slide-active');
    }

    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('carousel-banner');

    const section = document.createElement('section');
    section.classList.add('carousel-banner-section');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');

    const mediaDiv = row.children[0];
    const ctaDiv = row.children[1];

    if (mediaDiv) {
      const mediaElement = mediaDiv.querySelector('picture, video');
      if (mediaElement) {
        if (mediaElement.tagName === 'VIDEO') {
          const videoWrapper = document.createElement('div');
          videoWrapper.classList.add('carousel-video-wrapper');
          moveInstrumentation(mediaElement, videoWrapper);
          videoWrapper.append(mediaElement);

          mediaElement.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
          mediaElement.setAttribute('title', 'Video');
          mediaElement.setAttribute('aria-label', 'Video');
          mediaElement.setAttribute('data-is-autoplay', 'true');
          mediaElement.setAttribute('playsinline', '');
          mediaElement.setAttribute('preload', 'metadata');
          mediaElement.setAttribute('fetchpriority', 'high');
          mediaElement.setAttribute('loop', 'false');
          mediaElement.setAttribute('muted', 'true');
          mediaElement.setAttribute('autoplay', 'true');

          const playPauseContainer = document.createElement('div');
          playPauseContainer.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');

          const playButton = document.createElement('button');
          playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
          playButton.setAttribute('type', 'button');
          playButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302196.svg+xml';

          const pauseButton = document.createElement('button');
          pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
          pauseButton.setAttribute('type', 'button');
          pauseButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302205.svg+xml';

          playPauseContainer.append(playButton, pauseButton);

          const muteContainer = document.createElement('div');
          muteContainer.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');

          const muteButton = document.createElement('button');
          muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
          muteButton.setAttribute('type', 'button');
          muteButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302228.svg+xml';

          const unmuteButton = document.createElement('button');
          unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
          unmuteButton.setAttribute('type', 'button');
          unmuteButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302252.svg+xml';

          const noAudioButton = document.createElement('button');
          noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
          noAudioButton.setAttribute('type', 'button');
          noAudioButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302277.svg+xml';

          muteContainer.append(muteButton, unmuteButton, noAudioButton);
          videoWrapper.append(playPauseContainer, muteContainer);
          wrapperDiv.append(videoWrapper);
        } else {
          mediaElement.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
          mediaElement.setAttribute('loading', 'eager');
          mediaElement.setAttribute('fetchpriority', 'high');
          mediaElement.setAttribute('decoding', 'async');
          moveInstrumentation(mediaElement, wrapperDiv);
          wrapperDiv.append(mediaElement);
        }
      }
    }

    if (ctaDiv) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');

      const bannerCta = document.createElement('div');
      bannerCta.classList.add('carousel-banner-cta');
      moveInstrumentation(ctaDiv, bannerCta);
      bannerCta.append(...ctaDiv.children);

      const linkContainer = bannerCta.querySelector('div.carousel-text-center');
      if (linkContainer) {
        const link = linkContainer.querySelector('a');
        if (link) {
          link.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
          link.setAttribute('data-link-region', 'CTA');
          link.setAttribute('data-is-internal', 'false');
          link.setAttribute('data-enable-gating', 'false');
          link.setAttribute('target', '_blank');

          const span = link.querySelector('span');
          if (span) {
            span.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
          }
        }

        const popupDiv = linkContainer.querySelector('div.carousel-pop-up');
        if (popupDiv) {
          popupDiv.classList.add('carousel-d-none');
        }

        const externalLinkPopup = bannerCta.querySelector('div.carousel-external-link-popup');
        if (externalLinkPopup) {
          const offcanvas = externalLinkPopup.querySelector('div.carousel-offcanvas');
          if (offcanvas) {
            offcanvas.classList.add('carousel-offcanvas', 'carousel-offcanvas-bottom', 'carousel-boing-container', 'carousel-gating_offcanvas_bottom--wrapper', 'carousel-gating_offcanvas_bottom');
            offcanvas.setAttribute('tabindex', '-1');
            offcanvas.setAttribute('aria-labelledby', 'offcanvasBottomLabel');

            const offcanvasHeader = offcanvas.querySelector('div.carousel-offcanvas-header');
            if (offcanvasHeader) {
              offcanvasHeader.classList.add('carousel-offcanvas-header', 'carousel-position-relative');
              const closeBtn = offcanvasHeader.querySelector('button');
              if (closeBtn) {
                closeBtn.classList.add('carousel-close-btn', 'carousel-position-absolute');
                closeBtn.setAttribute('type', 'button');
                closeBtn.setAttribute('data-bs-dismiss', 'offcanvas');
                closeBtn.setAttribute('aria-label', 'Close');
                closeBtn.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302317.svg+xml';
              }
            }

            const offcanvasBody = offcanvas.querySelector('div.carousel-offcanvas-body');
            if (offcanvasBody) {
              offcanvasBody.classList.add('carousel-offcanvas-body');
              const popContent = offcanvasBody.querySelector('div.carousel-pop-content');
              if (popContent) {
                popContent.classList.add('carousel-pop-content', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
                const popImageTextContainer = popContent.querySelector('div.carousel-pop-image_text-container');
                if (popImageTextContainer) {
                  popImageTextContainer.classList.add('carousel-pop-image_text-container', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
                  const imgHolder = popImageTextContainer.querySelector('div.carousel-img_holder');
                  if (imgHolder) {
                    imgHolder.classList.add('carousel-img_holder', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
                    const img = imgHolder.querySelector('img');
                    if (img) {
                      img.classList.add('carousel-icon-svg');
                      img.setAttribute('alt', 'Popup Icon');
                    }
                  }
                  const textBox = popImageTextContainer.querySelector('div.carousel-text_box');
                  if (textBox) {
                    textBox.classList.add('carousel-text_box', 'carousel-d-flex', 'carousel-flex-column', 'carousel-text-center', 'carousel-mt-4');
                  }
                }
                const ctaBox = popContent.querySelector('div.carousel-cta_box');
                if (ctaBox) {
                  ctaBox.classList.add('carousel-cta_box');
                  const ctaLink = ctaBox.querySelector('a');
                  if (ctaLink) {
                    ctaLink.classList.add('carousel-text-white', 'carousel-popup-login-cta', 'carousel-text-decoration-none', 'carousel-boing--text__title-4', 'carousel-rounded-pill', 'carousel-bg-boing-primary', 'carousel-py-5', 'carousel-px-11', 'carousel-analytics_cta_click', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
                    ctaLink.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302327.svg+xml';
                  }
                }
              }
            }
          }
        }
      }
      ctaWrapper.append(bannerCta);
      wrapperDiv.append(ctaWrapper);
    }

    section.append(wrapperDiv);
    bannerDiv.append(section);
    slide.append(bannerDiv);
    swiperWrapper.append(slide);

    const paginationBullet = document.createElement('span');
    paginationBullet.classList.add('carousel-swiper-pagination-bullet');
    if (index === 1) {
      paginationBullet.classList.add('carousel-swiper-pagination-bullet-active');
    }
    pagination.append(paginationBullet);

    moveInstrumentation(row, slide);
  });

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('carousel-cmp-carousel__actions');

  const prevAction = document.createElement('button');
  prevAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--previous');
  prevAction.setAttribute('type', 'button');
  prevAction.setAttribute('aria-label', 'Previous');
  prevAction.setAttribute('data-cmp-hook-carousel', 'previous');
  prevAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Previous</span>';

  const nextAction = document.createElement('button');
  nextAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--next');
  nextAction.setAttribute('type', 'button');
  nextAction.setAttribute('aria-label', 'Next');
  nextAction.setAttribute('data-cmp-hook-carousel', 'next');
  nextAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Next</span>';

  const pauseAction = document.createElement('button');
  pauseAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--pause');
  pauseAction.setAttribute('type', 'button');
  pauseAction.setAttribute('aria-label', 'Pause');
  pauseAction.setAttribute('data-cmp-hook-carousel', 'pause');
  pauseAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Pause</span>';

  const playAction = document.createElement('button');
  playAction.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--play', 'carousel-cmp-carousel__action--disabled');
  playAction.setAttribute('type', 'button');
  playAction.setAttribute('aria-label', 'Play');
  playAction.setAttribute('data-cmp-hook-carousel', 'play');
  playAction.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Play</span>';

  actionsDiv.append(prevAction, nextAction, pauseAction, playAction);

  swiperContainer.append(swiperWrapper, actionsDiv, navigationContainer, pagination);
  block.textContent = '';
  block.append(swiperContainer);

  // Initialize Swiper (assuming Swiper library is loaded elsewhere)
  // const swiper = new Swiper(swiperContainer, {
  //   loop: swiperContainer.dataset.isLoop === 'true',
  //   autoplay: swiperContainer.dataset.isAutoplay === 'true' ? { delay: parseInt(swiperContainer.dataset.delay, 10), disableOnInteraction: swiperContainer.dataset.autopauseDisabled !== 'true' } : false,
  //   pagination: {
  //     el: pagination,
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: nextButton,
  //     prevEl: prevButton,
  //   },
  // });

  // // Handle play/pause actions
  // playAction.addEventListener('click', () => swiper.autoplay.start());
  // pauseAction.addEventListener('click', () => swiper.autoplay.stop());
}