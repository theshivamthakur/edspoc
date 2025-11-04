import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const carouselPositionRelative = block.querySelector('.carousel-position-relative');
  if (carouselPositionRelative) {
    carouselPositionRelative.classList.add('carousel-wrapper');
  }

  const swiperContainer = block.querySelector('.swiper.carousel-primary-swiper');
  if (swiperContainer) {
    swiperContainer.classList.add('swiper-container');
  }

  const swiperWrapper = block.querySelector('.swiper-wrapper.carousel-primary-swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.classList.add('swiper-wrapper');
  }

  const slides = block.querySelectorAll('.swiper-slide.carousel-primary-swiper-slide');
  slides.forEach((slide) => {
    slide.classList.add('swiper-slide');
    const bannerDiv = slide.querySelector('.carousel-banner');
    if (bannerDiv) {
      bannerDiv.classList.add('carousel-banner');
    }

    const section = slide.querySelector('.carousel-banner-section');
    if (section) {
      section.classList.add('carousel-banner-section');
    }

    const wrapper = slide.querySelector('.carousel-position-relative.carousel-boing.carousel-banner-section__wrapper');
    if (wrapper) {
      wrapper.classList.add('carousel-banner-section__wrapper');

      const videoWrapper = wrapper.querySelector('.carousel-video-wrapper');
      if (videoWrapper) {
        videoWrapper.classList.add('carousel-video-wrapper');
        const video = videoWrapper.querySelector('video');
        if (video) {
          video.classList.add('carousel-banner-video');
          const sources = video.querySelectorAll('source');
          sources.forEach(source => {
            source.remove();
          });
          const mp4Source = document.createElement('source');
          mp4Source.setAttribute('src', video.dataset.mp4Source);
          mp4Source.setAttribute('type', 'video/mp4');
          video.append(mp4Source);
          const webmSource = document.createElement('source');
          webmSource.setAttribute('src', video.dataset.webmSource);
          webmSource.setAttribute('type', 'video/webm');
          video.append(webmSource);
        }

        const playPauseContainer = videoWrapper.querySelector('.carousel-position-absolute.carousel-w-100.carousel-h-100');
        if (playPauseContainer) {
          playPauseContainer.classList.add('carousel-video-controls');
          const playButton = playPauseContainer.querySelector('.carousel-video-icon.carousel-icon-play');
          if (playButton) {
            playButton.classList.add('carousel-play-button');
            playButton.innerHTML = `<img src="${playButton.textContent.trim()}" alt="Play">`;
          }
          const pauseButton = playPauseContainer.querySelector('.carousel-video-icon.carousel-icon-pause');
          if (pauseButton) {
            pauseButton.classList.add('carousel-pause-button');
            pauseButton.innerHTML = `<img src="${pauseButton.textContent.trim()}" alt="Pause">`;
          }
        }

        const muteUnmuteContainer = videoWrapper.querySelector('.carousel-position-absolute.carousel-z-2');
        if (muteUnmuteContainer) {
          muteUnmuteContainer.classList.add('carousel-volume-controls');
          const muteButton = muteUnmuteContainer.querySelector('.carousel-video-icon-volume.carousel-icon-mute');
          if (muteButton) {
            muteButton.classList.add('carousel-mute-button');
            muteButton.innerHTML = `<img src="${muteButton.textContent.trim()}" alt="Mute">`;
          }
          const unmuteButton = muteUnmuteContainer.querySelector('.carousel-video-icon-volume.carousel-icon-unmute');
          if (unmuteButton) {
            unmuteButton.classList.add('carousel-unmute-button');
            unmuteButton.innerHTML = `<img src="${unmuteButton.textContent.trim()}" alt="Unmute">`;
          }
          const noAudioButton = muteUnmuteContainer.querySelector('.carousel-video-icon-volume.carousel-no-audio-icon');
          if (noAudioButton) {
            noAudioButton.classList.add('carousel-no-audio-button');
            noAudioButton.innerHTML = `<img src="${noAudioButton.textContent.trim()}" alt="No Audio">`;
          }
        }
      }

      const image = wrapper.querySelector('img.carousel-w-100');
      if (image) {
        image.classList.add('carousel-banner-image');
        const optimizedPic = createOptimizedPicture(image.src, image.alt, false, [{ width: '2000' }]);
        moveInstrumentation(image, optimizedPic.querySelector('img'));
        image.replaceWith(optimizedPic);
      }

      const ctaContainer = wrapper.querySelector('.carousel-position-absolute.carousel-start-50');
      if (ctaContainer) {
        ctaContainer.classList.add('carousel-banner-cta-container');
        const ctaDiv = ctaContainer.querySelector('.carousel-banner-cta');
        if (ctaDiv) {
          ctaDiv.classList.add('carousel-banner-cta');
          const ctaLinkWrapper = ctaDiv.querySelector('.carousel-text-center');
          if (ctaLinkWrapper) {
            ctaLinkWrapper.classList.add('carousel-cta-wrapper');
            const ctaLink = ctaLinkWrapper.querySelector('a.carousel-cmp-button');
            if (ctaLink) {
              ctaLink.classList.add('carousel-cta-link');
              const ctaTextSpan = ctaLink.querySelector('span.carousel-cmp-button__text');
              if (ctaTextSpan) {
                ctaTextSpan.classList.add('carousel-cta-text');
                ctaTextSpan.textContent = ctaLink.dataset.ctaText;
              }
              ctaLink.href = ctaLink.dataset.ctaLink;
            }
            const popupDiv = ctaLinkWrapper.querySelector('.carousel-pop-up');
            if (popupDiv) {
              popupDiv.classList.add('carousel-popup');
            }
          }
          const externalLinkPopup = ctaDiv.querySelector('.carousel-external-link-popup');
          if (externalLinkPopup) {
            externalLinkPopup.classList.add('carousel-external-link-popup');
            const genericPopup = externalLinkPopup.querySelector('.carousel-generic-popup');
            if (genericPopup) {
              genericPopup.classList.add('carousel-generic-popup');
              const offcanvas = genericPopup.querySelector('.carousel-offcanvas');
              if (offcanvas) {
                offcanvas.classList.add('carousel-offcanvas');
                const offcanvasHeader = offcanvas.querySelector('.carousel-offcanvas-header');
                if (offcanvasHeader) {
                  offcanvasHeader.classList.add('carousel-offcanvas-header');
                  const closeButton = offcanvasHeader.querySelector('.carousel-close-btn');
                  if (closeButton) {
                    closeButton.classList.add('carousel-close-button');
                    closeButton.innerHTML = `<img src="${closeButton.textContent.trim()}" alt="Close">`;
                  }
                }
                const offcanvasBody = offcanvas.querySelector('.carousel-offcanvas-body');
                if (offcanvasBody) {
                  offcanvasBody.classList.add('carousel-offcanvas-body');
                  const popContent = offcanvasBody.querySelector('.carousel-pop-content');
                  if (popContent) {
                    popContent.classList.add('carousel-pop-content');
                    const imageTextContainer = popContent.querySelector('.carousel-pop-image_text-container');
                    if (imageTextContainer) {
                      imageTextContainer.classList.add('carousel-pop-image-text-container');
                      const imgHolder = imageTextContainer.querySelector('.carousel-img_holder');
                      if (imgHolder) {
                        imgHolder.classList.add('carousel-img-holder');
                        const img = imgHolder.querySelector('img.carousel-icon-svg');
                        if (img) {
                          img.classList.add('carousel-icon-svg');
                          img.src = img.dataset.popupIcon;
                        }
                      }
                      const textBox = imageTextContainer.querySelector('.carousel-text_box');
                      if (textBox) {
                        textBox.classList.add('carousel-text-box');
                        const title = document.createElement('h3');
                        title.classList.add('carousel-pop-up-title');
                        title.textContent = textBox.dataset.popupTitle;
                        textBox.append(title);
                        const description = document.createElement('p');
                        description.classList.add('carousel-pop-up-description');
                        description.textContent = textBox.dataset.popupDescription;
                        textBox.append(description);
                      }
                    }
                    const ctaBox = popContent.querySelector('.carousel-cta_box');
                    if (ctaBox) {
                      ctaBox.classList.add('carousel-cta-box');
                      const ctaLink = ctaBox.querySelector('a.carousel-text-white');
                      if (ctaLink) {
                        ctaLink.classList.add('carousel-popup-login-cta');
                        ctaLink.textContent = ctaLink.dataset.popupCtaText;
                        ctaLink.href = ctaLink.dataset.ctaLink;
                        const ctaIcon = document.createElement('img');
                        ctaIcon.src = ctaLink.dataset.popupCtaIcon;
                        ctaIcon.alt = 'CTA Icon';
                        ctaLink.append(ctaIcon);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  const actionsDiv = block.querySelector('.carousel-cmp-carousel__actions');
  if (actionsDiv) {
    actionsDiv.classList.add('carousel-actions');
    const prevButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--previous');
    if (prevButton) prevButton.classList.add('carousel-prev-button');
    const nextButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--next');
    if (nextButton) nextButton.classList.add('carousel-next-button');
    const pauseButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--pause');
    if (pauseButton) pauseButton.classList.add('carousel-pause-button');
    const playButton = actionsDiv.querySelector('.carousel-cmp-carousel__action--play');
    if (playButton) playButton.classList.add('carousel-play-button');
  }

  const swiperNavContainer = block.querySelector('.carousel-swiper-container');
  if (swiperNavContainer) {
    swiperNavContainer.classList.add('carousel-navigation-container');
    const nextButton = swiperNavContainer.querySelector('.carousel-primary-swiper__buttonNext');
    if (nextButton) {
      nextButton.classList.add('carousel-nav-button-next');
      nextButton.innerHTML = `<img src="${nextButton.textContent.trim()}" alt="Next">`;
    }
    const prevButton = swiperNavContainer.querySelector('.carousel-primary-swiper__buttonPrev');
    if (prevButton) {
      prevButton.classList.add('carousel-nav-button-prev');
      prevButton.innerHTML = `<img src="${prevButton.textContent.trim()}" alt="Previous">`;
    }
  }

  const pagination = block.querySelector('.carousel-swiper-pagination');
  if (pagination) {
    pagination.classList.add('carousel-pagination');
  }
}
