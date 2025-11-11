import { moveInstrumentation, createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Decorates the carousel block by restructuring its HTML content based on the repeating sections.
 * @param {Element} block The block element to decorate
 */
export default function decorate(block) {
    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper carousel-primary-swiper-wrapper carousel-z-0'; 

    [...block.children].forEach((row) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide carousel-primary-swiper-slide';
        slide.setAttribute('role', 'tabpanel');
        slide.setAttribute('aria-roledescription', 'slide');
        slide.setAttribute('data-cmp-hook-carousel', 'item');
        
        const bannerDiv = document.createElement('div');
        bannerDiv.className = 'carousel-banner';
        
        const section = document.createElement('section');
        section.className = 'carousel-banner-section';
        
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'carousel-position-relative carousel-boing carousel-banner-section__wrapper ';
        
        [...row.children].forEach((cell, index) => {
            if (index === 0) { // Media content (Image or Video)
                const img = cell.querySelector('img');
                const video = cell.querySelector('video');

                if (img) {
                    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '2000' }]);
                    const newImg = optimizedPic.querySelector('img');
                    if (newImg) {
                        newImg.className = 'carousel-w-100 carousel-h-100 carousel-object-fit-cover carousel-banner-media carousel-banner-image';
                        newImg.setAttribute('loading', 'eager');
                        newImg.setAttribute('fetchpriority', 'high');
                        newImg.setAttribute('decoding', 'async');
                        if (img.alt) newImg.setAttribute('alt', img.alt);
                    }
                    wrapperDiv.append(optimizedPic);
                }

                if (video) {
                    const videoWrapper = document.createElement('div');
                    videoWrapper.className = 'carousel-video-wrapper';
                    
                    const newVideo = document.createElement('video');
                    newVideo.className = 'carousel-w-100 carousel-object-fit-cover carousel-banner-media carousel-banner-video';
                    newVideo.setAttribute('title', 'Video');
                    newVideo.setAttribute('aria-label', 'Video');
                    newVideo.setAttribute('data-is-autoplay', 'true');
                    newVideo.setAttribute('playsinline', '');
                    newVideo.setAttribute('preload', 'metadata');
                    newVideo.setAttribute('fetchpriority', 'high');
                    newVideo.setAttribute('loop', 'false');
                    newVideo.setAttribute('muted', 'true');
                    newVideo.setAttribute('autoplay', 'true');

                    [...video.querySelectorAll('source')].forEach((source) => {
                        const newSource = document.createElement('source');
                        newSource.src = source.src;
                        newSource.type = source.type;
                        newVideo.append(newSource);
                    });

                    videoWrapper.append(newVideo);
                    wrapperDiv.append(videoWrapper); 
                    // Note: Complex static video controls are not re-created here.
                }
            } else if (index === 1) { // CTA Content
                const link = cell.querySelector('a');
                if (link) {
                    const ctaOuterDiv = document.createElement('div');
                    ctaOuterDiv.className = 'carousel-position-absolute carousel-start-50 carousel-translate-middle-x carousel-w-100 carousel-boing__banner--cta';
                    
                    const ctaInnerDiv = document.createElement('div');
                    ctaInnerDiv.className = 'carousel-banner-cta';

                    const linkContainer = document.createElement('div');
                    linkContainer.className = 'carousel-text-center ';
                    
                    const newLink = document.createElement('a');
                    newLink.id = link.id;
                    newLink.className = link.className;
                    newLink.setAttribute('data-link-region', link.getAttribute('data-link-region'));
                    newLink.setAttribute('data-is-internal', link.getAttribute('data-is-internal'));
                    newLink.setAttribute('data-enable-gating', link.getAttribute('data-enable-gating'));
                    newLink.href = link.href;
                    newLink.target = link.target;
                    
                    const span = link.querySelector('span');
                    if (span) {
                        const newSpan = document.createElement('span');
                        newSpan.className = span.className;
                        newSpan.innerHTML = span.innerHTML;
                        newLink.append(newSpan);
                    }
                    
                    linkContainer.append(newLink);
                    ctaInnerDiv.append(linkContainer);
                    ctaOuterDiv.append(ctaInnerDiv);
                    wrapperDiv.append(ctaOuterDiv);
                }
            }
        });
        
        section.append(wrapperDiv);
        bannerDiv.append(section);
        slide.append(bannerDiv);
        swiperWrapper.append(slide);
    });

    block.textContent = '';
    block.append(swiperWrapper);

    // Reconstruct static controls found outside the swiper-wrapper (Simplified)
    
    // Actions/Controls
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'carousel-cmp-carousel__actions';
    block.append(actionsDiv); 

    // Swiper Container (for arrows)
    const swiperContainer = document.createElement('div');
    swiperContainer.className = 'carousel-swiper-container';
    block.append(swiperContainer);
    
    // Pagination
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'carousel-swiper-pagination carousel-primary-swiper-pagination carousel-pagination-set carousel-mb-md-8 carousel-mb-10 carousel-mt-6 carousel-position-absolute carousel-swiper-pagination-clickable carousel-swiper-pagination-bullets carousel-swiper-pagination-horizontal';
    block.append(paginationDiv);

    // Wrap the entire block in the outer container from the original HTML
    const outerWrapper = document.createElement('div');
    outerWrapper.className = 'carousel-position-relative';
    block.parentElement.replaceChild(outerWrapper, block);
    outerWrapper.append(block);
}