import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.className = 'header-position-relative header-mb-15';

  const appNameSpan = block.querySelector('span.header-d-none.header-app-name');
  if (appNameSpan) {
    appNameSpan.className = 'header-d-none header-app-name';
  }

  const headerEl = block.querySelector('header.header-boing-container');
  if (headerEl) {
    headerEl.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';
  }

  const div1 = headerEl.children[0];
  if (div1) {
    div1.className = 'header-d-flex header-w-25';
    const img1 = div1.querySelector('img');
    if (img1) {
      const newImg1 = document.createElement('img');
      moveInstrumentation(img1, newImg1);
      newImg1.src = img1.src;
      newImg1.alt = img1.alt;
      div1.replaceChild(newImg1, img1);
    }
  }

  const div2 = headerEl.children[1];
  if (div2) {
    div2.className = 'header-d-flex  header-justify-content-center header-w-25';
    const a2 = div2.querySelector('a');
    if (a2) {
      a2.className = 'header-analytics_cta_click';
      const div2_1 = a2.querySelector('div.header__logo');
      if (div2_1) {
        div2_1.className = 'header__logo header-d-flex header-align-items-center';
        const img2 = div2_1.querySelector('img.header__logo-img');
        if (img2) {
          img2.className = 'header__logo-img';
        }
      }
    }
  }

  const div3 = headerEl.children[2];
  if (div3) {
    div3.className = 'header-d-flex header-w-25 header-justify-content-end';
    const a3 = div3.querySelector('a');
    if (a3) {
      a3.className = 'header__login-btn-wrapper header-analytics_cta_click';
      const button3 = a3.querySelector('button.header__login-btn');
      if (button3) {
        button3.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
      }
    }
  }

  const submenuContainer = block.querySelector('div.header-submenu-container');
  if (submenuContainer) {
    submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';
  }

  const aside = submenuContainer.querySelector('aside.header-sidebar');
  if (aside) {
    aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';
  }

  const ulMenu = aside.querySelector('ul.header-sidebar__menu');
  if (ulMenu) {
    ulMenu.className = 'header-sidebar__menu header-list-unstyled header-px-4';
    const menuItems = Array.from(ulMenu.children);
    ulMenu.innerHTML = '';
    menuItems.forEach((row) => {
      const li = document.createElement('li');
      moveInstrumentation(row, li);
      li.className = row.className;

      const a = row.querySelector('a');
      if (a) {
        a.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
        const img = a.querySelector('img');
        if (img) {
          img.className = 'header-sidebar__menu-icon header-me-4';
        }
      }
      li.append(...row.children);
      ulMenu.append(li);
    });
  }

  const sidebarCurve = aside.querySelector('div.header-sidebar__curve');
  if (sidebarCurve) {
    sidebarCurve.className = 'header-sidebar__curve';
  }

  const footerBrand = aside.querySelector('div.header-footer-brand');
  if (footerBrand) {
    footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';
  }

  const footerPrimary = footerBrand.querySelector('section.header-footer-brand__primary');
  if (footerPrimary) {
    footerPrimary.className = 'header-footer-brand__primary';
  }

  const footerPrimaryContent = footerPrimary.querySelector('div.header-footer-brand__primary--content');
  if (footerPrimaryContent) {
    footerPrimaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';
  }

  const footerBrandLeft = footerPrimaryContent.querySelector('section.header-footer-brand__left');
  if (footerBrandLeft) {
    footerBrandLeft.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';
    const itcLogo = footerBrandLeft.querySelector('a.header-footer-brand__logo');
    if (itcLogo) {
      itcLogo.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
      const img = itcLogo.querySelector('img');
      if (img) {
        img.className = 'header-object-fit-contain header-w-100 header-h-100';
      }
    }
    const fssiLogo = footerBrandLeft.querySelector('div.header-footer-brand__secondary--logo');
    if (fssiLogo) {
      fssiLogo.className = 'header-footer-brand__secondary--logo header-d-inline-block';
      const img = fssiLogo.querySelector('img');
      if (img) {
        img.className = 'header-object-fit-contain header-w-100';
      }
    }
  }

  const footerBrandRight = footerPrimaryContent.querySelector('section.header-footer-brand__right');
  if (footerBrandRight) {
    footerBrandRight.className = 'header-footer-brand__right';
    const nav = footerBrandRight.querySelector('nav.header-footer-brand__navbar');
    if (nav) {
      nav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
    }

    const navLeft = nav.querySelector('div.header-footer-brand__navbar--left');
    if (navLeft) {
      navLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';
      Array.from(navLeft.children).forEach((footerListDiv) => {
        const ul = footerListDiv.querySelector('ul.header-footer-list');
        if (ul) {
          ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
          Array.from(ul.children).forEach((row) => {
            const li = document.createElement('li');
            moveInstrumentation(row, li);
            li.className = row.className;
            const a = row.querySelector('a');
            if (a) {
              a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
            }
            li.append(...row.children);
            ul.append(li);
          });
        }
      });
    }

    const navRight = nav.querySelector('div.header-footer-brand__navbar--right');
    if (navRight) {
      navRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
      Array.from(navRight.children).forEach((footerListDiv) => {
        const ul = footerListDiv.querySelector('ul.header-footer-list');
        if (ul) {
          ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
          Array.from(ul.children).forEach((row) => {
            const li = document.createElement('li');
            moveInstrumentation(row, li);
            li.className = row.className;
            const a = row.querySelector('a');
            if (a) {
              a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
            }
            li.append(...row.children);
            ul.append(li);
          });
        }
      });
    }
  }

  const footerSecondary = footerBrand.querySelector('section.header-footer-brand__secondary');
  if (footerSecondary) {
    footerSecondary.className = 'header-footer-brand__secondary';
  }

  const footerSecondaryContent = footerSecondary.querySelector('div.header-footer-brand__secondary--content');
  if (footerSecondaryContent) {
    footerSecondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';
  }

  const socialMediaSection = footerSecondaryContent.children[0];
  if (socialMediaSection) {
    socialMediaSection.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
    const title = socialMediaSection.querySelector('h3.header-social_media--title');
    if (title) {
      title.className = 'header-social_media--title';
    }
    const ul = socialMediaSection.querySelector('ul.header-footer-brand__right--list');
    if (ul) {
      ul.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';
      Array.from(ul.children).forEach((row) => {
        const li = document.createElement('li');
        moveInstrumentation(row, li);
        li.className = row.className;
        const a = row.querySelector('a');
        if (a) {
          a.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
          const img = a.querySelector('img');
          if (img) {
            img.className = 'header-object-fit-contain header-w-100 header-h-100';
          }
        }
        li.append(...row.children);
        ul.append(li);
      });
    }
  }

  const copyrightSection = footerSecondaryContent.children[1];
  if (copyrightSection) {
    copyrightSection.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
    const ul = copyrightSection.querySelector('ul.header-footer-brand__left--list');
    if (ul) {
      ul.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
      Array.from(ul.children).forEach((row) => {
        const li = document.createElement('li');
        moveInstrumentation(row, li);
        li.className = row.className;
        const a = row.querySelector('a');
        if (a) {
          a.className = 'header-footer-brand__left--link header-analytics_cta_click';
        }
        li.append(...row.children);
        ul.append(li);
      });
    }
    const copyrightDiv = copyrightSection.querySelector('div.header-footer-brand__left--copyright');
    if (copyrightDiv) {
      copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
      const span = copyrightDiv.querySelector('span.header-footer-brand__left--text');
      if (span) {
        span.className = 'header-footer-brand__left--text header-text-white';
      }
    }
  }

  const overlay = submenuContainer.querySelector('div.header-overlay');
  if (overlay) {
    overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  }
}