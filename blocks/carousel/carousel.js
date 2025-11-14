import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const carouselPositionRelative = document.createElement('div');
  carouselPositionRelative.classList.add('carousel-position-relative');

  const swiper = document.createElement('div');
  swiper.classList.add('swiper', 'carousel-primary-swiper');
  // Transfer data attributes from the main swiper div if available in the original block
  // For simplicity, we'll add common ones based on the HTML provided
  swiper.setAttribute('role', 'group');
  swiper.setAttribute('aria-live', 'polite');
  swiper.setAttribute('aria-roledescription', 'carousel');
  swiper.setAttribute('data-is-autoplay', 'true');
  swiper.setAttribute('data-delay', '5000');
  swiper.setAttribute('data-autopause-disabled', 'true');
  swiper.setAttribute('data-is-loop', 'false');
  swiper.setAttribute('data-placeholder-text', 'false');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper', 'carousel-primary-swiper-wrapper', 'carousel-z-0');

  [...block.children].forEach((row) => {
    const swiperSlide = document.createElement('div');
    moveInstrumentation(row, swiperSlide);
    swiperSlide.classList.add('swiper-slide', 'carousel-primary-swiper-slide');
    swiperSlide.setAttribute('role', 'tabpanel');
    swiperSlide.setAttribute('aria-roledescription', 'slide');

    const carouselBanner = document.createElement('div');
    carouselBanner.classList.add('carousel-banner');

    const section = document.createElement('section');
    section.classList.add('carousel-banner-section');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('carousel-position-relative', 'carousel-boing', 'carousel-banner-section__wrapper');

    const cells = [...row.children];

    // Assuming the order of content in cells corresponds to the model fields
    const videoSrc = cells[0]?.querySelector('a')?.href || cells[0]?.textContent.trim();
    const imgSrc = cells[1]?.querySelector('img')?.src;
    const imgAlt = cells[2]?.textContent.trim();
    const ctaLink = cells[3]?.querySelector('a')?.href;
    const ctaText = cells[4]?.textContent.trim();

    if (videoSrc && videoSrc.endsWith('.mp4')) {
      const videoWrapper = document.createElement('div');
      videoWrapper.classList.add('carousel-video-wrapper');

      const video = document.createElement('video');
      video.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
      video.setAttribute('title', 'Video');
      video.setAttribute('aria-label', 'Video');
      video.setAttribute('data-is-autoplay', 'true');
      video.setAttribute('playsinline', '');
      video.setAttribute('preload', 'metadata');
      video.setAttribute('fetchpriority', 'high');
      video.setAttribute('loop', 'false');
      video.setAttribute('muted', 'true');
      video.setAttribute('autoplay', 'true');

      const sourceMp4 = document.createElement('source');
      sourceMp4.src = videoSrc;
      sourceMp4.type = 'video/mp4';
      video.append(sourceMp4);

      // Add webm source if available or assume it's the same for simplicity
      const sourceWebm = document.createElement('source');
      sourceWebm.src = videoSrc.replace('.mp4', '.webm'); // Assuming .webm exists
      sourceWebm.type = 'video/webm';
      video.append(sourceWebm);

      videoWrapper.append(video);

      // Add play/pause buttons (simplified, assuming SVG content is not directly in block)
      const playPauseDiv = document.createElement('div');
      playPauseDiv.classList.add('carousel-position-absolute', 'carousel-w-100', 'carousel-h-100', 'carousel-start-0', 'carousel-top-0', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer');
      const playButton = document.createElement('button');
      playButton.type = 'button';
      playButton.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      playPauseDiv.append(playButton);
      const pauseButton = document.createElement('button');
      pauseButton.type = 'button';
      pauseButton.classList.add('carousel-d-block', 'carousel-video-icon', 'carousel-icon-pause', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      playPauseDiv.append(pauseButton);
      videoWrapper.append(playPauseDiv);

      // Add mute/unmute buttons (simplified)
      const muteDiv = document.createElement('div');
      muteDiv.classList.add('carousel-position-absolute', 'carousel-z-2', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-cursor-pointer', 'carousel-mute-icon');
      const muteButton = document.createElement('button');
      muteButton.type = 'button';
      muteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
      muteDiv.append(muteButton);
      const unmuteButton = document.createElement('button');
      unmuteButton.type = 'button';
      unmuteButton.classList.add('carousel-video-icon-volume', 'carousel-icon-unmute', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-none');
      muteDiv.append(unmuteButton);
      const noAudioButton = document.createElement('button');
      noAudioButton.type = 'button';
      noAudioButton.classList.add('carousel-video-icon-volume', 'carousel-no-audio-icon', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer');
      muteDiv.append(noAudioButton);
      videoWrapper.append(muteDiv);

      wrapperDiv.append(videoWrapper);
    } else if (imgSrc) {
      const picture = createOptimizedPicture(imgSrc, imgAlt || '');
      moveInstrumentation(cells[1]?.querySelector('img'), picture.querySelector('img'));
      picture.querySelector('img').classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image');
      picture.querySelector('img').setAttribute('loading', 'eager');
      picture.querySelector('img').setAttribute('fetchpriority', 'high');
      picture.querySelector('img').setAttribute('decoding', 'async');
      wrapperDiv.append(picture);
    }

    if (ctaLink && ctaText) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.classList.add('carousel-position-absolute', 'carousel-start-50', 'carousel-translate-middle-x', 'carousel-w-100', 'carousel-boing__banner--cta');

      const bannerCta = document.createElement('div');
      bannerCta.classList.add('carousel-banner-cta');

      const textCenterDiv = document.createElement('div');
      textCenterDiv.classList.add('carousel-text-center');

      const link = document.createElement('a');
      link.id = `cta-${Math.random().toString(36).substring(2, 11)}`; // Generate unique ID
      link.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout');
      link.setAttribute('data-link-region', 'CTA');
      link.setAttribute('data-is-internal', 'false');
      link.setAttribute('data-enable-gating', 'false');
      link.href = ctaLink;
      link.target = '_blank';

      const span = document.createElement('span');
      span.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
      span.textContent = ctaText;
      link.append(span);
      textCenterDiv.append(link);

      // Simplified pop-up and external link popup structure
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
      offcanvas.setAttribute('tabindex', '-1');
      offcanvas.setAttribute('aria-labelledby', 'offcanvasBottomLabel');
      offcanvas.innerHTML = `
        <div class="carousel-offcanvas-header carousel-position-relative">
          <button type="button" class="carousel-close-btn carousel-position-absolute" data-bs-dismiss="offcanvas" aria-label="Close">
            /content/dam/aemigrate/uploaded-folder/image/1761293302317.svg+xml
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
              <a href="${ctaLink}" class="carousel-text-white carousel-popup-login-cta carousel-text-decoration-none carousel-boing--text__title-4 carousel-rounded-pill carousel-bg-boing-primary carousel-py-5 carousel-px-11 carousel-analytics_cta_click carousel-d-flex carousel-justify-content-center carousel-align-items-center">
                /content/dam/aemigrate/uploaded-folder/image/1761293302327.svg+xml
              </a>
            </div>
          </div>
        </div>
      `;
      genericPopup.append(offcanvas);
      externalLinkPopup.append(genericPopup);
      textCenterDiv.append(externalLinkPopup);

      bannerCta.append(textCenterDiv);
      ctaWrapper.append(bannerCta);
      wrapperDiv.append(ctaWrapper);
    }

    section.append(wrapperDiv);
    carouselBanner.append(section);
    swiperSlide.append(carouselBanner);
    swiperWrapper.append(swiperSlide);
  });

  swiper.append(swiperWrapper);

  // Add carousel actions (previous, next, pause, play buttons)
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
  swiper.append(actionsDiv);

  // Add swiper navigation buttons (next/prev)
  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('carousel-swiper-container');
  swiperContainer.innerHTML = `
    <div>
        <button class="carousel-primary-swiper__buttonNext carousel-position-absolute carousel-top-50 carousel-swiper-buttonBg carousel-d-none carousel-d-sm-block carousel-cursor-pointer carousel-analytics_cta_click carousel-disabled">
            /content/dam/aemigrate/uploaded-folder/image/1761293302341.svg+xml
        </button>
    </div>
    <div>
        <button class="carousel-primary-swiper__buttonPrev carousel-position-absolute carousel-top-50 carousel-swiper-buttonBg carousel-d-none carousel-d-sm-block carousel-cursor-pointer carousel-analytics_cta_click">
            /content/dam/aemigrate/uploaded-folder/image/1761293302355.svg+xml
        </button>
    </div>
  `;
  swiper.append(swiperContainer);

  // Add swiper pagination
  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
  // Add bullets dynamically if needed, or just a placeholder span
  paginationDiv.innerHTML = '<span class="carousel-swiper-pagination-bullet"></span><span class="carousel-swiper-pagination-bullet carousel-swiper-pagination-bullet-active"></span>';
  swiper.append(paginationDiv);

  carouselPositionRelative.append(swiper);

  block.textContent = '';
  block.append(carouselPositionRelative);
}
