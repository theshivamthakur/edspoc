import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('carousel-position-relative');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');

  [...block.children].forEach((row, index) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    if (index === 0) {
      slide.classList.add('carousel-cmp-carousel__item--active', 'swiper-slide-prev');
    } else if (index === 1) {
      slide.classList.add('swiper-slide-active');
    }
    slide.setAttribute('role', 'tabpanel');
    slide.setAttribute('aria-roledescription', 'slide');

    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('carousel-banner');

    const section = document.createElement('section');
    section.classList.add('carousel-banner-section');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');

    const mediaDiv = row.children[0];
    const ctaDiv = row.children[1];

    if (mediaDiv) {
      if (mediaDiv.querySelector('video')) {
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('carousel-video-wrapper');
        const video = mediaDiv.querySelector('video');
        video.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
        videoWrapper.append(video);

        // Add play/pause buttons
        const playPauseWrapper = document.createElement('div');
        playPauseWrapper.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');

        const playButton = document.createElement('button');
        playButton.setAttribute('type', 'button');
        playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
        playButton.innerHTML = mediaDiv.children[1]?.textContent || '';
        playPauseWrapper.append(playButton);

        const pauseButton = document.createElement('button');
        pauseButton.setAttribute('type', 'button');
        pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
        pauseButton.innerHTML = mediaDiv.children[2]?.textContent || '';
        playPauseWrapper.append(pauseButton);
        videoWrapper.append(playPauseWrapper);

        // Add mute/unmute buttons
        const muteWrapper = document.createElement('div');
        muteWrapper.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');

        const muteButton = document.createElement('button');
        muteButton.setAttribute('type', 'button');
        muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
        muteButton.innerHTML = mediaDiv.children[3]?.textContent || '';
        muteWrapper.append(muteButton);

        const unmuteButton = document.createElement('button');
        unmuteButton.setAttribute('type', 'button');
        unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
        unmuteButton.innerHTML = mediaDiv.children[4]?.textContent || '';
        muteWrapper.append(unmuteButton);

        const noAudioButton = document.createElement('button');
        noAudioButton.setAttribute('type', 'button');
        noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
        noAudioButton.innerHTML = mediaDiv.children[5]?.textContent || '';
        muteWrapper.append(noAudioButton);
        videoWrapper.append(muteWrapper);

        wrapperDiv.append(videoWrapper);
      } else if (mediaDiv.querySelector('img')) {
        const img = mediaDiv.querySelector('img');
        img.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
        const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
        wrapperDiv.append(optimizedPic);
      }
    }

    if (ctaDiv) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');
      const bannerCtaDiv = document.createElement('div');
      bannerCtaDiv.classList.add('carousel-banner-cta');

      const textCenterDiv = document.createElement('div');
      textCenterDiv.classList.add('carousel-text-center');

      const anchor = ctaDiv.querySelector('a');
      if (anchor) {
        anchor.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
        const span = anchor.querySelector('span');
        if (span) {
          span.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
        }
        textCenterDiv.append(anchor);
      }

      const popUpDiv = document.createElement('div');
      popUpDiv.classList.add('carousel-pop-up', 'carousel-d-none');
      popUpDiv.innerHTML = '<input type="hidden" class="carousel-popup-message"><input type="hidden" class="carousel-proceed-button-label"><input type="hidden" class="carousel-cancel-button-label"><input type="hidden" class="carousel-background-color">';
      textCenterDiv.append(popUpDiv);

      const externalLinkPopup = document.createElement('div');
      externalLinkPopup.classList.add('carousel-external-link-popup');
      const genericPopup = document.createElement('div');
      genericPopup.classList.add('carousel-generic-popup');
      const offcanvas = document.createElement('div');
      offcanvas.classList.add('carousel-offcanvas', 'carousel-offcanvas-bottom', 'carousel-boing-container', 'carousel-gating_offcanvas_bottom--wrapper', 'carousel-gating_offcanvas_bottom');

      const offcanvasHeader = document.createElement('div');
      offcanvasHeader.classList.add('carousel-offcanvas-header', 'carousel-position-relative');
      const closeButton = document.createElement('button');
      closeButton.setAttribute('type', 'button');
      closeButton.classList.add('carousel-close-btn', 'carousel-position-absolute');
      closeButton.innerHTML = ctaDiv.querySelector('.carousel-close-btn')?.textContent || '';
      offcanvasHeader.append(closeButton);
      offcanvas.append(offcanvasHeader);

      const offcanvasBody = document.createElement('div');
      offcanvasBody.classList.add('carousel-offcanvas-body');
      const popContent = document.createElement('div');
      popContent.classList.add('carousel-pop-content', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
      const popImageTextContainer = document.createElement('div');
      popImageTextContainer.classList.add('carousel-pop-image_text-container', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
      const imgHolder = document.createElement('div');
      imgHolder.classList.add('carousel-img_holder', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
      const iconSvg = document.createElement('img');
      iconSvg.classList.add('carousel-icon-svg');
      iconSvg.setAttribute('alt', 'Popup Icon');
      imgHolder.append(iconSvg);
      popImageTextContainer.append(imgHolder);

      const textBox = document.createElement('div');
      textBox.classList.add('carousel-text_box', 'carousel-d-flex', 'carousel-flex-column', 'carousel-text-center', 'carousel-mt-4');
      popImageTextContainer.append(textBox);
      popContent.append(popImageTextContainer);

      const ctaBox = document.createElement('div');
      ctaBox.classList.add('carousel-cta_box');
      const ctaLink = ctaDiv.querySelector('.carousel-popup-login-cta');
      if (ctaLink) {
        ctaLink.classList.add('carousel-text-white', 'carousel-popup-login-cta', 'carousel-text-decoration-none', 'carousel-boing--text__title-4', 'carousel-rounded-pill', 'carousel-bg-boing-primary', 'carousel-py-5', 'carousel-px-11', 'carousel-analytics_cta_click', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
        ctaLink.innerHTML = ctaDiv.querySelector('.carousel-popup-login-cta')?.textContent || '';
        ctaBox.append(ctaLink);
      }
      popContent.append(ctaBox);
      offcanvasBody.append(popContent);
      offcanvas.append(offcanvasBody);
      genericPopup.append(offcanvas);
      externalLinkPopup.append(genericPopup);
      bannerCtaDiv.append(textCenterDiv, externalLinkPopup);
      ctaWrapper.append(bannerCtaDiv);
      wrapperDiv.append(ctaWrapper);
    }

    section.append(wrapperDiv);
    bannerDiv.append(section);
    slide.append(bannerDiv);
    swiperWrapper.append(slide);
  });

  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper', 'carousel-primary-swiper');
  swiperContainer.setAttribute('role', 'group');
  swiperContainer.setAttribute('aria-live', 'polite');
  swiperContainer.setAttribute('aria-roledescription', 'carousel');
  swiperContainer.setAttribute('data-is-autoplay', 'true');
  swiperContainer.setAttribute('data-delay', '5000');
  swiperContainer.setAttribute('data-autopause-disabled', 'true');
  swiperContainer.setAttribute('data-is-loop', 'false');
  swiperContainer.setAttribute('data-placeholder-text', 'false');
  swiperContainer.append(swiperWrapper);

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('carousel-cmp-carousel__actions');
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--previous');
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('aria-label', 'Previous');
  prevButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Previous</span>';
  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--next');
  nextButton.setAttribute('type', 'button');
  nextButton.setAttribute('aria-label', 'Next');
  nextButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Next</span>';
  const pauseButton = document.createElement('button');
  pauseButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--pause');
  pauseButton.setAttribute('type', 'button');
  pauseButton.setAttribute('aria-label', 'Pause');
  pauseButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Pause</span>';
  const playButton = document.createElement('button');
  playButton.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--play', 'carousel-cmp-carousel__action--disabled');
  playButton.setAttribute('type', 'button');
  playButton.setAttribute('aria-label', 'Play');
  playButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Play</span>';
  actionsDiv.append(prevButton, nextButton, pauseButton, playButton);
  swiperContainer.append(actionsDiv);

  const navContainer = document.createElement('div');
  navContainer.classList.add('carousel-swiper-container');
  const nextBtnWrapper = document.createElement('div');
  const nextNavButton = document.createElement('button');
  nextNavButton.classList.add('carousel-primary-swiper__buttonNext', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click', 'carousel-disabled');
  nextNavButton.setAttribute('disabled', '');
  nextNavButton.innerHTML = block.querySelector('.carousel-primary-swiper__buttonNext')?.textContent || '';
  nextBtnWrapper.append(nextNavButton);

  const prevBtnWrapper = document.createElement('div');
  const prevNavButton = document.createElement('button');
  prevNavButton.classList.add('carousel-primary-swiper__buttonPrev', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
  prevNavButton.innerHTML = block.querySelector('.carousel-primary-swiper__buttonPrev')?.textContent || '';
  prevBtnWrapper.append(prevNavButton);
  navContainer.append(nextBtnWrapper, prevBtnWrapper);
  swiperContainer.append(navContainer);

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
  paginationDiv.innerHTML = '<span class="carousel-swiper-pagination-bullet"></span><span class="carousel-swiper-pagination-bullet carousel-swiper-pagination-bullet-active"></span>';
  swiperContainer.append(paginationDiv);

  block.textContent = '';
  block.append(swiperContainer);

  // Initialize Swiper
  // eslint-disable-next-line import/no-unresolved, import/extensions
  // const swiper = new Swiper(swiperContainer, {
  //   loop: false,
  //   pagination: {
  //     el: paginationDiv,
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: nextNavButton,
  //     prevEl: prevNavButton,
  //   },
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  // });

  // // Handle video play/pause and mute/unmute
  // block.querySelectorAll('video').forEach((video) => {
  //   const playButton = video.closest('.carousel-video-wrapper').querySelector('.carousel-icon-play');
  //   const pauseButton = video.closest('.carousel-video-wrapper').querySelector('.carousel-icon-pause');
  //   const muteButton = video.closest('.carousel-video-wrapper').querySelector('.carousel-icon-mute');
  //   const unmuteButton = video.closest('.carousel-video-wrapper').querySelector('.carousel-icon-unmute');
  //   const noAudioButton = video.closest('.carousel-video-wrapper').querySelector('.carousel-no-audio-icon');

  //   if (video.hasAttribute('autoplay')) {
  //     video.play();
  //     playButton.classList.add('carousel-d-none');
  //     pauseButton.classList.remove('carousel-d-none');
  //   } else {
  //     playButton.classList.remove('carousel-d-none');
  //     pauseButton.classList.add('carousel-d-none');
  //   }

  //   if (video.muted) {
  //     muteButton.classList.add('carousel-d-none');
  //     unmuteButton.classList.add('carousel-d-none');
  //     noAudioButton.classList.remove('carousel-d-none');
  //   } else {
  //     muteButton.classList.remove('carousel-d-none');
  //     unmuteButton.classList.add('carousel-d-none');
  //     noAudioButton.classList.add('carousel-d-none');
  //   }

  //   playButton.addEventListener('click', () => {
  //     video.play();
  //     playButton.classList.add('carousel-d-none');
  //     pauseButton.classList.remove('carousel-d-none');
  //   });

  //   pauseButton.addEventListener('click', () => {
  //     video.pause();
  //     playButton.classList.remove('carousel-d-none');
  //     pauseButton.classList.add('carousel-d-none');
  //   });

  //   muteButton.addEventListener('click', () => {
  //     video.muted = true;
  //     muteButton.classList.add('carousel-d-none');
  //     unmuteButton.classList.add('carousel-d-none');
  //     noAudioButton.classList.remove('carousel-d-none');
  //   });

  //   unmuteButton.addEventListener('click', () => {
  //     video.muted = false;
  //     muteButton.classList.remove('carousel-d-none');
  //     unmuteButton.classList.add('carousel-d-none');
  //     noAudioButton.classList.add('carousel-d-none');
  //   });

  //   noAudioButton.addEventListener('click', () => {
  //     video.muted = false;
  //     muteButton.classList.remove('carousel-d-none');
  //     unmuteButton.classList.add('carousel-d-none');
  //     noAudioButton.classList.add('carousel-d-none');
  //   });
  // });
}
