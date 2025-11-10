import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.className = 'header-position-relative header-mb-15';

  const appNameSpan = block.querySelector('span.header-app-name');
  if (appNameSpan) {
    appNameSpan.className = 'header-d-none header-app-name';
  }

  const header = block.querySelector('header.header-boing-container');
  if (header) {
    header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

    const logoDiv = header.querySelector('div:nth-child(2)');
    if (logoDiv) {
      logoDiv.className = 'header-d-flex  header-justify-content-center header-w-25';
      const logoLink = logoDiv.querySelector('a');
      if (logoLink) {
        logoLink.className = 'header-analytics_cta_click';
        logoLink.setAttribute('data-ct', '');
        logoLink.setAttribute('a-label', 'header-logo-boing');
        const logoInnerDiv = logoLink.querySelector('div.header__logo');
        if (logoInnerDiv) {
          logoInnerDiv.className = 'header__logo header-d-flex header-align-items-center';
          const logoImg = logoInnerDiv.querySelector('img');
          if (logoImg) {
            logoImg.className = 'header__logo-img';
          }
        }
      }
    }

    const loginDiv = header.querySelector('div:nth-child(3)');
    if (loginDiv) {
      loginDiv.className = 'header-d-flex header-w-25 header-justify-content-end';
      const loginLink = loginDiv.querySelector('a.header__login-btn-wrapper');
      if (loginLink) {
        loginLink.className = 'header__login-btn-wrapper header-analytics_cta_click';
        loginLink.style.display = 'inline';
        const loginButton = loginLink.querySelector('button.header__login-btn');
        if (loginButton) {
          loginButton.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
        }
      }
    }
  }

  const submenuContainer = block.querySelector('div.header-submenu-container');
  if (submenuContainer) {
    submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

    const aside = submenuContainer.querySelector('aside.header-sidebar');
    if (aside) {
      aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

      const ul = aside.querySelector('ul.header-sidebar__menu');
      if (ul) {
        ul.className = 'header-sidebar__menu header-list-unstyled header-px-4';
        const menuItems = Array.from(ul.children);
        menuItems.forEach((li) => {
          const newLi = document.createElement('li');
          moveInstrumentation(li, newLi);
          newLi.className = 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200';
          if (li.classList.contains('header__menu-item--logout')) {
            newLi.classList.add('header__menu-item--logout');
            newLi.style.display = 'none';
          }

          const link = li.querySelector('a.header-sidebar__menu-link');
          if (link) {
            const newLink = document.createElement('a');
            moveInstrumentation(link, newLink);
            newLink.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
            newLink.href = link.href;
            newLink.setAttribute('data-link', link.getAttribute('data-link'));

            const img = link.querySelector('img.header-sidebar__menu-icon');
            if (img) {
              const newImg = document.createElement('img');
              moveInstrumentation(img, newImg);
              newImg.className = 'header-sidebar__menu-icon header-me-4';
              newImg.src = img.src;
              newImg.alt = img.alt;
              newImg.loading = 'lazy';
              newLink.append(newImg);
            }
            newLink.append(link.textContent.trim());
            newLi.append(newLink);
          }
          ul.replaceChild(newLi, li);
        });
      }

      const sidebarCurve = aside.querySelector('div.header-sidebar__curve');
      if (sidebarCurve) {
        sidebarCurve.className = 'header-sidebar__curve';
      }

      const footerBrand = aside.querySelector('div.header-footer-brand');
      if (footerBrand) {
        footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

        const primarySection = footerBrand.querySelector('section.header-footer-brand__primary');
        if (primarySection) {
          primarySection.className = 'header-footer-brand__primary';
          primarySection.style.backgroundColor = '';

          const container = primarySection.querySelector('div.header-container');
          if (container) {
            const content = container.querySelector('div.header-footer-brand__primary--content');
            if (content) {
              content.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';

              const leftSection = content.querySelector('section.header-footer-brand__left');
              if (leftSection) {
                leftSection.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';

                const itcLogoLink = leftSection.querySelector('a.header-footer-brand__logo');
                if (itcLogoLink) {
                  itcLogoLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
                  itcLogoLink.setAttribute('data-cta-region', 'Footer');
                  itcLogoLink.setAttribute('aria-label', 'ITC Logo');
                  itcLogoLink.target = '_blank';
                  const itcLogoImg = itcLogoLink.querySelector('img');
                  if (itcLogoImg) {
                    itcLogoImg.className = 'header-object-fit-contain header-w-100 header-h-100';
                    itcLogoImg.loading = 'lazy';
                  }
                }

                const fssiLogoDiv = leftSection.querySelector('div.header-footer-brand__secondary--logo');
                if (fssiLogoDiv) {
                  fssiLogoDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
                  const fssiLogoImg = fssiLogoDiv.querySelector('img');
                  if (fssiLogoImg) {
                    fssiLogoImg.className = 'header-object-fit-contain header-w-100';
                    fssiLogoImg.loading = 'lazy';
                  }
                }
              }

              const rightSection = content.querySelector('section.header-footer-brand__right');
              if (rightSection) {
                rightSection.className = 'header-footer-brand__right';
                const nav = rightSection.querySelector('nav.header-footer-brand__navbar');
                if (nav) {
                  nav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
                  nav.setAttribute('aria-label', 'footer navbar');

                  const navLeft = nav.querySelector('div.header-footer-brand__navbar--left');
                  if (navLeft) {
                    navLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';
                    const footerLists = navLeft.querySelectorAll('div.header-footerList');
                    footerLists.forEach((footerList) => {
                      footerList.className = 'header-footerList';
                      const ul = footerList.querySelector('ul.header-footer-list');
                      if (ul) {
                        ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
                        const listItems = Array.from(ul.children);
                        listItems.forEach((li) => {
                          const newLi = document.createElement('li');
                          moveInstrumentation(li, newLi);
                          newLi.className = 'header-footer-list__item';
                          const link = li.querySelector('a.header-cta-analytics');
                          if (link) {
                            const newLink = document.createElement('a');
                            moveInstrumentation(link, newLink);
                            newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
                            newLink.href = link.href;
                            newLink.setAttribute('data-link-region', 'Footer List');
                            if (link.target) {
                              newLink.target = link.target;
                            }
                            newLink.textContent = link.textContent.trim();
                            newLi.append(newLink);
                          }
                          ul.replaceChild(newLi, li);
                        });
                      }
                    });
                  }

                  const navRight = nav.querySelector('div.header-footer-brand__navbar--right');
                  if (navRight) {
                    navRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
                    const footerLists = navRight.querySelectorAll('div.header-footerList');
                    footerLists.forEach((footerList) => {
                      footerList.className = 'header-footerList';
                      const ul = footerList.querySelector('ul.header-footer-list');
                      if (ul) {
                        ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
                        const listItems = Array.from(ul.children);
                        listItems.forEach((li) => {
                          const newLi = document.createElement('li');
                          moveInstrumentation(li, newLi);
                          newLi.className = 'header-footer-list__item';
                          const link = li.querySelector('a.header-cta-analytics');
                          if (link) {
                            const newLink = document.createElement('a');
                            moveInstrumentation(link, newLink);
                            newLink.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
                            newLink.href = link.href;
                            newLink.setAttribute('data-link-region', 'Footer List');
                            if (link.target) {
                              newLink.target = link.target;
                            }
                            newLink.textContent = link.textContent.trim();
                            newLi.append(newLink);
                          }
                          ul.replaceChild(newLi, li);
                        });
                      }
                    });
                  }
                }
              }
            }
          }
        }

        const secondarySection = footerBrand.querySelector('section.header-footer-brand__secondary');
        if (secondarySection) {
          secondarySection.className = 'header-footer-brand__secondary';
          secondarySection.style.backgroundColor = '';

          const container = secondarySection.querySelector('div.header-container');
          if (container) {
            const content = container.querySelector('div.header-footer-brand__secondary--content');
            if (content) {
              content.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';

              const rightSection = content.querySelector('section.header-footer-brand__right');
              if (rightSection) {
                rightSection.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
                const title = rightSection.querySelector('h3.header-social_media--title');
                if (title) {
                  title.className = 'header-social_media--title';
                }
                const ul = rightSection.querySelector('ul.header-footer-brand__right--list');
                if (ul) {
                  ul.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';
                  const listItems = Array.from(ul.children);
                  listItems.forEach((li) => {
                    const newLi = document.createElement('li');
                    moveInstrumentation(li, newLi);
                    newLi.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
                    const link = li.querySelector('a.header-footer-brand__right--link');
                    if (link) {
                      const newLink = document.createElement('a');
                      moveInstrumentation(link, newLink);
                      newLink.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
                      newLink.href = link.href;
                      newLink.setAttribute('data-cta-region', 'Footer');
                      newLink.setAttribute('data-cta-label', link.getAttribute('data-cta-label'));
                      newLink.target = '_blank';
                      newLink.setAttribute('data-platform-name', link.getAttribute('data-platform-name'));
                      newLink.setAttribute('data-social-linktype', 'follow');
                      const img = link.querySelector('img');
                      if (img) {
                        const newImg = document.createElement('img');
                        moveInstrumentation(img, newImg);
                        newImg.className = 'header-object-fit-contain header-w-100 header-h-100';
                        newImg.src = img.src;
                        newImg.alt = img.alt;
                        newImg.loading = 'lazy';
                        newImg.setAttribute('aria-label', img.getAttribute('aria-label'));
                        newLink.append(newImg);
                      }
                      newLi.append(newLink);
                    }
                    ul.replaceChild(newLi, li);
                  });
                }
              }

              const leftSection = content.querySelector('section.header-footer-brand__left');
              if (leftSection) {
                leftSection.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
                const ul = leftSection.querySelector('ul.header-footer-brand__left--list');
                if (ul) {
                  ul.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
                  const listItems = Array.from(ul.children);
                  listItems.forEach((li) => {
                    const newLi = document.createElement('li');
                    moveInstrumentation(li, newLi);
                    newLi.className = 'header-footer-brand__left--item header-foot_link';
                    const link = li.querySelector('a.header-footer-brand__left--link');
                    if (link) {
                      const newLink = document.createElement('a');
                      moveInstrumentation(link, newLink);
                      newLink.className = 'header-footer-brand__left--link header-analytics_cta_click';
                      newLink.href = link.href;
                      newLink.target = '_blank';
                      newLink.setAttribute('data-cta-region', 'Footer');
                      newLink.textContent = link.textContent.trim();
                      newLi.append(newLink);
                    }
                    ul.replaceChild(newLi, li);
                  });
                }
                const copyrightDiv = leftSection.querySelector('div.header-footer-brand__left--copyright');
                if (copyrightDiv) {
                  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
                  const span = copyrightDiv.querySelector('span.header-footer-brand__left--text');
                  if (span) {
                    span.className = 'header-footer-brand__left--text header-text-white';
                  }
                }
              }
            }
          }
        }
      }
    }

    const overlay = submenuContainer.querySelector('div.header-overlay');
    if (overlay) {
      overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
    }
  }
}