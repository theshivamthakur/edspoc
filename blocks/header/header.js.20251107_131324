import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('header-position-relative', 'header-mb-15');

  const appNameSpan = document.createElement('span');
  appNameSpan.classList.add('header-d-none', 'header-app-name');
  appNameSpan.setAttribute('data-app-name', 'boing');
  appNameSpan.textContent = 'boing';
  block.append(appNameSpan);

  const headerEl = document.createElement('header');
  headerEl.classList.add('header-boing-container', 'header-d-flex', 'header-justify-content-between', 'header-align-items-center', 'header-h-15', 'header-px-5', 'header-py-2', 'header-fixed-top', 'header-w-100', 'header-bg-white');

  const headerLeftDiv = document.createElement('div');
  headerLeftDiv.classList.add('header-d-flex', 'header-w-25');
  const svgContent = block.children[0].children[0].textContent.trim();
  if (svgContent) {
    headerLeftDiv.innerHTML = svgContent;
  }
  headerEl.append(headerLeftDiv);
  moveInstrumentation(block.children[0].children[0], headerLeftDiv);

  const headerCenterDiv = document.createElement('div');
  headerCenterDiv.classList.add('header-d-flex', 'header-justify-content-center', 'header-w-25');
  const logoLink = block.children[0].children[1].querySelector('a');
  if (logoLink) {
    const newLogoLink = logoLink.cloneNode(true);
    moveInstrumentation(logoLink, newLogoLink);
    newLogoLink.classList.add('header-analytics_cta_click');
    newLogoLink.setAttribute('data-ct', '');
    newLogoLink.setAttribute('a-label', 'header-logo-boing');
    const logoDiv = newLogoLink.querySelector('.header__logo');
    if (logoDiv) {
      logoDiv.classList.add('header-d-flex', 'header-align-items-center');
    }
    const logoImg = newLogoLink.querySelector('.header__logo-img');
    if (logoImg) {
      logoImg.classList.add('header__logo-img');
    }
    headerCenterDiv.append(newLogoLink);
  }
  headerEl.append(headerCenterDiv);
  moveInstrumentation(block.children[0].children[1], headerCenterDiv);

  const headerRightDiv = document.createElement('div');
  headerRightDiv.classList.add('header-d-flex', 'header-w-25', 'header-justify-content-end');
  const loginLink = block.children[0].children[2].querySelector('a');
  if (loginLink) {
    const newLoginLink = loginLink.cloneNode(true);
    moveInstrumentation(loginLink, newLoginLink);
    newLoginLink.classList.add('header__login-btn-wrapper', 'header-analytics_cta_click');
    newLoginLink.style.display = 'inline';
    const loginButton = newLoginLink.querySelector('button');
    if (loginButton) {
      loginButton.classList.add('header__login-btn', 'header-btn', 'header-text-boing-primary', 'header-bg-transparent', 'header-fw-semibold', 'header-rounded-4', 'header-btn-sm', 'header-py-3', 'header-px-4');
    }
    headerRightDiv.append(newLoginLink);
  }
  headerEl.append(headerRightDiv);
  moveInstrumentation(block.children[0].children[2], headerRightDiv);

  block.append(headerEl);

  const submenuContainer = document.createElement('div');
  submenuContainer.classList.add('header-submenu-container', 'header-position-fixed', 'header-top-0', 'header-start-0', 'header-end-0', 'header-m-auto', 'header-overflow-hidden');

  const aside = document.createElement('aside');
  aside.classList.add('header-sidebar', 'header-start-0', 'header-bg-white', 'header-position-absolute');

  const ulMenu = document.createElement('ul');
  ulMenu.classList.add('header-sidebar__menu', 'header-list-unstyled', 'header-px-4');

  const menuItems = block.children[1].children[0].children;
  [...menuItems].forEach((menuItem) => {
    const li = document.createElement('li');
    moveInstrumentation(menuItem, li);
    li.classList.add('header-sidebar__menu-item', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
    if (menuItem.classList.contains('header__menu-item--logout')) {
      li.classList.add('header__menu-item--logout');
      li.style.display = 'none';
    }
    const link = menuItem.querySelector('a');
    if (link) {
      const newLink = link.cloneNode(true);
      moveInstrumentation(link, newLink);
      newLink.classList.add('header-sidebar__menu-link', 'header-d-flex', 'header-align-items-center', 'header-text-decoration-none', 'header-px-6', 'header-fw-medium', 'header-analytics_cta_click');
      const img = newLink.querySelector('img');
      if (img) {
        img.classList.add('header-sidebar__menu-icon', 'header-me-4');
      }
      li.append(newLink);
    }
    ulMenu.append(li);
  });
  aside.append(ulMenu);

  const sidebarCurve = document.createElement('div');
  sidebarCurve.classList.add('header-sidebar__curve');
  aside.append(sidebarCurve);

  const footerBrand = document.createElement('div');
  footerBrand.classList.add('header-footer-brand', 'header-w-100', 'header-bg-boing-neutral-gray-600');

  const footerBrandPrimary = document.createElement('section');
  footerBrandPrimary.classList.add('header-footer-brand__primary');
  footerBrandPrimary.style.backgroundColor = '';

  const footerPrimaryContainer = document.createElement('div');
  footerPrimaryContainer.classList.add('header-container');

  const footerPrimaryContent = document.createElement('div');
  footerPrimaryContent.classList.add('header-footer-brand__primary--content', 'header-d-flex', 'header-flex-column', 'header-flex-md-row', 'header-justify-content-md-between', 'header-align-items-center');

  const footerBrandLeft = document.createElement('section');
  footerBrandLeft.classList.add('header-footer-brand__left', 'header-d-flex', 'header-gap-16', 'header-px-10', 'header-align-items-center', 'header-justify-content-center');

  const itcLogoLink = block.children[1].children[2].children[0].children[0].children[0].children[0];
  if (itcLogoLink) {
    const newItcLogoLink = itcLogoLink.cloneNode(true);
    moveInstrumentation(itcLogoLink, newItcLogoLink);
    newItcLogoLink.classList.add('header-footer-brand__logo', 'header-d-inline-block', 'header-analytics_cta_click');
    const itcImg = newItcLogoLink.querySelector('img');
    if (itcImg) {
      itcImg.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
    }
    footerBrandLeft.append(newItcLogoLink);
  }

  const fssiLogoDiv = block.children[1].children[2].children[0].children[0].children[1];
  if (fssiLogoDiv) {
    const newFssiLogoDiv = fssiLogoDiv.cloneNode(true);
    moveInstrumentation(fssiLogoDiv, newFssiLogoDiv);
    newFssiLogoDiv.classList.add('header-footer-brand__secondary--logo', 'header-d-inline-block');
    const fssiImg = newFssiLogoDiv.querySelector('img');
    if (fssiImg) {
      fssiImg.classList.add('header-object-fit-contain', 'header-w-100');
    }
    footerBrandLeft.append(newFssiLogoDiv);
  }
  footerPrimaryContent.append(footerBrandLeft);

  const footerBrandRight = document.createElement('section');
  footerBrandRight.classList.add('header-footer-brand__right');

  const footerNavbar = document.createElement('nav');
  footerNavbar.classList.add('header-footer-brand__navbar', 'header-d-grid', 'header-d-md-flex');
  footerNavbar.setAttribute('aria-label', 'footer navbar');

  const footerNavbarLeft = document.createElement('div');
  footerNavbarLeft.classList.add('header-footer-brand__navbar--left', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');

  const footerListsLeft = block.children[1].children[2].children[0].children[1].children[0].children[0].children;
  [...footerListsLeft].forEach((listDiv) => {
    const newFooterListDiv = document.createElement('div');
    newFooterListDiv.classList.add('header-footerList');
    const ul = document.createElement('ul');
    ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
    const items = listDiv.querySelector('ul').children;
    [...items].forEach((item) => {
      const li = document.createElement('li');
      moveInstrumentation(item, li);
      li.classList.add('header-footer-list__item');
      const link = item.querySelector('a');
      if (link) {
        const newLink = link.cloneNode(true);
        moveInstrumentation(link, newLink);
        newLink.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
        li.append(newLink);
      }
      ul.append(li);
    });
    newFooterListDiv.append(ul);
    footerNavbarLeft.append(newFooterListDiv);
  });
  footerNavbar.append(footerNavbarLeft);

  const footerNavbarRight = document.createElement('div');
  footerNavbarRight.classList.add('header-footer-brand__navbar--right', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');

  const footerListsRight = block.children[1].children[2].children[0].children[1].children[0].children[1].children;
  [...footerListsRight].forEach((listDiv) => {
    const newFooterListDiv = document.createElement('div');
    newFooterListDiv.classList.add('header-footerList');
    const ul = document.createElement('ul');
    ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
    const items = listDiv.querySelector('ul').children;
    [...items].forEach((item) => {
      const li = document.createElement('li');
      moveInstrumentation(item, li);
      li.classList.add('header-footer-list__item');
      const link = item.querySelector('a');
      if (link) {
        const newLink = link.cloneNode(true);
        moveInstrumentation(link, newLink);
        newLink.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
        li.append(newLink);
      }
      ul.append(li);
    });
    newFooterListDiv.append(ul);
    footerNavbarRight.append(newFooterListDiv);
  });
  footerNavbar.append(footerNavbarRight);

  footerBrandRight.append(footerNavbar);
  footerPrimaryContent.append(footerBrandRight);
  footerPrimaryContainer.append(footerPrimaryContent);
  footerBrandPrimary.append(footerPrimaryContainer);
  footerBrand.append(footerBrandPrimary);

  const footerBrandSecondary = document.createElement('section');
  footerBrandSecondary.classList.add('header-footer-brand__secondary');
  footerBrandSecondary.style.backgroundColor = '';

  const footerSecondaryContainer = document.createElement('div');
  footerSecondaryContainer.classList.add('header-container');

  const footerSecondaryContent = document.createElement('div');
  footerSecondaryContent.classList.add('header-footer-brand__secondary--content', 'header-d-flex', 'header-flex-column', 'header-justify-content-md-between', 'header-align-items-center');

  const socialMediaSection = document.createElement('section');
  socialMediaSection.classList.add('header-footer-brand__right', 'header-d-flex', 'header-flex-column', 'header-pb-5');

  const socialMediaTitle = document.createElement('h3');
  socialMediaTitle.classList.add('header-social_media--title');
  socialMediaTitle.textContent = 'Follow Us On';
  socialMediaSection.append(socialMediaTitle);

  const socialMediaList = document.createElement('ul');
  socialMediaList.classList.add('header-footer-brand__right--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-px-10', 'header-flex-wrap');

  const socialItems = block.children[1].children[2].children[1].children[0].children[0].children[0].children;
  [...socialItems].forEach((socialItem) => {
    const li = document.createElement('li');
    moveInstrumentation(socialItem, li);
    li.classList.add('header-footer-brand__right--item', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center');
    const link = socialItem.querySelector('a');
    if (link) {
      const newLink = link.cloneNode(true);
      moveInstrumentation(link, newLink);
      newLink.classList.add('header-footer-brand__right--link', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center', 'header-analytics_cta_click');
      const img = newLink.querySelector('img');
      if (img) {
        img.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
      }
      li.append(newLink);
    }
    socialMediaList.append(li);
  });
  socialMediaSection.append(socialMediaList);
  footerSecondaryContent.append(socialMediaSection);

  const footerBrandLeftSecondary = document.createElement('section');
  footerBrandLeftSecondary.classList.add('header-footer-brand__left', 'header-py-5', 'header-d-flex', 'header-flex-column', 'header-gap-3');

  const footerBrandLeftList = document.createElement('ul');
  footerBrandLeftList.classList.add('header-footer-brand__left--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-flex-wrap');

  const primaryLinks = block.children[1].children[2].children[1].children[0].children[1].children[0].children;
  [...primaryLinks].forEach((primaryLink) => {
    const li = document.createElement('li');
    moveInstrumentation(primaryLink, li);
    li.classList.add('header-footer-brand__left--item', 'header-foot_link');
    const link = primaryLink.querySelector('a');
    if (link) {
      const newLink = link.cloneNode(true);
      moveInstrumentation(link, newLink);
      newLink.classList.add('header-footer-brand__left--link', 'header-analytics_cta_click');
      li.append(newLink);
    }
    footerBrandLeftList.append(li);
  });
  footerBrandLeftSecondary.append(footerBrandLeftList);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.classList.add('header-footer-brand__left--copyright', 'header-text-center');
  const copyrightSpan = document.createElement('span');
  copyrightSpan.classList.add('header-footer-brand__left--text', 'header-text-white');
  copyrightSpan.textContent = block.children[1].children[2].children[1].children[0].children[1].children[1].querySelector('span').textContent.trim();
  copyrightDiv.append(copyrightSpan);
  footerBrandLeftSecondary.append(copyrightDiv);
  footerSecondaryContent.append(footerBrandLeftSecondary);

  footerSecondaryContainer.append(footerSecondaryContent);
  footerBrandSecondary.append(footerSecondaryContainer);
  footerBrand.append(footerBrandSecondary);

  aside.append(footerBrand);
  submenuContainer.append(aside);

  const overlay = document.createElement('div');
  overlay.classList.add('header-overlay', 'header-position-absolute', 'header-top-0', 'header-start-0', 'header-w-100', 'header-h-100', 'header-bg-black', 'header-opacity-25');
  submenuContainer.append(overlay);

  block.append(submenuContainer);

  // Clear the original block content
  block.innerHTML = '';

  // Re-append the constructed elements to the block
  block.append(appNameSpan, headerEl, submenuContainer);
}
