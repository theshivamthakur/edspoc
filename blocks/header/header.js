import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const appName = block.children[0]?.children[0]?.textContent;
  const headerLogo = block.children[0]?.children[1]?.querySelector('img');
  const loginButtonLink = block.children[0]?.children[2]?.querySelector('a');
  const loginButtonText = loginButtonLink?.textContent;
  const footerLogo1 = block.children[0]?.children[3]?.querySelector('img');
  const footerLogo2 = block.children[0]?.children[4]?.querySelector('img');

  const headerMenuItems = [...block.children].slice(1, -2);
  const footerLinks = [...block.children].slice(-2, -1);
  const socialLinks = [...block.children].slice(-1);

  block.textContent = '';

  const section = document.createElement('section');
  section.className = 'header-position-relative header-mb-15';

  if (appName) {
    const appNameSpan = document.createElement('span');
    appNameSpan.className = 'header-d-none header-app-name';
    appNameSpan.setAttribute('data-app-name', appName);
    appNameSpan.textContent = appName;
    section.append(appNameSpan);
  }

  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

  const div1 = document.createElement('div');
  div1.className = 'header-d-flex header-w-25';
  // Assuming some content for the first div, if it's dynamic, it needs to be extracted from block.children
  // For now, it's empty as per the provided HTML structure without explicit block content.
  section.append(div1);

  const div2 = document.createElement('div');
  div2.className = 'header-d-flex  header-justify-content-center header-w-25';
  if (headerLogo) {
    const logoLink = document.createElement('a');
    logoLink.href = '/'; // Assuming fixed link for logo
    logoLink.className = 'header-analytics_cta_click';
    logoLink.setAttribute('data-ct', '');
    logoLink.setAttribute('a-label', 'header-logo-boing');

    const logoDiv = document.createElement('div');
    logoDiv.className = 'header__logo header-d-flex header-align-items-center';

    const optimizedLogo = createOptimizedPicture(headerLogo.src, headerLogo.alt);
    moveInstrumentation(headerLogo, optimizedLogo.querySelector('img'));
    optimizedLogo.querySelector('img').className = 'header__logo-img';
    logoDiv.append(optimizedLogo);
    logoLink.append(logoDiv);
    div2.append(logoLink);
  }
  header.append(div1, div2);

  const div3 = document.createElement('div');
  div3.className = 'header-d-flex header-w-25 header-justify-content-end';
  if (loginButtonLink && loginButtonText) {
    const loginWrapper = document.createElement('a');
    loginWrapper.href = loginButtonLink.href;
    loginWrapper.className = 'header__login-btn-wrapper header-analytics_cta_click';
    loginWrapper.style.display = 'inline';

    const loginButton = document.createElement('button');
    loginButton.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
    loginButton.textContent = loginButtonText;
    loginWrapper.append(loginButton);
    div3.append(loginWrapper);
  }
  header.append(div3);
  section.append(header);

  const subMenuContainer = document.createElement('div');
  subMenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  const ulMenu = document.createElement('ul');
  ulMenu.className = 'header-sidebar__menu header-list-unstyled header-px-4';

  headerMenuItems.forEach((row) => {
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
    moveInstrumentation(row, li);

    const link = row.children[0]?.querySelector('a');
    const img = row.children[0]?.querySelector('img');

    if (link && img) {
      const menuLink = document.createElement('a');
      menuLink.href = link.href;
      menuLink.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
      menuLink.setAttribute('data-link', link.getAttribute('data-link') || '');

      const optimizedIcon = createOptimizedPicture(img.src, img.alt);
      moveInstrumentation(img, optimizedIcon.querySelector('img'));
      optimizedIcon.querySelector('img').className = 'header-sidebar__menu-icon header-me-4';
      optimizedIcon.querySelector('img').setAttribute('loading', 'lazy');
      menuLink.append(optimizedIcon);
      menuLink.append(document.createTextNode(link.textContent.trim()));
      li.append(menuLink);
    }
    ulMenu.append(li);
  });
  aside.append(ulMenu);

  const sidebarCurve = document.createElement('div');
  sidebarCurve.className = 'header-sidebar__curve';
  aside.append(sidebarCurve);

  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

  const footerPrimary = document.createElement('section');
  footerPrimary.className = 'header-footer-brand__primary';
  footerPrimary.style.backgroundColor = '';

  const container = document.createElement('div');
  container.className = 'header-container';

  const primaryContent = document.createElement('div');
  primaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';

  const footerBrandLeft = document.createElement('section');
  footerBrandLeft.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';

  if (footerLogo1) {
    const logoLink1 = document.createElement('a');
    logoLink1.href = 'https://www.itcportal.com/';
    logoLink1.target = '_blank';
    logoLink1.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
    logoLink1.setAttribute('data-cta-region', 'Footer');
    logoLink1.setAttribute('aria-label', 'ITC Logo');

    const optimizedLogo1 = createOptimizedPicture(footerLogo1.src, footerLogo1.alt);
    moveInstrumentation(footerLogo1, optimizedLogo1.querySelector('img'));
    optimizedLogo1.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
    optimizedLogo1.querySelector('img').setAttribute('loading', 'lazy');
    logoLink1.append(optimizedLogo1);
    footerBrandLeft.append(logoLink1);
  }

  if (footerLogo2) {
    const logoDiv2 = document.createElement('div');
    logoDiv2.className = 'header-footer-brand__secondary--logo header-d-inline-block';

    const optimizedLogo2 = createOptimizedPicture(footerLogo2.src, footerLogo2.alt);
    moveInstrumentation(footerLogo2, optimizedLogo2.querySelector('img'));
    optimizedLogo2.querySelector('img').className = 'header-object-fit-contain header-w-100';
    optimizedLogo2.querySelector('img').setAttribute('loading', 'lazy');
    logoDiv2.append(optimizedLogo2);
    footerBrandLeft.append(logoDiv2);
  }
  primaryContent.append(footerBrandLeft);

  const footerBrandRight = document.createElement('section');
  footerBrandRight.className = 'header-footer-brand__right';

  const nav = document.createElement('nav');
  nav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  nav.setAttribute('aria-label', 'footer navbar');

  const navbarLeft = document.createElement('div');
  navbarLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';

  const navbarRight = document.createElement('div');
  navbarRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';

  // Assuming footer links are grouped into two sets for left and two for right
  const footerLinkGroups = [];
  let currentGroup = [];
  footerLinks.forEach((row, index) => {
    const link = row.children[0]?.querySelector('a');
    if (link) {
      currentGroup.push(link);
    }
    if (currentGroup.length === 3 || index === footerLinks.length - 1) {
      footerLinkGroups.push(currentGroup);
      currentGroup = [];
    }
  });

  footerLinkGroups.forEach((group, groupIndex) => {
    const footerListDiv = document.createElement('div');
    footerListDiv.className = 'header-footerList';
    const ulFooter = document.createElement('ul');
    ulFooter.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';

    group.forEach((link) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const footerLink = document.createElement('a');
      footerLink.href = link.href;
      footerLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      footerLink.setAttribute('data-link-region', 'Footer List');
      if (link.target) footerLink.target = link.target;
      footerLink.textContent = link.textContent;
      li.append(footerLink);
      ulFooter.append(li);
    });
    footerListDiv.append(ulFooter);
    if (groupIndex < 2) {
      navbarLeft.append(footerListDiv);
    } else {
      navbarRight.append(footerListDiv);
    }
  });

  nav.append(navbarLeft, navbarRight);
  footerBrandRight.append(nav);
  primaryContent.append(footerBrandRight);
  container.append(primaryContent);
  footerPrimary.append(container);
  footerBrand.append(footerPrimary);

  const footerSecondary = document.createElement('section');
  footerSecondary.className = 'header-footer-brand__secondary';
  footerSecondary.style.backgroundColor = '';

  const secondaryContainer = document.createElement('div');
  secondaryContainer.className = 'header-container';

  const secondaryContent = document.createElement('div');
  secondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';

  const socialMediaSection = document.createElement('section');
  socialMediaSection.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';

  const socialTitle = document.createElement('h3');
  socialTitle.className = 'header-social_media--title';
  socialTitle.textContent = 'Follow Us On';
  socialMediaSection.append(socialTitle);

  const ulSocial = document.createElement('ul');
  ulSocial.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';

  socialLinks.forEach((row) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    moveInstrumentation(row, li);

    const link = row.children[0]?.querySelector('a');
    const img = row.children[0]?.querySelector('img');

    if (link && img) {
      const socialLink = document.createElement('a');
      socialLink.href = link.href;
      socialLink.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
      socialLink.setAttribute('data-cta-region', 'Footer');
      socialLink.setAttribute('data-cta-label', link.getAttribute('data-cta-label') || '');
      socialLink.target = '_blank';
      socialLink.setAttribute('data-platform-name', link.getAttribute('data-platform-name') || '');
      socialLink.setAttribute('data-social-linktype', 'follow');

      const optimizedSocialIcon = createOptimizedPicture(img.src, img.alt);
      moveInstrumentation(img, optimizedSocialIcon.querySelector('img'));
      optimizedSocialIcon.querySelector('img').setAttribute('aria-label', img.alt);
      optimizedSocialIcon.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
      optimizedSocialIcon.querySelector('img').setAttribute('loading', 'lazy');
      socialLink.append(optimizedSocialIcon);
      li.append(socialLink);
    }
    ulSocial.append(li);
  });
  socialMediaSection.append(ulSocial);
  secondaryContent.append(socialMediaSection);

  const copyrightSection = document.createElement('section');
  copyrightSection.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';

  const ulCopyright = document.createElement('ul');
  ulCopyright.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';

  const copyrightLi = document.createElement('li');
  copyrightLi.className = 'header-footer-brand__left--item header-foot_link';
  const copyrightLink = document.createElement('a');
  copyrightLink.href = 'https://www.itcportal.com/';
  copyrightLink.target = '_blank';
  copyrightLink.className = 'header-footer-brand__left--link header-analytics_cta_click';
  copyrightLink.setAttribute('data-cta-region', 'Footer');
  copyrightLink.textContent = 'ITC portal';
  copyrightLi.append(copyrightLink);
  ulCopyright.append(copyrightLi);
  copyrightSection.append(ulCopyright);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
  const copyrightSpan = document.createElement('span');
  copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpan.textContent = '© 2025 Bingo! All Rights Reserved.';
  copyrightDiv.append(copyrightSpan);
  copyrightSection.append(copyrightDiv);
  secondaryContent.append(copyrightSection);

  secondaryContainer.append(secondaryContent);
  footerSecondary.append(secondaryContainer);
  footerBrand.append(footerSecondary);

  aside.append(footerBrand);
  subMenuContainer.append(aside);

  const overlay = document.createElement('div');
  overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  subMenuContainer.append(overlay);

  section.append(subMenuContainer);
  block.append(section);
}
