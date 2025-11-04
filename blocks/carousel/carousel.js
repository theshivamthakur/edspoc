import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const carouselPositionRelative = block.querySelector('.carousel-position-relative');
  if (carouselPositionRelative) {
    carouselPositionRelative.classList.add('carousel-wrapper');
  }

  const swiperWrapper = block.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.classList.add('carousel-container');
  }

  const swiperSlides = block.querySelectorAll('.swiper-slide');
  swiperSlides.forEach((slide) => {
    slide.classList.add('carousel-slide');

    const videoWrapper = slide.querySelector('.carousel-video-wrapper');
    if (videoWrapper) {
      videoWrapper.classList.add('carousel-media-wrapper');
      const video = videoWrapper.querySelector('video');
      if (video) {
        video.classList.add('carousel-video');
        video.removeAttribute('data-is-autoplay');
        video.removeAttribute('data-autopause-disabled');
        video.removeAttribute('loop');
        video.removeAttribute('muted');
        video.removeAttribute('autoplay');
      }

      const playButton = videoWrapper.querySelector('.carousel-icon-play');
      if (playButton) {
        playButton.remove();
      }
      const pauseButton = videoWrapper.querySelector('.carousel-icon-pause');
      if (pauseButton) {
        pauseButton.remove();
      }
      const muteIconContainer = videoWrapper.querySelector('.carousel-mute-icon');
      if (muteIconContainer) {
        muteIconContainer.remove();
      }
    }

    const img = slide.querySelector('img');
    if (img) {
      img.classList.add('carousel-image');
      const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
      moveInstrumentation(img, optimizedPic.querySelector('img'));
      img.closest('img').replaceWith(optimizedPic);
    }

    const ctaWrapper = slide.querySelector('.carousel-banner-cta');
    if (ctaWrapper) {
      ctaWrapper.classList.add('carousel-cta-wrapper');
      const ctaLink = ctaWrapper.querySelector('a');
      if (ctaLink) {
        ctaLink.classList.add('carousel-cta-link');
        const ctaTextSpan = ctaLink.querySelector('.carousel-cmp-button__text');
        if (ctaTextSpan) {
          ctaTextSpan.classList.add('carousel-cta-text');
        }
      }
      const popup = ctaWrapper.querySelector('.carousel-pop-up');
      if (popup) {
        popup.remove();
      }
      const externalLinkPopup = ctaWrapper.querySelector('.carousel-external-link-popup');
      if (externalLinkPopup) {
        externalLinkPopup.remove();
      }
    }
  });

  const actions = block.querySelector('.carousel-cmp-carousel__actions');
  if (actions) {
    actions.remove();
  }

  const swiperContainer = block.querySelector('.carousel-swiper-container');
  if (swiperContainer) {
    swiperContainer.remove();
  }

  const pagination = block.querySelector('.carousel-swiper-pagination');
  if (pagination) {
    pagination.remove();
  }

  // Remove the data-swiper-id, data-is-autoplay, data-delay, data-autopause-disabled, data-is-loop, data-placeholder-text attributes from the main swiper div
  const mainSwiperDiv = block.querySelector('.swiper.carousel-primary-swiper');
  if (mainSwiperDiv) {
    mainSwiperDiv.removeAttribute('data-swiper-id');
    mainSwiperDiv.removeAttribute('data-is-autoplay');
    mainSwiperDiv.removeAttribute('data-delay');
    mainSwiperDiv.removeAttribute('data-autopause-disabled');
    mainSwiperDiv.removeAttribute('data-is-loop');
    mainSwiperDiv.removeAttribute('data-placeholder-text');
    mainSwiperDiv.removeAttribute('id');
    mainSwiperDiv.removeAttribute('role');
    mainSwiperDiv.removeAttribute('aria-live');
    mainSwiperDiv.removeAttribute('aria-roledescription');
  }

  const carouselBannerDivs = block.querySelectorAll('.carousel-banner');
  carouselBannerDivs.forEach((div) => {
    const section = div.querySelector('.carousel-banner-section');
    if (section) {
      while (section.firstElementChild) {
        div.append(section.firstElementChild);
      }
      section.remove();
    }
  });

  const bannerSectionWrappers = block.querySelectorAll('.carousel-banner-section__wrapper');
  bannerSectionWrappers.forEach((wrapper) => {
    wrapper.classList.add('carousel-item-content');
    const ctaDiv = wrapper.querySelector('.carousel-boing__banner--cta');
    if (ctaDiv) {
      while (ctaDiv.firstElementChild) {
        wrapper.append(ctaDiv.firstElementChild);
      }
      ctaDiv.remove();
    }
  });

  const allSwiperSlides = block.querySelectorAll('.swiper-slide');
  allSwiperSlides.forEach((slide) => {
    slide.removeAttribute('data-active');
    slide.removeAttribute('id');
    slide.removeAttribute('role');
    slide.removeAttribute('aria-labelledby');
    slide.removeAttribute('aria-roledescription');
    slide.removeAttribute('data-cmp-data-layer');
    slide.removeAttribute('data-cmp-hook-carousel');
    slide.removeAttribute('style');
  });

  const swiperWrapperDiv = block.querySelector('.swiper-wrapper');
  if (swiperWrapperDiv) {
    swiperWrapperDiv.removeAttribute('style');
  }

  // Remove all the classes that start with 'swiper-'
  block.querySelectorAll('[class*="swiper-"]').forEach((el) => {
    el.className = Array.from(el.classList).filter((cls) => !cls.startsWith('swiper-')).join(' ');
  });
}