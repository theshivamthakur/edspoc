import { moveInstrumentation } from '../../scripts/scripts.js';
import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Clear block
  block.textContent = '';

  // --- HEADER SECTION ---
  const headerSection = document.createElement('div');
  headerSection.className = 'header-footer__container';
  // Move instrumentation from root section to new headerSection
  moveInstrumentation(block, headerSection);

  // App Name (hidden span)
  const appNameSpan = block.querySelector('.header-app-name');
  if(appNameSpan) {
    const newAppName = document.createElement('span');
    moveInstrumentation(appNameSpan, newAppName);
    newAppName.className = appNameSpan.className;
    newAppName.dataset.appName = appNameSpan.dataset.appName;
    newAppName.textContent = appNameSpan.textContent;
    headerSection.append(newAppName);
  }

  // Header (top nav)
  const header = block.querySelector('header');
  if(header) {
    const newHeader = document.createElement('header');
    moveInstrumentation(header, newHeader);
    newHeader.className = header.className;
    // Header wrapper flex row
    const headerRows = [...header.children];
    headerRows.forEach((row, i) => {
      const newHeaderRow = document.createElement('div');
      moveInstrumentation(row, newHeaderRow);
      newHeaderRow.className = row.className;
      // If row has children, move children
      [...row.children].forEach((cell, j) => {
        // LOGO container (center)
        if(cell.querySelector('.header__logo')) {
          const link = cell.querySelector('a');
          if(link) {
            const newLink = document.createElement('a');
            moveInstrumentation(link, newLink);
            newLink.className = link.className;
            newLink.href = link.href;
            if(link.hasAttribute('a-label')) newLink.setAttribute('a-label', link.getAttribute('a-label'));
            const logoDiv = link.querySelector('.header__logo');
            if(logoDiv) {
              const newLogoDiv = document.createElement('div');
              moveInstrumentation(logoDiv, newLogoDiv);
              newLogoDiv.className = logoDiv.className;
              const img = logoDiv.querySelector('img');
              if(img) {
                const picture = createOptimizedPicture(img.src, img.alt, img.className);
                moveInstrumentation(img, picture.querySelector('img'));
                newLogoDiv.append(picture);
              }
              newLink.append(newLogoDiv);
            }
            newHeaderRow.append(newLink);
          }
        } else if(cell.querySelector('button')) { // Login button
          const loginLink = cell.querySelector('a');
          if(loginLink) {
            const newLoginLink = document.createElement('a');
            moveInstrumentation(loginLink, newLoginLink);
            newLoginLink.className = loginLink.className;
            newLoginLink.href = loginLink.href;
            const btn = loginLink.querySelector('button');
            if(btn) {
              const newBtn = document.createElement('button');
              moveInstrumentation(btn, newBtn);
              newBtn.className = btn.className;
              newBtn.textContent = btn.textContent;
              newLoginLink.append(newBtn);
            }
            newHeaderRow.append(newLoginLink);
          }
        } else if(cell.querySelector('svg, img')) { // Left side logo/icon
          const img = cell.querySelector('img');
          if(img) {
            const picture = createOptimizedPicture(img.src, img.alt, img.className);
            moveInstrumentation(img, picture.querySelector('img'));
            newHeaderRow.append(picture);
          }
        }
      });
      newHeader.append(newHeaderRow);
    });
    headerSection.append(newHeader);
  }

  // --- SIDEBAR NAVIGATION ---
  const submenu = block.querySelector('.header-submenu-container');
  if(submenu) {
    const newSubmenu = document.createElement('div');
    moveInstrumentation(submenu, newSubmenu);
    newSubmenu.className = submenu.className;
    // Sidebar (aside)
    const aside = submenu.querySelector('aside.header-sidebar');
    if(aside) {
      const newAside = document.createElement('aside');
      moveInstrumentation(aside, newAside);
      newAside.className = aside.className;
      // Sidebar Menu List
      const sidebarMenu = aside.querySelector('ul.header-sidebar__menu');
      if(sidebarMenu) {
        const newMenu = document.createElement('ul');
        moveInstrumentation(sidebarMenu, newMenu);
        newMenu.className = sidebarMenu.className;
        [...sidebarMenu.children].forEach((li) => {
          const newLi = document.createElement('li');
          moveInstrumentation(li, newLi);
          newLi.className = li.className;
          // Each sidebar nav item
          const link = li.querySelector('a');
          if(link) {
            const newLink = document.createElement('a');
            moveInstrumentation(link, newLink);
            newLink.className = link.className;
            newLink.href = link.href;
            // copy all data-* attributes
            [...link.attributes].forEach(attr => {
              if(attr.name.startsWith('data-')) newLink.setAttribute(attr.name, attr.value);
            });
            // Icon
            const iconImg = link.querySelector('img');
            if(iconImg) {
              const iconPic = createOptimizedPicture(iconImg.src, iconImg.alt, iconImg.className);
              moveInstrumentation(iconImg, iconPic.querySelector('img'));
              newLink.append(iconPic);
            }
            // Label
            const labelText = [...link.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
            if(labelText) newLink.append(document.createTextNode(labelText.textContent.trim()));
            newLi.append(newLink);
          }
          newMenu.append(newLi);
        });
        newAside.append(newMenu);
      }
      // Sidebar curve
      const sidebarCurve = aside.querySelector('.header-sidebar__curve');
      if(sidebarCurve) {
        const newCurve = document.createElement('div');
        moveInstrumentation(sidebarCurve, newCurve);
        newCurve.className = sidebarCurve.className;
        newAside.append(newCurve);
      }
      // Footer Brand (inside sidebar)
      const footerBrand = aside.querySelector('.header-footer-brand');
      if(footerBrand) {
        const newFooterBrand = document.createElement('div');
        moveInstrumentation(footerBrand, newFooterBrand);
        newFooterBrand.className = footerBrand.className;
        // Footer Brand Primary
        const primarySection = footerBrand.querySelector('.header-footer-brand__primary');
        if(primarySection) {
          const newPrimarySection = document.createElement('section');
          moveInstrumentation(primarySection, newPrimarySection);
          newPrimarySection.className = primarySection.className;
          // container
          const containerDiv = primarySection.querySelector('.header-container');
          if(containerDiv) {
            const newContainer = document.createElement('div');
            moveInstrumentation(containerDiv, newContainer);
            newContainer.className = containerDiv.className;
            // content
            const contentDiv = containerDiv.querySelector('.header-footer-brand__primary--content');
            if(contentDiv) {
              const newContent = document.createElement('div');
              moveInstrumentation(contentDiv, newContent);
              newContent.className = contentDiv.className;
              // Left: Logos
              const leftSection = contentDiv.querySelector('.header-footer-brand__left');
              if(leftSection) {
                const newLeft = document.createElement('section');
                moveInstrumentation(leftSection, newLeft);
                newLeft.className = leftSection.className;
                // ITC Logo
                const itcLogoLink = leftSection.querySelector('a');
                if(itcLogoLink) {
                  const newLogoLink = document.createElement('a');
                  moveInstrumentation(itcLogoLink, newLogoLink);
                  newLogoLink.className = itcLogoLink.className;
                  newLogoLink.href = itcLogoLink.href;
                  newLogoLink.target = itcLogoLink.target;
                  [...itcLogoLink.attributes].forEach(attr => {
                    if(attr.name.startsWith('data-')) newLogoLink.setAttribute(attr.name, attr.value);
                    if(attr.name === 'aria-label') newLogoLink.setAttribute('aria-label', attr.value);
                  });
                  const itcImg = itcLogoLink.querySelector('img');
                  if(itcImg) {
                    const pic = createOptimizedPicture(itcImg.src, itcImg.alt, itcImg.className);
                    moveInstrumentation(itcImg, pic.querySelector('img'));
                    newLogoLink.append(pic);
                  }
                  newLeft.append(newLogoLink);
                }
                // FSSI Logo
                const fssiDiv = leftSection.querySelector('.header-footer-brand__secondary--logo');
                if(fssiDiv) {
                  const newFssiDiv = document.createElement('div');
                  moveInstrumentation(fssiDiv, newFssiDiv);
                  newFssiDiv.className = fssiDiv.className;
                  const fssiImg = fssiDiv.querySelector('img');
                  if(fssiImg) {
                    const pic = createOptimizedPicture(fssiImg.src, fssiImg.alt, fssiImg.className);
                    moveInstrumentation(fssiImg, pic.querySelector('img'));
                    newFssiDiv.append(pic);
                  }
                  newLeft.append(newFssiDiv);
                }
                newContent.append(newLeft);
              }
              // Right: Navbars
              const rightSection = contentDiv.querySelector('.header-footer-brand__right');
              if(rightSection) {
                const newRight = document.createElement('section');
                moveInstrumentation(rightSection, newRight);
                newRight.className = rightSection.className;
                // navbar
                const navbar = rightSection.querySelector('.header-footer-brand__navbar');
                if(navbar) {
                  const newNavbar = document.createElement('nav');
                  moveInstrumentation(navbar, newNavbar);
                  newNavbar.className = navbar.className;
                  newNavbar.setAttribute('aria-label', navbar.getAttribute('aria-label'));
                  // left and right lists
                  const navbarLeft = navbar.querySelector('.header-footer-brand__navbar--left');
                  if(navbarLeft) {
                    const newNavbarLeft = document.createElement('div');
                    moveInstrumentation(navbarLeft, newNavbarLeft);
                    newNavbarLeft.className = navbarLeft.className;
                    // Each .header-footerList
                    [...navbarLeft.querySelectorAll('.header-footerList')].forEach(listDiv => {
                      const newListDiv = document.createElement('div');
                      moveInstrumentation(listDiv, newListDiv);
                      newListDiv.className = listDiv.className;
                      const ul = listDiv.querySelector('ul');
                      if(ul) {
                        const newUl = document.createElement('ul');
                        moveInstrumentation(ul, newUl);
                        newUl.className = ul.className;
                        [...ul.children].forEach(li => {
                          const newLi = document.createElement('li');
                          moveInstrumentation(li, newLi);
                          newLi.className = li.className;
                          const link = li.querySelector('a');
                          if(link) {
                            const newLink = document.createElement('a');
                            moveInstrumentation(link, newLink);
                            newLink.className = link.className;
                            newLink.href = link.href;
                            [...link.attributes].forEach(attr => {
                              if(attr.name.startsWith('data-')) newLink.setAttribute(attr.name, attr.value);
                              if(attr.name === 'target') newLink.setAttribute('target', attr.value);
                            });
                            newLink.textContent = link.textContent;
                            newLi.append(newLink);
                          }
                          newUl.append(newLi);
                        });
                        newListDiv.append(newUl);
                      }
                      newNavbarLeft.append(newListDiv);
                    });
                    newNavbar.append(newNavbarLeft);
                  }
                  const navbarRight = navbar.querySelector('.header-footer-brand__navbar--right');
                  if(navbarRight) {
                    const newNavbarRight = document.createElement('div');
                    moveInstrumentation(navbarRight, newNavbarRight);
                    newNavbarRight.className = navbarRight.className;
                    [...navbarRight.querySelectorAll('.header-footerList')].forEach(listDiv => {
                      const newListDiv = document.createElement('div');
                      moveInstrumentation(listDiv, newListDiv);
                      newListDiv.className = listDiv.className;
                      const ul = listDiv.querySelector('ul');
                      if(ul) {
                        const newUl = document.createElement('ul');
                        moveInstrumentation(ul, newUl);
                        newUl.className = ul.className;
                        [...ul.children].forEach(li => {
                          const newLi = document.createElement('li');
                          moveInstrumentation(li, newLi);
                          newLi.className = li.className;
                          const link = li.querySelector('a');
                          if(link) {
                            const newLink = document.createElement('a');
                            moveInstrumentation(link, newLink);
                            newLink.className = link.className;
                            newLink.href = link.href;
                            [...link.attributes].forEach(attr => {
                              if(attr.name.startsWith('data-')) newLink.setAttribute(attr.name, attr.value);
                              if(attr.name === 'target') newLink.setAttribute('target', attr.value);
                            });
                            newLink.textContent = link.textContent;
                            newLi.append(newLink);
                          }
                          newUl.append(newLi);
                        });
                        newListDiv.append(newUl);
                      }
                      newNavbarRight.append(newListDiv);
                    });
                    newNavbar.append(newNavbarRight);
                  }
                  newRight.append(newNavbar);
                }
                newContent.append(newRight);
              }
              newContainer.append(newContent);
            }
            newPrimarySection.append(newContainer);
          }
          newFooterBrand.append(newPrimarySection);
        }
        // Footer Brand Secondary
        const secondarySection = footerBrand.querySelector('.header-footer-brand__secondary');
        if(secondarySection) {
          const newSecondarySection = document.createElement('section');
          moveInstrumentation(secondarySection, newSecondarySection);
          newSecondarySection.className = secondarySection.className;
          // container
          const containerDiv = secondarySection.querySelector('.header-container');
          if(containerDiv) {
            const newContainer = document.createElement('div');
            moveInstrumentation(containerDiv, newContainer);
            newContainer.className = containerDiv.className;
            // content
            const contentDiv = containerDiv.querySelector('.header-footer-brand__secondary--content');
            if(contentDiv) {
              const newContent = document.createElement('div');
              moveInstrumentation(contentDiv, newContent);
              newContent.className = contentDiv.className;
              // Social links right
              const socialSection = contentDiv.querySelector('.header-footer-brand__right');
              if(socialSection) {
                const newSocialSection = document.createElement('section');
                moveInstrumentation(socialSection, newSocialSection);
                newSocialSection.className = socialSection.className;
                // Title
                const socialTitle = socialSection.querySelector('.header-social_media--title');
                if(socialTitle) {
                  const newSocialTitle = document.createElement('h3');
                  moveInstrumentation(socialTitle, newSocialTitle);
                  newSocialTitle.className = socialTitle.className;
                  newSocialTitle.textContent = socialTitle.textContent;
                  newSocialSection.append(newSocialTitle);
                }
                // Social icons list
                const socialUl = socialSection.querySelector('ul');
                if(socialUl) {
                  const newSocialUl = document.createElement('ul');
                  moveInstrumentation(socialUl, newSocialUl);
                  newSocialUl.className = socialUl.className;
                  [...socialUl.children].forEach(li => {
                    const newLi = document.createElement('li');
                    moveInstrumentation(li, newLi);
                    newLi.className = li.className;
                    const link = li.querySelector('a');
                    if(link) {
                      const newLink = document.createElement('a');
                      moveInstrumentation(link, newLink);
                      newLink.className = link.className;
                      newLink.href = link.href;
                      [...link.attributes].forEach(attr => {
                        if(attr.name.startsWith('data-')) newLink.setAttribute(attr.name, attr.value);
                        if(attr.name === 'aria-label') newLink.setAttribute('aria-label', attr.value);
                        if(attr.name === 'target') newLink.setAttribute('target', attr.value);
                      });
                      const iconImg = link.querySelector('img');
                      if(iconImg) {
                        const pic = createOptimizedPicture(iconImg.src, iconImg.alt, iconImg.className);
                        moveInstrumentation(iconImg, pic.querySelector('img'));
                        newLink.append(pic);
                      }
                      newLi.append(newLink);
                    }
                    newSocialUl.append(newLi);
                  });
                  newSocialSection.append(newSocialUl);
                }
                newContent.append(newSocialSection);
              }
              // Footer left: copyright etc
              const leftSection = contentDiv.querySelector('.header-footer-brand__left');
              if(leftSection) {
                const newLeft = document.createElement('section');
                moveInstrumentation(leftSection, newLeft);
                newLeft.className = leftSection.className;
                // List
                const leftUl = leftSection.querySelector('ul');
                if(leftUl) {
                  const newLeftUl = document.createElement('ul');
                  moveInstrumentation(leftUl, newLeftUl);
                  newLeftUl.className = leftUl.className;
                  [...leftUl.children].forEach(li => {
                    const newLi = document.createElement('li');
                    moveInstrumentation(li, newLi);
                    newLi.className = li.className;
                    const a = li.querySelector('a');
                    if(a) {
                      const newA = document.createElement('a');
                      moveInstrumentation(a, newA);
                      newA.className = a.className;
                      newA.href = a.href;
                      if(a.hasAttribute('target')) newA.setAttribute('target', a.getAttribute('target'));
                      [...a.attributes].forEach(attr => {
                        if(attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                      });
                      newA.textContent = a.textContent;
                      newLi.append(newA);
                    }
                    newLeftUl.append(newLi);
                  });
                  newLeft.append(newLeftUl);
                }
                // Copyright
                const copyrightDiv = leftSection.querySelector('.header-footer-brand__left--copyright');
                if(copyrightDiv) {
                  const newCopyrightDiv = document.createElement('div');
                  moveInstrumentation(copyrightDiv, newCopyrightDiv);
                  newCopyrightDiv.className = copyrightDiv.className;
                  const textSpan = copyrightDiv.querySelector('span');
                  if(textSpan) {
                    const newSpan = document.createElement('span');
                    moveInstrumentation(textSpan, newSpan);
                    newSpan.className = textSpan.className;
                    newSpan.textContent = textSpan.textContent;
                    newCopyrightDiv.append(newSpan);
                  }
                  newLeft.append(newCopyrightDiv);
                }
                newContent.append(newLeft);
              }
              newContainer.append(newContent);
            }
            newSecondarySection.append(newContainer);
          }
          newFooterBrand.append(newSecondarySection);
        }
        newAside.append(newFooterBrand);
      }
      newSubmenu.append(newAside);
    }
    // Overlay
    const overlayDiv = submenu.querySelector('.header-overlay');
    if(overlayDiv) {
      const newOverlay = document.createElement('div');
      moveInstrumentation(overlayDiv, newOverlay);
      newOverlay.className = overlayDiv.className;
      newSubmenu.append(newOverlay);
    }
    headerSection.append(newSubmenu);
  }

  // Append everything to block
  block.append(headerSection);
}
