

import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Helper to copy all classes from one element to another
  function copyClasses(from, to) {
    to.className = from.className;
  }

  // Main wrapper (section)
  const section = block.querySelector('section');
  if (!section) return;

  // App Name
  const appNameSpan = section.querySelector('span[data-app-name]');
  let appName = '';
  if (appNameSpan) {
    appName = appNameSpan.textContent.trim();
  }

  // Header main container
  const header = section.querySelector('header');
  let brandImageEl, logoLinkEl, loginBtnEl;
  if (header) {
    // Brand image (first div in header)
    const brandDiv = header.children[0];
    if (brandDiv && brandDiv.children.length > 0) {
      brandImageEl = brandDiv.firstElementChild;
    }

    // Logo link (second div in header)
    const logoDiv = header.children[1];
    if (logoDiv && logoDiv.querySelector('a')) {
      logoLinkEl = logoDiv.querySelector('a');
    }

    // Login button (third div in header)
    const loginDiv = header.children[2];
    if (loginDiv && loginDiv.querySelector('a')) {
      loginBtnEl = loginDiv.querySelector('a');
    }
  }

  // Sidebar/Menu (aside inside .header-submenu-container)
  const submenuContainer = section.querySelector('.header-submenu-container');
  let menuItems = [];
  let logoutItem = null;
  if (submenuContainer) {
    const aside = submenuContainer.querySelector('aside');
    if (aside) {
      const menuList = aside.querySelector('ul.header-sidebar__menu');
      if (menuList) {
        [...menuList.children].forEach((li) => {
          // Check for logout item (style display:none)
          if (li.classList.contains('header__menu-item--logout')) logoutItem = li;
          else menuItems.push(li);
        });
      }
    }
  }

  // Footer - inside .header-footer-brand
  let footerLinks = [];
  let copyrightText = '';
  let socialLinks = [];
  if (submenuContainer) {
    const aside = submenuContainer.querySelector('aside');
    if (aside) {
      const footerBrand = aside.querySelector('.header-footer-brand');
      if (footerBrand) {
        // Footer Links (multiple .header-footer-list)
        const footerLists = footerBrand.querySelectorAll('.header-footer-list');
        footerLists.forEach((ul) => {
          [...ul.querySelectorAll('li')].forEach((li) => {
            footerLinks.push(li);
          });
        });

        // Copyright
        const copyright = footerBrand.querySelector('.header-footer-brand__left--copyright .header-footer-brand__left--text');
        if (copyright) copyrightText = copyright.textContent.trim();

        // Social Links (list items under .header-footer-brand__right--list)
        const socials = footerBrand.querySelectorAll('.header-footer-brand__right--list li');
        socials.forEach((li) => socialLinks.push(li));
      }
    }
  }

  // Remove all children from block before appending new structure
  block.textContent = '';

  // --- Compose new block structure ---
  // 1. Header Section
  const headerWrapper = document.createElement('div');
  headerWrapper.className = 'header-wrapper';
  if (header) copyClasses(header, headerWrapper);

  // App name
  if (appName) {
    const appNameEl = document.createElement('span');
    appNameEl.textContent = appName;
    if (appNameSpan) copyClasses(appNameSpan, appNameEl);
    headerWrapper.append(appNameEl);
  }

  // Brand image
  if (brandImageEl) {
    const brandImgClone = brandImageEl.cloneNode(true);
    copyClasses(brandImageEl, brandImgClone);
    moveInstrumentation(brandImageEl, brandImgClone);
    headerWrapper.append(brandImgClone);
  }

  // Logo
  if (logoLinkEl) {
    const logoLinkClone = logoLinkEl.cloneNode(true);
    copyClasses(logoLinkEl, logoLinkClone);
    // Move logo image inside
    const logoImg = logoLinkEl.querySelector('img');
    if (logoImg) {
      const logoImgClone = logoImg.cloneNode(true);
      copyClasses(logoImg, logoImgClone);
      moveInstrumentation(logoImg, logoImgClone);
      logoLinkClone.textContent = '';
      logoLinkClone.append(logoImgClone);
    }
    moveInstrumentation(logoLinkEl, logoLinkClone);
    headerWrapper.append(logoLinkClone);
  }

  // Login Button
  if (loginBtnEl) {
    const loginBtnClone = loginBtnEl.cloneNode(true);
    copyClasses(loginBtnEl, loginBtnClone);
    // Move button inside link
    const btn = loginBtnEl.querySelector('button');
    if (btn) {
      const btnClone = btn.cloneNode(true);
      copyClasses(btn, btnClone);
      moveInstrumentation(btn, btnClone);
      loginBtnClone.textContent = '';
      loginBtnClone.append(btnClone);
    }
    moveInstrumentation(loginBtnEl, loginBtnClone);
    headerWrapper.append(loginBtnClone);
  }

  // 2. Menu (Sidebar)
  if (menuItems.length > 0 || logoutItem) {
    const menuList = document.createElement('ul');
    if (menuItems[0]) copyClasses(menuItems[0].parentElement, menuList);

    menuItems.forEach((li) => {
      const liClone = li.cloneNode(true);
      copyClasses(li, liClone);
      moveInstrumentation(li, liClone);
      menuList.append(liClone);
    });

    if (logoutItem) {
      const logoutClone = logoutItem.cloneNode(true);
      copyClasses(logoutItem, logoutClone);
      moveInstrumentation(logoutItem, logoutClone);
      menuList.append(logoutClone);
    }

    const menuWrapper = document.createElement('nav');
    menuWrapper.className = 'header-menu-wrapper';
    menuWrapper.append(menuList);
    headerWrapper.append(menuWrapper);
  }

  // 3. Footer Links
  if (footerLinks.length > 0) {
    const footerLinkList = document.createElement('ul');
    copyClasses(footerLinks[0].parentElement, footerLinkList);
    footerLinks.forEach((li) => {
      const liClone = li.cloneNode(true);
      copyClasses(li, liClone);
      moveInstrumentation(li, liClone);
      footerLinkList.append(liClone);
    });
    const footerLinkSection = document.createElement('nav');
    footerLinkSection.className = 'header-footer-links';
    footerLinkSection.append(footerLinkList);
    headerWrapper.append(footerLinkSection);
  }

  // 4. Social Links
  if (socialLinks.length > 0) {
    const socialList = document.createElement('ul');
    copyClasses(socialLinks[0].parentElement, socialList);
    socialLinks.forEach((li) => {
      const liClone = li.cloneNode(true);
      copyClasses(li, liClone);
      moveInstrumentation(li, liClone);
      socialList.append(liClone);
    });
    const socialSection = document.createElement('div');
    socialSection.className = 'header-social-links';
    socialSection.append(socialList);
    headerWrapper.append(socialSection);
  }

  // 5. Copyright
  if (copyrightText) {
    const copyrightDiv = document.createElement('div');
    copyrightDiv.textContent = copyrightText;
    copyrightDiv.className = 'header-copyright';
    headerWrapper.append(copyrightDiv);
  }

  // Final append
  block.append(headerWrapper);
}