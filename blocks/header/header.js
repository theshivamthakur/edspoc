import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const mainSection = block.querySelector('section.header-position-relative');
  if (!mainSection) return;

  const appNameSpan = mainSection.querySelector('span.header-app-name');
  if (appNameSpan) {
    appNameSpan.remove();
  }

  const headerElement = mainSection.querySelector('header.header-boing-container');
  if (headerElement) {
    const headerDivs = [...headerElement.children];

    // Left section (hamburger menu icon)
    const leftDiv = headerDivs[0];
    if (leftDiv) {
      const hamburgerIcon = document.createElement('div');
      moveInstrumentation(leftDiv, hamburgerIcon);
      hamburgerIcon.className = 'header-hamburger-icon';
      hamburgerIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12H21" stroke="#172026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 6H21" stroke="#172026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 18H21" stroke="#172026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      leftDiv.replaceWith(hamburgerIcon);
    }

    // Middle section (logo)
    const middleDiv = headerDivs[1];
    if (middleDiv) {
      const logoLink = middleDiv.querySelector('a.header-analytics_cta_click');
      if (logoLink) {
        const logoImg = logoLink.querySelector('img.header__logo-img');
        if (logoImg) {
          const newLogoImg = document.createElement('img');
          moveInstrumentation(logoImg, newLogoImg);
          newLogoImg.className = logoImg.className;
          newLogoImg.src = logoImg.src;
          newLogoImg.alt = logoImg.alt;
          logoLink.replaceChildren(newLogoImg);
        }
      }
      middleDiv.className = 'header-d-flex header-justify-content-center header-w-25';
    }

    // Right section (login button)
    const rightDiv = headerDivs[2];
    if (rightDiv) {
      const loginLink = rightDiv.querySelector('a.header__login-btn-wrapper');
      if (loginLink) {
        const loginButton = loginLink.querySelector('button.header__login-btn');
        if (loginButton) {
          const newLoginButton = document.createElement('button');
          moveInstrumentation(loginButton, newLoginButton);
          newLoginButton.className = loginButton.className;
          newLoginButton.textContent = loginButton.textContent.trim();
          loginLink.replaceChildren(newLoginButton);
        }
      }
      rightDiv.className = 'header-d-flex header-w-25 header-justify-content-end';
    }
  }

  const submenuContainer = mainSection.querySelector('div.header-submenu-container');
  if (submenuContainer) {
    const sidebar = submenuContainer.querySelector('aside.header-sidebar');
    if (sidebar) {
      const menuList = sidebar.querySelector('ul.header-sidebar__menu');
      if (menuList) {
        const newMenuList = document.createElement('ul');
        moveInstrumentation(menuList, newMenuList);
        newMenuList.className = menuList.className;
        [...menuList.children].forEach((menuItem) => {
          const newMenuItem = document.createElement('li');
          moveInstrumentation(menuItem, newMenuItem);
          newMenuItem.className = menuItem.className;

          const link = menuItem.querySelector('a.header-sidebar__menu-link');
          if (link) {
            const newLink = document.createElement('a');
            moveInstrumentation(link, newLink);
            newLink.className = link.className;
            newLink.href = link.href;

            const img = link.querySelector('img.header-sidebar__menu-icon');
            if (img) {
              const newImg = document.createElement('img');
              moveInstrumentation(img, newImg);
              newImg.className = img.className;
              newImg.src = img.src;
              newImg.alt = img.alt;
              newImg.loading = img.loading;
              newLink.append(newImg);
            }
            newLink.append(document.createTextNode(link.textContent.replace(/\s+/g, ' ').trim()));
            newMenuItem.append(newLink);
          }
          newMenuList.append(newMenuItem);
        });
        menuList.replaceWith(newMenuList);
      }

      const footerBrand = sidebar.querySelector('div.header-footer-brand');
      if (footerBrand) {
        const primarySection = footerBrand.querySelector('section.header-footer-brand__primary');
        if (primarySection) {
          const leftSection = primarySection.querySelector('section.header-footer-brand__left');
          if (leftSection) {
            const itcLogoLink = leftSection.querySelector('a[aria-label="ITC Logo"]');
            if (itcLogoLink) {
              const itcLogoImg = itcLogoLink.querySelector('img');
              if (itcLogoImg) {
                const newItcLogoImg = document.createElement('img');
                moveInstrumentation(itcLogoImg, newItcLogoImg);
                newItcLogoImg.className = itcLogoImg.className;
                newItcLogoImg.src = itcLogoImg.src;
                newItcLogoImg.alt = itcLogoImg.alt;
                newItcLogoImg.loading = itcLogoImg.loading;
                itcLogoLink.replaceChildren(newItcLogoImg);
              }
            }
            const fssiLogoDiv = leftSection.querySelector('div.header-footer-brand__secondary--logo');
            if (fssiLogoDiv) {
              const fssiLogoImg = fssiLogoDiv.querySelector('img');
              if (fssiLogoImg) {
                const newFssiLogoImg = document.createElement('img');
                moveInstrumentation(fssiLogoImg, newFssiLogoImg);
                newFssiLogoImg.className = fssiLogoImg.className;
                newFssiLogoImg.src = fssiLogoImg.src;
                newFssiLogoImg.alt = fssiLogoImg.alt;
                newFssiLogoImg.loading = fssiLogoImg.loading;
                fssiLogoDiv.replaceChildren(newFssiLogoImg);
              }
            }
          }

          const rightSection = primarySection.querySelector('section.header-footer-brand__right');
          if (rightSection) {
            const nav = rightSection.querySelector('nav.header-footer-brand__navbar');
            if (nav) {
              const footerLists = nav.querySelectorAll('div.header-footerList');
              footerLists.forEach((footerListDiv) => {
                const ul = footerListDiv.querySelector('ul.header-footer-list');
                if (ul) {
                  const newUl = document.createElement('ul');
                  moveInstrumentation(ul, newUl);
                  newUl.className = ul.className;
                  [...ul.children].forEach((li) => {
                    const newLi = document.createElement('li');
                    moveInstrumentation(li, newLi);
                    newLi.className = li.className;
                    const link = li.querySelector('a');
                    if (link) {
                      const newLink = document.createElement('a');
                      moveInstrumentation(link, newLink);
                      newLink.className = link.className;
                      newLink.href = link.href;
                      newLink.textContent = link.textContent.trim();
                      if (link.target) newLink.target = link.target;
                      newLi.append(newLink);
                    }
                    newUl.append(newLi);
                  });
                  footerListDiv.replaceChildren(newUl);
                }
              });
            }
          }
        }

        const secondarySection = footerBrand.querySelector('section.header-footer-brand__secondary');
        if (secondarySection) {
          const rightSection = secondarySection.querySelector('section.header-footer-brand__right');
          if (rightSection) {
            const socialMediaList = rightSection.querySelector('ul.header-footer-brand__right--list');
            if (socialMediaList) {
              const newSocialMediaList = document.createElement('ul');
              moveInstrumentation(socialMediaList, newSocialMediaList);
              newSocialMediaList.className = socialMediaList.className;
              [...socialMediaList.children].forEach((li) => {
                const newLi = document.createElement('li');
                moveInstrumentation(li, newLi);
                newLi.className = li.className;
                const link = li.querySelector('a');
                if (link) {
                  const newLink = document.createElement('a');
                  moveInstrumentation(link, newLink);
                  newLink.className = link.className;
                  newLink.href = link.href;
                  if (link.target) newLink.target = link.target;
                  const img = link.querySelector('img');
                  if (img) {
                    const newImg = document.createElement('img');
                    moveInstrumentation(img, newImg);
                    newImg.className = img.className;
                    newImg.src = img.src;
                    newImg.alt = img.alt;
                    newImg.loading = img.loading;
                    newLink.append(newImg);
                  }
                  newLi.append(newLink);
                }
                newSocialMediaList.append(newLi);
              });
              socialMediaList.replaceWith(newSocialMediaList);
            }
          }

          const leftSection = secondarySection.querySelector('section.header-footer-brand__left');
          if (leftSection) {
            const footerBrandLeftList = leftSection.querySelector('ul.header-footer-brand__left--list');
            if (footerBrandLeftList) {
              const newFooterBrandLeftList = document.createElement('ul');
              moveInstrumentation(footerBrandLeftList, newFooterBrandLeftList);
              newFooterBrandLeftList.className = footerBrandLeftList.className;
              [...footerBrandLeftList.children].forEach((li) => {
                const newLi = document.createElement('li');
                moveInstrumentation(li, newLi);
                newLi.className = li.className;
                const link = li.querySelector('a');
                if (link) {
                  const newLink = document.createElement('a');
                  moveInstrumentation(link, newLink);
                  newLink.className = link.className;
                  newLink.href = link.href;
                  newLink.textContent = link.textContent.trim();
                  if (link.target) newLink.target = link.target;
                  newLi.append(newLink);
                }
                newFooterBrandLeftList.append(newLi);
              });
              footerBrandLeftList.replaceWith(newFooterBrandLeftList);
            }

            const copyrightDiv = leftSection.querySelector('div.header-footer-brand__left--copyright');
            if (copyrightDiv) {
              const copyrightSpan = copyrightDiv.querySelector('span.header-footer-brand__left--text');
              if (copyrightSpan) {
                const newCopyrightSpan = document.createElement('span');
                moveInstrumentation(copyrightSpan, newCopyrightSpan);
                newCopyrightSpan.className = copyrightSpan.className;
                newCopyrightSpan.textContent = copyrightSpan.textContent.trim();
                copyrightDiv.replaceChildren(newCopyrightSpan);
              }
            }
          }
        }
      }
    }
  }
}