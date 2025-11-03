import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('header-position-relative', 'header-mb-15');
  const header = block.querySelector('.header-boing-container');
  if (header) {
    header.classList.add('header-d-flex', 'header-justify-content-between', 'header-align-items-center', 'header-h-15', 'header-px-5', 'header-py-2', 'header-fixed-top', 'header-w-100', 'header-bg-white');
    const logoWrap = header.querySelector('.header__logo');
    if (logoWrap) {
      logoWrap.classList.add('header-d-flex', 'header-align-items-center');
      const logoImg = logoWrap.querySelector('.header__logo-img');
      if (logoImg) {
        logoImg.classList.add('header__logo-img');
      }
    }
    const loginBtnWrap = header.querySelector('.header__login-btn-wrapper');
    if (loginBtnWrap) {
      loginBtnWrap.classList.add('header__login-btn-wrapper', 'header-analytics_cta_click');
      const loginBtn = loginBtnWrap.querySelector('.header__login-btn');
      if (loginBtn) {
        loginBtn.classList.add('header__login-btn', 'header-btn', 'header-text-boing-primary', 'header-bg-transparent', 'header-fw-semibold', 'header-rounded-4', 'header-btn-sm', 'header-py-3', 'header-px-4');
      }
    }
  }
  const submenu = block.querySelector('.header-submenu-container');
  if (submenu) {
    submenu.classList.add('header-position-fixed', 'header-top-0', 'header-start-0', 'header-end-0', 'header-m-auto', 'header-overflow-hidden');
    const sidebar = submenu.querySelector('.header-sidebar');
    if (sidebar) {
      sidebar.classList.add('header-start-0', 'header-bg-white', 'header-position-absolute');
      const menu = sidebar.querySelector('.header-sidebar__menu');
      if (menu) {
        menu.classList.add('header-list-unstyled', 'header-px-4');
        menu.querySelectorAll('.header-sidebar__menu-item').forEach((item) => {
          item.classList.add('header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
          const link = item.querySelector('.header-sidebar__menu-link');
          if (link) {
            link.classList.add(
              'header-d-flex',
              'header-align-items-center',
              'header-text-decoration-none',
              'header-px-6',
              'header-fw-medium',
              'header-analytics_cta_click'
            );
            const icon = link.querySelector('.header-sidebar__menu-icon');
            if (icon) {
              icon.classList.add('header-me-4');
            }
          }
        });
      }
      const sidebarCurve = sidebar.querySelector('.header-sidebar__curve');
      if (sidebarCurve) {
        sidebarCurve.classList.add('header-sidebar__curve');
      }
      const footerBrand = sidebar.querySelector('.header-footer-brand');
      if (footerBrand) {
        footerBrand.classList.add('header-w-100', 'header-bg-boing-neutral-gray-600');
        const primary = footerBrand.querySelector('.header-footer-brand__primary');
        if (primary) {
          primary.classList.add();
          const content = primary.querySelector('.header-footer-brand__primary--content');
          if (content) {
            content.classList.add('header-d-flex', 'header-flex-column', 'header-flex-md-row', 'header-justify-content-md-between', 'header-align-items-center');
            const left = content.querySelector('.header-footer-brand__left');
            if (left) {
              left.classList.add('header-d-flex', 'header-gap-16', 'header-px-10', 'header-align-items-center', 'header-justify-content-center');
            }
            const right = content.querySelector('.header-footer-brand__right');
            if (right) {
              right.classList.add();
              const navbar = right.querySelector('.header-footer-brand__navbar');
              if (navbar) {
                navbar.classList.add('header-d-grid', 'header-d-md-flex');
                const navbarLeft = navbar.querySelector('.header-footer-brand__navbar--left');
                if (navbarLeft) {
                  navbarLeft.classList.add('header-d-flex', 'header-flex-column', 'header-flex-md-row');
                }
                const navbarRight = navbar.querySelector('.header-footer-brand__navbar--right');
                if (navbarRight) {
                  navbarRight.classList.add('header-d-flex', 'header-flex-column', 'header-flex-md-row');
                }
              }
            }
          }
        }
        const secondary = footerBrand.querySelector('.header-footer-brand__secondary');
        if (secondary) {
          const content = secondary.querySelector('.header-footer-brand__secondary--content');
          if (content) {
            content.classList.add('header-d-flex', 'header-flex-column', 'header-justify-content-md-between', 'header-align-items-center');
            const right = content.querySelector('.header-footer-brand__right');
            if (right) {
              right.classList.add('header-d-flex', 'header-flex-column', 'header-pb-5');
              const title = right.querySelector('.header-social_media--title');
              if (title) {
                title.classList.add('header-social_media--title');
              }
              const list = right.querySelector('.header-footer-brand__right--list');
              if (list) {
                list.classList.add('header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-px-10', 'header-flex-wrap');
                list.querySelectorAll('.header-footer-brand__right--item').forEach((item) => {
                  item.classList.add('header-d-flex', 'header-justify-content-center', 'header-align-items-center');
                  const link = item.querySelector('.header-footer-brand__right--link');
                  if (link) {
                    link.classList.add('header-d-flex', 'header-justify-content-center', 'header-align-items-center', 'header-analytics_cta_click');
                    const icon = link.querySelector('img');
                    if (icon) {
                      icon.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
                    }
                  }
                });
              }
            }
            const left = content.querySelector('.header-footer-brand__left');
            if (left) {
              left.classList.add('header-py-5', 'header-d-flex', 'header-flex-column', 'header-gap-3');
              const leftList = left.querySelector('.header-footer-brand__left--list');
              if (leftList) {
                leftList.classList.add('header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-flex-wrap');
                leftList.querySelectorAll('.header-footer-brand__left--item').forEach((item) => {
                  item.classList.add('header-foot_link');
                  const link = item.querySelector('.header-footer-brand__left--link');
                  if (link) {
                    link.classList.add('header-analytics_cta_click');
                  }
                });
              }
              const copyright = left.querySelector('.header-footer-brand__left--copyright');
              if (copyright) {
                copyright.classList.add('header-text-center');
                const text = copyright.querySelector('.header-footer-brand__left--text');
                if (text) {
                  text.classList.add('header-text-white');
                }
              }
            }
          }
        }
      }
    }
    const overlay = submenu.querySelector('.header-overlay');
    if (overlay) {
      overlay.classList.add('header-position-absolute', 'header-top-0', 'header-start-0', 'header-w-100', 'header-h-100', 'header-bg-black', 'header-opacity-25');
    }
  }
}
