import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const carouselPositionRelative = block.querySelector('.carousel-position-relative');
  if (carouselPositionRelative) {
    carouselPositionRelative.classList.add('carousel-wrapper');
  }

  const swiperWrapper = block.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.classList.add('carousel-slides');
  }

  const slides = block.querySelectorAll('.swiper-slide');
  slides.forEach((slide) => {
    slide.classList.add('carousel-slide');
    const bannerDiv = slide.querySelector('.carousel-banner');
    if (bannerDiv) {
      bannerDiv.classList.add('carousel-slide-content');
    }

    const videoWrapper = slide.querySelector('.carousel-video-wrapper');
    if (videoWrapper) {
      const video = videoWrapper.querySelector('video');
      if (video) {
        video.classList.add('carousel-media', 'carousel-video');
        const sources = video.querySelectorAll('source');
        sources.forEach(source => {
          if (source.src) {
            source.src = source.src;
          }
        });
        videoWrapper.innerHTML = '';
        videoWrapper.append(video);
      }
      const playButton = videoWrapper.querySelector('.carousel-icon-play');
      const pauseButton = videoWrapper.querySelector('.carousel-icon-pause');
      const muteButton = videoWrapper.querySelector('.carousel-icon-mute');
      const unmuteButton = videoWrapper.querySelector('.carousel-icon-unmute');
      const noAudioButton = videoWrapper.querySelector('.carousel-no-audio-icon');

      if (playButton) playButton.remove();
      if (pauseButton) pauseButton.remove();
      if (muteButton) muteButton.remove();
      if (unmuteButton) unmuteButton.remove();
      if (noAudioButton) noAudioButton.remove();

    } else {
      const img = slide.querySelector('img');
      if (img) {
        img.classList.add('carousel-media', 'carousel-image');
        const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '1200' }]);
        img.closest('picture')?.replaceWith(optimizedPic);
      }
    }

    const ctaWrapper = slide.querySelector('.carousel-banner-cta');
    if (ctaWrapper) {
      const ctaLink = ctaWrapper.querySelector('a.carousel-cmp-button');
      if (ctaLink) {
        ctaLink.classList.add('carousel-cta-link');
        const span = ctaLink.querySelector('span');
        if (span) {
          span.classList.add('carousel-cta-text');
        }
        ctaWrapper.innerHTML = '';
        ctaWrapper.append(ctaLink);
      }
    }
  });

  const pagination = block.querySelector('.carousel-swiper-pagination');
  if (pagination) {
    pagination.classList.add('carousel-pagination');
  }

  const prevButton = block.querySelector('.carousel-primary-swiper__buttonPrev');
  if (prevButton) {
    prevButton.classList.add('carousel-prev-button');
    prevButton.innerHTML = '<span class="carousel-icon"></span>';
  }

  const nextButton = block.querySelector('.carousel-primary-swiper__buttonNext');
  if (nextButton) {
    nextButton.classList.add('carousel-next-button');
    nextButton.innerHTML = '<span class="carousel-icon"></span>';
  }

  const actions = block.querySelector('.carousel-cmp-carousel__actions');
  if (actions) {
    actions.remove();
  }

  const swiperContainer = block.querySelector('.carousel-swiper-container');
  if (swiperContainer) {
    swiperContainer.classList.add('carousel-navigation');
  }

  const swiperElement = block.querySelector('.swiper');
  if (swiperElement) {
    swiperElement.classList.add('carousel-container');
  }

  // Remove popup elements
  const popUp = block.querySelector('.carousel-pop-up');
  if (popUp) popUp.remove();
  const externalLinkPopup = block.querySelector('.carousel-external-link-popup');
  if (externalLinkPopup) externalLinkPopup.remove();

  // Clean up remaining elements if they don't fit the model
  const elementsToRemove = [
    '.carousel-banner-section',
    '.carousel-position-absolute.carousel-w-100.carousel-h-100',
    '.carousel-position-absolute.carousel-z-2',
    '.carousel-position-absolute.carousel-start-50'
  ];

  elementsToRemove.forEach(selector => {
    const el = block.querySelector(selector);
    if (el && !el.classList.contains('carousel-slide-content')) {
      el.remove();
    }
  });

  // Ensure the main block only contains the necessary structure
  const finalContent = document.createElement('div');
  finalContent.classList.add('carousel-content');
  if (swiperElement) {
    finalContent.append(swiperElement);
  }
  if (swiperContainer) {
    finalContent.append(swiperContainer);
  }
  if (pagination) {
    finalContent.append(pagination);
  }

  block.innerHTML = '';
  block.append(finalContent);
}
