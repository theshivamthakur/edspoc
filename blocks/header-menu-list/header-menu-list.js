import { moveInstrumentation } from '../../scripts/scripts.js';

/* 
* moveInstrumentation RULES:
* - ONLY use when creating NEW element to REPLACE old element
* - NEVER use with querySelector: moveInstrumentation(element, element) is ALWAYS WRONG
* - Two arguments MUST be different elements
* - Always copy classes where needed
*/

export default function decorate(block) {
  const ul = document.createElement('ul');
  // add classes present in the HTML structure for the sidebar menu list
  ul.className = 'header-sidebar__menu header-list-unstyled header-px-4';

  [...block.children].forEach((row) => {
    // create NEW li to replace row
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'header-sidebar__menu-item header-py-6 header-border-bottom header-border-boing-neutral-gray-200';

    // try to find authored anchor and image within this row
    const authoredA = row.querySelector('a');
    const authoredImg = row.querySelector('img');

    // create NEW anchor (replacing authoredA if present)
    const aEl = document.createElement('a');
    if (authoredA) moveInstrumentation(authoredA, aEl);
    aEl.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';

    // set href
    const href = authoredA?.getAttribute('href') || row.querySelector('a[href]')?.getAttribute('href') || '#';
    aEl.setAttribute('href', href);

    // set data-link if available
    const dataLink = authoredA?.getAttribute('data-link') || row.getAttribute?.('data-link');
    if (dataLink) aEl.setAttribute('data-link', dataLink);

    // handle image if present
    const srcEl = (authoredA && authoredA.querySelector('img')) || authoredImg;
    if (srcEl) {
      const imgEl = document.createElement('img');
      moveInstrumentation(srcEl, imgEl);
      imgEl.className = 'header-sidebar__menu-icon header-me-4';
      const src = srcEl.getAttribute('src');
      const alt = srcEl.getAttribute('alt');
      if (src) imgEl.setAttribute('src', src);
      if (alt) imgEl.setAttribute('alt', alt);
      imgEl.setAttribute('loading', 'lazy');
      aEl.append(imgEl);
    }

    // derive label text (exclude images)
    let labelText = '';
    if (authoredA) {
      const clone = authoredA.cloneNode(true);
      clone.querySelectorAll('img').forEach((i) => i.remove());
      labelText = (clone.textContent || '').trim();
    } else {
      // remove any image alt text influence
      const temp = row.cloneNode(true);
      temp.querySelectorAll('img').forEach((i) => i.remove());
      labelText = (temp.textContent || '').trim();
    }
    if (labelText) aEl.append(document.createTextNode(labelText));

    li.append(aEl);
    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
}
