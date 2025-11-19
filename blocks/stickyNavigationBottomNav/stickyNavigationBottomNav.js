import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const section = document.createElement('section');
  section.className = 'sticky-navigation-bottom-nav sticky-navigation-position-fixed sticky-navigation-bottom-0 sticky-navigation-p-3 sticky-navigation-d-flex sticky-navigation-align-items-center sticky-navigation-boing-container sticky-navigation-bg-boing-primary';

  const ul = document.createElement('ul');
  ul.className = 'sticky-navigation-bottom-nav__list sticky-navigation-d-flex sticky-navigation-justify-content-around sticky-navigation-align-items-center sticky-navigation-flex-grow-1';

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'sticky-navigation-bottom-nav__item sticky-navigation-position-relative';

    const linkCell = row.children[0]; // Assuming the first cell contains the link, image, and label

    const existingLink = linkCell.querySelector('a');
    const existingImg = linkCell.querySelector('img');
    const existingLabel = linkCell.querySelector('span');

    if (existingLink) {
      const newLink = document.createElement('a');
      newLink.href = existingLink.href;
      newLink.className = 'sticky-navigation-bottom-nav__link sticky-navigation-d-flex sticky-navigation-flex-column sticky-navigation-align-items-center sticky-navigation-gap-1 sticky-navigation-analytics_cta_click';
      if (existingLink.dataset.link) {
        newLink.setAttribute('data-link', existingLink.dataset.link);
      }

      if (existingImg) {
        const optimizedPic = createOptimizedPicture(existingImg.src, existingImg.alt);
        const imgElement = optimizedPic.querySelector('img');
        moveInstrumentation(existingImg, imgElement);
        imgElement.className = 'sticky-navigation-bottom-nav__icon';
        newLink.append(optimizedPic);
      }

      if (existingLabel) {
        const span = document.createElement('span');
        span.className = 'sticky-navigation-bottom-nav__label';
        span.textContent = existingLabel.textContent;
        newLink.append(span);
      }
      li.append(newLink);
    }
    ul.append(li);
  });

  section.append(ul);
  block.textContent = '';
  block.append(section);
}
