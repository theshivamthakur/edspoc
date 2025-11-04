import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const carouselWrapper = document.createElement('div');
  carouselWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');

  [...block.children].forEach((row) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');

    const mediaWrapper = document.createElement('div');
    mediaWrapper.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');

    const mediaDiv = row.children[0];
    const ctaDiv = row.children[1];

    if (mediaDiv) {
      const mediaElement = mediaDiv.querySelector('video, img');
      if (mediaElement) {
        if (mediaElement.tagName === 'VIDEO') {
          const videoWrapper = document.createElement('div');
          videoWrapper.classList.add('carousel-video-wrapper');

          const video = document.createElement('video');
          video.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
          video.setAttribute('title', 'Video');
          video.setAttribute('aria-label', 'Video');
          video.setAttribute('playsinline', '');
          video.setAttribute('preload', 'metadata');
          video.setAttribute('fetchpriority', 'high');
          video.setAttribute('loop', 'false');
          video.setAttribute('muted', 'true');
          video.setAttribute('autoplay', 'true');

          [...mediaElement.querySelectorAll('source')].forEach(source => {
            const newSource = document.createElement('source');
            newSource.src = source.src;
            newSource.type = source.type;
            video.append(newSource);
          });
          videoWrapper.append(video);

          const controlsWrapper = document.createElement('div');
          controlsWrapper.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');

          const playButton = document.createElement('button');
          playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
          playButton.type = 'button';
          playButton.innerHTML = mediaDiv.children[1]?.textContent || '';
          controlsWrapper.append(playButton);

          const pauseButton = document.createElement('button');
          pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
          pauseButton.type = 'button';
          pauseButton.innerHTML = mediaDiv.children[2]?.textContent || '';
          controlsWrapper.append(pauseButton);
          videoWrapper.append(controlsWrapper);

          const muteIconWrapper = document.createElement('div');
          muteIconWrapper.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');

          const muteButton = document.createElement('button');
          muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
          muteButton.type = 'button';
          muteButton.innerHTML = mediaDiv.children[3]?.textContent || '';
          muteIconWrapper.append(muteButton);

          const unmuteButton = document.createElement('button');
          unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
          unmuteButton.type = 'button';
          unmuteButton.innerHTML = mediaDiv.children[4]?.textContent || '';
          muteIconWrapper.append(unmuteButton);

          const noAudioButton = document.createElement('button');
          noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
          noAudioButton.type = 'button';
          noAudioButton.innerHTML = mediaDiv.children[5]?.textContent || '';
          muteIconWrapper.append(noAudioButton);
          videoWrapper.append(muteIconWrapper);

          mediaWrapper.append(videoWrapper);
        } else if (mediaElement.tagName === 'IMG') {
          const picture = createOptimizedPicture(mediaElement.src, mediaElement.alt, true, [{ width: '2000' }]);
          picture.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
          mediaWrapper.append(picture);
        }
      }
    }

    if (ctaDiv) {
      const ctaContainer = document.createElement('div');
      ctaContainer.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');

      const ctaButtonWrapper = document.createElement('div');
      ctaButtonWrapper.classList.add('carousel-banner-cta');

      const ctaTextCenter = document.createElement('div');
      ctaTextCenter.classList.add('carousel-text-center');

      const ctaLink = ctaDiv.querySelector('a');
      if (ctaLink) {
        ctaLink.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
        ctaLink.setAttribute('data-link-region', 'CTA');
        ctaLink.setAttribute('data-is-internal', 'false');
        ctaLink.setAttribute('data-enable-gating', 'false');
        ctaLink.setAttribute('target', '_blank');

        const ctaSpan = document.createElement('span');
        ctaSpan.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
        ctaSpan.textContent = ctaLink.textContent.trim();
        ctaLink.textContent = '';
        ctaLink.append(ctaSpan);
        ctaTextCenter.append(ctaLink);
      }

      const popupDiv = document.createElement('div');
      popupDiv.classList.add('carousel-pop-up', 'carousel-d-none');
      popupDiv.innerHTML = '<input type="hidden" class="carousel-popup-message"><input type="hidden" class="carousel-proceed-button-label"><input type="hidden" class="carousel-cancel-button-label"><input type="hidden" class="carousel-background-color">';
      ctaTextCenter.append(popupDiv);

      const externalLinkPopup = document.createElement('div');
      externalLinkPopup.classList.add('carousel-external-link-popup');
      externalLinkPopup.innerHTML = `
        <div class="carousel-generic-popup">
          <div class="carousel-offcanvas carousel-offcanvas-bottom carousel-boing-container carousel-gating_offcanvas_bottom--wrapper carousel-gating_offcanvas_bottom" tabindex="-1" aria-labelledby="offcanvasBottomLabel">
            <div class="carousel-offcanvas-header carousel-position-relative">
              <button type="button" class="carousel-close-btn carousel-position-absolute" data-bs-dismiss="offcanvas" aria-label="Close">
                ${ctaDiv.children[2]?.querySelector('button')?.textContent || ''}
              </button>
            </div>
            <div class="carousel-offcanvas-body">
              <div class="carousel-pop-content carousel-d-flex carousel-flex-column carousel-align-items-center">
                <div class="carousel-pop-image_text-container carousel-d-flex carousel-flex-column carousel-align-items-center">
                  <div class="carousel-img_holder carousel-d-flex carousel-justify-content-center carousel-align-items-center">
                    <img alt="Popup Icon" class="carousel-icon-svg">
                  </div>
                  <div class="carousel-text_box carousel-d-flex carousel-flex-column carousel-text-center carousel-mt-4">
                  </div>
                </div>
                <div class="carousel-cta_box">
                  <a href="${ctaLink?.href || '#'}" class="carousel-text-white carousel-popup-login-cta carousel-text-decoration-none carousel-boing--text__title-4 carousel-rounded-pill carousel-bg-boing-primary carousel-py-5 carousel-px-11 carousel-analytics_cta_click carousel-d-flex carousel-justify-content-center carousel-align-items-center">
                    ${ctaDiv.children[2]?.querySelector('a')?.children[0]?.textContent || ''}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      ctaTextCenter.append(externalLinkPopup);

      ctaButtonWrapper.append(ctaTextCenter);
      ctaContainer.append(ctaButtonWrapper);
      mediaWrapper.append(ctaContainer);
    }

    slide.append(mediaWrapper);
    carouselWrapper.append(slide);
  });

  block.innerHTML = '';
  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper', 'carousel-primary-swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
  swiperContainer.setAttribute('data-is-autoplay', 'true');
  swiperContainer.setAttribute('data-delay', '5000');
  swiperContainer.setAttribute('data-autopause-disabled', 'true');
  swiperContainer.setAttribute('data-is-loop', 'false');
  swiperContainer.setAttribute('data-placeholder-text', 'false');
  swiperContainer.setAttribute('role', 'group');
  swiperContainer.setAttribute('aria-live', 'polite');
  swiperContainer.setAttribute('aria-roledescription', 'carousel');
  swiperContainer.append(carouselWrapper);

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('carousel-cmp-carousel__actions');
  actionsDiv.innerHTML = `
    <button class="carousel-cmp-carousel__action carousel-cmp-carousel__action--previous" type="button" aria-label="Previous" data-cmp-hook-carousel="previous">
      <span class="carousel-cmp-carousel__action-icon"></span>
      <span class="carousel-cmp-carousel__action-text">Previous</span>
    </button>
    <button class="carousel-cmp-carousel__action carousel-cmp-carousel__action--next" type="button" aria-label="Next" data-cmp-hook-carousel="next">
      <span class="carousel-cmp-carousel__action-icon"></span>
      <span class="carousel-cmp-carousel__action-text">Next</span>
    </button>
    <button class="carousel-cmp-carousel__action carousel-cmp-carousel__action--pause" type="button" aria-label="Pause" data-cmp-hook-carousel="pause">
      <span class="carousel-cmp-carousel__action-icon"></span>
      <span class="carousel-cmp-carousel__action-text">Pause</span>
    </button>
    <button class="carousel-cmp-carousel__action carousel-cmp-carousel__action--play carousel-cmp-carousel__action--disabled" type="button" aria-label="Play" data-cmp-hook-carousel="play">
      <span class="carousel-cmp-carousel__action-icon"></span>
      <span class="carousel-cmp-carousel__action-text">Play</span>
    </button>
  `;
  swiperContainer.append(actionsDiv);

  const navContainer = document.createElement('div');
  navContainer.classList.add('carousel-swiper-container');
  navContainer.innerHTML = `
    <div>
      <button class="carousel-primary-swiper__buttonNext carousel-position-absolute carousel-top-50 carousel-swiper-buttonBg carousel-d-none carousel-d-sm-block carousel-cursor-pointer carousel-analytics_cta_click carousel-disabled" disabled="">
        /content/dam/aemigrate/uploaded-folder/image/1761293302341.svg+xml
      </button>
    </div>
    <div>
      <button class="carousel-primary-swiper__buttonPrev carousel-position-absolute carousel-top-50 carousel-swiper-buttonBg carousel-d-none carousel-d-sm-block carousel-cursor-pointer carousel-analytics_cta_click">
        /content/dam/aemigrate/uploaded-folder/image/1761293302355.svg+xml
      </button>
    </div>
  `;
  swiperContainer.append(navContainer);

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
  paginationDiv.innerHTML = '<span class="carousel-swiper-pagination-bullet"></span><span class="carousel-swiper-pagination-bullet carousel-swiper-pagination-bullet-active"></span>';
  swiperContainer.append(paginationDiv);

  block.append(swiperContainer);

  // Initialize Swiper (assuming Swiper library is loaded)
  // const swiper = new Swiper(swiperContainer, {
  //   loop: swiperContainer.dataset.isLoop === 'true',
  //   autoplay: swiperContainer.dataset.isAutoplay === 'true' ? { delay: parseInt(swiperContainer.dataset.delay, 10), disableOnInteraction: swiperContainer.dataset.autopauseDisabled !== 'true' } : false,
  //   pagination: {
  //     el: paginationDiv,
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: navContainer.querySelector('.carousel-primary-swiper__buttonNext'),
  //     prevEl: navContainer.querySelector('.carousel-primary-swiper__buttonPrev'),
  //   },
  // });

  // Add event listeners for play/pause/prev/next buttons
  // const playButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--play');
  // const pauseButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--pause');
  // const prevButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--previous');
  // const nextButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--next');

  // playButton.addEventListener('click', () => swiper.autoplay.start());
  // pauseButton.addEventListener('click', () => swiper.autoplay.stop());
  // prevButton.addEventListener('click', () => swiper.slidePrev());
  // nextButton.addEventListener('click', () => swiper.slideNext());

  // Video controls
  block.querySelectorAll('video').forEach(video => {
    const videoWrapper = video.closest('.carousel-video-wrapper');
    const playBtn = videoWrapper.querySelector('.carousel-icon-play');
    const pauseBtn = videoWrapper.querySelector('.carousel-icon-pause');
    const muteBtn = videoWrapper.querySelector('.carousel-icon-mute');
    const unmuteBtn = videoWrapper.querySelector('.carousel-icon-unmute');
    const noAudioBtn = videoWrapper.querySelector('.carousel-no-audio-icon');

    if (playBtn && pauseBtn) {
      playBtn.addEventListener('click', () => {
        video.play();
        playBtn.classList.add('carousel-d-none');
        pauseBtn.classList.remove('carousel-d-none');
      });
      pauseBtn.addEventListener('click', () => {
        video.pause();
        pauseBtn.classList.add('carousel-d-none');
        playBtn.classList.remove('carousel-d-none');
      });
    }

    if (muteBtn && unmuteBtn && noAudioBtn) {
      noAudioBtn.addEventListener('click', () => {
        video.muted = false;
        noAudioBtn.classList.add('carousel-d-none');
        muteBtn.classList.remove('carousel-d-none');
      });
      muteBtn.addEventListener('click', () => {
        video.muted = true;
        muteBtn.classList.add('carousel-d-none');
        noAudioBtn.classList.remove('carousel-d-none');
      });
      unmuteBtn.addEventListener('click', () => {
        video.muted = true;
        unmuteBtn.classList.add('carousel-d-none');
        noAudioBtn.classList.remove('carousel-d-none');
      });
    }
  });
}
