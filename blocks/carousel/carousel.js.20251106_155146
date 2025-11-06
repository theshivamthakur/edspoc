import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const wrapper = block.querySelector('.swiper-wrapper');
  if (wrapper) {
    const slides = Array.from(wrapper.children);
    slides.forEach((slide) => {
      slide.classList.add('carousel-primary-swiper-slide');
      const banner = slide.querySelector('.carousel-banner');
      if (banner) {
        const section = banner.querySelector('.carousel-banner-section');
        if (section) {
          const sectionWrapper = section.querySelector('.carousel-banner-section__wrapper');
          if (sectionWrapper) {
            const videoWrapper = sectionWrapper.querySelector('.carousel-video-wrapper');
            if (videoWrapper) {
              const video = videoWrapper.querySelector('video');
              if (video) {
                video.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
                video.setAttribute('playsinline', '');
                video.setAttribute('preload', 'metadata');
                video.setAttribute('fetchpriority', 'high');
                if (video.getAttribute('data-is-autoplay') === 'true') {
                  video.setAttribute('autoplay', 'true');
                }
                if (video.getAttribute('loop') === 'false') {
                  video.removeAttribute('loop');
                }
                if (video.getAttribute('muted') === 'true') {
                  video.setAttribute('muted', 'true');
                }
                const sources = video.querySelectorAll('source');
                sources.forEach((source) => {
                  moveInstrumentation(source, video);
                });
              }
              const playPauseContainer = videoWrapper.querySelector('.carousel-position-absolute.carousel-w-100.carousel-h-100');
              if (playPauseContainer) {
                playPauseContainer.classList.add('carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');
                const playButton = playPauseContainer.querySelector('.carousel-icon-play');
                if (playButton) {
                  playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
                  const playSvg = playButton.textContent.trim();
                  if (playSvg) {
                    fetch(playSvg).then((resp) => resp.text()).then((svg) => {
                      playButton.innerHTML = svg;
                    });
                  }
                }
                const pauseButton = playPauseContainer.querySelector('.carousel-icon-pause');
                if (pauseButton) {
                  pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
                  const pauseSvg = pauseButton.textContent.trim();
                  if (pauseSvg) {
                    fetch(pauseSvg).then((resp) => resp.text()).then((svg) => {
                      pauseButton.innerHTML = svg;
                    });
                  }
                }
              }
              const muteIconContainer = videoWrapper.querySelector('.carousel-position-absolute.carousel-z-2');
              if (muteIconContainer) {
                muteIconContainer.classList.add('carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');
                const muteButton = muteIconContainer.querySelector('.carousel-icon-mute');
                if (muteButton) {
                  muteButton.classList.add('carousel-video-icon-volume', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
                  const muteSvg = muteButton.textContent.trim();
                  if (muteSvg) {
                    fetch(muteSvg).then((resp) => resp.text()).then((svg) => {
                      muteButton.innerHTML = svg;
                    });
                  }
                }
                const unmuteButton = muteIconContainer.querySelector('.carousel-icon-unmute');
                if (unmuteButton) {
                  unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
                  const unmuteSvg = unmuteButton.textContent.trim();
                  if (unmuteSvg) {
                    fetch(unmuteSvg).then((resp) => resp.text()).then((svg) => {
                      unmuteButton.innerHTML = svg;
                    });
                  }
                }
                const noAudioButton = muteIconContainer.querySelector('.carousel-no-audio-icon');
                if (noAudioButton) {
                  noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
                  const noAudioSvg = noAudioButton.textContent.trim();
                  if (noAudioSvg) {
                    fetch(noAudioSvg).then((resp) => resp.text()).then((svg) => {
                      noAudioButton.innerHTML = svg;
                    });
                  }
                }
              }
            } else {
              const img = sectionWrapper.querySelector('img');
              if (img) {
                img.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
                img.setAttribute('loading', 'eager');
                img.setAttribute('fetchpriority', 'high');
                img.setAttribute('decoding', 'async');
                const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '2000' }]);
                moveInstrumentation(img, optimizedPic.querySelector('img'));
                img.closest('img').replaceWith(optimizedPic);
              }
            }

            const ctaContainer = sectionWrapper.querySelector('.carousel-boing__banner--cta');
            if (ctaContainer) {
              ctaContainer.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100');
              const bannerCta = ctaContainer.querySelector('.carousel-banner-cta');
              if (bannerCta) {
                const textCenterDiv = bannerCta.querySelector('.carousel-text-center');
                if (textCenterDiv) {
                  const ctaLink = textCenterDiv.querySelector('a');
                  if (ctaLink) {
                    ctaLink.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
                    if (ctaLink.href && !ctaLink.href.includes(window.location.hostname)) {
                      ctaLink.target = '_blank';
                      ctaLink.rel = 'noopener noreferrer';
                    }
                    const ctaSpan = ctaLink.querySelector('span');
                    if (ctaSpan) {
                      ctaSpan.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
                    }
                  }
                  const popUpDiv = textCenterDiv.querySelector('.carousel-pop-up');
                  if (popUpDiv) {
                    popUpDiv.classList.add('carousel-d-none');
                    // Move hidden inputs if necessary, but they are already hidden.
                  }
                }
                const externalLinkPopup = bannerCta.querySelector('.carousel-external-link-popup');
                if (externalLinkPopup) {
                  const genericPopup = externalLinkPopup.querySelector('.carousel-generic-popup');
                  if (genericPopup) {
                    const offcanvas = genericPopup.querySelector('.carousel-offcanvas');
                    if (offcanvas) {
                      offcanvas.classList.add('carousel-offcanvas-bottom', 'carousel-boing-container', 'carousel-gating_offcanvas_bottom--wrapper', 'carousel-gating_offcanvas_bottom');
                      const offcanvasHeader = offcanvas.querySelector('.carousel-offcanvas-header');
                      if (offcanvasHeader) {
                        offcanvasHeader.classList.add('carousel-position-relative');
                        const closeBtn = offcanvasHeader.querySelector('button');
                        if (closeBtn) {
                          closeBtn.classList.add('carousel-close-btn', 'carousel-position-absolute');
                          const closeSvg = closeBtn.textContent.trim();
                          if (closeSvg) {
                            fetch(closeSvg).then((resp) => resp.text()).then((svg) => {
                              closeBtn.innerHTML = svg;
                            });
                          }
                        }
                      }
                      const offcanvasBody = offcanvas.querySelector('.carousel-offcanvas-body');
                      if (offcanvasBody) {
                        const popContent = offcanvasBody.querySelector('.carousel-pop-content');
                        if (popContent) {
                          popContent.classList.add('carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
                          const popImageTextContainer = popContent.querySelector('.carousel-pop-image_text-container');
                          if (popImageTextContainer) {
                            popImageTextContainer.classList.add('carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
                            const imgHolder = popImageTextContainer.querySelector('.carousel-img_holder');
                            if (imgHolder) {
                              imgHolder.classList.add('carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
                              const img = imgHolder.querySelector('img');
                              if (img) {
                                img.classList.add('carousel-icon-svg');
                              }
                            }
                            const textBox = popImageTextContainer.querySelector('.carousel-text_box');
                            if (textBox) {
                              textBox.classList.add('carousel-d-flex', 'carousel-flex-column', 'carousel-text-center', 'carousel-mt-4');
                            }
                          }
                          const ctaBox = popContent.querySelector('.carousel-cta_box');
                          if (ctaBox) {
                            const cta = ctaBox.querySelector('a');
                            if (cta) {
                              cta.classList.add('carousel-text-white', 'carousel-popup-login-cta', 'carousel-text-decoration-none', 'carousel-boing--text__title-4', 'carousel-rounded-pill', 'carousel-bg-boing-primary', 'carousel-py-5', 'carousel-px-11', 'carousel-analytics_cta_click', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
                              const ctaSvg = cta.textContent.trim();
                              if (ctaSvg) {
                                fetch(ctaSvg).then((resp) => resp.text()).then((svg) => {
                                  cta.innerHTML = svg;
                                });
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
          }
        }
      }
    });
  }

  const actionsDiv = block.querySelector('.carousel-cmp-carousel__actions');
  if (actionsDiv) {
    const buttons = actionsDiv.querySelectorAll('button');
    buttons.forEach((button) => {
      const iconSpan = button.querySelector('.carousel-cmp-carousel__action-icon');
      const textSpan = button.querySelector('.carousel-cmp-carousel__action-text');
      if (iconSpan && textSpan) {
        // If icons are present as text, replace them with actual SVGs or hide them if not needed.
        // For now, we'll just ensure the spans are present and styled.
      }
    });
  }

  const swiperContainer = block.querySelector('.carousel-swiper-container');
  if (swiperContainer) {
    const nextButtonDiv = swiperContainer.children[0];
    if (nextButtonDiv) {
      const nextButton = nextButtonDiv.querySelector('button');
      if (nextButton) {
        nextButton.classList.add('carousel-primary-swiper__buttonNext', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
        const nextSvg = nextButton.textContent.trim();
        if (nextSvg) {
          fetch(nextSvg).then((resp) => resp.text()).then((svg) => {
            nextButton.innerHTML = svg;
          });
        }
      }
    }
    const prevButtonDiv = swiperContainer.children[1];
    if (prevButtonDiv) {
      const prevButton = prevButtonDiv.querySelector('button');
      if (prevButton) {
        prevButton.classList.add('carousel-primary-swiper__buttonPrev', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
        const prevSvg = prevButton.textContent.trim();
        if (prevSvg) {
          fetch(prevSvg).then((resp) => resp.text()).then((svg) => {
            prevButton.innerHTML = svg;
          });
        }
      }
    }
  }

  const pagination = block.querySelector('.carousel-swiper-pagination');
  if (pagination) {
    pagination.classList.add('carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
  }

  // Initialize Swiper after DOM manipulation
  // This part would typically be handled by a separate Swiper initialization script
  // or by passing configurations to a Swiper library. For this exercise, we only decorate the DOM.
}