import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const swiperWrapper = block.querySelector('.swiper-wrapper');
  if (!swiperWrapper) return;

  const ul = document.createElement('ul');
  ul.classList.add('carousel-list');

  [...swiperWrapper.children].forEach((slide) => {
    if (slide.classList.contains('swiper-slide')) {
      const li = document.createElement('li');
      moveInstrumentation(slide, li);
      li.classList.add('carousel-item');

      const bannerDiv = slide.querySelector('.carousel-banner');
      if (bannerDiv) {
        const section = bannerDiv.querySelector('.carousel-banner-section');
        if (section) {
          const wrapper = section.querySelector('.carousel-banner-section__wrapper');
          if (wrapper) {
            const videoWrapper = wrapper.querySelector('.carousel-video-wrapper');
            const img = wrapper.querySelector('img.carousel-banner-image');
            const ctaDiv = wrapper.querySelector('.carousel-boing__banner--cta .carousel-banner-cta');

            if (videoWrapper) {
              const video = videoWrapper.querySelector('video.carousel-banner-video');
              if (video) {
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('carousel-video-container');
                videoContainer.append(video);
                li.append(videoContainer);
              }
            } else if (img) {
              const picture = img.closest('picture');
              if (picture) {
                const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
                moveInstrumentation(img, optimizedPic.querySelector('img'));
                li.append(optimizedPic);
              } else {
                li.append(img.cloneNode(true));
              }
            }

            if (ctaDiv) {
              const ctaContainer = document.createElement('div');
              ctaContainer.classList.add('carousel-cta-container');
              ctaContainer.append(ctaDiv.cloneNode(true));
              li.append(ctaContainer);
            }
          }
        }
      }
      ul.append(li);
    }
  });

  block.textContent = '';
  block.append(ul);

  // Handle navigation buttons and pagination if needed
  const nextButton = block.querySelector('.carousel-primary-swiper__buttonNext');
  const prevButton = block.querySelector('.carousel-primary-swiper__buttonPrev');
  const pagination = block.querySelector('.carousel-swiper-pagination');

  if (nextButton) nextButton.remove();
  if (prevButton) prevButton.remove();
  if (pagination) pagination.remove();

  // Remove original swiper structure
  const swiperContainer = block.querySelector('.swiper.carousel-primary-swiper');
  if (swiperContainer) {
    swiperContainer.replaceWith(ul);
  }
}
