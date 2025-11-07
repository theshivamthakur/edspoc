import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const section = document.createElement('section');
  section.className = 'header-position-relative header-mb-15';

  const appNameSpan = document.createElement('span');
  appNameSpan.className = 'header-d-none header-app-name';
  appNameSpan.dataset.appName = 'boing';
  appNameSpan.textContent = 'boing';
  section.append(appNameSpan);

  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

  const headerDiv1 = document.createElement('div');
  headerDiv1.className = 'header-d-flex header-w-25';
  header.append(headerDiv1);

  const headerDiv2 = document.createElement('div');
  headerDiv2.className = 'header-d-flex  header-justify-content-center header-w-25';
  const logoLink = document.createElement('a');
  logoLink.href = '/';
  logoLink.className = 'header-analytics_cta_click';
  logoLink.dataset.ct = '';
  logoLink.setAttribute('aria-label', 'header-logo-boing');
  const logoDiv = document.createElement('div');
  logoDiv.className = 'header__logo header-d-flex header-align-items-center';
  const logoImg = document.createElement('img');
  logoImg.src = '/content/dam/aemigrate/uploaded-folder/image/lets-boing-logo?fmt=webp-alpha.webp';
  logoImg.alt = 'Let\'s Boing';
  logoImg.className = 'header__logo-img';
  logoDiv.append(logoImg);
  logoLink.append(logoDiv);
  headerDiv2.append(logoLink);
  header.append(headerDiv2);

  const headerDiv3 = document.createElement('div');
  headerDiv3.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginLink = document.createElement('a');
  loginLink.href = '/login.html';
  loginLink.className = 'header__login-btn-wrapper header-analytics_cta_click';
  loginLink.style.display = 'inline';
  const loginButton = document.createElement('button');
  loginButton.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
  loginButton.textContent = 'Login';
  loginLink.append(loginButton);
  headerDiv3.append(loginLink);
  header.append(headerDiv3);
  section.append(header);

  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  const menuUl = document.createElement('ul');
  menuUl.className = 'header-sidebar__menu header-list-unstyled header-px-4';

  const menuItems = block.querySelectorAll('[data-sly-resource="menuItem"]');
  menuItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
    moveInstrumentation(item, li);

    const link = document.createElement('a');
    link.href = item.querySelector('p:nth-child(3)')?.textContent.trim() || '#';
    link.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
    link.dataset.link = item.querySelector('p:nth-child(3)')?.textContent.trim() || '';

    const img = document.createElement('img');
    img.src = item.querySelector('p:first-child')?.textContent.trim() || '';
    img.alt = item.querySelector('p:nth-child(2)')?.textContent.trim() || '';
    img.className = 'header-sidebar__menu-icon header-me-4';
    img.loading = 'lazy';
    link.append(img);
    link.append(item.querySelector('p:nth-child(2)')?.textContent.trim() || '');
    li.append(link);
    menuUl.append(li);
  });
  aside.append(menuUl);

  const logoutLi = document.createElement('li');
  logoutLi.className = 'header-sidebar__menu-item header__menu-item--logout header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
  logoutLi.style.display = 'none';
  const logoutLink = document.createElement('a');
  logoutLink.href = '/';
  logoutLink.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
  logoutLink.dataset.link = '/content/boing/in/en/home';
  const logoutImg = document.createElement('img');
  logoutImg.src = '/content/dam/aemigrate/uploaded-folder/image/logout-3?fmt=webp-alpha.webp';
  logoutImg.alt = 'Logout';
  logoutImg.className = 'header-sidebar__menu-icon header-me-4';
  logoutImg.loading = 'lazy';
  logoutLink.append(logoutImg);
  logoutLink.append('Logout');
  logoutLi.append(logoutLink);
  menuUl.append(logoutLi);

  const sidebarCurve = document.createElement('div');
  sidebarCurve.className = 'header-sidebar__curve';
  aside.append(sidebarCurve);

  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

  const footerPrimary = document.createElement('section');
  footerPrimary.className = 'header-footer-brand__primary';
  footerPrimary.style.backgroundColor = '';
  const footerPrimaryContainer = document.createElement('div');
  footerPrimaryContainer.className = 'header-container';
  const footerPrimaryContent = document.createElement('div');
  footerPrimaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';

  const footerLeft = document.createElement('section');
  footerLeft.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';

  const itcLogoLink = document.createElement('a');
  itcLogoLink.href = 'https://www.itcportal.com/';
  itcLogoLink.target = '_blank';
  itcLogoLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  itcLogoLink.dataset.ctaRegion = 'Footer';
  itcLogoLink.setAttribute('aria-label', 'ITC Logo');
  const itcLogoImg = document.createElement('img');
  itcLogoImg.src = '/content/dam/aemigrate/uploaded-folder/image/itc-logo-2?fmt=webp-alpha.webp';
  itcLogoImg.alt = 'ITC Logo';
  itcLogoImg.className = 'header-object-fit-contain header-w-100 header-h-100';
  itcLogoImg.loading = 'lazy';
  itcLogoLink.append(itcLogoImg);
  footerLeft.append(itcLogoLink);

  const fssiDiv = document.createElement('div');
  fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
  const fssiImg = document.createElement('img');
  fssiImg.className = 'header-object-fit-contain header-w-100';
  fssiImg.src = '/content/dam/aemigrate/uploaded-folder/image/fssi-logo-update?fmt=webp-alpha.webp';
  fssiImg.alt = 'FSSI Logo';
  fssiImg.loading = 'lazy';
  fssiDiv.append(fssiImg);
  footerLeft.append(fssiDiv);
  footerPrimaryContent.append(footerLeft);

  const footerRight = document.createElement('section');
  footerRight.className = 'header-footer-brand__right';
  const footerNav = document.createElement('nav');
  footerNav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  footerNav.setAttribute('aria-label', 'footer navbar');

  const footerNavLeft = document.createElement('div');
  footerNavLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';

  const footerList1 = document.createElement('div');
  footerList1.className = 'header-footerList';
  const ul1 = document.createElement('ul');
  ul1.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';

  const footerListItems = block.querySelectorAll('[data-sly-resource="footerListItem"]');
  footerListItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'header-footer-list__item';
    moveInstrumentation(item, li);

    const link = document.createElement('a');
    link.href = item.querySelector('p:nth-child(2)')?.textContent.trim() || '#';
    link.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
    link.dataset.linkRegion = 'Footer List';
    link.textContent = item.querySelector('p:first-child')?.textContent.trim() || '';
    li.append(link);
    if (index < 3) {
      ul1.append(li);
    } else if (index < 6) {
      if (!footerList2.querySelector('ul')) {
        const ul2 = document.createElement('ul');
        ul2.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
        footerList2.append(ul2);
      }
      footerList2.querySelector('ul').append(li);
    } else if (index < 9) {
      if (!footerList3.querySelector('ul')) {
        const ul3 = document.createElement('ul');
        ul3.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
        footerList3.append(ul3);
      }
      footerList3.querySelector('ul').append(li);
    } else {
      if (!footerList4.querySelector('ul')) {
        const ul4 = document.createElement('ul');
        ul4.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
        footerList4.append(ul4);
      }
      footerList4.querySelector('ul').append(li);
    }
  });

  footerList1.append(ul1);
  footerNavLeft.append(footerList1);

  const footerList2 = document.createElement('div');
  footerList2.className = 'header-footerList';
  footerNavLeft.append(footerList2);
  footerNav.append(footerNavLeft);

  const footerNavRight = document.createElement('div');
  footerNavRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';

  const footerList3 = document.createElement('div');
  footerList3.className = 'header-footerList';
  footerNavRight.append(footerList3);

  const footerList4 = document.createElement('div');
  footerList4.className = 'header-footerList';
  footerNavRight.append(footerList4);
  footerNav.append(footerNavRight);

  footerRight.append(footerNav);
  footerPrimaryContent.append(footerRight);
  footerPrimaryContainer.append(footerPrimaryContent);
  footerPrimary.append(footerPrimaryContainer);
  footerBrand.append(footerPrimary);

  const footerSecondary = document.createElement('section');
  footerSecondary.className = 'header-footer-brand__secondary';
  footerSecondary.style.backgroundColor = '';
  const footerSecondaryContainer = document.createElement('div');
  footerSecondaryContainer.className = 'header-container';
  const footerSecondaryContent = document.createElement('div');
  footerSecondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';

  const footerSecondaryRight = document.createElement('section');
  footerSecondaryRight.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
  const socialMediaTitle = document.createElement('h3');
  socialMediaTitle.className = 'header-social_media--title';
  socialMediaTitle.textContent = 'Follow Us On';
  footerSecondaryRight.append(socialMediaTitle);
  const socialMediaUl = document.createElement('ul');
  socialMediaUl.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';

  const socialMediaItems = block.querySelectorAll('[data-sly-resource="socialMediaItem"]');
  socialMediaItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    moveInstrumentation(item, li);

    const link = document.createElement('a');
    link.href = item.querySelector('p:nth-child(2)')?.textContent.trim() || '#';
    link.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
    link.dataset.ctaRegion = 'Footer';
    link.dataset.ctaLabel = `footer-${item.querySelector('p:nth-child(2)')?.textContent.trim().split('.')[1] || ''}`;
    link.target = '_blank';
    link.dataset.platformName = item.querySelector('p:nth-child(2)')?.textContent.trim().split('.')[1] || '';
    link.dataset.socialLinktype = 'follow';

    const img = document.createElement('img');
    img.setAttribute('aria-label', item.querySelector('p:nth-child(2)')?.textContent.trim().split('.')[1] || '');
    img.src = item.querySelector('p:first-child')?.textContent.trim() || '';
    img.className = 'header-object-fit-contain header-w-100 header-h-100';
    img.alt = item.querySelector('p:nth-child(2)')?.textContent.trim() || '';
    img.loading = 'lazy';
    link.append(img);
    li.append(link);
    socialMediaUl.append(li);
  });
  footerSecondaryRight.append(socialMediaUl);
  footerSecondaryContent.append(footerSecondaryRight);

  const footerSecondaryLeft = document.createElement('section');
  footerSecondaryLeft.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  const footerSecondaryLeftUl = document.createElement('ul');
  footerSecondaryLeftUl.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
  const itcPortalLi = document.createElement('li');
  itcPortalLi.className = 'header-footer-brand__left--item header-foot_link';
  const itcPortalLink = document.createElement('a');
  itcPortalLink.href = 'https://www.itcportal.com/';
  itcPortalLink.target = '_blank';
  itcPortalLink.className = 'header-footer-brand__left--link header-analytics_cta_click';
  itcPortalLink.dataset.ctaRegion = 'Footer';
  itcPortalLink.textContent = 'ITC portal';
  itcPortalLi.append(itcPortalLink);
  footerSecondaryLeftUl.append(itcPortalLi);
  footerSecondaryLeft.append(footerSecondaryLeftUl);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
  const copyrightSpan = document.createElement('span');
  copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpan.textContent = '© 2025 Bingo! All Rights Reserved.';
  copyrightDiv.append(copyrightSpan);
  footerSecondaryLeft.append(copyrightDiv);
  footerSecondaryContent.append(footerSecondaryLeft);

  footerSecondaryContainer.append(footerSecondaryContent);
  footerSecondary.append(footerSecondaryContainer);
  footerBrand.append(footerSecondary);
  aside.append(footerBrand);

  submenuContainer.append(aside);

  const overlayDiv = document.createElement('div');
  overlayDiv.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.append(overlayDiv);
  section.append(submenuContainer);

  block.textContent = '';
  block.append(section);
}