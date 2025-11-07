import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const headerSection = block.querySelector('.header-position-relative');
  const appNameSpan = headerSection.querySelector('.header-d-none.header-app-name');
  const mainHeader = headerSection.querySelector('.header-boing-container');
  const logoWrapper = mainHeader.querySelector('.header-d-flex.header-justify-content-center.header-w-25');
  const loginButtonWrapper = mainHeader.querySelector('.header-d-flex.header-w-25.header-justify-content-end');
  const submenuContainer = headerSection.querySelector('.header-submenu-container');
  const sidebar = submenuContainer.querySelector('.header-sidebar');
  const sidebarMenu = sidebar.querySelector('.header-sidebar__menu');
  const sidebarCurve = sidebar.querySelector('.header-sidebar__curve');
  const footerBrand = sidebar.querySelector('.header-footer-brand');
  const footerPrimary = footerBrand.querySelector('.header-footer-brand__primary');
  const footerPrimaryContent = footerPrimary.querySelector('.header-footer-brand__primary--content');
  const footerBrandLeft = footerPrimaryContent.querySelector('.header-footer-brand__left');
  const footerBrandRight = footerPrimaryContent.querySelector('.header-footer-brand__right');
  const footerNavbar = footerBrandRight.querySelector('.header-footer-brand__navbar');
  const footerNavbarLeft = footerNavbar.querySelector('.header-footer-brand__navbar--left');
  const footerNavbarRight = footerNavbar.querySelector('.header-footer-brand__navbar--right');
  const footerSecondary = footerBrand.querySelector('.header-footer-brand__secondary');
  const footerSecondaryContent = footerSecondary.querySelector('.header-footer-brand__secondary--content');
  const socialMediaSection = footerSecondaryContent.querySelector('.header-footer-brand__right');
  const copyrightSection = footerSecondaryContent.querySelector('.header-footer-brand__left');
  const overlay = submenuContainer.querySelector('.header-overlay');

  // Move appNameSpan
  if (appNameSpan) {
    moveInstrumentation(appNameSpan, block);
    block.prepend(appNameSpan);
  }

  // Move mainHeader
  if (mainHeader) {
    moveInstrumentation(mainHeader, block);
    block.append(mainHeader);
  }

  // Move logoWrapper content
  if (logoWrapper) {
    const logoLink = logoWrapper.querySelector('a');
    if (logoLink) {
      moveInstrumentation(logoWrapper, logoLink);
      mainHeader.querySelector('.header-d-flex.header-justify-content-center.header-w-25').replaceWith(logoLink);
    }
  }

  // Move loginButtonWrapper content
  if (loginButtonWrapper) {
    const loginLink = loginButtonWrapper.querySelector('a');
    if (loginLink) {
      moveInstrumentation(loginButtonWrapper, loginLink);
      mainHeader.querySelector('.header-d-flex.header-w-25.header-justify-content-end').replaceWith(loginLink);
    }
  }

  // Move submenuContainer
  if (submenuContainer) {
    moveInstrumentation(submenuContainer, block);
    block.append(submenuContainer);
  }

  // Process sidebar menu items
  if (sidebarMenu) {
    const ul = document.createElement('ul');
    ul.className = 'header-sidebar__menu header-list-unstyled header-px-4';
    [...sidebarMenu.children].forEach((li) => {
      moveInstrumentation(li, ul);
      const a = li.querySelector('a');
      const img = a.querySelector('img');
      const text = a.textContent.trim();
      const link = a.href;

      const newLi = document.createElement('li');
      newLi.className = li.className;
      newLi.innerHTML = `
        <a href="${link}" class="${a.className}" data-link="${a.dataset.link}">
          <img src="${img.src}" alt="${img.alt}" class="${img.className}" loading="lazy">
          ${text}
        </a>
      `;
      ul.append(newLi);
    });
    sidebarMenu.replaceWith(ul);
  }

  // Move sidebarCurve
  if (sidebarCurve) {
    moveInstrumentation(sidebarCurve, sidebar);
    sidebar.append(sidebarCurve);
  }

  // Move footerBrand
  if (footerBrand) {
    moveInstrumentation(footerBrand, sidebar);
    sidebar.append(footerBrand);
  }

  // Process footerBrandLeft logos
  if (footerBrandLeft) {
    const logos = footerBrandLeft.querySelectorAll('a, div');
    logos.forEach((logo) => {
      moveInstrumentation(logo, footerBrandLeft);
      footerBrandLeft.append(logo);
    });
  }

  // Process footer lists
  if (footerNavbarLeft) {
    const footerLists = footerNavbarLeft.querySelectorAll('.header-footerList');
    footerLists.forEach((footerListDiv) => {
      const ul = footerListDiv.querySelector('ul');
      if (ul) {
        [...ul.children].forEach((li) => {
          const a = li.querySelector('a');
          if (a) {
            moveInstrumentation(li, ul);
            const newLi = document.createElement('li');
            newLi.className = li.className;
            newLi.innerHTML = `<a href="${a.href}" class="${a.className}" data-link-region="${a.dataset.linkRegion}">${a.textContent.trim()}</a>`;
            ul.append(newLi);
          }
        });
      }
    });
  }

  if (footerNavbarRight) {
    const footerLists = footerNavbarRight.querySelectorAll('.header-footerList');
    footerLists.forEach((footerListDiv) => {
      const ul = footerListDiv.querySelector('ul');
      if (ul) {
        [...ul.children].forEach((li) => {
          const a = li.querySelector('a');
          if (a) {
            moveInstrumentation(li, ul);
            const newLi = document.createElement('li');
            newLi.className = li.className;
            newLi.innerHTML = `<a href="${a.href}" class="${a.className}" data-link-region="${a.dataset.linkRegion}">${a.textContent.trim()}</a>`;
            ul.append(newLi);
          }
        });
      }
    });
  }

  // Process social media items
  if (socialMediaSection) {
    const socialList = socialMediaSection.querySelector('ul');
    if (socialList) {
      [...socialList.children].forEach((li) => {
        const a = li.querySelector('a');
        const img = a.querySelector('img');
        if (a && img) {
          moveInstrumentation(li, socialList);
          const newLi = document.createElement('li');
          newLi.className = li.className;
          newLi.innerHTML = `
            <a href="${a.href}" class="${a.className}" data-cta-region="${a.dataset.ctaRegion}" data-cta-label="${a.dataset.ctaLabel}" target="_blank" data-platform-name="${a.dataset.platformName}" data-social-linktype="${a.dataset.socialLinktype}">
              <img aria-label="${img.ariaLabel}" src="${img.src}" class="${img.className}" alt="${img.alt}" loading="lazy">
            </a>
          `;
          socialList.append(newLi);
        }
      });
    }
  }

  // Process copyright links and text
  if (copyrightSection) {
    const copyrightList = copyrightSection.querySelector('ul');
    if (copyrightList) {
      [...copyrightList.children].forEach((li) => {
        const a = li.querySelector('a');
        if (a) {
          moveInstrumentation(li, copyrightList);
          const newLi = document.createElement('li');
          newLi.className = li.className;
          newLi.innerHTML = `<a href="${a.href}" target="_blank" class="${a.className}" data-cta-region="${a.dataset.ctaRegion}">${a.textContent.trim()}</a>`;
          copyrightList.append(newLi);
        }
      });
    }
    const copyrightTextDiv = copyrightSection.querySelector('.header-footer-brand__left--copyright');
    if (copyrightTextDiv) {
      moveInstrumentation(copyrightTextDiv, copyrightSection);
      copyrightSection.append(copyrightTextDiv);
    }
  }

  // Move overlay
  if (overlay) {
    moveInstrumentation(overlay, submenuContainer);
    submenuContainer.append(overlay);
  }

  // Clean up the original block content
  block.textContent = '';
  block.append(headerSection);
}
