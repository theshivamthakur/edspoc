import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const swiperWrapper = block.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    const ul = document.createElement('ul');
    swiperWrapper.querySelectorAll('.swiper-slide').forEach((slide) => {
      const li = document.createElement('li');
      moveInstrumentation(slide, li);
      const banner = slide.querySelector('.carousel-banner');
      if (banner) {
        const videoWrapper = banner.querySelector('.carousel-video-wrapper');
        if (videoWrapper) {
          const video = videoWrapper.querySelector('video');
          if (video) {
            li.append(video);
            const playButton = videoWrapper.querySelector('.carousel-icon-play');
            const pauseButton = videoWrapper.querySelector('.carousel-icon-pause');
            const muteButton = videoWrapper.querySelector('.carousel-icon-mute');
            const unmuteButton = videoWrapper.querySelector('.carousel-icon-unmute');
            const noAudioIcon = videoWrapper.querySelector('.carousel-no-audio-icon');
            if (playButton) li.append(playButton);
            if (pauseButton) li.append(pauseButton);
            if (muteButton) li.append(muteButton);
            if (unmuteButton) li.append(unmuteButton);
            if (noAudioIcon) li.append(noAudioIcon);
          }
        }
        const image = banner.querySelector('img');
        if (image) {
          const optimizedPic = createOptimizedPicture(image.src, image.alt, false, [{ width: '750' }]);
          moveInstrumentation(image, optimizedPic.querySelector('img'));
          li.append(optimizedPic);
        }
        const cta = banner.querySelector('.carousel-banner-cta');
        if (cta) {
          li.append(cta);
        }
      }
      ul.append(li);
    });
    block.textContent = '';
    block.append(ul);
  }

  const actionsDiv = block.querySelector('.carousel-cmp-carousel__actions');
  if (actionsDiv) {
    actionsDiv.remove();
  }

  const swiperContainer = block.querySelector('.carousel-swiper-container');
  if (swiperContainer) {
    swiperContainer.remove();
  }

  const pagination = block.querySelector('.carousel-swiper-pagination');
  if (pagination) {
    pagination.remove();
  }

  block.classList.add('carousel-block');
}