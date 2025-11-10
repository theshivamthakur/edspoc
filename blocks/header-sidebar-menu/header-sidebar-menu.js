import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Wrapper section replicating provided HTML classes
  const section = document.createElement('section');
  section.className = 'header-position-relative header-mb-15';

  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  const ul = document.createElement('ul');
  ul.className = 'header-sidebar__menu header-list-unstyled header-px-4';

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = row.className || '';
    li.classList.add('header-sidebar__menu-item', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');

    const existingA = row.querySelector('a');
    const a = document.createElement('a');

    if (existingA) {
      moveInstrumentation(existingA, a);
      // Copy attributes from existing anchor
      [...existingA.attributes].forEach((attr) => {
        try { a.setAttribute(attr.name, attr.value); } catch (e) { /* ignore */ }
      });
      a.className = existingA.className || '';
    }

    a.classList.add('header-sidebar__menu-link', 'header-d-flex', 'header-align-items-center', 'header-text-decoration-none', 'header-px-6', 'header-fw-medium', 'header-analytics_cta_click');

    const sourceForChildren = existingA || row;
    while (sourceForChildren.firstChild) {
      a.append(sourceForChildren.firstChild);
    }

    // Ensure images match HTML classes and attributes
    a.querySelectorAll('img').forEach((img) => {
      img.classList.add('header-sidebar__menu-icon', 'header-me-4');
      if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
    });

    li.append(a);
    ul.append(li);
  });

  aside.append(ul);

  // Sidebar curve element present in HTML
  const curve = document.createElement('div');
  curve.className = 'header-sidebar__curve';
  aside.append(curve);

  // Footer brand container present after menu in HTML structure
  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';
  aside.append(footerBrand);

  submenuContainer.append(aside);

  // Overlay element matching provided HTML
  const overlay = document.createElement('div');
  overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.append(overlay);

  section.append(submenuContainer);

  block.textContent = '';
  block.append(section);
}
