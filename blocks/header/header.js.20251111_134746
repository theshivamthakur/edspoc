import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';
export default function decorate(block) {
  // Helper: Add all classes from a string to an element
  function addClasses(el, cls) {
    cls && cls.split(' ').forEach(c => c && el.classList.add(c));
  }

  // === HEADER STRUCTURE ===
  block.classList.add('header-position-relative', 'header-mb-15');
  const appNameRow = block.querySelector(':scope > div');
  let appNameSpan;
  if (appNameRow) {
    appNameSpan = document.createElement('span');
    addClasses(appNameSpan, 'header-d-none header-app-name');
    // move authored app name
    appNameSpan.textContent = appNameRow.textContent || '';
    if (appNameRow.dataset && appNameRow.dataset.appName) {
      appNameSpan.dataset.appName = appNameRow.dataset.appName;
    }
    moveInstrumentation(appNameRow, appNameSpan);
  }

  // HEADER
  const header = document.createElement('header');
  addClasses(header, 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white');
  // left image
  const leftCol = document.createElement('div');
  addClasses(leftCol, 'header-d-flex header-w-25');
  const leftImgCell = block.querySelector(':scope > div:nth-child(2) > div');
  if (leftImgCell && leftImgCell.textContent) {
    leftCol.textContent = leftImgCell.textContent.trim();
    moveInstrumentation(leftImgCell, leftCol);
  }
  // logo center
  const logoCol = document.createElement('div');
  addClasses(logoCol, 'header-d-flex header-justify-content-center header-w-25');
  const logoCell = block.querySelector(':scope > div:nth-child(3) > div');
  if (logoCell) {
    const link = logoCell.querySelector('a');
    if (link) {
      const a = document.createElement('a');
      addClasses(a, 'header-analytics_cta_click');
      a.href = link.href;
      if (link.hasAttribute('a-label')) a.setAttribute('a-label', link.getAttribute('a-label'));
      if (link.hasAttribute('data-ct')) a.setAttribute('data-ct', link.getAttribute('data-ct'));
      moveInstrumentation(link, a);
      // logo wrapper
      const logoDiv = document.createElement('div');
      addClasses(logoDiv, 'header__logo header-d-flex header-align-items-center');
      // logo img
      const img = link.querySelector('img');
      if (img) {
        const optimizedPic = createOptimizedPicture(img.src, img.alt, '', [{ width: '200' }]);
        moveInstrumentation(img, optimizedPic.querySelector('img'));
        const logoImg = optimizedPic.querySelector('img');
        addClasses(logoImg, 'header__logo-img');
        logoDiv.append(optimizedPic);
      }
      a.append(logoDiv);
      logoCol.append(a);
    }
  }
  // login right
  const rightCol = document.createElement('div');
  addClasses(rightCol, 'header-d-flex header-w-25 header-justify-content-end');
  const rightCell = block.querySelector(':scope > div:nth-child(4) > div');
  if (rightCell) {
    const loginLink = rightCell.querySelector('a');
    if (loginLink) {
      const a = document.createElement('a');
      addClasses(a, 'header__login-btn-wrapper header-analytics_cta_click');
      if (loginLink.style.display) a.style.display = loginLink.style.display;
      a.href = loginLink.href;
      moveInstrumentation(loginLink, a);
      const btn = loginLink.querySelector('button');
      if (btn) {
        const button = document.createElement('button');
        addClasses(button, 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4');
        button.textContent = btn.textContent;
        moveInstrumentation(btn, button);
        a.append(button);
      }
      rightCol.append(a);
    }
  }
  // Compose header
  header.append(leftCol, logoCol, rightCol);

  // === SUBMENU/SIDEBAR ===
  const submenuDiv = document.createElement('div');
  addClasses(submenuDiv, 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden');
  // sidebar aside
  const aside = document.createElement('aside');
  addClasses(aside, 'header-sidebar header-start-0 header-bg-white header-position-absolute');
  // sidebar menu
  const menuUl = document.createElement('ul');
  addClasses(menuUl, 'header-sidebar__menu header-list-unstyled header-px-4');
  // header menu items
  const menuItems = block.querySelectorAll(':scope > ul > li');
  menuItems.forEach((li) => {
    const outLi = document.createElement('li');
    addClasses(outLi, li.className || 'header-sidebar__menu-item header-py-6 header-border-bottom header-border-boing-neutral-gray-200');
    if (li.style.display) outLi.style.display = li.style.display;
    const a = li.querySelector('a');
    if (a) {
      const outA = document.createElement('a');
      addClasses(outA, a.className || 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click');
      outA.href = a.href;
      [...a.attributes].forEach(attr => {
        if (!['href', 'class'].includes(attr.name)) {
          outA.setAttribute(attr.name, attr.value);
        }
      });
      moveInstrumentation(a, outA);
      // icon
      const img = a.querySelector('img');
      if (img) {
        const icon = document.createElement('img');
        addClasses(icon, img.className || 'header-sidebar__menu-icon header-me-4');
        icon.src = img.src;
        icon.alt = img.alt;
        if (img.loading) icon.loading = img.loading;
        if (img.hasAttribute('aria-label')) icon.setAttribute('aria-label', img.getAttribute('aria-label'));
        moveInstrumentation(img, icon);
        outA.append(icon);
      }
      // text
      const menuText = [...a.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim())[0];
      if (menuText) outA.append(menuText.textContent.trim());
      outLi.append(outA);
    }
    moveInstrumentation(li, outLi);
    menuUl.append(outLi);
  });
  aside.append(menuUl);

  // sidebar curve
  const curveDiv = document.createElement('div');
  addClasses(curveDiv, 'header-sidebar__curve');
  aside.append(curveDiv);

  // === FOOTER BRAND ===
  const footerBrand = document.createElement('div');
  addClasses(footerBrand, 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600');
  // footer primary
  const footerPrimary = document.createElement('section');
  addClasses(footerPrimary, 'header-footer-brand__primary');
  if (footerPrimary.style) footerPrimary.style.backgroundColor = '';
  const footerContainer = document.createElement('div');
  addClasses(footerContainer, 'header-container');
  const footerContent = document.createElement('div');
  addClasses(footerContent, 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center');
  // left logos
  const footerLeft = document.createElement('section');
  addClasses(footerLeft, 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center');
  // Footer logo 1
  const logo1Cell = block.querySelector(':scope > div > div > img');
  if (logo1Cell) {
    const a = document.createElement('a');
    addClasses(a, 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click');
    a.href = logo1Cell.closest('a')?.href || '';
    if (logo1Cell.closest('a')?.hasAttribute('aria-label')) a.setAttribute('aria-label', logo1Cell.closest('a').getAttribute('aria-label'));
    if (logo1Cell.closest('a')?.hasAttribute('data-cta-region')) a.setAttribute('data-cta-region', logo1Cell.closest('a').getAttribute('data-cta-region'));
    moveInstrumentation(logo1Cell.closest('a'), a);
    const img = document.createElement('img');
    addClasses(img, logo1Cell.className || 'header-object-fit-contain header-w-100 header-h-100');
    img.src = logo1Cell.src;
    img.alt = logo1Cell.alt;
    if (logo1Cell.loading) img.loading = logo1Cell.loading;
    moveInstrumentation(logo1Cell, img);
    a.append(img);
    footerLeft.append(a);
  }
  // Footer logo 2
  const logo2Cell = block.querySelector(':scope > div > div > div > img');
  if (logo2Cell) {
    const logoDiv = document.createElement('div');
    addClasses(logoDiv, 'header-footer-brand__secondary--logo header-d-inline-block');
    const img = document.createElement('img');
    addClasses(img, logo2Cell.className || 'header-object-fit-contain header-w-100');
    img.src = logo2Cell.src;
    img.alt = logo2Cell.alt;
    if (logo2Cell.loading) img.loading = logo2Cell.loading;
    moveInstrumentation(logo2Cell, img);
    logoDiv.append(img);
    footerLeft.append(logoDiv);
  }
  // right nav
  const footerRight = document.createElement('section');
  addClasses(footerRight, 'header-footer-brand__right');
  const nav = document.createElement('nav');
  addClasses(nav, 'header-footer-brand__navbar header-d-grid header-d-md-flex');
  nav.setAttribute('aria-label', 'footer navbar');
  // nav left
  const navLeft = document.createElement('div');
  addClasses(navLeft, 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ');
  // nav left lists
  const footerLists = block.querySelectorAll(':scope > div > ul.header-footer-list');
  footerLists.forEach((ul) => {
    const outDiv = document.createElement('div');
    addClasses(outDiv, 'header-footerList');
    const outUl = document.createElement('ul');
    addClasses(outUl, ul.className || 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column');
    ul.querySelectorAll('li').forEach(li => {
      const outLi = document.createElement('li');
      addClasses(outLi, li.className || 'header-footer-list__item');
      const a = li.querySelector('a');
      if (a) {
        const outA = document.createElement('a');
        addClasses(outA, a.className || 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block');
        outA.href = a.href;
        [...a.attributes].forEach(attr => {
          if (!['href', 'class'].includes(attr.name)) {
            outA.setAttribute(attr.name, attr.value);
          }
        });
        outA.textContent = a.textContent;
        moveInstrumentation(a, outA);
        outLi.append(outA);
      }
      moveInstrumentation(li, outLi);
      outUl.append(outLi);
    });
    outDiv.append(outUl);
    navLeft.append(outDiv);
  });
  // nav right
  const navRight = document.createElement('div');
  addClasses(navRight, 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row');
  // nav right lists (same as above)
  const footerListsRight = block.querySelectorAll(':scope > div > div.header-footer-brand__navbar--right > div.header-footerList');
  footerListsRight.forEach((ulDiv) => {
    const outDiv = document.createElement('div');
    addClasses(outDiv, 'header-footerList');
    const ul = ulDiv.querySelector('ul');
    if (ul) {
      const outUl = document.createElement('ul');
      addClasses(outUl, ul.className || 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column');
      ul.querySelectorAll('li').forEach(li => {
        const outLi = document.createElement('li');
        addClasses(outLi, li.className || 'header-footer-list__item');
        const a = li.querySelector('a');
        if (a) {
          const outA = document.createElement('a');
          addClasses(outA, a.className || 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block');
          outA.href = a.href;
          [...a.attributes].forEach(attr => {
            if (!['href', 'class'].includes(attr.name)) {
              outA.setAttribute(attr.name, attr.value);
            }
          });
          outA.textContent = a.textContent;
          moveInstrumentation(a, outA);
          outLi.append(outA);
        }
        moveInstrumentation(li, outLi);
        outUl.append(outLi);
      });
      outDiv.append(outUl);
      navRight.append(outDiv);
    }
  });
  nav.append(navLeft, navRight);
  footerRight.append(nav);
  footerContent.append(footerLeft, footerRight);
  footerContainer.append(footerContent);
  footerPrimary.append(footerContainer);

  // footer secondary
  const footerSecondary = document.createElement('section');
  addClasses(footerSecondary, 'header-footer-brand__secondary');
  if (footerSecondary.style) footerSecondary.style.backgroundColor = '';
  const secondaryContainer = document.createElement('div');
  addClasses(secondaryContainer, 'header-container');
  const secondaryContent = document.createElement('div');
  addClasses(secondaryContent, 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center');
  // Social
  const secondaryRight = document.createElement('section');
  addClasses(secondaryRight, 'header-footer-brand__right header-d-flex header-flex-column header-pb-5');
  const socialTitle = document.createElement('h3');
  addClasses(socialTitle, 'header-social_media--title');
  socialTitle.textContent = 'Follow Us On';
  secondaryRight.append(socialTitle);
  const socialUl = document.createElement('ul');
  addClasses(socialUl, 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap');
  const socialItems = block.querySelectorAll(':scope > ul.footer-social > li');
  socialItems.forEach((li) => {
    const outLi = document.createElement('li');
    addClasses(outLi, li.className || 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center');
    const a = li.querySelector('a');
    if (a) {
      const outA = document.createElement('a');
      addClasses(outA, a.className || 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click');
      outA.href = a.href;
      [...a.attributes].forEach(attr => {
        if (!['href', 'class'].includes(attr.name)) {
          outA.setAttribute(attr.name, attr.value);
        }
      });
      moveInstrumentation(a, outA);
      const img = a.querySelector('img');
      if (img) {
        const outImg = document.createElement('img');
        addClasses(outImg, img.className || 'header-object-fit-contain header-w-100 header-h-100');
        outImg.src = img.src;
        outImg.alt = img.alt;
        if (img.loading) outImg.loading = img.loading;
        if (img.hasAttribute('aria-label')) outImg.setAttribute('aria-label', img.getAttribute('aria-label'));
        moveInstrumentation(img, outImg);
        outA.append(outImg);
      }
      outLi.append(outA);
    }
    moveInstrumentation(li, outLi);
    socialUl.append(outLi);
  });
  secondaryRight.append(socialUl);
  // Footer left section
  const secondaryLeft = document.createElement('section');
  addClasses(secondaryLeft, 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3');
  // Links
  const leftList = document.createElement('ul');
  addClasses(leftList, 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap');
  const leftListItems = block.querySelectorAll(':scope > ul.footer-links > li');
  leftListItems.forEach(li => {
    const outLi = document.createElement('li');
    addClasses(outLi, li.className || 'header-footer-brand__left--item header-foot_link');
    const a = li.querySelector('a');
    if (a) {
      const outA = document.createElement('a');
      addClasses(outA, a.className || 'header-footer-brand__left--link header-analytics_cta_click');
      outA.href = a.href;
      [...a.attributes].forEach(attr => {
        if (!['href', 'class'].includes(attr.name)) {
          outA.setAttribute(attr.name, attr.value);
        }
      });
      outA.textContent = a.textContent;
      moveInstrumentation(a, outA);
      outLi.append(outA);
    }
    moveInstrumentation(li, outLi);
    leftList.append(outLi);
  });
  secondaryLeft.append(leftList);
  // Copyright
  const copyrightDiv = document.createElement('div');
  addClasses(copyrightDiv, 'header-footer-brand__left--copyright header-text-center');
  const copyrightSpan = document.createElement('span');
  addClasses(copyrightSpan, 'header-footer-brand__left--text header-text-white');
  const copyrightSrc = block.querySelector('.copyright');
  copyrightSpan.textContent = copyrightSrc?.textContent || '';
  moveInstrumentation(copyrightSrc, copyrightSpan);
  copyrightDiv.append(copyrightSpan);
  secondaryLeft.append(copyrightDiv);

  secondaryContent.append(secondaryRight, secondaryLeft);
  secondaryContainer.append(secondaryContent);
  footerSecondary.append(secondaryContainer);

  // Compose sidebar
  aside.append(footerBrand);
  footerBrand.append(footerPrimary, footerSecondary);
  submenuDiv.append(aside);

  // Overlay
  const overlay = document.createElement('div');
  addClasses(overlay, 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25');
  submenuDiv.append(overlay);

  // === Final Compose ===
  block.textContent = '';
  if (appNameSpan) block.append(appNameSpan);
  block.append(header, submenuDiv);
}