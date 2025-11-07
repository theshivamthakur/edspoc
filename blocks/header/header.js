import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('header-position-relative', 'header-mb-15');

  const appNameSpan = document.createElement('span');
  appNameSpan.classList.add('header-d-none', 'header-app-name');
  appNameSpan.dataset.appName = 'boing';
  appNameSpan.textContent = 'boing';
  block.append(appNameSpan);

  const header = document.createElement('header');
  header.classList.add('header-boing-container', 'header-d-flex', 'header-justify-content-between', 'header-align-items-center', 'header-h-15', 'header-px-5', 'header-py-2', 'header-fixed-top', 'header-w-100', 'header-bg-white');
  moveInstrumentation(block.querySelector('header'), header);

  const headerLeftDiv = document.createElement('div');
  headerLeftDiv.classList.add('header-d-flex', 'header-w-25');
  const menuIcon = block.querySelector('header > div:first-child > div:first-child');
  if (menuIcon) {
    moveInstrumentation(menuIcon, headerLeftDiv);
    headerLeftDiv.append(menuIcon);
  }
  header.append(headerLeftDiv);

  const headerCenterDiv = document.createElement('div');
  headerCenterDiv.classList.add('header-d-flex', 'header-justify-content-center', 'header-w-25');
  const logoLink = block.querySelector('header > div:nth-child(2) > a');
  if (logoLink) {
    moveInstrumentation(logoLink, headerCenterDiv);
    headerCenterDiv.append(logoLink);
    logoLink.classList.add('header-analytics_cta_click');
    logoLink.dataset.ct = '';
    logoLink.setAttribute('a-label', 'header-logo-boing');
    const logoDiv = logoLink.querySelector('.header__logo');
    if (logoDiv) {
      logoDiv.classList.add('header-d-flex', 'header-align-items-center');
    }
    const logoImg = logoLink.querySelector('.header__logo-img');
    if (logoImg) {
      logoImg.classList.add('header__logo-img');
    }
  }
  header.append(headerCenterDiv);

  const headerRightDiv = document.createElement('div');
  headerRightDiv.classList.add('header-d-flex', 'header-w-25', 'header-justify-content-end');
  const loginLink = block.querySelector('header > div:last-child > a');
  if (loginLink) {
    moveInstrumentation(loginLink, headerRightDiv);
    loginLink.classList.add('header__login-btn-wrapper', 'header-analytics_cta_click');
    loginLink.style.display = 'inline';
    const loginButton = loginLink.querySelector('button');
    if (loginButton) {
      loginButton.classList.add('header__login-btn', 'header-btn', 'header-text-boing-primary', 'header-bg-transparent', 'header-fw-semibold', 'header-rounded-4', 'header-btn-sm', 'header-py-3', 'header-px-4');
    }
    headerRightDiv.append(loginLink);
  }
  header.append(headerRightDiv);
  block.append(header);

  const submenuContainer = document.createElement('div');
  submenuContainer.classList.add('header-submenu-container', 'header-position-fixed', 'header-top-0', 'header-start-0', 'header-end-0', 'header-m-auto', 'header-overflow-hidden');
  moveInstrumentation(block.querySelector('.header-submenu-container'), submenuContainer);

  const aside = document.createElement('aside');
  aside.classList.add('header-sidebar', 'header-start-0', 'header-bg-white', 'header-position-absolute');
  moveInstrumentation(block.querySelector('aside'), aside);

  const menuList = document.createElement('ul');
  menuList.classList.add('header-sidebar__menu', 'header-list-unstyled', 'header-px-4');

  const menuItems = block.querySelectorAll('.header-sidebar__menu-item');
  menuItems.forEach((item) => {
    const li = document.createElement('li');
    moveInstrumentation(item, li);
    li.classList.add('header-sidebar__menu-item', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
    if (item.classList.contains('header__menu-item--logout')) {
      li.classList.add('header__menu-item--logout');
      li.style.display = 'none';
    }
    const link = item.querySelector('a');
    if (link) {
      moveInstrumentation(link, link);
      link.classList.add('header-sidebar__menu-link', 'header-d-flex', 'header-align-items-center', 'header-text-decoration-none', 'header-px-6', 'header-fw-medium', 'header-analytics_cta_click');
      const img = link.querySelector('img');
      if (img) {
        moveInstrumentation(img, img);
        img.classList.add('header-sidebar__menu-icon', 'header-me-4');
      }
      li.append(link);
    }
    menuList.append(li);
  });
  aside.append(menuList);

  const sidebarCurve = block.querySelector('.header-sidebar__curve');
  if (sidebarCurve) {
    moveInstrumentation(sidebarCurve, sidebarCurve);
    aside.append(sidebarCurve);
  }

  const footerBrand = document.createElement('div');
  footerBrand.classList.add('header-footer-brand', 'header-w-100', 'header-bg-boing-neutral-gray-600');
  moveInstrumentation(block.querySelector('.header-footer-brand'), footerBrand);

  const primarySection = document.createElement('section');
  primarySection.classList.add('header-footer-brand__primary');
  primarySection.style.backgroundColor = '';
  moveInstrumentation(block.querySelector('.header-footer-brand__primary'), primarySection);

  const primaryContainer = document.createElement('div');
  primaryContainer.classList.add('header-container');
  moveInstrumentation(block.querySelector('.header-footer-brand__primary .header-container'), primaryContainer);

  const primaryContent = document.createElement('div');
  primaryContent.classList.add('header-footer-brand__primary--content', 'header-d-flex', 'header-flex-column', 'header-flex-md-row', 'header-justify-content-md-between', 'header-align-items-center');
  moveInstrumentation(block.querySelector('.header-footer-brand__primary--content'), primaryContent);

  const footerBrandLeft = document.createElement('section');
  footerBrandLeft.classList.add('header-footer-brand__left', 'header-d-flex', 'header-gap-16', 'header-px-10', 'header-align-items-center', 'header-justify-content-center');
  moveInstrumentation(block.querySelector('.header-footer-brand__primary .header-footer-brand__left'), footerBrandLeft);

  const itcLogoLink = block.querySelector('.header-footer-brand__left > a');
  if (itcLogoLink) {
    moveInstrumentation(itcLogoLink, itcLogoLink);
    itcLogoLink.classList.add('header-footer-brand__logo', 'header-d-inline-block', 'header-analytics_cta_click');
    itcLogoLink.dataset.ctaRegion = 'Footer';
    itcLogoLink.setAttribute('aria-label', 'ITC Logo');
    const itcLogoImg = itcLogoLink.querySelector('img');
    if (itcLogoImg) {
      moveInstrumentation(itcLogoImg, itcLogoImg);
      itcLogoImg.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
    }
    footerBrandLeft.append(itcLogoLink);
  }

  const fssiLogoDiv = block.querySelector('.header-footer-brand__left > div');
  if (fssiLogoDiv) {
    moveInstrumentation(fssiLogoDiv, fssiLogoDiv);
    fssiLogoDiv.classList.add('header-footer-brand__secondary--logo', 'header-d-inline-block');
    const fssiLogoImg = fssiLogoDiv.querySelector('img');
    if (fssiLogoImg) {
      moveInstrumentation(fssiLogoImg, fssiLogoImg);
      fssiLogoImg.classList.add('header-object-fit-contain', 'header-w-100');
    }
    footerBrandLeft.append(fssiLogoDiv);
  }
  primaryContent.append(footerBrandLeft);

  const footerBrandRight = document.createElement('section');
  footerBrandRight.classList.add('header-footer-brand__right');
  moveInstrumentation(block.querySelector('.header-footer-brand__primary .header-footer-brand__right'), footerBrandRight);

  const footerNavbar = document.createElement('nav');
  footerNavbar.classList.add('header-footer-brand__navbar', 'header-d-grid', 'header-d-md-flex');
  footerNavbar.setAttribute('aria-label', 'footer navbar');
  moveInstrumentation(block.querySelector('.header-footer-brand__navbar'), footerNavbar);

  const navbarLeft = document.createElement('div');
  navbarLeft.classList.add('header-footer-brand__navbar--left', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');
  moveInstrumentation(block.querySelector('.header-footer-brand__navbar--left'), navbarLeft);

  block.querySelectorAll('.header-footer-brand__navbar--left .header-footerList').forEach((footerListDiv) => {
    const newFooterListDiv = document.createElement('div');
    moveInstrumentation(footerListDiv, newFooterListDiv);
    newFooterListDiv.classList.add('header-footerList');
    const ul = document.createElement('ul');
    moveInstrumentation(footerListDiv.querySelector('ul'), ul);
    ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
    footerListDiv.querySelectorAll('.header-footer-list__item').forEach((item) => {
      const li = document.createElement('li');
      moveInstrumentation(item, li);
      li.classList.add('header-footer-list__item');
      const link = item.querySelector('a');
      if (link) {
        moveInstrumentation(link, link);
        link.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
        li.append(link);
      }
      ul.append(li);
    });
    newFooterListDiv.append(ul);
    navbarLeft.append(newFooterListDiv);
  });
  footerNavbar.append(navbarLeft);

  const navbarRight = document.createElement('div');
  navbarRight.classList.add('header-footer-brand__navbar--right', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');
  moveInstrumentation(block.querySelector('.header-footer-brand__navbar--right'), navbarRight);

  block.querySelectorAll('.header-footer-brand__navbar--right .header-footerList').forEach((footerListDiv) => {
    const newFooterListDiv = document.createElement('div');
    moveInstrumentation(footerListDiv, newFooterListDiv);
    newFooterListDiv.classList.add('header-footerList');
    const ul = document.createElement('ul');
    moveInstrumentation(footerListDiv.querySelector('ul'), ul);
    ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
    footerListDiv.querySelectorAll('.header-footer-list__item').forEach((item) => {
      const li = document.createElement('li');
      moveInstrumentation(item, li);
      li.classList.add('header-footer-list__item');
      const link = item.querySelector('a');
      if (link) {
        moveInstrumentation(link, link);
        link.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
        li.append(link);
      }
      ul.append(li);
    });
    newFooterListDiv.append(ul);
    navbarRight.append(newFooterListDiv);
  });
  footerNavbar.append(navbarRight);
  footerBrandRight.append(footerNavbar);
  primaryContent.append(footerBrandRight);
  primaryContainer.append(primaryContent);
  primarySection.append(primaryContainer);
  footerBrand.append(primarySection);

  const secondarySection = document.createElement('section');
  secondarySection.classList.add('header-footer-brand__secondary');
  secondarySection.style.backgroundColor = '';
  moveInstrumentation(block.querySelector('.header-footer-brand__secondary'), secondarySection);

  const secondaryContainer = document.createElement('div');
  secondaryContainer.classList.add('header-container');
  moveInstrumentation(block.querySelector('.header-footer-brand__secondary .header-container'), secondaryContainer);

  const secondaryContent = document.createElement('div');
  secondaryContent.classList.add('header-footer-brand__secondary--content', 'header-d-flex', 'header-flex-column', 'header-justify-content-md-between', 'header-align-items-center');
  moveInstrumentation(block.querySelector('.header-footer-brand__secondary--content'), secondaryContent);

  const socialMediaSection = document.createElement('section');
  socialMediaSection.classList.add('header-footer-brand__right', 'header-d-flex', 'header-flex-column', 'header-pb-5');
  moveInstrumentation(block.querySelector('.header-footer-brand__secondary .header-footer-brand__right'), socialMediaSection);

  const socialMediaTitle = document.createElement('h3');
  socialMediaTitle.classList.add('header-social_media--title');
  socialMediaTitle.textContent = 'Follow Us On';
  moveInstrumentation(block.querySelector('.header-social_media--title'), socialMediaTitle);
  socialMediaSection.append(socialMediaTitle);

  const socialMediaList = document.createElement('ul');
  socialMediaList.classList.add('header-footer-brand__right--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-px-10', 'header-flex-wrap');
  moveInstrumentation(block.querySelector('.header-footer-brand__right--list'), socialMediaList);

  block.querySelectorAll('.header-footer-brand__right--item').forEach((item) => {
    const li = document.createElement('li');
    moveInstrumentation(item, li);
    li.classList.add('header-footer-brand__right--item', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center');
    const link = item.querySelector('a');
    if (link) {
      moveInstrumentation(link, link);
      link.classList.add('header-footer-brand__right--link', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center', 'header-analytics_cta_click');
      const img = link.querySelector('img');
      if (img) {
        moveInstrumentation(img, img);
        img.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
      }
      li.append(link);
    }
    socialMediaList.append(li);
  });
  socialMediaSection.append(socialMediaList);
  secondaryContent.append(socialMediaSection);

  const footerBrandLeftSecondary = document.createElement('section');
  footerBrandLeftSecondary.classList.add('header-footer-brand__left', 'header-py-5', 'header-d-flex', 'header-flex-column', 'header-gap-3');
  moveInstrumentation(block.querySelector('.header-footer-brand__secondary .header-footer-brand__left'), footerBrandLeftSecondary);

  const footerLeftList = document.createElement('ul');
  footerLeftList.classList.add('header-footer-brand__left--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-flex-wrap');
  moveInstrumentation(block.querySelector('.header-footer-brand__left--list'), footerLeftList);

  const itcPortalItem = block.querySelector('.header-footer-brand__left--item');
  if (itcPortalItem) {
    const li = document.createElement('li');
    moveInstrumentation(itcPortalItem, li);
    li.classList.add('header-footer-brand__left--item', 'header-foot_link');
    const link = itcPortalItem.querySelector('a');
    if (link) {
      moveInstrumentation(link, link);
      link.classList.add('header-footer-brand__left--link', 'header-analytics_cta_click');
      li.append(link);
    }
    footerLeftList.append(li);
  }
  footerBrandLeftSecondary.append(footerLeftList);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.classList.add('header-footer-brand__left--copyright', 'header-text-center');
  moveInstrumentation(block.querySelector('.header-footer-brand__left--copyright'), copyrightDiv);

  const copyrightSpan = document.createElement('span');
  copyrightSpan.classList.add('header-footer-brand__left--text', 'header-text-white');
  copyrightSpan.textContent = '© 2025 Bingo! All Rights Reserved.';
  moveInstrumentation(block.querySelector('.header-footer-brand__left--text'), copyrightSpan);
  copyrightDiv.append(copyrightSpan);
  footerBrandLeftSecondary.append(copyrightDiv);
  secondaryContent.append(footerBrandLeftSecondary);
  secondaryContainer.append(secondaryContent);
  secondarySection.append(secondaryContainer);
  footerBrand.append(secondarySection);

  aside.append(footerBrand);
  submenuContainer.append(aside);

  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('header-overlay', 'header-position-absolute', 'header-top-0', 'header-start-0', 'header-w-100', 'header-h-100', 'header-bg-black', 'header-opacity-25');
  moveInstrumentation(block.querySelector('.header-overlay'), overlayDiv);
  submenuContainer.append(overlayDiv);

  block.textContent = '';
  block.append(appNameSpan, header, submenuContainer);
}
