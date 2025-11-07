import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  block.classList.add('header-position-relative', 'header-mb-15');

  const appName = block.children[0].children[0];
  appName.classList.add('header-d-none', 'header-app-name');
  appName.setAttribute('data-app-name', appName.textContent.trim());

  const headerEl = document.createElement('header');
  headerEl.classList.add('header-boing-container', 'header-d-flex', 'header-justify-content-between', 'header-align-items-center', 'header-h-15', 'header-px-5', 'header-py-2', 'header-fixed-top', 'header-w-100', 'header-bg-white');

  const hamburgerDiv = document.createElement('div');
  hamburgerDiv.classList.add('header-d-flex', 'header-w-25');
  const hamburgerPic = block.children[1].children[0].children[0];
  if (hamburgerPic && hamburgerPic.querySelector('img')) {
    const img = hamburgerPic.querySelector('img');
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '40' }]);
    hamburgerDiv.append(optimizedPic);
  }
  headerEl.append(hamburgerDiv);

  const logoDiv = document.createElement('div');
  logoDiv.classList.add('header-d-flex', 'header-justify-content-center', 'header-w-25');
  const logoLink = block.children[2].children[0];
  logoLink.classList.add('header-analytics_cta_click');
  logoLink.setAttribute('data-ct', '');
  logoLink.setAttribute('a-label', 'header-logo-boing');
  const logoInnerDiv = document.createElement('div');
  logoInnerDiv.classList.add('header__logo', 'header-d-flex', 'header-align-items-center');
  const logoImg = block.children[3].children[0];
  logoImg.classList.add('header__logo-img');
  logoInnerDiv.append(logoImg);
  logoLink.append(logoInnerDiv);
  logoDiv.append(logoLink);
  headerEl.append(logoDiv);

  const loginDiv = document.createElement('div');
  loginDiv.classList.add('header-d-flex', 'header-w-25', 'header-justify-content-end');
  const loginLink = block.children[4].children[0];
  loginLink.classList.add('header__login-btn-wrapper', 'header-analytics_cta_click');
  loginLink.style.display = 'inline';
  const loginButton = document.createElement('button');
  loginButton.classList.add('header__login-btn', 'header-btn', 'header-text-boing-primary', 'header-bg-transparent', 'header-fw-semibold', 'header-rounded-4', 'header-btn-sm', 'header-py-3', 'header-px-4');
  loginButton.textContent = block.children[5].children[0].textContent.trim();
  loginLink.append(loginButton);
  loginDiv.append(loginLink);
  headerEl.append(loginDiv);

  const submenuContainer = document.createElement('div');
  submenuContainer.classList.add('header-submenu-container', 'header-position-fixed', 'header-top-0', 'header-start-0', 'header-end-0', 'header-m-auto', 'header-overflow-hidden');
  const sidebar = document.createElement('aside');
  sidebar.classList.add('header-sidebar', 'header-start-0', 'header-bg-white', 'header-position-absolute');
  const menuUl = document.createElement('ul');
  menuUl.classList.add('header-sidebar__menu', 'header-list-unstyled', 'header-px-4');

  const menuItems = Array.from(block.children).slice(6, -18);
  menuItems.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('header-sidebar__menu-item', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
    const link = item.children[0];
    link.classList.add('header-sidebar__menu-link', 'header-d-flex', 'header-align-items-center', 'header-text-decoration-none', 'header-px-6', 'header-fw-medium', 'header-analytics_cta_click');
    link.setAttribute('data-link', link.href);
    const img = link.children[0];
    img.classList.add('header-sidebar__menu-icon', 'header-me-4');
    img.setAttribute('loading', 'lazy');
    li.append(link);
    menuUl.append(li);
  });

  sidebar.append(menuUl);

  const logoutItem = block.children[6 + menuItems.length];
  const logoutLi = document.createElement('li');
  logoutLi.classList.add('header-sidebar__menu-item', 'header__menu-item--logout', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
  logoutLi.style.display = 'none';
  const logoutLink = logoutItem.children[0];
  logoutLink.classList.add('header-sidebar__menu-link', 'header-d-flex', 'header-align-items-center', 'header-text-decoration-none', 'header-px-6', 'header-fw-medium', 'header-analytics_cta_click');
  logoutLink.setAttribute('data-link', logoutLink.href);
  const logoutImg = logoutLink.children[0];
  logoutImg.classList.add('header-sidebar__menu-icon', 'header-me-4');
  logoutImg.setAttribute('loading', 'lazy');
  logoutLi.append(logoutLink);
  menuUl.append(logoutLi);

  const sidebarCurve = document.createElement('div');
  sidebarCurve.classList.add('header-sidebar__curve');
  sidebar.append(sidebarCurve);

  const footerBrand = document.createElement('div');
  footerBrand.classList.add('header-footer-brand', 'header-w-100', 'header-bg-boing-neutral-gray-600');

  const footerPrimary = document.createElement('section');
  footerPrimary.classList.add('header-footer-brand__primary');
  footerPrimary.style.backgroundColor = '';
  const footerPrimaryContainer = document.createElement('div');
  footerPrimaryContainer.classList.add('header-container');
  const footerPrimaryContent = document.createElement('div');
  footerPrimaryContent.classList.add('header-footer-brand__primary--content', 'header-d-flex', 'header-flex-column', 'header-flex-md-row', 'header-justify-content-md-between', 'header-align-items-center');

  const footerLeft = document.createElement('section');
  footerLeft.classList.add('header-footer-brand__left', 'header-d-flex', 'header-gap-16', 'header-px-10', 'header-align-items-center', 'header-justify-content-center');

  const itcLink = block.children[6 + menuItems.length + 2].children[0];
  itcLink.classList.add('header-footer-brand__logo', 'header-d-inline-block', 'header-analytics_cta_click');
  itcLink.setAttribute('data-cta-region', 'Footer');
  itcLink.setAttribute('aria-label', 'ITC Logo');
  itcLink.setAttribute('target', '_blank');
  const itcImg = block.children[6 + menuItems.length + 3].children[0];
  itcImg.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
  itcImg.setAttribute('loading', 'lazy');
  itcLink.innerHTML = '';
  itcLink.append(itcImg);
  footerLeft.append(itcLink);

  const fssiDiv = document.createElement('div');
  fssiDiv.classList.add('header-footer-brand__secondary--logo', 'header-d-inline-block');
  const fssiImg = block.children[6 + menuItems.length + 5].children[0];
  fssiImg.classList.add('header-object-fit-contain', 'header-w-100');
  fssiImg.setAttribute('loading', 'lazy');
  fssiDiv.append(fssiImg);
  footerLeft.append(fssiDiv);
  footerPrimaryContent.append(footerLeft);

  const footerRight = document.createElement('section');
  footerRight.classList.add('header-footer-brand__right');
  const footerNav = document.createElement('nav');
  footerNav.classList.add('header-footer-brand__navbar', 'header-d-grid', 'header-d-md-flex');
  footerNav.setAttribute('aria-label', 'footer navbar');

  const footerNavLeft = document.createElement('div');
  footerNavLeft.classList.add('header-footer-brand__navbar--left', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');

  const createFooterList = (startIdx, endIdx) => {
    const footerListDiv = document.createElement('div');
    footerListDiv.classList.add('header-footerList');
    const ul = document.createElement('ul');
    ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
    for (let i = startIdx; i < endIdx; i += 2) {
      const li = document.createElement('li');
      li.classList.add('header-footer-list__item');
      const link = block.children[i].children[0];
      link.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
      link.setAttribute('data-link-region', 'Footer List');
      if (link.href.includes('itcportal.com')) {
        link.setAttribute('target', '_blank');
      }
      li.append(link);
      ul.append(li);
    }
    footerListDiv.append(ul);
    return footerListDiv;
  };

  footerNavLeft.append(createFooterList(6 + menuItems.length + 7, 6 + menuItems.length + 13));
  footerNavLeft.append(createFooterList(6 + menuItems.length + 13, 6 + menuItems.length + 19));

  const footerNavRight = document.createElement('div');
  footerNavRight.classList.add('header-footer-brand__navbar--right', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');

  footerNavRight.append(createFooterList(6 + menuItems.length + 19, 6 + menuItems.length + 25));
  footerNavRight.append(createFooterList(6 + menuItems.length + 25, 6 + menuItems.length + 31));

  footerNav.append(footerNavLeft);
  footerNav.append(footerNavRight);
  footerRight.append(footerNav);
  footerPrimaryContent.append(footerRight);
  footerPrimaryContainer.append(footerPrimaryContent);
  footerPrimary.append(footerPrimaryContainer);
  footerBrand.append(footerPrimary);

  const footerSecondary = document.createElement('section');
  footerSecondary.classList.add('header-footer-brand__secondary');
  footerSecondary.style.backgroundColor = '';
  const footerSecondaryContainer = document.createElement('div');
  footerSecondaryContainer.classList.add('header-container');
  const footerSecondaryContent = document.createElement('div');
  footerSecondaryContent.classList.add('header-footer-brand__secondary--content', 'header-d-flex', 'header-flex-column', 'header-justify-content-md-between', 'header-align-items-center');

  const socialMediaSection = document.createElement('section');
  socialMediaSection.classList.add('header-footer-brand__right', 'header-d-flex', 'header-flex-column', 'header-pb-5');
  const socialTitle = document.createElement('h3');
  socialTitle.classList.add('header-social_media--title');
  socialTitle.textContent = block.children[6 + menuItems.length + 31].children[0].textContent.trim();
  socialMediaSection.append(socialTitle);
  const socialUl = document.createElement('ul');
  socialUl.classList.add('header-footer-brand__right--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-px-10', 'header-flex-wrap');

  const socialMediaItems = Array.from(block.children).slice(6 + menuItems.length + 32, 6 + menuItems.length + 38);
  socialMediaItems.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('header-footer-brand__right--item', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center');
    const link = item.children[0];
    link.classList.add('header-footer-brand__right--link', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center', 'header-analytics_cta_click');
    link.setAttribute('data-cta-region', 'Footer');
    link.setAttribute('data-cta-label', `footer-${link.children[0].alt}`);
    link.setAttribute('target', '_blank');
    link.setAttribute('data-platform-name', link.children[0].alt);
    link.setAttribute('data-social-linktype', 'follow');
    const img = link.children[0];
    img.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
    img.setAttribute('loading', 'lazy');
    li.append(link);
    socialUl.append(li);
  });
  socialMediaSection.append(socialUl);
  footerSecondaryContent.append(socialMediaSection);

  const footerSecondaryLeft = document.createElement('section');
  footerSecondaryLeft.classList.add('header-footer-brand__left', 'header-py-5', 'header-d-flex', 'header-flex-column', 'header-gap-3');
  const footerSecondaryUl = document.createElement('ul');
  footerSecondaryUl.classList.add('header-footer-brand__left--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-flex-wrap');
  const footerSecondaryLi = document.createElement('li');
  footerSecondaryLi.classList.add('header-footer-brand__left--item', 'header-foot_link');
  const itcPortalLink = block.children[6 + menuItems.length + 38].children[0];
  itcPortalLink.classList.add('header-footer-brand__left--link', 'header-analytics_cta_click');
  itcPortalLink.setAttribute('data-cta-region', 'Footer');
  itcPortalLink.setAttribute('target', '_blank');
  footerSecondaryLi.append(itcPortalLink);
  footerSecondaryUl.append(footerSecondaryLi);
  footerSecondaryLeft.append(footerSecondaryUl);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.classList.add('header-footer-brand__left--copyright', 'header-text-center');
  const copyrightSpan = document.createElement('span');
  copyrightSpan.classList.add('header-footer-brand__left--text', 'header-text-white');
  copyrightSpan.textContent = block.children[6 + menuItems.length + 39].children[0].textContent.trim();
  copyrightDiv.append(copyrightSpan);
  footerSecondaryLeft.append(copyrightDiv);
  footerSecondaryContent.append(footerSecondaryLeft);
  footerSecondaryContainer.append(footerSecondaryContent);
  footerSecondary.append(footerSecondaryContainer);
  footerBrand.append(footerSecondary);

  sidebar.append(footerBrand);
  submenuContainer.append(sidebar);

  const overlay = document.createElement('div');
  overlay.classList.add('header-overlay', 'header-position-absolute', 'header-top-0', 'header-start-0', 'header-w-100', 'header-h-100', 'header-bg-black', 'header-opacity-25');
  submenuContainer.append(overlay);

  block.textContent = '';
  block.append(appName, headerEl, submenuContainer);
}