import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('header-position-relative', 'header-mb-15');

  const appNameSpan = block.children[0].children[0];
  appNameSpan.classList.add('header-d-none', 'header-app-name');
  appNameSpan.dataset.appName = appNameSpan.textContent;

  const headerElement = block.children[0].children[1];
  headerElement.classList.add('header-boing-container', 'header-d-flex', 'header-justify-content-between', 'header-align-items-center', 'header-h-15', 'header-px-5', 'header-py-2', 'header-fixed-top', 'header-w-100', 'header-bg-white');

  const headerLeftDiv = headerElement.children[0];
  headerLeftDiv.classList.add('header-d-flex', 'header-w-25');
  const hamburgerIcon = headerLeftDiv.children[0].children[0].children[0];
  const hamburgerImg = document.createElement('img');
  hamburgerImg.src = hamburgerIcon.textContent;
  hamburgerImg.alt = 'Hamburger Menu';
  moveInstrumentation(hamburgerIcon, hamburgerImg);
  headerLeftDiv.innerHTML = '';
  headerLeftDiv.append(hamburgerImg);

  const headerMiddleDiv = headerElement.children[1];
  headerMiddleDiv.classList.add('header-d-flex', 'header-justify-content-center', 'header-w-25');
  const logoLink = headerMiddleDiv.children[0];
  logoLink.classList.add('header-analytics_cta_click');
  logoLink.dataset.ct = '';
  logoLink.ariaLabel = 'header-logo-boing';
  const logoDiv = logoLink.children[0];
  logoDiv.classList.add('header__logo', 'header-d-flex', 'header-align-items-center');
  const logoImg = logoDiv.children[0];
  logoImg.classList.add('header__logo-img');

  const headerRightDiv = headerElement.children[2];
  headerRightDiv.classList.add('header-d-flex', 'header-w-25', 'header-justify-content-end');
  const loginLink = headerRightDiv.children[0];
  loginLink.classList.add('header__login-btn-wrapper', 'header-analytics_cta_click');
  loginLink.style.display = 'inline';
  const loginButton = loginLink.children[0];
  loginButton.classList.add('header__login-btn', 'header-btn', 'header-text-boing-primary', 'header-bg-transparent', 'header-fw-semibold', 'header-rounded-4', 'header-btn-sm', 'header-py-3', 'header-px-4');

  const submenuContainer = block.children[0].children[2];
  submenuContainer.classList.add('header-submenu-container', 'header-position-fixed', 'header-top-0', 'header-start-0', 'header-end-0', 'header-m-auto', 'header-overflow-hidden');

  const sidebarAside = submenuContainer.children[0];
  sidebarAside.classList.add('header-sidebar', 'header-start-0', 'header-bg-white', 'header-position-absolute');

  const sidebarMenuUl = sidebarAside.children[0];
  sidebarMenuUl.classList.add('header-sidebar__menu', 'header-list-unstyled', 'header-px-4');

  [...sidebarMenuUl.children].forEach((li) => {
    li.classList.add('header-sidebar__menu-item', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
    const link = li.children[0];
    link.classList.add('header-sidebar__menu-link', 'header-d-flex', 'header-align-items-center', 'header-text-decoration-none', 'header-px-6', 'header-fw-medium', 'header-analytics_cta_click');
    link.dataset.link = link.href;
    const img = link.children[0];
    img.classList.add('header-sidebar__menu-icon', 'header-me-4');
    img.loading = 'lazy';
  });

  const logoutLi = sidebarMenuUl.children[sidebarMenuUl.children.length - 1];
  logoutLi.classList.add('header__menu-item--logout');
  logoutLi.style.display = 'none';

  const sidebarCurveDiv = sidebarAside.children[1];
  sidebarCurveDiv.classList.add('header-sidebar__curve');

  const footerBrandDiv = sidebarAside.children[2];
  footerBrandDiv.classList.add('header-footer-brand', 'header-w-100', 'header-bg-boing-neutral-gray-600');

  const footerPrimarySection = footerBrandDiv.children[0];
  footerPrimarySection.classList.add('header-footer-brand__primary');
  footerPrimarySection.style.backgroundColor = '';

  const footerContainerDiv = footerPrimarySection.children[0];
  footerContainerDiv.classList.add('header-container');

  const footerPrimaryContentDiv = footerContainerDiv.children[0];
  footerPrimaryContentDiv.classList.add('header-footer-brand__primary--content', 'header-d-flex', 'header-flex-column', 'header-flex-md-row', 'header-justify-content-md-between', 'header-align-items-center');

  const footerLeftSection = footerPrimaryContentDiv.children[0];
  footerLeftSection.classList.add('header-footer-brand__left', 'header-d-flex', 'header-gap-16', 'header-px-10', 'header-align-items-center', 'header-justify-content-center');

  const itcLogoLink = footerLeftSection.children[0];
  itcLogoLink.classList.add('header-footer-brand__logo', 'header-d-inline-block', 'header-analytics_cta_click');
  itcLogoLink.dataset.ctaRegion = 'Footer';
  itcLogoLink.ariaLabel = 'ITC Logo';
  itcLogoLink.target = '_blank';
  const itcLogoImg = itcLogoLink.children[0].children[0];
  itcLogoImg.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
  itcLogoImg.loading = 'lazy';

  const fssiLogoDiv = footerLeftSection.children[1];
  fssiLogoDiv.classList.add('header-footer-brand__secondary--logo', 'header-d-inline-block');
  const fssiLogoImg = fssiLogoDiv.children[0].children[0];
  fssiLogoImg.classList.add('header-object-fit-contain', 'header-w-100');
  fssiLogoImg.loading = 'lazy';

  const footerRightSection = footerPrimaryContentDiv.children[1];
  footerRightSection.classList.add('header-footer-brand__right');

  const footerNavbar = footerRightSection.children[0];
  footerNavbar.classList.add('header-footer-brand__navbar', 'header-d-grid', 'header-d-md-flex');
  footerNavbar.ariaLabel = 'footer navbar';

  const footerNavbarLeftDiv = footerNavbar.children[0];
  footerNavbarLeftDiv.classList.add('header-footer-brand__navbar--left', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');

  [...footerNavbarLeftDiv.children].forEach((footerListDiv) => {
    footerListDiv.classList.add('header-footerList');
    const ul = footerListDiv.children[0];
    ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
    [...ul.children].forEach((li) => {
      li.classList.add('header-footer-list__item');
      const link = li.children[0];
      link.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
      link.dataset.linkRegion = 'Footer List';
    });
  });

  const footerNavbarRightDiv = footerNavbar.children[1];
  footerNavbarRightDiv.classList.add('header-footer-brand__navbar--right', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');

  [...footerNavbarRightDiv.children].forEach((footerListDiv) => {
    footerListDiv.classList.add('header-footerList');
    const ul = footerListDiv.children[0];
    ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
    [...ul.children].forEach((li) => {
      li.classList.add('header-footer-list__item');
      const link = li.children[0];
      link.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
      link.dataset.linkRegion = 'Footer List';
    });
  });

  const footerSecondarySection = footerBrandDiv.children[1];
  footerSecondarySection.classList.add('header-footer-brand__secondary');
  footerSecondarySection.style.backgroundColor = '';

  const footerSecondaryContainerDiv = footerSecondarySection.children[0];
  footerSecondaryContainerDiv.classList.add('header-container');

  const footerSecondaryContentDiv = footerSecondaryContainerDiv.children[0];
  footerSecondaryContentDiv.classList.add('header-footer-brand__secondary--content', 'header-d-flex', 'header-flex-column', 'header-justify-content-md-between', 'header-align-items-center');

  const socialMediaSection = footerSecondaryContentDiv.children[0];
  socialMediaSection.classList.add('header-footer-brand__right', 'header-d-flex', 'header-flex-column', 'header-pb-5');

  const socialMediaTitle = socialMediaSection.children[0];
  socialMediaTitle.classList.add('header-social_media--title');

  const socialMediaList = socialMediaSection.children[1];
  socialMediaList.classList.add('header-footer-brand__right--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-px-10', 'header-flex-wrap');

  [...socialMediaList.children].forEach((li) => {
    li.classList.add('header-footer-brand__right--item', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center');
    const link = li.children[0];
    link.classList.add('header-footer-brand__right--link', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center', 'header-analytics_cta_click');
    link.dataset.ctaRegion = 'Footer';
    link.target = '_blank';
    const img = link.children[0].children[0];
    img.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
    img.loading = 'lazy';
  });

  const footerBottomLeftSection = footerSecondaryContentDiv.children[1];
  footerBottomLeftSection.classList.add('header-footer-brand__left', 'header-py-5', 'header-d-flex', 'header-flex-column', 'header-gap-3');

  const footerBottomLeftList = footerBottomLeftSection.children[0];
  footerBottomLeftList.classList.add('header-footer-brand__left--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-flex-wrap');

  [...footerBottomLeftList.children].forEach((li) => {
    li.classList.add('header-footer-brand__left--item', 'header-foot_link');
    const link = li.children[0];
    link.classList.add('header-footer-brand__left--link', 'header-analytics_cta_click');
    link.dataset.ctaRegion = 'Footer';
    link.target = '_blank';
  });

  const copyrightDiv = footerBottomLeftSection.children[1];
  copyrightDiv.classList.add('header-footer-brand__left--copyright', 'header-text-center');
  const copyrightSpan = copyrightDiv.children[0];
  copyrightSpan.classList.add('header-footer-brand__left--text', 'header-text-white');

  const overlayDiv = submenuContainer.children[1];
  overlayDiv.classList.add('header-overlay', 'header-position-absolute', 'header-top-0', 'header-start-0', 'header-w-100', 'header-h-100', 'header-bg-black', 'header-opacity-25');

  // Move elements to the correct structure
  const newBlock = document.createElement('section');
  newBlock.className = block.className;
  moveInstrumentation(block, newBlock);

  // Reconstruct the block content dynamically
  const appName = appNameSpan.textContent;
  const hamburger = hamburgerImg.src;
  const logo = logoImg.src;
  const logoAlt = logoImg.alt;
  const loginText = loginButton.textContent;
  const itc = itcLogoImg.src;
  const fssi = fssiLogoImg.src;
  const socialTitle = socialMediaTitle.textContent;
  const copyright = copyrightSpan.textContent;

  const menuItems = [...sidebarMenuUl.children].map((li) => ({
    icon: li.querySelector('img').src,
    text: li.querySelector('a').textContent.trim(),
    link: li.querySelector('a').href,
  }));

  const footerLists = [...footerNavbarLeftDiv.children, ...footerNavbarRightDiv.children].map((listDiv) =>
    [...listDiv.querySelector('ul').children].map((li) => ({
      text: li.querySelector('a').textContent.trim(),
      link: li.querySelector('a').href,
    }))
  );

  const socialMediaItems = [...socialMediaList.children].map((li) => ({
    icon: li.querySelector('img').src,
    link: li.querySelector('a').href,
  }));

  const footerLinks = [...footerBottomLeftList.children].map((li) => ({
    text: li.querySelector('a').textContent.trim(),
    link: li.querySelector('a').href,
  }));

  // Clear the original block and append the new structure
  block.textContent = '';

  const appNameEl = document.createElement('span');
  appNameEl.className = 'header-d-none header-app-name';
  appNameEl.dataset.appName = appName;
  appNameEl.textContent = appName;
  block.append(appNameEl);

  const headerEl = document.createElement('header');
  headerEl.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

  const leftDiv = document.createElement('div');
  leftDiv.className = 'header-d-flex header-w-25';
  const hamImg = document.createElement('img');
  hamImg.src = hamburger;
  hamImg.alt = 'Hamburger Menu';
  leftDiv.append(hamImg);
  headerEl.append(leftDiv);

  const middleDiv = document.createElement('div');
  middleDiv.className = 'header-d-flex header-justify-content-center header-w-25';
  const logoA = document.createElement('a');
  logoA.href = '/';
  logoA.className = 'header-analytics_cta_click';
  logoA.dataset.ct = '';
  logoA.ariaLabel = 'header-logo-boing';
  const logoDivEl = document.createElement('div');
  logoDivEl.className = 'header__logo header-d-flex header-align-items-center';
  const logoImgEl = document.createElement('img');
  logoImgEl.src = logo;
  logoImgEl.alt = logoAlt;
  logoImgEl.className = 'header__logo-img';
  logoDivEl.append(logoImgEl);
  logoA.append(logoDivEl);
  middleDiv.append(logoA);
  headerEl.append(middleDiv);

  const rightDiv = document.createElement('div');
  rightDiv.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginA = document.createElement('a');
  loginA.href = '/login.html';
  loginA.className = 'header__login-btn-wrapper header-analytics_cta_click';
  loginA.style.display = 'inline';
  const loginBtn = document.createElement('button');
  loginBtn.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
  loginBtn.textContent = loginText;
  loginA.append(loginBtn);
  rightDiv.append(loginA);
  headerEl.append(rightDiv);
  block.append(headerEl);

  const submenuDiv = document.createElement('div');
  submenuDiv.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  const asideEl = document.createElement('aside');
  asideEl.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  const menuUl = document.createElement('ul');
  menuUl.className = 'header-sidebar__menu header-list-unstyled header-px-4';
  menuItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
    const a = document.createElement('a');
    a.href = item.link;
    a.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
    a.dataset.link = item.link;
    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = item.text;
    img.className = 'header-sidebar__menu-icon header-me-4';
    img.loading = 'lazy';
    a.append(img, item.text);
    li.append(a);
    menuUl.append(li);
  });
  const logoutLi = document.createElement('li');
  logoutLi.className = 'header-sidebar__menu-item header__menu-item--logout header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
  logoutLi.style.display = 'none';
  const logoutA = document.createElement('a');
  logoutA.href = '/';
  logoutA.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
  logoutA.dataset.link = '/content/boing/in/en/home';
  const logoutImg = document.createElement('img');
  logoutImg.src = '/content/dam/aemigrate/uploaded-folder/image/logout-3?fmt=webp-alpha.webp';
  logoutImg.alt = 'Logout';
  logoutImg.className = 'header-sidebar__menu-icon header-me-4';
  logoutImg.loading = 'lazy';
  logoutA.append(logoutImg, 'Logout');
  logoutLi.append(logoutA);
  menuUl.append(logoutLi);
  asideEl.append(menuUl);

  const curveDiv = document.createElement('div');
  curveDiv.className = 'header-sidebar__curve';
  asideEl.append(curveDiv);

  const footerBrandEl = document.createElement('div');
  footerBrandEl.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

  const primarySection = document.createElement('section');
  primarySection.className = 'header-footer-brand__primary';
  primarySection.style.backgroundColor = '';
  const containerDiv = document.createElement('div');
  containerDiv.className = 'header-container';
  const primaryContentDiv = document.createElement('div');
  primaryContentDiv.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';

  const footerLeftSectionEl = document.createElement('section');
  footerLeftSectionEl.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';

  const itcA = document.createElement('a');
  itcA.href = 'https://www.itcportal.com/';
  itcA.target = '_blank';
  itcA.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  itcA.dataset.ctaRegion = 'Footer';
  itcA.ariaLabel = 'ITC Logo';
  const itcImg = document.createElement('img');
  itcImg.src = itc;
  itcImg.alt = 'ITC Logo';
  itcImg.className = 'header-object-fit-contain header-w-100 header-h-100';
  itcImg.loading = 'lazy';
  itcA.append(itcImg);
  footerLeftSectionEl.append(itcA);

  const fssiDiv = document.createElement('div');
  fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
  const fssiImg = document.createElement('img');
  fssiImg.className = 'header-object-fit-contain header-w-100';
  fssiImg.src = fssi;
  fssiImg.alt = 'FSSI Logo';
  fssiImg.loading = 'lazy';
  fssiDiv.append(fssiImg);
  footerLeftSectionEl.append(fssiDiv);
  primaryContentDiv.append(footerLeftSectionEl);

  const footerRightSectionEl = document.createElement('section');
  footerRightSectionEl.className = 'header-footer-brand__right';
  const navEl = document.createElement('nav');
  navEl.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  navEl.ariaLabel = 'footer navbar';

  const navLeftDiv = document.createElement('div');
  navLeftDiv.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row';
  footerLists.slice(0, 2).forEach((list) => {
    const listDiv = document.createElement('div');
    listDiv.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    list.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = item.link;
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.dataset.linkRegion = 'Footer List';
      a.textContent = item.text;
      li.append(a);
      ul.append(li);
    });
    listDiv.append(ul);
    navLeftDiv.append(listDiv);
  });
  navEl.append(navLeftDiv);

  const navRightDiv = document.createElement('div');
  navRightDiv.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
  footerLists.slice(2, 4).forEach((list) => {
    const listDiv = document.createElement('div');
    listDiv.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    list.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = item.link;
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.dataset.linkRegion = 'Footer List';
      a.textContent = item.text;
      li.append(a);
      ul.append(li);
    });
    listDiv.append(ul);
    navRightDiv.append(listDiv);
  });
  navEl.append(navRightDiv);
  footerRightSectionEl.append(navEl);
  primaryContentDiv.append(footerRightSectionEl);
  containerDiv.append(primaryContentDiv);
  primarySection.append(containerDiv);
  footerBrandEl.append(primarySection);

  const secondarySection = document.createElement('section');
  secondarySection.className = 'header-footer-brand__secondary';
  secondarySection.style.backgroundColor = '';
  const secondaryContainerDiv = document.createElement('div');
  secondaryContainerDiv.className = 'header-container';
  const secondaryContentDiv = document.createElement('div');
  secondaryContentDiv.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column header-justify-content-md-between header-align-items-center';

  const socialMediaSectionEl = document.createElement('section');
  socialMediaSectionEl.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
  const socialMediaTitleEl = document.createElement('h3');
  socialMediaTitleEl.className = 'header-social_media--title';
  socialMediaTitleEl.textContent = socialTitle;
  socialMediaSectionEl.append(socialMediaTitleEl);

  const socialMediaUl = document.createElement('ul');
  socialMediaUl.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';
  socialMediaItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    const a = document.createElement('a');
    a.href = item.link;
    a.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
    a.dataset.ctaRegion = 'Footer';
    a.dataset.ctaLabel = `footer-${item.link.includes('facebook') ? 'facebook' : item.link.includes('instagram') ? 'instagram' : 'youtube'}`;
    a.target = '_blank';
    a.dataset.platformName = item.link.includes('facebook') ? 'facebook' : item.link.includes('instagram') ? 'instagram' : 'youtube';
    a.dataset.socialLinktype = 'follow';
    const img = document.createElement('img');
    img.ariaLabel = item.link.includes('facebook') ? 'facebook' : item.link.includes('instagram') ? 'instagram' : 'youtube';
    img.src = item.icon;
    img.className = 'header-object-fit-contain header-w-100 header-h-100';
    img.alt = item.link;
    img.loading = 'lazy';
    a.append(img);
    li.append(a);
    socialMediaUl.append(li);
  });
  socialMediaSectionEl.append(socialMediaUl);
  secondaryContentDiv.append(socialMediaSectionEl);

  const footerBottomLeftSectionEl = document.createElement('section');
  footerBottomLeftSectionEl.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  const footerBottomLeftUl = document.createElement('ul');
  footerBottomLeftUl.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
  footerLinks.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__left--item header-foot_link';
    const a = document.createElement('a');
    a.href = item.link;
    a.target = '_blank';
    a.className = 'header-footer-brand__left--link header-analytics_cta_click';
    a.dataset.ctaRegion = 'Footer';
    a.textContent = item.text;
    li.append(a);
    footerBottomLeftUl.append(li);
  });
  footerBottomLeftSectionEl.append(footerBottomLeftUl);

  const copyrightDivEl = document.createElement('div');
  copyrightDivEl.className = 'header-footer-brand__left--copyright header-text-center';
  const copyrightSpanEl = document.createElement('span');
  copyrightSpanEl.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpanEl.textContent = copyright;
  copyrightDivEl.append(copyrightSpanEl);
  footerBottomLeftSectionEl.append(copyrightDivEl);
  secondaryContentDiv.append(footerBottomLeftSectionEl);

  secondaryContainerDiv.append(secondaryContentDiv);
  secondarySection.append(secondaryContainerDiv);
  footerBrandEl.append(secondarySection);
  asideEl.append(footerBrandEl);
  submenuDiv.append(asideEl);

  const overlayEl = document.createElement('div');
  overlayEl.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuDiv.append(overlayEl);

  block.append(submenuDiv);
}