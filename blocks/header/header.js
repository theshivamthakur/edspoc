import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Convert CRX multifield object:
 * { jcr:primaryType, item0, item1, ... } → [ {...}, {...} ]
 */
function multifieldToArray(obj) {
  if (!obj || typeof obj !== 'object') return [];
  return Object.keys(obj)
    .filter((k) => /^item\d+$/.test(k))
    .sort((a, b) => Number(a.replace('item', '')) - Number(b.replace('item', '')))
    .map((k) => obj[k])
    .filter(Boolean);
}

/**
 * Safe way to get iterable multifields (handles arrays or single objects too)
 */
function toIterable(node) {
  if (!node) return [];
  if (Array.isArray(node)) return node;
  if (Object.keys(node).some((k) => /^item\d+$/.test(k))) return multifieldToArray(node);
  if (typeof node === 'object' && Object.keys(node).length > 0) return [node];
  return [];
}

/**
 * Main header block renderer
 */
export default async function decorate(block) {
  // 1️⃣ Parse JSON inside block (if editor embeds JSON)
  let data = null;
  const script = block.querySelector('script[type="application/json"], pre');
  if (script) {
    try {
      data = JSON.parse(script.textContent);
    } catch (e) {
      console.warn('Invalid JSON in header block', e);
    }
  }

  // 2️⃣ Fallback: fetch model JSON for authored content (optional, for published pages)
  if (!data) {
    try {
      const res = await fetch(`${window.location.pathname}.model.json`);
      if (res.ok) data = await res.json();
    } catch (e) {
      console.warn('Header: could not fetch model.json');
    }
  }

  if (!data) {
    console.warn('Header: no data found');
    return;
  }

  console.log('Header data:', data);

  // 3️⃣ Normalize multifields
  const navItems = toIterable(data.navigation);
  const footerItems = toIterable(data.footerMenus);
  const socialItems = toIterable(data.socialLinks);

  // 4️⃣ Build Header DOM
  const header = document.createElement('header');
  header.className = 'site-header';

  // --- Logo / App Name ---
  const logoWrap = document.createElement('div');
  logoWrap.className = 'logo';
  if (data.logoImg) {
    const pic = createOptimizedPicture(data.logoImg, data.appName || 'logo', true);
    logoWrap.append(pic);
  } else if (data.appName) {
    const span = document.createElement('span');
    span.textContent = data.appName;
    logoWrap.append(span);
  }
  header.append(logoWrap);

  // --- Navigation Menu ---
  if (navItems.length) {
    const nav = document.createElement('nav');
    nav.className = 'main-nav';
    navItems.forEach((item) => {
      const a = document.createElement('a');
      a.href = item.menuLink || '#';
      a.textContent = item.menuLabel || item.menuLink || '';
      if (item.menuIcon) {
        const icon = createOptimizedPicture(item.menuIcon, item.menuLabel || 'icon');
        a.prepend(icon);
      }
      nav.append(a);
    });
    header.append(nav);
  }

  // --- Login Link ---
  if (data.loginLink) {
    const login = document.createElement('a');
    login.className = 'login-link';
    login.href = data.loginLink;
    login.textContent = 'Login';
    header.append(login);
  }

  // --- Footer Menus ---
  if (footerItems.length) {
    const footerWrap = document.createElement('div');
    footerWrap.className = 'footer-menus';
    footerItems.forEach((f) => {
      const a = document.createElement('a');
      a.href = f.footerLink || '#';
      a.textContent = f.footerLabel || '';
      footerWrap.append(a);
    });
    header.append(footerWrap);
  }

  // --- Social Links ---
  if (socialItems.length) {
    const socialWrap = document.createElement('div');
    socialWrap.className = 'social-links';
    socialItems.forEach((s) => {
      const a = document.createElement('a');
      a.href = s.socialLink || '#';
      if (s.socialIcon) {
        const img = createOptimizedPicture(s.socialIcon, 'social icon');
        a.append(img);
      }
      socialWrap.append(a);
    });
    header.append(socialWrap);
  }

  // --- Copyright ---
  if (data.copyright) {
    const p = document.createElement('p');
    p.className = 'copyright';
    p.textContent = data.copyright;
    header.append(p);
  }

  // 5️⃣ Preserve AEM authoring attributes
  moveInstrumentation(block, header);

  // 6️⃣ Replace block content
  block.innerHTML = '';
  block.append(header);
}
