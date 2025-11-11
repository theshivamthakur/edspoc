import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const appName = block.children[0]?.children[0]?.textContent;
  const logoImage = block.children[0]?.children[1]?.querySelector('img');
  const logoHref = block.children[0]?.children[2]?.querySelector('a')?.href;
  const loginHref = block.children[0]?.children[3]?.querySelector('a')?.href;
  const loginLabel = block.children[0]?.children[3]?.querySelector('button')?.textContent;

  const headerMenuItems = [];
  const footerListItems1 = [];
  const footerListItems2 = [];
  const footerListItems3 = [];
  const footerListItems4 = [];
  const socialLinks = [];

  // Assuming rows for menu items start from the second row
  // and follow a specific order based on the HTML structure
  // This part is highly dependent on how the block JSON maps to rows.
  // For simplicity, let's assume specific row ranges for different item types.
  // Adjust these indices based on the actual block.children structure.

  // Header Menu Items (e.g., rows 1 to 5 in the block children)
  for (let i = 1; i < 6; i++) {
    if (block.children[i]) {
      const menuIcon = block.children[i].children[0]?.querySelector('img');
      const menuLink = block.children[i].children[1]?.querySelector('a');
      if (menuLink && menuIcon) {
        headerMenuItems.push({
          menuLabel: menuLink.textContent,
          menuHref: menuLink.href,
          menuIcon: menuIcon.src,
        });
      }
    }
  }

  // Footer List Items (assuming they come after header menu items)
  // This will require careful mapping based on the block's authored structure.
  // For now, let's assume a general approach. The HTML has multiple ul.header-footer-list.
  // The block JSON has a single 'footerListItem' definition, implying all footer list items
  // might be grouped under a single parent row in the block.children.
  // We'll need to infer the structure from the block.children to correctly populate these arrays.
  // For this example, let's assume footer list items are grouped in separate cells within a row,
  // or in consecutive rows after the header menu items.
  // Given the HTML, it's more likely they are grouped by `ul` elements.

  // This part needs to be refined based on how the 'footerListItem' and 'socialLink' are actually authored in the block.
  // The current block JSON structure doesn't explicitly define how multiple lists or social links are grouped.
  // For now, let's assume they are provided as separate rows after the header menu items.

  // Example: If footer list items are in rows 6-8, 9-11, 12-14, 15-17 and social links in 18-20
  // This is a placeholder and needs to be adjusted based on actual block content structure.
  const startIndexForFooterLists = 6; // Adjust this index
  const startIndexForSocialLinks = 20; // Adjust this index

  // Populate footerListItems1 (e.g., rows 6-8)
  for (let i = startIndexForFooterLists; i < startIndexForFooterLists + 3; i++) {
    if (block.children[i]) {
      const link = block.children[i].children[0]?.querySelector('a');
      if (link) {
        footerListItems1.push({
          footerLabel: link.textContent,
          footerHref: link.href,
        });
      }
    }
  }

  // Populate footerListItems2 (e.g., rows 9-11)
  for (let i = startIndexForFooterLists + 3; i < startIndexForFooterLists + 6; i++) {
    if (block.children[i]) {
      const link = block.children[i].children[0]?.querySelector('a');
      if (link) {
        footerListItems2.push({
          footerLabel: link.textContent,
          footerHref: link.href,
        });
      }
    }
  }

  // Populate footerListItems3 (e.g., rows 12-14)
  for (let i = startIndexForFooterLists + 6; i < startIndexForFooterLists + 9; i++) {
    if (block.children[i]) {
      const link = block.children[i].children[0]?.querySelector('a');
      if (link) {
        footerListItems3.push({
          footerLabel: link.textContent,
          footerHref: link.href,
        });
      }
    }
  }

  // Populate footerListItems4 (e.g., rows 15-17)
  for (let i = startIndexForFooterLists + 9; i < startIndexForFooterLists + 12; i++) {
    if (block.children[i]) {
      const link = block.children[i].children[0]?.querySelector('a');
      if (link) {
        footerListItems4.push({
          footerLabel: link.textContent,
          footerHref: link.href,
        });
      }
    }
  }

  // Populate socialLinks (e.g., rows 18-20)
  for (let i = startIndexForSocialLinks; i < startIndexForSocialLinks + 3; i++) {
    if (block.children[i]) {
      const link = block.children[i].children[0]?.querySelector('a');
      const img = block.children[i].children[0]?.querySelector('img');
      if (link && img) {
        socialLinks.push({
          platform: img.ariaLabel, // Assuming aria-label is the platform name
          socialHref: link.href,
          socialIcon: img.src,
        });
      }
    }
  }


  block.textContent = '';

  const section = document.createElement('section');
  section.className = 'header-position-relative header-mb-15';

  const spanAppName = document.createElement('span');
  spanAppName.className = 'header-d-none header-app-name';
  spanAppName.setAttribute('data-app-name', appName || 'boing');
  spanAppName.textContent = appName || 'boing';
  section.append(spanAppName);

  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

  const divLeft = document.createElement('div');
  divLeft.className = 'header-d-flex header-w-25';
  // Assuming the hamburger icon is a static SVG or generated dynamically
  // For now, we'll leave it empty as it's not in the block JSON
  header.append(divLeft);

  const divCenter = document.createElement('div');
  divCenter.className = 'header-d-flex  header-justify-content-center header-w-25';
  const logoLink = document.createElement('a');
  logoLink.href = logoHref || '/';
  logoLink.className = 'header-analytics_cta_click';
  logoLink.setAttribute('data-ct', '');
  logoLink.setAttribute('a-label', 'header-logo-boing');
  const logoDiv = document.createElement('div');
  logoDiv.className = 'header__logo header-d-flex header-align-items-center';
  if (logoImage) {
    const optimizedLogo = createOptimizedPicture(logoImage.src, logoImage.alt);
    moveInstrumentation(logoImage, optimizedLogo.querySelector('img'));
    logoDiv.append(optimizedLogo);
  }
  logoLink.append(logoDiv);
  divCenter.append(logoLink);
  header.append(divCenter);

  const divRight = document.createElement('div');
  divRight.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginWrapper = document.createElement('a');
  loginWrapper.href = loginHref || '/login.html';
  loginWrapper.className = 'header__login-btn-wrapper header-analytics_cta_click';
  loginWrapper.style.display = 'inline';
  const loginButton = document.createElement('button');
  loginButton.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
  loginButton.textContent = loginLabel || 'Login';
  loginWrapper.append(loginButton);
  divRight.append(loginWrapper);
  header.append(divRight);
  section.append(header);

  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  const asideSidebar = document.createElement('aside');
  asideSidebar.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  const ulSidebarMenu = document.createElement('ul');
  ulSidebarMenu.className = 'header-sidebar__menu header-list-unstyled header-px-4';

  headerMenuItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
    if (item.menuLabel === 'Logout') {
      li.classList.add('header__menu-item--logout');
      li.style.display = 'none';
    }
    const link = document.createElement('a');
    link.href = item.menuHref;
    link.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
    link.setAttribute('data-link', item.menuHref);
    if (item.menuIcon) {
      const img = createOptimizedPicture(item.menuIcon, item.menuLabel);
      img.querySelector('img').className = 'header-sidebar__menu-icon header-me-4';
      img.querySelector('img').setAttribute('loading', 'lazy');
      link.append(img);
    }
    link.append(document.createTextNode(item.menuLabel));
    li.append(link);
    ulSidebarMenu.append(li);
  });
  asideSidebar.append(ulSidebarMenu);

  const sidebarCurve = document.createElement('div');
  sidebarCurve.className = 'header-sidebar__curve';
  asideSidebar.append(sidebarCurve);

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

  // ITC Logo (static, assuming it's not in the block JSON for now, or is a separate field)
  const itcLink = document.createElement('a');
  itcLink.href = 'https://www.itcportal.com/';
  itcLink.target = '_blank';
  itcLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  itcLink.setAttribute('data-cta-region', 'Footer');
  itcLink.setAttribute('aria-label', 'ITC Logo');
  const itcImg = createOptimizedPicture('/content/dam/aemigrate/uploaded-folder/image/itc-logo-2?fmt=webp-alpha.webp', 'ITC Logo');
  itcImg.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
  itcImg.querySelector('img').setAttribute('loading', 'lazy');
  itcLink.append(itcImg);
  footerBrandLeft.append(itcLink);

  // FSSI Logo (static, assuming not in block JSON)
  const fssiDiv = document.createElement('div');
  fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
  const fssiImg = createOptimizedPicture('/content/dam/aemigrate/uploaded-folder/image/fssi-logo-update?fmt=webp-alpha.webp', 'FSSI Logo');
  fssiImg.querySelector('img').className = 'header-object-fit-contain header-w-100';
  fssiImg.querySelector('img').setAttribute('loading', 'lazy');
  fssiDiv.append(fssiImg);
  footerBrandLeft.append(fssiDiv);
  footerPrimaryContent.append(footerBrandLeft);

  const footerBrandRight = document.createElement('section');
  footerBrandRight.className = 'header-footer-brand__right';
  const footerNavbar = document.createElement('nav');
  footerNavbar.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  footerNavbar.setAttribute('aria-label', 'footer navbar');

  const footerNavbarLeft = document.createElement('div');
  footerNavbarLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';

  const createFooterListDiv = (items) => {
    const div = document.createElement('div');
    div.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const link = document.createElement('a');
      link.href = item.footerHref;
      link.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      link.setAttribute('data-link-region', 'Footer List');
      link.textContent = item.footerLabel;
      li.append(link);
      ul.append(li);
    });
    div.append(ul);
    return div;
  };

  footerNavbarLeft.append(createFooterListDiv(footerListItems1));
  footerNavbarLeft.append(createFooterListDiv(footerListItems2));
  footerNavbar.append(footerNavbarLeft);

  const footerNavbarRight = document.createElement('div');
  footerNavbarRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
  footerNavbarRight.append(createFooterListDiv(footerListItems3));
  footerNavbarRight.append(createFooterListDiv(footerListItems4));
  footerNavbar.append(footerNavbarRight);

  footerBrandRight.append(footerNavbar);
  footerPrimaryContent.append(footerBrandRight);
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
  const socialTitle = document.createElement('h3');
  socialTitle.className = 'header-social_media--title';
  socialTitle.textContent = 'Follow Us On';
  footerSecondaryRight.append(socialTitle);

  const ulSocial = document.createElement('ul');
  ulSocial.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';

  socialLinks.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    const link = document.createElement('a');
    link.href = item.socialHref;
    link.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
    link.setAttribute('data-cta-region', 'Footer');
    link.setAttribute('data-cta-label', `footer-${item.platform}`);
    link.target = '_blank';
    link.setAttribute('data-platform-name', item.platform);
    link.setAttribute('data-social-linktype', 'follow');
    if (item.socialIcon) {
      const img = createOptimizedPicture(item.socialIcon, item.socialHref);
      img.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
      img.querySelector('img').setAttribute('aria-label', item.platform);
      img.querySelector('img').setAttribute('loading', 'lazy');
      link.append(img);
    }
    li.append(link);
    ulSocial.append(li);
  });
  footerSecondaryRight.append(ulSocial);
  footerSecondaryContent.append(footerSecondaryRight);

  const footerSecondaryLeft = document.createElement('section');
  footerSecondaryLeft.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  const ulFooterLinks = document.createElement('ul');
  ulFooterLinks.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';

  // ITC Portal link (static, assuming not in block JSON or a separate field)
  const itcPortalLi = document.createElement('li');
  itcPortalLi.className = 'header-footer-brand__left--item header-foot_link';
  const itcPortalLink = document.createElement('a');
  itcPortalLink.href = 'https://www.itcportal.com/';
  itcPortalLink.target = '_blank';
  itcPortalLink.className = 'header-footer-brand__left--link header-analytics_cta_click';
  itcPortalLink.setAttribute('data-cta-region', 'Footer');
  itcPortalLink.textContent = 'ITC portal';
  itcPortalLi.append(itcPortalLink);
  ulFooterLinks.append(itcPortalLi);
  footerSecondaryLeft.append(ulFooterLinks);

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

  asideSidebar.append(footerBrand);
  submenuContainer.append(asideSidebar);

  const overlay = document.createElement('div');
  overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.append(overlay);

  section.append(submenuContainer);

  block.append(section);
}