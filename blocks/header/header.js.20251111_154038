import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const appName = block.children[0]?.children[0]?.textContent;
  const logoLink = block.children[0]?.children[1]?.querySelector('a');
  const logoImg = logoLink?.querySelector('img');
  const loginButtonLink = block.children[0]?.children[2]?.querySelector('a');
  const loginButtonText = loginButtonLink?.querySelector('button')?.textContent;

  const menuItemsContainer = block.children[1];
  const footerLinksContainer = block.children[2];
  const socialLinksContainer = block.children[3];
  const footerCopyright = block.children[4]?.children[0]?.textContent;

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
  // Assuming there might be an SVG here, if not, it will remain empty
  const svgContent = block.children[0]?.children[0]?.querySelector('svg');
  if (svgContent) {
    div1.append(svgContent.cloneNode(true));
  }
  header.append(div1);

  const div2 = document.createElement('div');
  div2.className = 'header-d-flex  header-justify-content-center header-w-25';
  if (logoLink && logoImg) {
    const newLogoLink = document.createElement('a');
    newLogoLink.href = logoLink.href;
    newLogoLink.className = 'header-analytics_cta_click';
    newLogoLink.setAttribute('data-ct', '');
    newLogoLink.setAttribute('a-label', 'header-logo-boing');

    const logoDiv = document.createElement('div');
    logoDiv.className = 'header__logo header-d-flex header-align-items-center';

    const optimizedPic = createOptimizedPicture(logoImg.src, logoImg.alt);
    moveInstrumentation(logoImg, optimizedPic.querySelector('img'));
    optimizedPic.querySelector('img').className = 'header__logo-img';
    logoDiv.append(optimizedPic);
    newLogoLink.append(logoDiv);
    div2.append(newLogoLink);
  }
  header.append(div2);

  const div3 = document.createElement('div');
  div3.className = 'header-d-flex header-w-25 header-justify-content-end';
  if (loginButtonLink && loginButtonText) {
    const newLoginLink = document.createElement('a');
    newLoginLink.href = loginButtonLink.href;
    newLoginLink.className = 'header__login-btn-wrapper header-analytics_cta_click';
    newLoginLink.style.display = 'inline';

    const button = document.createElement('button');
    button.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
    button.textContent = loginButtonText;
    newLoginLink.append(button);
    div3.append(newLoginLink);
  }
  header.append(div3);
  section.append(header);

  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  if (menuItemsContainer) {
    const ul = document.createElement('ul');
    ul.className = 'header-sidebar__menu header-list-unstyled header-px-4';

    [...menuItemsContainer.children].forEach((row) => {
      const icon = row.children[0]?.querySelector('img');
      const text = row.children[1]?.textContent;
      const link = row.children[1]?.querySelector('a');

      if (icon && text && link) {
        const li = document.createElement('li');
        li.className = 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
        if (row.classList.contains('header__menu-item--logout')) {
          li.classList.add('header__menu-item--logout');
          li.style.display = 'none';
        }

        const newLink = document.createElement('a');
        newLink.href = link.href;
        newLink.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
        newLink.setAttribute('data-link', link.getAttribute('data-link') || '');

        const optimizedIcon = createOptimizedPicture(icon.src, icon.alt);
        moveInstrumentation(icon, optimizedIcon.querySelector('img'));
        optimizedIcon.querySelector('img').className = 'header-sidebar__menu-icon header-me-4';
        optimizedIcon.querySelector('img').setAttribute('loading', 'lazy');
        newLink.append(optimizedIcon);
        newLink.append(document.createTextNode(text));
        li.append(newLink);
        ul.append(li);
      }
    });
    aside.append(ul);
  }

  const sidebarCurve = document.createElement('div');
  sidebarCurve.className = 'header-sidebar__curve';
  aside.append(sidebarCurve);

  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

  const footerBrandPrimary = document.createElement('section');
  footerBrandPrimary.className = 'header-footer-brand__primary';
  footerBrandPrimary.style.backgroundColor = ''; // Keep empty as in HTML

  const footerBrandContainer = document.createElement('div');
  footerBrandContainer.className = 'header-container';

  const footerBrandPrimaryContent = document.createElement('div');
  footerBrandPrimaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';

  const footerBrandLeft = document.createElement('section');
  footerBrandLeft.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';

  // ITC Logo (first two cells of footerLinksContainer)
  if (footerLinksContainer && footerLinksContainer.children.length > 0) {
    const itcLink = footerLinksContainer.children[0]?.children[0]?.querySelector('a');
    const itcImg = footerLinksContainer.children[0]?.children[0]?.querySelector('img');
    if (itcLink && itcImg) {
      const newItcLink = document.createElement('a');
      newItcLink.href = itcLink.href;
      newItcLink.target = '_blank';
      newItcLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
      newItcLink.setAttribute('data-cta-region', 'Footer');
      newItcLink.setAttribute('aria-label', 'ITC Logo');

      const optimizedItcPic = createOptimizedPicture(itcImg.src, itcImg.alt);
      moveInstrumentation(itcImg, optimizedItcPic.querySelector('img'));
      optimizedItcPic.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
      optimizedItcPic.querySelector('img').setAttribute('loading', 'lazy');
      newItcLink.append(optimizedItcPic);
      footerBrandLeft.append(newItcLink);
    }

    // FSSI Logo
    const fssiImg = footerLinksContainer.children[1]?.children[0]?.querySelector('img');
    if (fssiImg) {
      const fssiDiv = document.createElement('div');
      fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';

      const optimizedFssiPic = createOptimizedPicture(fssiImg.src, fssiImg.alt);
      moveInstrumentation(fssiImg, optimizedFssiPic.querySelector('img'));
      optimizedFssiPic.querySelector('img').className = 'header-object-fit-contain header-w-100';
      optimizedFssiPic.querySelector('img').setAttribute('loading', 'lazy');
      fssiDiv.append(optimizedFssiPic);
      footerBrandLeft.append(fssiDiv);
    }
  }
  footerBrandPrimaryContent.append(footerBrandLeft);

  const footerBrandRight = document.createElement('section');
  footerBrandRight.className = 'header-footer-brand__right';

  const footerNavbar = document.createElement('nav');
  footerNavbar.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  footerNavbar.setAttribute('aria-label', 'footer navbar');

  const footerNavbarLeft = document.createElement('div');
  footerNavbarLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';

  // Footer Links - Group 1 (starts from 3rd row of footerLinksContainer)
  if (footerLinksContainer && footerLinksContainer.children.length > 2) {
    const footerListDiv1 = document.createElement('div');
    footerListDiv1.className = 'header-footerList';
    const ul1 = document.createElement('ul');
    ul1.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';

    for (let i = 2; i < Math.min(5, footerLinksContainer.children.length); i++) {
      const linkCell = footerLinksContainer.children[i]?.children[0];
      const link = linkCell?.querySelector('a');
      if (link) {
        const li = document.createElement('li');
        li.className = 'header-footer-list__item';
        const newLink = document.createElement('a');
        newLink.href = link.href;
        newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
        newLink.setAttribute('data-link-region', 'Footer List');
        newLink.textContent = link.textContent;
        li.append(newLink);
        ul1.append(li);
      }
    }
    footerListDiv1.append(ul1);
    footerNavbarLeft.append(footerListDiv1);

    // Footer Links - Group 2
    if (footerLinksContainer.children.length > 5) {
      const footerListDiv2 = document.createElement('div');
      footerListDiv2.className = 'header-footerList';
      const ul2 = document.createElement('ul');
      ul2.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';

      for (let i = 5; i < Math.min(8, footerLinksContainer.children.length); i++) {
        const linkCell = footerLinksContainer.children[i]?.children[0];
        const link = linkCell?.querySelector('a');
        if (link) {
          const li = document.createElement('li');
          li.className = 'header-footer-list__item';
          const newLink = document.createElement('a');
          newLink.href = link.href;
          newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
          newLink.setAttribute('data-link-region', 'Footer List');
          newLink.textContent = link.textContent;
          li.append(newLink);
          ul2.append(li);
        }
      }
      footerListDiv2.append(ul2);
      footerNavbarLeft.append(footerListDiv2);
    }
  }
  footerNavbar.append(footerNavbarLeft);

  const footerNavbarRight = document.createElement('div');
  footerNavbarRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';

  // Footer Links - Group 3
  if (footerLinksContainer && footerLinksContainer.children.length > 8) {
    const footerListDiv3 = document.createElement('div');
    footerListDiv3.className = 'header-footerList';
    const ul3 = document.createElement('ul');
    ul3.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';

    for (let i = 8; i < Math.min(11, footerLinksContainer.children.length); i++) {
      const linkCell = footerLinksContainer.children[i]?.children[0];
      const link = linkCell?.querySelector('a');
      if (link) {
        const li = document.createElement('li');
        li.className = 'header-footer-list__item';
        const newLink = document.createElement('a');
        newLink.href = link.href;
        newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
        newLink.setAttribute('data-link-region', 'Footer List');
        newLink.textContent = link.textContent;
        if (link.target) newLink.target = link.target;
        li.append(newLink);
        ul3.append(li);
      }
    }
    footerListDiv3.append(ul3);
    footerNavbarRight.append(footerListDiv3);

    // Footer Links - Group 4
    if (footerLinksContainer.children.length > 11) {
      const footerListDiv4 = document.createElement('div');
      footerListDiv4.className = 'header-footerList';
      const ul4 = document.createElement('ul');
      ul4.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';

      for (let i = 11; i < Math.min(14, footerLinksContainer.children.length); i++) {
        const linkCell = footerLinksContainer.children[i]?.children[0];
        const link = linkCell?.querySelector('a');
        if (link) {
          const li = document.createElement('li');
          li.className = 'header-footer-list__item';
          const newLink = document.createElement('a');
          newLink.href = link.href;
          newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
          newLink.setAttribute('data-link-region', 'Footer List');
          newLink.textContent = link.textContent;
          li.append(newLink);
          ul4.append(li);
        }
      }
      footerListDiv4.append(ul4);
      footerNavbarRight.append(footerListDiv4);
    }
  }
  footerNavbar.append(footerNavbarRight);

  footerBrandRight.append(footerNavbar);
  footerBrandPrimaryContent.append(footerBrandRight);
  footerBrandContainer.append(footerBrandPrimaryContent);
  footerBrandPrimary.append(footerBrandContainer);
  footerBrand.append(footerBrandPrimary);

  const footerBrandSecondary = document.createElement('section');
  footerBrandSecondary.className = 'header-footer-brand__secondary';
  footerBrandSecondary.style.backgroundColor = '';

  const footerBrandSecondaryContainer = document.createElement('div');
  footerBrandSecondaryContainer.className = 'header-container';

  const footerBrandSecondaryContent = document.createElement('div');
  footerBrandSecondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';

  const footerBrandSecondaryRight = document.createElement('section');
  footerBrandSecondaryRight.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';

  const socialTitle = document.createElement('h3');
  socialTitle.className = 'header-social_media--title';
  socialTitle.textContent = 'Follow Us On';
  footerBrandSecondaryRight.append(socialTitle);

  if (socialLinksContainer) {
    const socialUl = document.createElement('ul');
    socialUl.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';

    [...socialLinksContainer.children].forEach((row) => {
      const socialLink = row.children[0]?.querySelector('a');
      const socialImg = row.children[0]?.querySelector('img');

      if (socialLink && socialImg) {
        const li = document.createElement('li');
        li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';

        const newSocialLink = document.createElement('a');
        newSocialLink.href = socialLink.href;
        newSocialLink.target = '_blank';
        newSocialLink.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
        newSocialLink.setAttribute('data-cta-region', 'Footer');
        newSocialLink.setAttribute('data-cta-label', socialLink.getAttribute('data-cta-label') || '');
        newSocialLink.setAttribute('data-platform-name', socialLink.getAttribute('data-platform-name') || '');
        newSocialLink.setAttribute('data-social-linktype', 'follow');

        const optimizedSocialPic = createOptimizedPicture(socialImg.src, socialImg.alt);
        moveInstrumentation(socialImg, optimizedSocialPic.querySelector('img'));
        optimizedSocialPic.querySelector('img').setAttribute('aria-label', socialImg.alt);
        optimizedSocialPic.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
        optimizedSocialPic.querySelector('img').setAttribute('loading', 'lazy');
        newSocialLink.append(optimizedSocialPic);
        li.append(newSocialLink);
        socialUl.append(li);
      }
    });
    footerBrandSecondaryRight.append(socialUl);
  }
  footerBrandSecondaryContent.append(footerBrandSecondaryRight);

  const footerBrandSecondaryLeft = document.createElement('section');
  footerBrandSecondaryLeft.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';

  const footerBrandLeftList = document.createElement('ul');
  footerBrandLeftList.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';

  // ITC Portal link (last row of footerLinksContainer)
  if (footerLinksContainer && footerLinksContainer.children.length > 13) {
    const itcPortalLinkCell = footerLinksContainer.children[14]?.children[0];
    const itcPortalLink = itcPortalLinkCell?.querySelector('a');
    if (itcPortalLink) {
      const li = document.createElement('li');
      li.className = 'header-footer-brand__left--item header-foot_link';
      const newLink = document.createElement('a');
      newLink.href = itcPortalLink.href;
      newLink.target = '_blank';
      newLink.className = 'header-footer-brand__left--link header-analytics_cta_click';
      newLink.setAttribute('data-cta-region', 'Footer');
      newLink.textContent = itcPortalLink.textContent;
      li.append(newLink);
      footerBrandLeftList.append(li);
    }
  }
  footerBrandSecondaryLeft.append(footerBrandLeftList);

  if (footerCopyright) {
    const copyrightDiv = document.createElement('div');
    copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
    const copyrightSpan = document.createElement('span');
    copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
    copyrightSpan.textContent = footerCopyright;
    copyrightDiv.append(copyrightSpan);
    footerBrandSecondaryLeft.append(copyrightDiv);
  }

  footerBrandSecondaryContent.append(footerBrandSecondaryLeft);
  footerBrandSecondaryContainer.append(footerBrandSecondaryContent);
  footerBrandSecondary.append(footerBrandSecondaryContainer);
  footerBrand.append(footerBrandSecondary);

  aside.append(footerBrand);
  submenuContainer.append(aside);

  const overlay = document.createElement('div');
  overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.append(overlay);

  section.append(submenuContainer);
  block.append(section);
}
