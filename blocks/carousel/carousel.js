import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Step 1: Create main position-relative wrapper
  const positionRelative = document.createElement('div');
  positionRelative.className = 'carousel-position-relative';
  
  // Step 2: Create swiper container with all classes
  const swiperContainer = document.createElement('div');
  swiperContainer.className = 'swiper carousel-primary-swiper carousel-primary-swiper-carousel-419d8524f7 swiper-initialized swiper-horizontal swiper-backface-hidden';
  swiperContainer.setAttribute('data-swiper-id', '.carousel-primary-swiper-carousel-419d8524f7');
  swiperContainer.setAttribute('id', 'carousel-419d8524f7');
  swiperContainer.setAttribute('role', 'group');
  swiperContainer.setAttribute('aria-live', 'polite');
  swiperContainer.setAttribute('aria-roledescription', 'carousel');
  swiperContainer.setAttribute('data-is-autoplay', 'true');
  swiperContainer.setAttribute('data-delay', '5000');
  swiperContainer.setAttribute('data-autopause-disabled', 'true');
  swiperContainer.setAttribute('data-is-loop', 'false');
  swiperContainer.setAttribute('data-placeholder-text', 'false');
  
  // Step 3: Create swiper wrapper with all classes
  const swiperWrapper = document.createElement('div');
  swiperWrapper.className = 'swiper-wrapper carousel-primary-swiper-wrapper carousel-z-0';
  swiperWrapper.setAttribute('style', 'transition-duration: 0ms; transform: translate3d(-508px, 0px, 0px); transition-delay: 0ms;');
  
  // Step 4: Process each row as a carousel slide
  [...block.children].forEach((row, index) => {
    // Step 4a: Create swiper slide with all classes
    const slide = document.createElement('div');
    slide.className = index === 0 
      ? 'swiper-slide carousel-primary-swiper-slide carousel-cmp-carousel__item--active swiper-slide-prev'
      : 'swiper-slide carousel-primary-swiper-slide swiper-slide-active';
    slide.setAttribute('data-active', '1');
    slide.setAttribute('id', `carousel-419d8524f7-item-${index}-tabpanel`);
    slide.setAttribute('role', 'tabpanel');
    slide.setAttribute('aria-labelledby', `carousel-419d8524f7-item-${index}-tab`);
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('data-cmp-hook-carousel', 'item');
    slide.setAttribute('style', 'width: 508px;');
    
    moveInstrumentation(row, slide);
    
    // Step 4b: Create banner container
    const banner = document.createElement('div');
    banner.className = 'carousel-banner';
    
    // Step 4c: Create banner section
    const bannerSection = document.createElement('section');
    bannerSection.className = 'carousel-banner-section';
    
    // Step 4d: Create banner wrapper with all classes
    const bannerWrapper = document.createElement('div');
    bannerWrapper.className = 'carousel-position-relative carousel-boing carousel-banner-section__wrapper';
    
    // Step 5: Process children (image and CTA)
    [...row.children].forEach((div, divIndex) => {
      if (divIndex === 0) {
        // Step 5a: Process image (first div)
        const picture = div.querySelector('picture');
        if (picture) {
          const img = picture.querySelector('img');
          if (img) {
            const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
            const optimizedImg = optimizedPic.querySelector('img');
            
            // Add all image classes from original HTML
            optimizedImg.className = 'carousel-w-100 carousel-h-100 carousel-object-fit-cover carousel-banner-media carousel-banner-image';
            optimizedImg.setAttribute('loading', 'eager');
            optimizedImg.setAttribute('fetchpriority', 'high');
            optimizedImg.setAttribute('decoding', 'async');
            
            moveInstrumentation(img, optimizedImg);
            bannerWrapper.appendChild(optimizedImg);
          }
        }
      } else if (divIndex === 1) {
        // Step 5b: Process CTA (second div)
        const ctaContainer = document.createElement('div');
        ctaContainer.className = 'carousel-position-absolute carousel-start-50 carousel-translate-middle-x carousel-w-100 carousel-boing__banner--cta';
        
        const ctaWrapper = document.createElement('div');
        ctaWrapper.className = 'carousel-banner-cta';
        
        // Move CTA content
        while (div.firstElementChild) {
          ctaWrapper.appendChild(div.firstElementChild);
        }
        
        ctaContainer.appendChild(ctaWrapper);
        bannerWrapper.appendChild(ctaContainer);
      }
    });
    
    // Step 6: Assemble banner structure
    bannerSection.appendChild(bannerWrapper);
    banner.appendChild(bannerSection);
    slide.appendChild(banner);
    swiperWrapper.appendChild(slide);
  });
  
  // Step 7: Add carousel actions (navigation buttons)
  const actions = document.createElement('div');
  actions.className = 'carousel-cmp-carousel__actions';
  
  const prevButton = document.createElement('button');
  prevButton.className = 'carousel-cmp-carousel__action carousel-cmp-carousel__action--previous';
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('aria-label', 'Previous');
  prevButton.setAttribute('data-cmp-hook-carousel', 'previous');
  prevButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Previous</span>';
  
  const nextButton = document.createElement('button');
  nextButton.className = 'carousel-cmp-carousel__action carousel-cmp-carousel__action--next';
  nextButton.setAttribute('type', 'button');
  nextButton.setAttribute('aria-label', 'Next');
  nextButton.setAttribute('data-cmp-hook-carousel', 'next');
  nextButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Next</span>';
  
  const pauseButton = document.createElement('button');
  pauseButton.className = 'carousel-cmp-carousel__action carousel-cmp-carousel__action--pause';
  pauseButton.setAttribute('type', 'button');
  pauseButton.setAttribute('aria-label', 'Pause');
  pauseButton.setAttribute('data-cmp-hook-carousel', 'pause');
  pauseButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Pause</span>';
  
  const playButton = document.createElement('button');
  playButton.className = 'carousel-cmp-carousel__action carousel-cmp-carousel__action--play carousel-cmp-carousel__action--disabled';
  playButton.setAttribute('type', 'button');
  playButton.setAttribute('aria-label', 'Play');
  playButton.setAttribute('data-cmp-hook-carousel', 'play');
  playButton.innerHTML = '<span class="carousel-cmp-carousel__action-icon"></span><span class="carousel-cmp-carousel__action-text">Play</span>';
  
  actions.appendChild(prevButton);
  actions.appendChild(nextButton);
  actions.appendChild(pauseButton);
  actions.appendChild(playButton);
  
  // Step 8: Add swiper wrapper and actions to container
  swiperContainer.appendChild(swiperWrapper);
  swiperContainer.appendChild(actions);
  
  // Step 9: Create swiper navigation container
  const swiperNavContainer = document.createElement('div');
  swiperNavContainer.className = 'carousel-swiper-container';
  
  const nextDiv = document.createElement('div');
  const nextNavButton = document.createElement('button');
  nextNavButton.className = 'carousel-primary-swiper__buttonNext carousel-position-absolute carousel-top-50 carousel-swiper-buttonBg carousel-d-none carousel-d-sm-block carousel-cursor-pointer carousel-analytics_cta_click carousel-disabled';
  nextNavButton.setAttribute('disabled', '');
  nextNavButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302341.svg+xml';
  nextDiv.appendChild(nextNavButton);
  
  const prevDiv = document.createElement('div');
  const prevNavButton = document.createElement('button');
  prevNavButton.className = 'carousel-primary-swiper__buttonPrev carousel-position-absolute carousel-top-50 carousel-swiper-buttonBg carousel-d-none carousel-d-sm-block carousel-cursor-pointer carousel-analytics_cta_click';
  prevNavButton.innerHTML = '/content/dam/aemigrate/uploaded-folder/image/1761293302355.svg+xml';
  prevDiv.appendChild(prevNavButton);
  
  swiperNavContainer.appendChild(nextDiv);
  swiperNavContainer.appendChild(prevDiv);
  
  // Step 10: Create pagination
  const pagination = document.createElement('div');
  pagination.className = 'carousel-swiper-pagination carousel-primary-swiper-pagination carousel-pagination-set carousel-mb-md-8 carousel-mb-10 carousel-mt-6 carousel-position-absolute carousel-swiper-pagination-clickable carousel-swiper-pagination-bullets carousel-swiper-pagination-horizontal';
  
  // Add bullets for each slide
  [...block.children].forEach((_, index) => {
    const bullet = document.createElement('span');
    bullet.className = index === 1 
      ? 'carousel-swiper-pagination-bullet carousel-swiper-pagination-bullet-active'
      : 'carousel-swiper-pagination-bullet';
    pagination.appendChild(bullet);
  });
  
  // Step 11: Assemble final structure
  positionRelative.appendChild(swiperContainer);
  positionRelative.appendChild(swiperNavContainer);
  positionRelative.appendChild(pagination);
  
  // Step 12: Clear block and append new structure
  block.textContent = '';
  block.appendChild(positionRelative);
}