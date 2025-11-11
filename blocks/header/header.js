import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const mainSection = document.createElement('section');
  mainSection.className = 'header-position-relative header-mb-15';
  moveInstrumentation(block, mainSection);

  // App Name
  const appNameSpan = document.createElement('span');
  appNameSpan.className = 'header-d-none header-app-name';
  const appNameCell = block.children[0]?.children[0]; // Assuming appName is the first cell of the first row
  if (appNameCell) {
    appNameSpan.textContent = appNameCell.textContent.trim();
    appNameSpan.setAttribute('data-app-name', appNameCell.textContent.trim());
    moveInstrumentation(appNameCell, appNameSpan);
  }
  mainSection.append(appNameSpan);

  // Header Container
  const headerContainer = document.createElement('header');
  headerContainer.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';
  mainSection.append(headerContainer);

  // Header Left Div (for menu icon, if any)
  const headerLeftDiv = document.createElement('div');
  headerLeftDiv.className = 'header-d-flex header-w-25';
  // No direct content in the provided HTML for this div, so leaving it empty for now.
  // If there's an implicit menu icon, it would be added here.
  headerContainer.append(headerLeftDiv);

  // Header Logo
  const headerLogoDiv = document.createElement('div');
  headerLogoDiv.className = 'header-d-flex  header-justify-content-center header-w-25';
  const logoLink = document.createElement('a');
  logoLink.href = '/';
  logoLink.className = 'header-analytics_cta_click';
  logoLink.setAttribute('data-ct', '');
  logoLink.setAttribute('a-label', 'header-logo-boing');

  const logoDiv = document.createElement('div');
  logoDiv.className = 'header__logo header-d-flex header-align-items-center';

  const logoImageCell = block.children[0]?.children[1]; // Assuming logo image is the second cell of the first row
  if (logoImageCell) {
    const img = logoImageCell.querySelector('img');
    if (img) {
      const optimizedPic = createOptimizedPicture(img.src, img.alt);
      optimizedPic.querySelector('img').className = 'header__logo-img';
      moveInstrumentation(img, optimizedPic.querySelector('img'));
      logoDiv.append(optimizedPic);
    }
    moveInstrumentation(logoImageCell, logoLink);
  }
  logoLink.append(logoDiv);
  headerLogoDiv.append(logoLink);
  headerContainer.append(headerLogoDiv);

  // Header Right Div (Login Button)
  const headerRightDiv = document.createElement('div');
  headerRightDiv.className = 'header-d-flex header-w-25 header-justify-content-end';

  const loginLinkCell = block.children[0]?.children[2]; // Assuming login link is the third cell of the first row
  if (loginLinkCell) {
    const loginLink = loginLinkCell.querySelector('a');
    if (loginLink) {
      const newLoginLink = document.createElement('a');
      newLoginLink.href = loginLink.href;
      newLoginLink.className = 'header__login-btn-wrapper header-analytics_cta_click';
      newLoginLink.style.display = 'inline';

      const loginButton = document.createElement('button');
      loginButton.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
      loginButton.textContent = loginLink.textContent.trim();
      newLoginLink.append(loginButton);
      headerRightDiv.append(newLoginLink);
      moveInstrumentation(loginLink, newLoginLink);
    }
    moveInstrumentation(loginLinkCell, headerRightDiv);
  }
  headerContainer.append(headerRightDiv);

  // Submenu Container (Sidebar)
  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';
  mainSection.append(submenuContainer);

  const sidebar = document.createElement('aside');
  sidebar.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';
  submenuContainer.append(sidebar);

  const sidebarMenuUl = document.createElement('ul');
  sidebarMenuUl.className = 'header-sidebar__menu header-list-unstyled header-px-4';
  sidebar.append(sidebarMenuUl);

  // Sidebar Menu Items
  // Assuming sidebar menu items start from the second row in the block
  let sidebarMenuItemIndex = 1;
  while (block.children[sidebarMenuItemIndex] && block.children[sidebarMenuItemIndex].children.length === 3) {
    const row = block.children[sidebarMenuItemIndex];
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
    moveInstrumentation(row, li);

    const iconCell = row.children[0];
    const labelCell = row.children[1];
    const linkCell = row.children[2];

    const link = linkCell.querySelector('a');
    if (link) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
      newLink.setAttribute('data-link', link.getAttribute('data-link') || link.href);

      const img = iconCell.querySelector('img');
      if (img) {
        const optimizedPic = createOptimizedPicture(img.src, img.alt);
        optimizedPic.querySelector('img').className = 'header-sidebar__menu-icon header-me-4';
        optimizedPic.querySelector('img').setAttribute('loading', 'lazy');
        moveInstrumentation(img, optimizedPic.querySelector('img'));
        newLink.append(optimizedPic);
      }
      newLink.append(labelCell.textContent.trim());
      li.append(newLink);
      moveInstrumentation(link, newLink);
    }
    sidebarMenuUl.append(li);
    sidebarMenuItemIndex++;
  }

  // Logout item (if present in block, currently not explicitly handled by structure)
  // The HTML shows a logout item with display: none, implying it's dynamic.
  // If it were a static block item, it would follow the pattern above.

  const sidebarCurve = document.createElement('div');
  sidebarCurve.className = 'header-sidebar__curve';
  sidebar.append(sidebarCurve);

  // Footer Brand
  const footerBrandDiv = document.createElement('div');
  footerBrandDiv.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';
  sidebar.append(footerBrandDiv);

  const footerPrimarySection = document.createElement('section');
  footerPrimarySection.className = 'header-footer-brand__primary';
  footerPrimarySection.style.backgroundColor = '';
  footerBrandDiv.append(footerPrimarySection);

  const footerContainer = document.createElement('div');
  footerContainer.className = 'header-container';
  footerPrimarySection.append(footerContainer);

  const footerPrimaryContent = document.createElement('div');
  footerPrimaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';
  footerContainer.append(footerPrimaryContent);

  // Footer Brand Left (ITC and FSSI Logos)
  const footerBrandLeft = document.createElement('section');
  footerBrandLeft.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';
  footerPrimaryContent.append(footerBrandLeft);

  // Assuming footer logos are in subsequent rows after sidebar menu items
  let currentRowIndex = sidebarMenuItemIndex;

  // ITC Logo
  const itcLogoCell = block.children[currentRowIndex]?.children[0];
  if (itcLogoCell) {
    const itcLink = itcLogoCell.querySelector('a');
    if (itcLink) {
      const newItcLink = document.createElement('a');
      newItcLink.href = itcLink.href;
      newItcLink.target = '_blank';
      newItcLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
      newItcLink.setAttribute('data-cta-region', 'Footer');
      newItcLink.setAttribute('aria-label', 'ITC Logo');

      const img = itcLogoCell.querySelector('img');
      if (img) {
        const optimizedPic = createOptimizedPicture(img.src, img.alt);
        optimizedPic.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
        optimizedPic.querySelector('img').setAttribute('loading', 'lazy');
        moveInstrumentation(img, optimizedPic.querySelector('img'));
        newItcLink.append(optimizedPic);
      }
      footerBrandLeft.append(newItcLink);
      moveInstrumentation(itcLink, newItcLink);
    }
    currentRowIndex++;
  }

  // FSSI Logo
  const fssiLogoCell = block.children[currentRowIndex]?.children[0];
  if (fssiLogoCell) {
    const fssiDiv = document.createElement('div');
    fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
    const img = fssiLogoCell.querySelector('img');
    if (img) {
      const optimizedPic = createOptimizedPicture(img.src, img.alt);
      optimizedPic.querySelector('img').className = 'header-object-fit-contain header-w-100';
      optimizedPic.querySelector('img').setAttribute('loading', 'lazy');
      moveInstrumentation(img, optimizedPic.querySelector('img'));
      fssiDiv.append(optimizedPic);
    }
    footerBrandLeft.append(fssiDiv);
    moveInstrumentation(fssiLogoCell, fssiDiv);
    currentRowIndex++;
  }

  // Footer Brand Right (Navigation)
  const footerBrandRight = document.createElement('section');
  footerBrandRight.className = 'header-footer-brand__right';
  footerPrimaryContent.append(footerBrandRight);

  const footerNav = document.createElement('nav');
  footerNav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  footerNav.setAttribute('aria-label', 'footer navbar');
  footerBrandRight.append(footerNav);

  const footerNavbarLeft = document.createElement('div');
  footerNavbarLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';
  footerNav.append(footerNavbarLeft);

  // Footer Nav Lists - assuming each column of links in the block corresponds to a 'footerList' div
  // This part needs careful mapping from block structure to the desired HTML.
  // Assuming each row after the logos represents a list of footer nav items.
  // The block JSON defines 'footerNav' as a container of 'footerNavItem's.
  // This implies the block might have rows where each row is a footer list, or each cell in a row is a list.
  // Given the HTML structure, it's likely multiple columns of links.
  // Let's assume the block has rows, and each row contains a set of links for one `footerList`.

  const footerNavItems = [];
  // Collect all footer nav items first
  while (block.children[currentRowIndex] && block.children[currentRowIndex].children.length > 0) {
    const row = block.children[currentRowIndex];
    const linksInRow = [];
    [...row.children].forEach((cell) => {
      const link = cell.querySelector('a');
      if (link) {
        linksInRow.push({ link: link.href, label: link.textContent.trim() });
        moveInstrumentation(cell, link);
      }
    });
    if (linksInRow.length > 0) {
      footerNavItems.push(linksInRow);
    }
    currentRowIndex++;
  }

  // Distribute footer nav items into two columns as per HTML
  const numLists = footerNavItems.length;
  const leftColumnLists = footerNavItems.slice(0, Math.ceil(numLists / 2));
  const rightColumnLists = footerNavItems.slice(Math.ceil(numLists / 2));

  leftColumnLists.forEach((listItems) => {
    const footerListDiv = document.createElement('div');
    footerListDiv.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    listItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = item.link;
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.setAttribute('data-link-region', 'Footer List');
      a.textContent = item.label;
      li.append(a);
      ul.append(li);
    });
    footerListDiv.append(ul);
    footerNavbarLeft.append(footerListDiv);
  });

  const footerNavbarRight = document.createElement('div');
  footerNavbarRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
  footerNav.append(footerNavbarRight);

  rightColumnLists.forEach((listItems) => {
    const footerListDiv = document.createElement('div');
    footerListDiv.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    listItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = item.link;
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.setAttribute('data-link-region', 'Footer List');
      a.textContent = item.label;
      li.append(a);
      ul.append(li);
    });
    footerListDiv.append(ul);
    footerNavbarRight.append(footerListDiv);
  });

  // Footer Secondary Section (Social Links and Copyright)
  const footerSecondarySection = document.createElement('section');
  footerSecondarySection.className = 'header-footer-brand__secondary';
  footerSecondarySection.style.backgroundColor = '';
  footerBrandDiv.append(footerSecondarySection);

  const footerSecondaryContainer = document.createElement('div');
  footerSecondaryContainer.className = 'header-container';
  footerSecondarySection.append(footerSecondaryContainer);

  const footerSecondaryContent = document.createElement('div');
  footerSecondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';
  footerSecondaryContainer.append(footerSecondaryContent);

  // Social Media Links
  const socialMediaRight = document.createElement('section');
  socialMediaRight.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
  footerSecondaryContent.append(socialMediaRight);

  const socialTitle = document.createElement('h3');
  socialTitle.className = 'header-social_media--title';
  socialTitle.textContent = 'Follow Us On';
  socialMediaRight.append(socialTitle);

  const socialUl = document.createElement('ul');
  socialUl.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';
  socialMediaRight.append(socialUl);

  // Assuming social links are in subsequent rows after footer nav items
  // Each row has an icon and a link
  while (block.children[currentRowIndex] && block.children[currentRowIndex].children.length === 2) {
    const row = block.children[currentRowIndex];
    const iconCell = row.children[0];
    const linkCell = row.children[1];

    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    moveInstrumentation(row, li);

    const link = linkCell.querySelector('a');
    if (link) {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.target = '_blank';
      newLink.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
      newLink.setAttribute('data-cta-region', 'Footer');
      newLink.setAttribute('data-cta-label', `footer-${link.textContent.trim().toLowerCase()}`); // Infer label from link text
      newLink.setAttribute('data-platform-name', link.textContent.trim().toLowerCase());
      newLink.setAttribute('data-social-linktype', 'follow');

      const img = iconCell.querySelector('img');
      if (img) {
        const optimizedPic = createOptimizedPicture(img.src, img.alt || link.href);
        optimizedPic.querySelector('img').setAttribute('aria-label', link.textContent.trim().toLowerCase());
        optimizedPic.querySelector('img').className = 'header-object-fit-contain header-w-100 header-h-100';
        optimizedPic.querySelector('img').setAttribute('loading', 'lazy');
        moveInstrumentation(img, optimizedPic.querySelector('img'));
        newLink.append(optimizedPic);
      }
      li.append(newLink);
      moveInstrumentation(link, newLink);
    }
    socialUl.append(li);
    currentRowIndex++;
  }

  // Footer Brand Left (ITC Portal and Copyright)
  const footerBrandLeftBottom = document.createElement('section');
  footerBrandLeftBottom.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  footerSecondaryContent.append(footerBrandLeftBottom);

  const footerLeftUl = document.createElement('ul');
  footerLeftUl.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
  footerBrandLeftBottom.append(footerLeftUl);

  // ITC Portal Link - assuming it's the next row with a single link
  const itcPortalCell = block.children[currentRowIndex]?.children[0];
  if (itcPortalCell) {
    const itcPortalLink = itcPortalCell.querySelector('a');
    if (itcPortalLink) {
      const li = document.createElement('li');
      li.className = 'header-footer-brand__left--item header-foot_link';
      const a = document.createElement('a');
      a.href = itcPortalLink.href;
      a.target = '_blank';
      a.className = 'header-footer-brand__left--link header-analytics_cta_click';
      a.setAttribute('data-cta-region', 'Footer');
      a.textContent = itcPortalLink.textContent.trim();
      li.append(a);
      footerLeftUl.append(li);
      moveInstrumentation(itcPortalLink, a);
    }
    currentRowIndex++;
  }

  // Copyright
  const copyrightCell = block.children[currentRowIndex]?.children[0];
  if (copyrightCell) {
    const copyrightDiv = document.createElement('div');
    copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
    const copyrightSpan = document.createElement('span');
    copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
    copyrightSpan.innerHTML = copyrightCell.innerHTML;
    copyrightDiv.append(copyrightSpan);
    footerBrandLeftBottom.append(copyrightDiv);
    moveInstrumentation(copyrightCell, copyrightDiv);
  }

  // Overlay
  const overlayDiv = document.createElement('div');
  overlayDiv.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.append(overlayDiv);

  block.textContent = '';
  block.append(mainSection);
}
