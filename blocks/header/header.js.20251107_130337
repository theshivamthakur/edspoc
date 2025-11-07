import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const section = document.createElement('section');
  section.className = 'header-position-relative header-mb-15';

  const appNameSpan = document.createElement('span');
  appNameSpan.className = 'header-d-none header-app-name';
  appNameSpan.setAttribute('data-app-name', block.children[0]?.children[0]?.textContent || '');
  appNameSpan.textContent = block.children[0]?.children[0]?.textContent || '';
  moveInstrumentation(block.children[0]?.children[0], appNameSpan);

  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

  const headerLeftDiv = document.createElement('div');
  headerLeftDiv.className = 'header-d-flex header-w-25';
  const headerLeftImg = document.createElement('img');
  headerLeftImg.src = block.children[0]?.children[1]?.textContent || '';
  moveInstrumentation(block.children[0]?.children[1], headerLeftImg);
  headerLeftDiv.append(headerLeftImg);

  const headerMiddleDiv = document.createElement('div');
  headerMiddleDiv.className = 'header-d-flex header-justify-content-center header-w-25';
  const headerLogoLink = document.createElement('a');
  headerLogoLink.href = '/';
  headerLogoLink.className = 'header-analytics_cta_click';
  headerLogoLink.setAttribute('data-ct', '');
  headerLogoLink.setAttribute('a-label', 'header-logo-boing');
  const headerLogoDiv = document.createElement('div');
  headerLogoDiv.className = 'header__logo header-d-flex header-align-items-center';
  const headerLogoImg = document.createElement('img');
  headerLogoImg.src = block.children[0]?.children[2]?.textContent || '';
  headerLogoImg.alt = block.children[0]?.children[3]?.textContent || '';
  headerLogoImg.className = 'header__logo-img';
  moveInstrumentation(block.children[0]?.children[2], headerLogoImg);
  moveInstrumentation(block.children[0]?.children[3], headerLogoImg);
  headerLogoDiv.append(headerLogoImg);
  headerLogoLink.append(headerLogoDiv);
  headerMiddleDiv.append(headerLogoLink);

  const headerRightDiv = document.createElement('div');
  headerRightDiv.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginLink = document.createElement('a');
  loginLink.href = '/login.html';
  loginLink.className = 'header__login-btn-wrapper header-analytics_cta_click';
  loginLink.style.display = 'inline';
  const loginButton = document.createElement('button');
  loginButton.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
  loginButton.textContent = block.children[0]?.children[4]?.textContent || '';
  moveInstrumentation(block.children[0]?.children[4], loginButton);
  loginLink.append(loginButton);
  headerRightDiv.append(loginLink);

  header.append(headerLeftDiv, headerMiddleDiv, headerRightDiv);

  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  const menuUl = document.createElement('ul');
  menuUl.className = 'header-sidebar__menu header-list-unstyled header-px-4';
  [...block.children[1].children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
    const link = document.createElement('a');
    link.href = row.children[3]?.textContent || '';
    link.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
    link.setAttribute('data-link', row.children[3]?.textContent || '');
    const img = document.createElement('img');
    img.src = row.children[0]?.textContent || '';
    img.alt = row.children[1]?.textContent || '';
    img.className = 'header-sidebar__menu-icon header-me-4';
    img.loading = 'lazy';
    moveInstrumentation(row.children[0], img);
    moveInstrumentation(row.children[1], img);
    link.append(img, row.children[2]?.textContent || '');
    moveInstrumentation(row.children[2], link);
    moveInstrumentation(row.children[3], link);
    li.append(link);
    menuUl.append(li);
  });

  const sidebarCurve = document.createElement('div');
  sidebarCurve.className = 'header-sidebar__curve';

  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

  const footerPrimary = document.createElement('section');
  footerPrimary.className = 'header-footer-brand__primary';
  footerPrimary.style.backgroundColor = '';
  const footerPrimaryContainer = document.createElement('div');
  footerPrimaryContainer.className = 'header-container';
  const footerPrimaryContent = document.createElement('div');
  footerPrimaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';

  const footerBrandLeft = document.createElement('section');
  footerBrandLeft.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';

  const itcLink = document.createElement('a');
  itcLink.href = 'https://www.itcportal.com/';
  itcLink.target = '_blank';
  itcLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  itcLink.setAttribute('data-cta-region', 'Footer');
  itcLink.setAttribute('aria-label', 'ITC Logo');
  const itcImg = document.createElement('img');
  itcImg.src = block.children[2]?.children[0]?.textContent || '';
  itcImg.alt = block.children[2]?.children[1]?.textContent || '';
  itcImg.className = 'header-object-fit-contain header-w-100 header-h-100';
  itcImg.loading = 'lazy';
  moveInstrumentation(block.children[2]?.children[0], itcImg);
  moveInstrumentation(block.children[2]?.children[1], itcImg);
  itcLink.append(itcImg);

  const fssiDiv = document.createElement('div');
  fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
  const fssiImg = document.createElement('img');
  fssiImg.className = 'header-object-fit-contain header-w-100';
  fssiImg.src = block.children[2]?.children[2]?.textContent || '';
  fssiImg.alt = block.children[2]?.children[3]?.textContent || '';
  fssiImg.loading = 'lazy';
  moveInstrumentation(block.children[2]?.children[2], fssiImg);
  moveInstrumentation(block.children[2]?.children[3], fssiImg);
  fssiDiv.append(fssiImg);
  footerBrandLeft.append(itcLink, fssiDiv);

  const footerBrandRight = document.createElement('section');
  footerBrandRight.className = 'header-footer-brand__right';
  const footerNavbar = document.createElement('nav');
  footerNavbar.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  footerNavbar.setAttribute('aria-label', 'footer navbar');

  const footerNavbarLeft = document.createElement('div');
  footerNavbarLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';

  const createFooterList = (items) => {
    const footerListDiv = document.createElement('div');
    footerListDiv.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    items.forEach((itemRow) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = itemRow.children[1]?.textContent || '';
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.setAttribute('data-link-region', 'Footer List');
      a.textContent = itemRow.children[0]?.textContent || '';
      moveInstrumentation(itemRow.children[0], a);
      moveInstrumentation(itemRow.children[1], a);
      li.append(a);
      ul.append(li);
    });
    footerListDiv.append(ul);
    return footerListDiv;
  };

  footerNavbarLeft.append(createFooterList([...block.children[3].children]), createFooterList([...block.children[4].children]));

  const footerNavbarRight = document.createElement('div');
  footerNavbarRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
  footerNavbarRight.append(createFooterList([...block.children[5].children]), createFooterList([...block.children[6].children]));

  footerNavbar.append(footerNavbarLeft, footerNavbarRight);
  footerBrandRight.append(footerNavbar);
  footerPrimaryContent.append(footerBrandLeft, footerBrandRight);
  footerPrimaryContainer.append(footerPrimaryContent);
  footerPrimary.append(footerPrimaryContainer);

  const footerSecondary = document.createElement('section');
  footerSecondary.className = 'header-footer-brand__secondary';
  footerSecondary.style.backgroundColor = '';
  const footerSecondaryContainer = document.createElement('div');
  footerSecondaryContainer.className = 'header-container';
  const footerSecondaryContent = document.createElement('div');
  footerSecondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column header-justify-content-md-between header-align-items-center';

  const socialMediaSection = document.createElement('section');
  socialMediaSection.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
  const socialMediaTitle = document.createElement('h3');
  socialMediaTitle.className = 'header-social_media--title';
  socialMediaTitle.textContent = block.children[7]?.children[0]?.textContent || '';
  moveInstrumentation(block.children[7]?.children[0], socialMediaTitle);
  const socialMediaUl = document.createElement('ul');
  socialMediaUl.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';
  [...block.children[8].children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    const a = document.createElement('a');
    a.href = row.children[2]?.textContent || '';
    a.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
    a.setAttribute('data-cta-region', 'Footer');
    a.setAttribute('data-cta-label', `footer-${row.children[2]?.textContent.split('.')[1]}`);
    a.target = '_blank';
    a.setAttribute('data-platform-name', row.children[2]?.textContent.split('.')[1]);
    a.setAttribute('data-social-linktype', 'follow');
    const img = document.createElement('img');
    img.setAttribute('aria-label', row.children[2]?.textContent.split('.')[1]);
    img.src = row.children[0]?.textContent || '';
    img.className = 'header-object-fit-contain header-w-100 header-h-100';
    img.alt = row.children[1]?.textContent || '';
    img.loading = 'lazy';
    moveInstrumentation(row.children[0], img);
    moveInstrumentation(row.children[1], img);
    moveInstrumentation(row.children[2], a);
    a.append(img);
    li.append(a);
    socialMediaUl.append(li);
  });
  socialMediaSection.append(socialMediaTitle, socialMediaUl);

  const footerLinksSection = document.createElement('section');
  footerLinksSection.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  const footerLinksUl = document.createElement('ul');
  footerLinksUl.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
  [...block.children[9].children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__left--item header-foot_link';
    const a = document.createElement('a');
    a.href = row.children[1]?.textContent || '';
    a.target = '_blank';
    a.className = 'header-footer-brand__left--link header-analytics_cta_click';
    a.setAttribute('data-cta-region', 'Footer');
    a.textContent = row.children[0]?.textContent || '';
    moveInstrumentation(row.children[0], a);
    moveInstrumentation(row.children[1], a);
    li.append(a);
    footerLinksUl.append(li);
  });
  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
  const copyrightSpan = document.createElement('span');
  copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpan.textContent = block.children[10]?.children[0]?.textContent || '';
  moveInstrumentation(block.children[10]?.children[0], copyrightSpan);
  copyrightDiv.append(copyrightSpan);
  footerLinksSection.append(footerLinksUl, copyrightDiv);

  footerSecondaryContent.append(socialMediaSection, footerLinksSection);
  footerSecondaryContainer.append(footerSecondaryContent);
  footerSecondary.append(footerSecondaryContainer);

  footerBrand.append(footerPrimary, footerSecondary);

  aside.append(menuUl, sidebarCurve, footerBrand);

  const overlay = document.createElement('div');
  overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';

  submenuContainer.append(aside, overlay);

  section.append(appNameSpan, header, submenuContainer);

  block.textContent = '';
  block.append(section);
}
