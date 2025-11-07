import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const section = document.createElement('section');
  section.className = 'header-position-relative header-mb-15';

  const appNameSpan = document.createElement('span');
  appNameSpan.className = 'header-d-none header-app-name';
  appNameSpan.setAttribute('data-app-name', 'boing');
  appNameSpan.textContent = 'boing';
  section.append(appNameSpan);

  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

  const headerDiv1 = document.createElement('div');
  headerDiv1.className = 'header-d-flex header-w-25';
  const headerDiv1Content = block.children[0]?.children[0];
  if (headerDiv1Content) {
    moveInstrumentation(headerDiv1Content, headerDiv1);
    headerDiv1.append(...headerDiv1Content.children);
  }
  header.append(headerDiv1);

  const headerDiv2 = document.createElement('div');
  headerDiv2.className = 'header-d-flex header-justify-content-center header-w-25';
  const headerLink = document.createElement('a');
  headerLink.href = '/';
  headerLink.className = 'header-analytics_cta_click';
  headerLink.setAttribute('data-ct', '');
  headerLink.setAttribute('a-label', 'header-logo-boing');
  const headerLogoDiv = document.createElement('div');
  headerLogoDiv.className = 'header__logo header-d-flex header-align-items-center';
  const headerLogoImg = document.createElement('img');
  headerLogoImg.src = '/content/dam/aemigrate/uploaded-folder/image/lets-boing-logo?fmt=webp-alpha.webp';
  headerLogoImg.alt = "Let's Boing";
  headerLogoImg.className = 'header__logo-img';
  headerLogoDiv.append(headerLogoImg);
  headerLink.append(headerLogoDiv);
  headerDiv2.append(headerLink);
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

  const ulMenu = document.createElement('ul');
  ulMenu.className = 'header-sidebar__menu header-list-unstyled header-px-4';

  const menuItems = Array.from(block.children).filter((row, index) => index >= 1 && index <= 5);
  menuItems.forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = row.classList.value;
    const link = row.querySelector('a');
    const img = row.querySelector('img');
    const text = row.textContent.trim();

    if (link && img) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
      newLink.setAttribute('data-link', link.getAttribute('data-link'));

      const newImg = document.createElement('img');
      newImg.src = img.src;
      newImg.alt = img.alt;
      newImg.className = 'header-sidebar__menu-icon header-me-4';
      newImg.loading = 'lazy';

      newLink.append(newImg);
      newLink.append(document.createTextNode(text));
      li.append(newLink);
    }
    ulMenu.append(li);
  });
  aside.append(ulMenu);

  const curveDiv = document.createElement('div');
  curveDiv.className = 'header-sidebar__curve';
  aside.append(curveDiv);

  const footerBrandDiv = document.createElement('div');
  footerBrandDiv.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

  const primarySection = document.createElement('section');
  primarySection.className = 'header-footer-brand__primary';
  primarySection.style.backgroundColor = '';
  const containerDiv = document.createElement('div');
  containerDiv.className = 'header-container';
  const primaryContentDiv = document.createElement('div');
  primaryContentDiv.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';

  const leftSection = document.createElement('section');
  leftSection.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';
  
  const itcLogoLink = document.createElement('a');
  itcLogoLink.href = 'https://www.itcportal.com/';
  itcLogoLink.target = '_blank';
  itcLogoLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  itcLogoLink.setAttribute('data-cta-region', 'Footer');
  itcLogoLink.setAttribute('aria-label', 'ITC Logo');
  const itcLogoImg = document.createElement('img');
  itcLogoImg.src = '/content/dam/aemigrate/uploaded-folder/image/itc-logo-2?fmt=webp-alpha.webp';
  itcLogoImg.alt = 'ITC Logo';
  itcLogoImg.className = 'header-object-fit-contain header-w-100 header-h-100';
  itcLogoImg.loading = 'lazy';
  itcLogoLink.append(itcLogoImg);
  leftSection.append(itcLogoLink);

  const fssiLogoDiv = document.createElement('div');
  fssiLogoDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
  const fssiLogoImg = document.createElement('img');
  fssiLogoImg.className = 'header-object-fit-contain header-w-100';
  fssiLogoImg.src = '/content/dam/aemigrate/uploaded-folder/image/fssi-logo-update?fmt=webp-alpha.webp';
  fssiLogoImg.alt = 'FSSI Logo';
  fssiLogoImg.loading = 'lazy';
  fssiLogoDiv.append(fssiLogoImg);
  leftSection.append(fssiLogoDiv);
  primaryContentDiv.append(leftSection);

  const rightSection = document.createElement('section');
  rightSection.className = 'header-footer-brand__right';
  const nav = document.createElement('nav');
  nav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  nav.setAttribute('aria-label', 'footer navbar');

  const navbarLeftDiv = document.createElement('div');
  navbarLeftDiv.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';

  const footerList1 = document.createElement('div');
  footerList1.className = 'header-footerList';
  const ulFooter1 = document.createElement('ul');
  ulFooter1.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
  const footerListItems1 = Array.from(block.children).filter((row, index) => index >= 6 && index <= 8);
  footerListItems1.forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'header-footer-list__item';
    const link = row.querySelector('a');
    if (link) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      newLink.setAttribute('data-link-region', 'Footer List');
      newLink.textContent = link.textContent.trim();
      li.append(newLink);
    }
    ulFooter1.append(li);
  });
  footerList1.append(ulFooter1);
  navbarLeftDiv.append(footerList1);

  const footerList2 = document.createElement('div');
  footerList2.className = 'header-footerList';
  const ulFooter2 = document.createElement('ul');
  ulFooter2.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
  const footerListItems2 = Array.from(block.children).filter((row, index) => index >= 9 && index <= 11);
  footerListItems2.forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'header-footer-list__item';
    const link = row.querySelector('a');
    if (link) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      newLink.setAttribute('data-link-region', 'Footer List');
      newLink.textContent = link.textContent.trim();
      li.append(newLink);
    }
    ulFooter2.append(li);
  });
  footerList2.append(ulFooter2);
  navbarLeftDiv.append(footerList2);
  nav.append(navbarLeftDiv);

  const navbarRightDiv = document.createElement('div');
  navbarRightDiv.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';

  const footerList3 = document.createElement('div');
  footerList3.className = 'header-footerList';
  const ulFooter3 = document.createElement('ul');
  ulFooter3.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
  const footerListItems3 = Array.from(block.children).filter((row, index) => index >= 12 && index <= 14);
  footerListItems3.forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'header-footer-list__item';
    const link = row.querySelector('a');
    if (link) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      newLink.setAttribute('data-link-region', 'Footer List');
      if (link.target) newLink.target = link.target;
      newLink.textContent = link.textContent.trim();
      li.append(newLink);
    }
    ulFooter3.append(li);
  });
  footerList3.append(ulFooter3);
  navbarRightDiv.append(footerList3);

  const footerList4 = document.createElement('div');
  footerList4.className = 'header-footerList';
  const ulFooter4 = document.createElement('ul');
  ulFooter4.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
  const footerListItems4 = Array.from(block.children).filter((row, index) => index >= 15 && index <= 17);
  footerListItems4.forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'header-footer-list__item';
    const link = row.querySelector('a');
    if (link) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      newLink.setAttribute('data-link-region', 'Footer List');
      newLink.textContent = link.textContent.trim();
      li.append(newLink);
    }
    ulFooter4.append(li);
  });
  footerList4.append(ulFooter4);
  navbarRightDiv.append(footerList4);
  nav.append(navbarRightDiv);
  rightSection.append(nav);
  primaryContentDiv.append(rightSection);
  containerDiv.append(primaryContentDiv);
  primarySection.append(containerDiv);
  footerBrandDiv.append(primarySection);

  const secondarySection = document.createElement('section');
  secondarySection.className = 'header-footer-brand__secondary';
  secondarySection.style.backgroundColor = '';
  const secondaryContainerDiv = document.createElement('div');
  secondaryContainerDiv.className = 'header-container';
  const secondaryContentDiv = document.createElement('div');
  secondaryContentDiv.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column header-justify-content-md-between header-align-items-center';

  const socialMediaSection = document.createElement('section');
  socialMediaSection.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
  const socialMediaTitle = document.createElement('h3');
  socialMediaTitle.className = 'header-social_media--title';
  socialMediaTitle.textContent = 'Follow Us On';
  socialMediaSection.append(socialMediaTitle);
  const ulSocial = document.createElement('ul');
  ulSocial.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';

  const socialMediaItems = Array.from(block.children).filter((row, index) => index >= 18 && index <= 20);
  socialMediaItems.forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    const link = row.querySelector('a');
    const img = row.querySelector('img');
    if (link && img) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
      newLink.setAttribute('data-cta-region', 'Footer');
      newLink.setAttribute('data-cta-label', link.getAttribute('data-cta-label'));
      newLink.target = '_blank';
      newLink.setAttribute('data-platform-name', link.getAttribute('data-platform-name'));
      newLink.setAttribute('data-social-linktype', 'follow');

      const newImg = document.createElement('img');
      newImg.setAttribute('aria-label', img.getAttribute('aria-label'));
      newImg.src = img.src;
      newImg.className = 'header-object-fit-contain header-w-100 header-h-100';
      newImg.alt = img.alt;
      newImg.loading = 'lazy';
      newLink.append(newImg);
      li.append(newLink);
    }
    ulSocial.append(li);
  });
  socialMediaSection.append(ulSocial);
  secondaryContentDiv.append(socialMediaSection);

  const footerLeftSection = document.createElement('section');
  footerLeftSection.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  const ulFooterLinks = document.createElement('ul');
  ulFooterLinks.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';

  const footerLinks = Array.from(block.children).filter((row, index) => index >= 21 && index <= 21);
  footerLinks.forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.className = 'header-footer-brand__left--item header-foot_link';
    const link = row.querySelector('a');
    if (link) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.target = '_blank';
      newLink.className = 'header-footer-brand__left--link header-analytics_cta_click';
      newLink.setAttribute('data-cta-region', 'Footer');
      newLink.textContent = link.textContent.trim();
      li.append(newLink);
    }
    ulFooterLinks.append(li);
  });
  footerLeftSection.append(ulFooterLinks);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
  const copyrightSpan = document.createElement('span');
  copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpan.textContent = '© 2025 Bingo! All Rights Reserved.';
  copyrightDiv.append(copyrightSpan);
  footerLeftSection.append(copyrightDiv);
  secondaryContentDiv.append(footerLeftSection);

  secondaryContainerDiv.append(secondaryContentDiv);
  secondarySection.append(secondaryContainerDiv);
  footerBrandDiv.append(secondarySection);

  aside.append(footerBrandDiv);
  submenuContainer.append(aside);

  const overlayDiv = document.createElement('div');
  overlayDiv.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.append(overlayDiv);
  section.append(submenuContainer);

  block.textContent = '';
  block.append(section);
}
