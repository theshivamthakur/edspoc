import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const section = document.createElement('section');
  section.className = 'header-position-relative header-mb-15';
  moveInstrumentation(block, section);

  const appNameSpan = document.createElement('span');
  appNameSpan.className = 'header-d-none header-app-name';
  appNameSpan.dataset.appName = block.children[0]?.children[0]?.textContent || 'boing';
  appNameSpan.textContent = block.children[0]?.children[0]?.textContent || 'boing';
  section.append(appNameSpan);

  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';
  section.append(header);

  const div1 = document.createElement('div');
  div1.className = 'header-d-flex header-w-25';
  const logoLeft = block.children[1]?.children[0]?.querySelector('img');
  if (logoLeft) {
    const picture = createOptimizedPicture(logoLeft.src, logoLeft.alt, false, [{ width: '750' }]);
    moveInstrumentation(logoLeft, picture.querySelector('img'));
    div1.append(picture);
  }
  header.append(div1);

  const div2 = document.createElement('div');
  div2.className = 'header-d-flex  header-justify-content-center header-w-25';
  const mainLogoLink = block.children[2]?.children[0]?.textContent || '/';
  const mainLogoAlt = block.children[3]?.children[0]?.textContent || 'Let\'s Boing';
  const mainLogoSrc = block.children[4]?.children[0]?.querySelector('img')?.src;

  const aLogo = document.createElement('a');
  aLogo.href = mainLogoLink;
  aLogo.className = 'header-analytics_cta_click';
  aLogo.dataset.ct = '';
  aLogo.setAttribute('aria-label', 'header-logo-boing');

  const logoDiv = document.createElement('div');
  logoDiv.className = 'header__logo header-d-flex header-align-items-center';

  if (mainLogoSrc) {
    const imgLogo = createOptimizedPicture(mainLogoSrc, mainLogoAlt, false, [{ width: '750' }]);
    moveInstrumentation(block.children[4].children[0].querySelector('img'), imgLogo.querySelector('img'));
    imgLogo.className = 'header__logo-img';
    logoDiv.append(imgLogo);
  }
  aLogo.append(logoDiv);
  div2.append(aLogo);
  header.append(div2);

  const div3 = document.createElement('div');
  div3.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginButtonLink = block.children[5]?.children[0]?.textContent || '/login.html';
  const loginButtonText = block.children[6]?.children[0]?.textContent || 'Login';

  const aLogin = document.createElement('a');
  aLogin.href = loginButtonLink;
  aLogin.className = 'header__login-btn-wrapper header-analytics_cta_click';
  aLogin.style.display = 'inline';

  const button = document.createElement('button');
  button.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
  button.textContent = loginButtonText;
  aLogin.append(button);
  div3.append(aLogin);
  header.append(div3);

  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';
  section.append(submenuContainer);

  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';
  submenuContainer.append(aside);

  const ulMenu = document.createElement('ul');
  ulMenu.className = 'header-sidebar__menu header-list-unstyled header-px-4';

  const menuItems = block.children[7].children;
  [...menuItems].forEach((itemRow) => {
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
    if (itemRow.children[3]?.textContent.toLowerCase() === 'true') {
      li.classList.add('header__menu-item--logout');
      li.style.display = 'none';
    }

    const a = document.createElement('a');
    a.href = itemRow.children[2]?.textContent || '#';
    a.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
    a.dataset.link = itemRow.children[2]?.textContent || '#';

    const img = itemRow.children[0]?.querySelector('img');
    if (img) {
      const optimizedImg = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
      moveInstrumentation(img, optimizedImg.querySelector('img'));
      optimizedImg.querySelector('img').className = 'header-sidebar__menu-icon header-me-4';
      optimizedImg.querySelector('img').loading = 'lazy';
      a.append(optimizedImg);
    }

    a.append(itemRow.children[1]?.textContent || '');
    li.append(a);
    ulMenu.append(li);
  });
  aside.append(ulMenu);

  const sidebarCurve = document.createElement('div');
  sidebarCurve.className = 'header-sidebar__curve';
  aside.append(sidebarCurve);

  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';
  aside.append(footerBrand);

  const primarySection = document.createElement('section');
  primarySection.className = 'header-footer-brand__primary';
  primarySection.style.backgroundColor = '';
  footerBrand.append(primarySection);

  const containerPrimary = document.createElement('div');
  containerPrimary.className = 'header-container';
  primarySection.append(containerPrimary);

  const primaryContent = document.createElement('div');
  primaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';
  containerPrimary.append(primaryContent);

  const leftSection = document.createElement('section');
  leftSection.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';

  const itcLogoLink = block.children[8]?.children[0]?.textContent || 'https://www.itcportal.com/';
  const itcLogoAlt = block.children[9]?.children[0]?.textContent || 'ITC Logo';
  const itcLogoSrc = block.children[10]?.children[0]?.querySelector('img')?.src;

  const aItc = document.createElement('a');
  aItc.href = itcLogoLink;
  aItc.target = '_blank';
  aItc.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  aItc.dataset.ctaRegion = 'Footer';
  aItc.setAttribute('aria-label', 'ITC Logo');

  if (itcLogoSrc) {
    const itcImg = createOptimizedPicture(itcLogoSrc, itcLogoAlt, false, [{ width: '750' }]);
    moveInstrumentation(block.children[10].children[0].querySelector('img'), itcImg.querySelector('img'));
    itcImg.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
    itcImg.querySelector('img').loading = 'lazy';
    aItc.append(itcImg);
  }
  leftSection.append(aItc);

  const fssiLogoAlt = block.children[11]?.children[0]?.textContent || 'FSSI Logo';
  const fssiLogoSrc = block.children[12]?.children[0]?.querySelector('img')?.src;
  const divFssi = document.createElement('div');
  divFssi.className = 'header-footer-brand__secondary--logo header-d-inline-block';

  if (fssiLogoSrc) {
    const fssiImg = createOptimizedPicture(fssiLogoSrc, fssiLogoAlt, false, [{ width: '750' }]);
    moveInstrumentation(block.children[12].children[0].querySelector('img'), fssiImg.querySelector('img'));
    fssiImg.querySelector('img').className = 'header-object-fit-contain header-w-100';
    fssiImg.querySelector('img').loading = 'lazy';
    divFssi.append(fssiImg);
  }
  leftSection.append(divFssi);
  primaryContent.append(leftSection);

  const rightSection = document.createElement('section');
  rightSection.className = 'header-footer-brand__right';
  const nav = document.createElement('nav');
  nav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  nav.setAttribute('aria-label', 'footer navbar');

  const navbarLeft = document.createElement('div');
  navbarLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';

  const renderFooterList = (listItems) => {
    const footerListDiv = document.createElement('div');
    footerListDiv.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';

    listItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = item.children[1]?.textContent || '#';
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.dataset.linkRegion = 'Footer List';
      if (item.children[2]?.textContent.toLowerCase() === 'true') {
        a.target = '_blank';
      }
      a.textContent = item.children[0]?.textContent || '';
      li.append(a);
      ul.append(li);
    });
    footerListDiv.append(ul);
    return footerListDiv;
  };

  navbarLeft.append(renderFooterList([...block.children[13].children]));
  navbarLeft.append(renderFooterList([...block.children[14].children]));
  nav.append(navbarLeft);

  const navbarRight = document.createElement('div');
  navbarRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
  navbarRight.append(renderFooterList([...block.children[15].children]));
  navbarRight.append(renderFooterList([...block.children[16].children]));
  nav.append(navbarRight);
  rightSection.append(nav);
  primaryContent.append(rightSection);

  const secondarySection = document.createElement('section');
  secondarySection.className = 'header-footer-brand__secondary';
  secondarySection.style.backgroundColor = '';
  footerBrand.append(secondarySection);

  const containerSecondary = document.createElement('div');
  containerSecondary.className = 'header-container';
  secondarySection.append(containerSecondary);

  const secondaryContent = document.createElement('div');
  secondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';
  containerSecondary.append(secondaryContent);

  const rightSectionSecondary = document.createElement('section');
  rightSectionSecondary.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';

  const socialMediaTitle = document.createElement('h3');
  socialMediaTitle.className = 'header-social_media--title';
  socialMediaTitle.textContent = block.children[17]?.children[0]?.textContent || 'Follow Us On';
  rightSectionSecondary.append(socialMediaTitle);

  const ulSocial = document.createElement('ul');
  ulSocial.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';

  const socialMediaItems = block.children[18].children;
  [...socialMediaItems].forEach((itemRow) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';

    const a = document.createElement('a');
    a.href = itemRow.children[1]?.textContent || '#';
    a.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
    a.dataset.ctaRegion = 'Footer';
    a.dataset.ctaLabel = `footer-${itemRow.children[2]?.textContent.toLowerCase() || ''}`;
    a.target = '_blank';
    a.dataset.platformName = itemRow.children[2]?.textContent || '';
    a.dataset.socialLinktype = 'follow';

    const img = itemRow.children[0]?.querySelector('img');
    if (img) {
      const optimizedImg = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
      moveInstrumentation(img, optimizedImg.querySelector('img'));
      optimizedImg.querySelector('img').setAttribute('aria-label', itemRow.children[2]?.textContent || '');
      optimizedImg.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
      optimizedImg.querySelector('img').alt = itemRow.children[1]?.textContent || '';
      optimizedImg.querySelector('img').loading = 'lazy';
      a.append(optimizedImg);
    }
    li.append(a);
    ulSocial.append(li);
  });
  rightSectionSecondary.append(ulSocial);
  secondaryContent.append(rightSectionSecondary);

  const leftSectionSecondary = document.createElement('section');
  leftSectionSecondary.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';

  const ulFooterLinks = document.createElement('ul');
  ulFooterLinks.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';

  const footerLinks = block.children[19].children;
  [...footerLinks].forEach((itemRow) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__left--item header-foot_link';

    const a = document.createElement('a');
    a.href = itemRow.children[1]?.textContent || '#';
    a.target = itemRow.children[2]?.textContent.toLowerCase() === 'true' ? '_blank' : '';
    a.className = 'header-footer-brand__left--link header-analytics_cta_click';
    a.dataset.ctaRegion = 'Footer';
    a.textContent = itemRow.children[0]?.textContent || '';
    li.append(a);
    ulFooterLinks.append(li);
  });
  leftSectionSecondary.append(ulFooterLinks);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
  const copyrightSpan = document.createElement('span');
  copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpan.textContent = block.children[20]?.children[0]?.textContent || '© 2025 Bingo! All Rights Reserved.';
  copyrightDiv.append(copyrightSpan);
  leftSectionSecondary.append(copyrightDiv);
  secondaryContent.append(leftSectionSecondary);

  const overlay = document.createElement('div');
  overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.append(overlay);

  block.textContent = '';
  block.append(section);
}
