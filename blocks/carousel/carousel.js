import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const swiperWrapper = block.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    const ul = document.createElement('ul');
    ul.classList.add('carousel-list');

    [...swiperWrapper.children].forEach((slide) => {
      const li = document.createElement('li');
      li.classList.add('carousel-item');
      moveInstrumentation(slide, li);

      const banner = slide.querySelector('.carousel-banner');
      if (banner) {
        const mediaWrapper = banner.querySelector('.carousel-video-wrapper') || banner.querySelector('img');
        if (mediaWrapper) {
          if (mediaWrapper.tagName === 'IMG') {
            const img = mediaWrapper;
            const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
            moveInstrumentation(img, optimizedPic.querySelector('img'));
            li.append(optimizedPic);
          } else if (mediaWrapper.tagName === 'DIV' && mediaWrapper.classList.contains('carousel-video-wrapper')) {
            const video = mediaWrapper.querySelector('video');
            if (video) {
              li.append(video);
            }
          }
        }

        const ctaWrapper = banner.querySelector('.carousel-banner-cta');
        if (ctaWrapper) {
          const cta = ctaWrapper.querySelector('a');
          if (cta) {
            li.append(cta);
          }
        }
      }
      ul.append(li);
    });
    block.textContent = '';
    block.append(ul);
  }

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

  const swiperElement = block.querySelector('.swiper');
  if (swiperElement) {
    swiperElement.classList.remove('swiper', 'carousel-primary-swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
    swiperElement.removeAttribute('data-swiper-id');
    swiperElement.removeAttribute('id');
    swiperElement.removeAttribute('role');
    swiperElement.removeAttribute('aria-live');
    swiperElement.removeAttribute('aria-roledescription');
    swiperElement.removeAttribute('data-is-autoplay');
    swiperElement.removeAttribute('data-delay');
    swiperElement.removeAttribute('data-autopause-disabled');
    swiperElement.removeAttribute('data-is-loop');
    swiperElement.removeAttribute('data-placeholder-text');
    const swiperWrapperElement = swiperElement.querySelector('.swiper-wrapper');
    if (swiperWrapperElement) {
      swiperWrapperElement.classList.remove('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');
      swiperWrapperElement.removeAttribute('style');
    }
  }

  const carouselPositionRelative = block.querySelector('.carousel-position-relative');
  if (carouselPositionRelative) {
    carouselPositionRelative.classList.remove('carousel-position-relative');
  }
}