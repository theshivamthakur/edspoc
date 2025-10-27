import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const dataEl = block.querySelector('pre, script[type="application/json"]');
  if (!dataEl) {
    console.warn('No JSON data found for header block.');
    return;
  }

  let data;
  try {
    data = JSON.parse(dataEl.textContent);
  } catch (e) {
    console.error('Invalid JSON data:', e);
    return;
  }

  console.log('Parsed Header Data:', data);

  const header = document.createElement('header');
  header.classList.add('header');

  // --- Logo Section ---
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('header-logo');

  if (data.logoImg) {
    const picture = createOptimizedPicture(data.logoImg, data.appName || 'Logo');
    logoContainer.append(picture);
  }

  if (data.appName) {
    const appName = document.createElement('span');
    appName.classList.add('app-name');
    appName.textContent = data.appName;
    logoContainer.append(appName);
  }

  header.append(logoContainer);

  // --- Navigation Menu ---
  if (Array.isArray(data['navigation/item'])) {
    const nav = document.createElement('nav');
    nav.classList.add('nav-menu');

    data['navigation/item'].forEach((item) => {
      const link = document.createElement('a');
      link.href = item.menuLink || '#';
      link.textContent = item.menuLabel || '';

      if (item.menuIcon) {
        const icon = createOptimizedPicture(item.menuIcon, item.menuLabel || '');
        link.prepend(icon);
      }

      nav.append(link);
    });

    header.append(nav);
  }

  // --- Footer Menus ---
  if (Array.isArray(data['footerMenus/item'])) {
    const footerMenu = document.createElement('div');
    footerMenu.classList.add('footer-menus');

    data['footerMenus/item'].forEach((f) => {
      const a = document.createElement('a');
      a.href = f.footerLink || '#';
      a.textContent = f.footerLabel || '';
      footerMenu.append(a);
    });

    header.append(footerMenu);
  }

  // --- Social Links ---
  if (Array.isArray(data.socialLinks)) {
    const socials = document.createElement('div');
    socials.classList.add('social-links');

    data.socialLinks.forEach((s) => {
      const a = document.createElement('a');
      a.href = s.socialLink || '#';

      if (s.socialIcon) {
        const icon = createOptimizedPicture(s.socialIcon, 'social icon');
        a.append(icon);
      }

      socials.append(a);
    });

    header.append(socials);
  }

  // --- Copyright ---
  if (data.copyright) {
    const copy = document.createElement('p');
    copy.classList.add('copyright');
    copy.textContent = data.copyright;
    header.append(copy);
  }

  moveInstrumentation(block, header);
  block.innerHTML = '';
  block.append(header);
}
