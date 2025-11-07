import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const appNameSpan = block.querySelector('.header-app-name');
  const appName = appNameSpan ? appNameSpan.dataset.appName : '';
  if (appNameSpan) {
    moveInstrumentation(appNameSpan, appNameSpan);
    appNameSpan.remove();
  }

  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';
  moveInstrumentation(block.querySelector('header'), header);

  const headerLeftDiv = document.createElement('div');
  headerLeftDiv.className = 'header-d-flex header-w-25';
  header.append(headerLeftDiv);

  const headerCenterDiv = document.createElement('div');
  headerCenterDiv.className = 'header-d-flex  header-justify-content-center header-w-25';
  const logoLink = block.querySelector('header .header__logo a');
  if (logoLink) {
    moveInstrumentation(logoLink, logoLink);
    headerCenterDiv.append(logoLink);
  }
  header.append(headerCenterDiv);

  const headerRightDiv = document.createElement('div');
  headerRightDiv.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginBtnWrapper = block.querySelector('header .header__login-btn-wrapper');
  if (loginBtnWrapper) {
    moveInstrumentation(loginBtnWrapper, loginBtnWrapper);
    headerRightDiv.append(loginBtnWrapper);
  }
  header.append(headerRightDiv);

  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';
  moveInstrumentation(block.querySelector('.header-submenu-container'), submenuContainer);

  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';
  moveInstrumentation(block.querySelector('aside'), aside);

  const menuUl = document.createElement('ul');
  menuUl.className = 'header-sidebar__menu header-list-unstyled header-px-4';
  const menuItems = block.querySelectorAll('.header-sidebar__menu-item');
  menuItems.forEach((item) => {
    moveInstrumentation(item, item);
    menuUl.append(item);
  });
  aside.append(menuUl);

  const sidebarCurve = block.querySelector('.header-sidebar__curve');
  if (sidebarCurve) {
    moveInstrumentation(sidebarCurve, sidebarCurve);
    aside.append(sidebarCurve);
  }

  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';
  moveInstrumentation(block.querySelector('.header-footer-brand'), footerBrand);

  const footerPrimary = document.createElement('section');
  footerPrimary.className = 'header-footer-brand__primary';
  moveInstrumentation(block.querySelector('.header-footer-brand__primary'), footerPrimary);

  const footerPrimaryContent = document.createElement('div');
  footerPrimaryContent.className = 'header-container';
  const primaryContentDiv = block.querySelector('.header-footer-brand__primary--content');
  if (primaryContentDiv) {
    moveInstrumentation(primaryContentDiv, primaryContentDiv);
    footerPrimaryContent.append(primaryContentDiv);
  }
  footerPrimary.append(footerPrimaryContent);
  footerBrand.append(footerPrimary);

  const footerSecondary = document.createElement('section');
  footerSecondary.className = 'header-footer-brand__secondary';
  moveInstrumentation(block.querySelector('.header-footer-brand__secondary'), footerSecondary);

  const footerSecondaryContent = document.createElement('div');
  footerSecondaryContent.className = 'header-container';
  const secondaryContentDiv = block.querySelector('.header-footer-brand__secondary--content');
  if (secondaryContentDiv) {
    moveInstrumentation(secondaryContentDiv, secondaryContentDiv);
    footerSecondaryContent.append(secondaryContentDiv);
  }
  footerSecondary.append(footerSecondaryContent);
  footerBrand.append(footerSecondary);

  aside.append(footerBrand);

  const overlay = block.querySelector('.header-overlay');
  if (overlay) {
    moveInstrumentation(overlay, overlay);
    submenuContainer.append(overlay);
  }

  submenuContainer.prepend(aside);

  block.textContent = '';
  block.append(header, submenuContainer);
}
