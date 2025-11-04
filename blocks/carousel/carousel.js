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

      const bannerDiv = slide.querySelector('.carousel-banner');
      if (bannerDiv) {
        const section = bannerDiv.querySelector('.carousel-banner-section');
        if (section) {
          const wrapper = section.querySelector('.carousel-banner-section__wrapper');
          if (wrapper) {
            const videoWrapper = wrapper.querySelector('.carousel-video-wrapper');
            const image = wrapper.querySelector('.carousel-banner-image');
            const ctaDiv = wrapper.querySelector('.carousel-banner-cta');

            if (videoWrapper) {
              const video = videoWrapper.querySelector('video');
              if (video) {
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('carousel-video-container');
                videoContainer.append(video);

                const playPauseDiv = videoWrapper.querySelector('.carousel-position-absolute.carousel-w-100.carousel-h-100');
                if (playPauseDiv) videoContainer.append(playPauseDiv);

                const muteDiv = videoWrapper.querySelector('.carousel-position-absolute.carousel-z-2');
                if (muteDiv) videoContainer.append(muteDiv);

                li.append(videoContainer);
              }
            } else if (image) {
              const picture = createOptimizedPicture(image.src, image.alt, false, [{ width: '2000' }]);
              moveInstrumentation(image, picture.querySelector('img'));
              li.append(picture);
            }

            if (ctaDiv) {
              const ctaContent = ctaDiv.querySelector('.carousel-text-center');
              if (ctaContent) {
                const ctaLink = ctaContent.querySelector('a');
                if (ctaLink) {
                  const ctaWrapper = document.createElement('div');
                  ctaWrapper.classList.add('carousel-cta-wrapper');
                  ctaWrapper.append(ctaLink);
                  li.append(ctaWrapper);
                }
              }
            }
          }
        }
      }
      ul.append(li);
    });
    block.textContent = '';
    block.append(ul);
  }

  const actionsDiv = block.querySelector('.carousel-cmp-carousel__actions');
  if (actionsDiv) {
    block.append(actionsDiv);
  }

  const swiperContainer = block.querySelector('.carousel-swiper-container');
  if (swiperContainer) {
    block.append(swiperContainer);
  }

  const paginationDiv = block.querySelector('.carousel-swiper-pagination');
  if (paginationDiv) {
    block.append(paginationDiv);
  }

  block.classList.add('carousel-position-relative');
  const swiperElement = block.querySelector('.swiper');
  if (swiperElement) {
    swiperElement.classList.add('carousel-primary-swiper', 'carousel-primary-swiper-carousel-419d8524f7', 'swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
  }
  const swiperWrapperElement = block.querySelector('.swiper-wrapper');
  if (swiperWrapperElement) {
    swiperWrapperElement.classList.add('carousel-primary-swiper-wrapper', 'carousel-z-0');
  }
  block.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.classList.add('carousel-primary-swiper-slide');
  });
  block.querySelectorAll('.carousel-banner').forEach(banner => {
    banner.classList.add('carousel-banner');
  });
  block.querySelectorAll('.carousel-banner-section').forEach(section => {
    section.classList.add('carousel-banner-section');
  });
  block.querySelectorAll('.carousel-position-relative').forEach(posRelative => {
    posRelative.classList.add('carousel-position-relative');
  });
  block.querySelectorAll('.carousel-boing').forEach(boing => {
    boing.classList.add('carousel-boing');
  });
  block.querySelectorAll('.carousel-banner-section__wrapper').forEach(wrapper => {
    wrapper.classList.add('carousel-banner-section__wrapper');
  });
  block.querySelectorAll('.carousel-video-wrapper').forEach(videoWrapper => {
    videoWrapper.classList.add('carousel-video-wrapper');
  });
  block.querySelectorAll('video').forEach(video => {
    video.classList.add('carousel-w-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-video');
  });
  block.querySelectorAll('.carousel-position-absolute').forEach(posAbsolute => {
    posAbsolute.classList.add('carousel-position-absolute');
  });
  block.querySelectorAll('.carousel-w-100').forEach(w100 => {
    w100.classList.add('carousel-w-100');
  });
  block.querySelectorAll('.carousel-h-100').forEach(h100 => {
    h100.classList.add('carousel-h-100');
  });
  block.querySelectorAll('.carousel-start-0').forEach(start0 => {
    start0.classList.add('carousel-start-0');
  });
  block.querySelectorAll('.carousel-top-0').forEach(top0 => {
    top0.classList.add('carousel-top-0');
  });
  block.querySelectorAll('.carousel-d-flex').forEach(dFlex => {
    dFlex.classList.add('carousel-d-flex');
  });
  block.querySelectorAll('.carousel-justify-content-center').forEach(justifyContentCenter => {
    justifyContentCenter.classList.add('carousel-justify-content-center');
  });
  block.querySelectorAll('.carousel-align-items-center').forEach(alignItemsCenter => {
    alignItemsCenter.classList.add('carousel-align-items-center');
  });
  block.querySelectorAll('.carousel-cursor-pointer').forEach(cursorPointer => {
    cursorPointer.classList.add('carousel-cursor-pointer');
  });
  block.querySelectorAll('button').forEach(button => {
    button.classList.add('carousel-d-none', 'carousel-video-icon', 'carousel-icon-play', 'carousel-bg-transparent', 'carousel-d-flex', 'carousel-align-items-center', 'carousel-justify-content-center', 'carousel-cursor-pointer', 'carousel-d-block', 'carousel-icon-pause', 'carousel-video-icon-volume', 'carousel-icon-mute', 'carousel-icon-unmute', 'carousel-no-audio-icon', 'carousel-close-btn');
  });
  block.querySelectorAll('.carousel-z-2').forEach(z2 => {
    z2.classList.add('carousel-z-2');
  });
  block.querySelectorAll('.carousel-mute-icon').forEach(muteIcon => {
    muteIcon.classList.add('carousel-mute-icon');
  });
  block.querySelectorAll('.carousel-start-50').forEach(start50 => {
    start50.classList.add('carousel-start-50');
  });
  block.querySelectorAll('.carousel-translate-middle-x').forEach(translateX => {
    translateX.classList.add('carousel-translate-middle-x');
  });
  block.querySelectorAll('.carousel-boing__banner--cta').forEach(boingBannerCta => {
    boingBannerCta.classList.add('carousel-boing__banner--cta');
  });
  block.querySelectorAll('.carousel-banner-cta').forEach(bannerCta => {
    bannerCta.classList.add('carousel-banner-cta');
  });
  block.querySelectorAll('img').forEach(img => {
    img.classList.add('carousel-w-100', 'carousel-h-100', 'carousel-object-fit-cover', 'carousel-banner-media', 'carousel-banner-image', 'carousel-icon-svg');
  });
  block.querySelectorAll('.carousel-text-center').forEach(textCenter => {
    textCenter.classList.add('carousel-text-center');
  });
  block.querySelectorAll('a').forEach(link => {
    link.classList.add('carousel-cmp-button', 'carousel-analytics_cta_click', 'carousel-text-center', 'carousel-cta-layout', 'carousel-text-white', 'carousel-popup-login-cta', 'carousel-text-decoration-none', 'carousel-boing--text__title-4', 'carousel-rounded-pill', 'carousel-bg-boing-primary', 'carousel-py-5', 'carousel-px-11', 'carousel-analytics_cta_click');
  });
  block.querySelectorAll('.carousel-cmp-button__text').forEach(btnText => {
    btnText.classList.add('carousel-cmp-button__text', 'carousel-primary-btn', 'carousel-w-75', 'carousel-p-5', 'carousel-rounded-pill', 'carousel-d-inline-flex', 'carousel-justify-content-center', 'carousel-align-items-center', 'carousel-famlf-cta-btn');
  });
  block.querySelectorAll('.carousel-pop-up').forEach(popUp => {
    popUp.classList.add('carousel-pop-up', 'carousel-d-none');
  });
  block.querySelectorAll('input').forEach(input => {
    input.classList.add('carousel-popup-message', 'carousel-proceed-button-label', 'carousel-cancel-button-label', 'carousel-background-color');
  });
  block.querySelectorAll('.carousel-external-link-popup').forEach(externalLinkPopup => {
    externalLinkPopup.classList.add('carousel-external-link-popup');
  });
  block.querySelectorAll('.carousel-generic-popup').forEach(genericPopup => {
    genericPopup.classList.add('carousel-generic-popup');
  });
  block.querySelectorAll('.carousel-offcanvas').forEach(offcanvas => {
    offcanvas.classList.add('carousel-offcanvas', 'carousel-offcanvas-bottom', 'carousel-boing-container', 'carousel-gating_offcanvas_bottom--wrapper', 'carousel-gating_offcanvas_bottom');
  });
  block.querySelectorAll('.carousel-offcanvas-header').forEach(offcanvasHeader => {
    offcanvasHeader.classList.add('carousel-offcanvas-header', 'carousel-position-relative');
  });
  block.querySelectorAll('.carousel-offcanvas-body').forEach(offcanvasBody => {
    offcanvasBody.classList.add('carousel-offcanvas-body');
  });
  block.querySelectorAll('.carousel-pop-content').forEach(popContent => {
    popContent.classList.add('carousel-pop-content', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
  });
  block.querySelectorAll('.carousel-pop-image_text-container').forEach(popImageTextContainer => {
    popImageTextContainer.classList.add('carousel-pop-image_text-container', 'carousel-d-flex', 'carousel-flex-column', 'carousel-align-items-center');
  });
  block.querySelectorAll('.carousel-img_holder').forEach(imgHolder => {
    imgHolder.classList.add('carousel-img_holder', 'carousel-d-flex', 'carousel-justify-content-center', 'carousel-align-items-center');
  });
  block.querySelectorAll('.carousel-text_box').forEach(textBox => {
    textBox.classList.add('carousel-text_box', 'carousel-d-flex', 'carousel-flex-column', 'carousel-text-center', 'carousel-mt-4');
  });
  block.querySelectorAll('.carousel-cta_box').forEach(ctaBox => {
    ctaBox.classList.add('carousel-cta_box');
  });
  block.querySelectorAll('.carousel-cmp-carousel__actions').forEach(actions => {
    actions.classList.add('carousel-cmp-carousel__actions');
  });
  block.querySelectorAll('.carousel-cmp-carousel__action').forEach(action => {
    action.classList.add('carousel-cmp-carousel__action', 'carousel-cmp-carousel__action--previous', 'carousel-cmp-carousel__action--next', 'carousel-cmp-carousel__action--pause', 'carousel-cmp-carousel__action--play', 'carousel-cmp-carousel__action--disabled');
  });
  block.querySelectorAll('.carousel-cmp-carousel__action-icon').forEach(icon => {
    icon.classList.add('carousel-cmp-carousel__action-icon');
  });
  block.querySelectorAll('.carousel-cmp-carousel__action-text').forEach(text => {
    text.classList.add('carousel-cmp-carousel__action-text');
  });
  block.querySelectorAll('.carousel-swiper-container').forEach(container => {
    container.classList.add('carousel-swiper-container');
  });
  block.querySelectorAll('.carousel-primary-swiper__buttonNext').forEach(button => {
    button.classList.add('carousel-primary-swiper__buttonNext', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click', 'carousel-disabled');
  });
  block.querySelectorAll('.carousel-primary-swiper__buttonPrev').forEach(button => {
    button.classList.add('carousel-primary-swiper__buttonPrev', 'carousel-position-absolute', 'carousel-top-50', 'carousel-swiper-buttonBg', 'carousel-d-none', 'carousel-d-sm-block', 'carousel-cursor-pointer', 'carousel-analytics_cta_click');
  });
  block.querySelectorAll('.carousel-swiper-pagination').forEach(pagination => {
    pagination.classList.add('carousel-swiper-pagination', 'carousel-primary-swiper-pagination', 'carousel-pagination-set', 'carousel-mb-md-8', 'carousel-mb-10', 'carousel-mt-6', 'carousel-position-absolute', 'carousel-swiper-pagination-clickable', 'carousel-swiper-pagination-bullets', 'carousel-swiper-pagination-horizontal');
  });
  block.querySelectorAll('.carousel-swiper-pagination-bullet').forEach(bullet => {
    bullet.classList.add('carousel-swiper-pagination-bullet', 'carousel-swiper-pagination-bullet-active');
  });
}
