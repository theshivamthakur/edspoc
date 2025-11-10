import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Move instrumentation for block root
  const section = block.closest('section');
  if (section) {
    moveInstrumentation(section, block);
    block.className = section.className;
  }

  // App name
  const appNameSpan = section.querySelector('.header-app-name');
  if (appNameSpan) {
    const appName = document.createElement('span');
    moveInstrumentation(appNameSpan, appName);
    appName.className = appNameSpan.className;
    appName.dataset.appName = appNameSpan.dataset.appName;
    appName.textContent = appNameSpan.textContent;
    block.append(appName);
  }

  // Header (top nav)
  const oldHeader = section.querySelector('header.header-boing-container');
  if (oldHeader) {
    const newHeader = document.createElement('header');
    moveInstrumentation(oldHeader, newHeader);
    newHeader.className = oldHeader.className;

    // Logo left
    const leftDiv = oldHeader.children[0];
    const newLeftDiv = document.createElement('div');
    moveInstrumentation(leftDiv, newLeftDiv);
    newLeftDiv.className = leftDiv.className;
    // Append any images or content (svg? skip if text node)
    [...leftDiv.childNodes].forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        moveInstrumentation(child, child);
        newLeftDiv.append(child);
      }
    });
    newHeader.append(newLeftDiv);

    // Logo center
    const centerDiv = oldHeader.children[1];
    const newCenterDiv = document.createElement('div');
    moveInstrumentation(centerDiv, newCenterDiv);
    newCenterDiv.className = centerDiv.className;
    const oldLogoLink = centerDiv.querySelector('a');
    if (oldLogoLink) {
      const newLogoLink = document.createElement('a');
      moveInstrumentation(oldLogoLink, newLogoLink);
      newLogoLink.className = oldLogoLink.className;
      newLogoLink.href = oldLogoLink.href;
      if (oldLogoLink.hasAttribute('data-ct')) newLogoLink.setAttribute('data-ct', oldLogoLink.getAttribute('data-ct'));
      if (oldLogoLink.hasAttribute('a-label')) newLogoLink.setAttribute('a-label', oldLogoLink.getAttribute('a-label'));
      // Logo container
      const oldLogoDiv = oldLogoLink.querySelector('div.header__logo');
      if (oldLogoDiv) {
        const newLogoDiv = document.createElement('div');
        moveInstrumentation(oldLogoDiv, newLogoDiv);
        newLogoDiv.className = oldLogoDiv.className;
        // Logo img
        const img = oldLogoDiv.querySelector('img');
        if (img) {
          const newImg = document.createElement('img');
          moveInstrumentation(img, newImg);
          newImg.className = img.className;
          newImg.src = img.src;
          newImg.alt = img.alt;
          newLogoDiv.append(newImg);
        }
        newLogoLink.append(newLogoDiv);
      }
      newCenterDiv.append(newLogoLink);
    }
    newHeader.append(newCenterDiv);

    // Login btn right
    const rightDiv = oldHeader.children[2];
    const newRightDiv = document.createElement('div');
    moveInstrumentation(rightDiv, newRightDiv);
    newRightDiv.className = rightDiv.className;
    const loginLink = rightDiv.querySelector('a');
    if (loginLink) {
      const newLoginLink = document.createElement('a');
      moveInstrumentation(loginLink, newLoginLink);
      newLoginLink.className = loginLink.className;
      newLoginLink.href = loginLink.href;
      if (loginLink.style.display) newLoginLink.style.display = loginLink.style.display;
      // Button
      const btn = loginLink.querySelector('button');
      if (btn) {
        const newBtn = document.createElement('button');
        moveInstrumentation(btn, newBtn);
        newBtn.className = btn.className;
        newBtn.textContent = btn.textContent;
        newLoginLink.append(newBtn);
      }
      newRightDiv.append(newLoginLink);
    }
    newHeader.append(newRightDiv);

    block.append(newHeader);
  }

  // Submenu container = sidebar + overlay
  const submenuContainer = section.querySelector('.header-submenu-container');
  if (submenuContainer) {
    const newSubmenuContainer = document.createElement('div');
    moveInstrumentation(submenuContainer, newSubmenuContainer);
    newSubmenuContainer.className = submenuContainer.className;

    // Sidebar (aside)
    const aside = submenuContainer.querySelector('aside.header-sidebar');
    if (aside) {
      const newAside = document.createElement('aside');
      moveInstrumentation(aside, newAside);
      newAside.className = aside.className;

      // Sidebar menu ul
      const ul = aside.querySelector('ul.header-sidebar__menu');
      if (ul) {
        const newUl = document.createElement('ul');
        moveInstrumentation(ul, newUl);
        newUl.className = ul.className;
        [...ul.children].forEach((li) => {
          const newLi = document.createElement('li');
          moveInstrumentation(li, newLi);
          newLi.className = li.className;
          // Only visible ones
          if (li.style.display === 'none') {
            newLi.style.display = 'none';
          }
          // Sidebar anchor
          const a = li.querySelector('a');
          if (a) {
            const newA = document.createElement('a');
            moveInstrumentation(a, newA);
            newA.className = a.className;
            newA.href = a.href;
            // Copy all data- attrs
            [...a.attributes].forEach(attr => {
              if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
            });
            // Sidebar icon
            const icon = a.querySelector('img');
            if (icon) {
              const newIcon = document.createElement('img');
              moveInstrumentation(icon, newIcon);
              newIcon.className = icon.className;
              newIcon.src = icon.src;
              newIcon.alt = icon.alt;
              if (icon.loading) newIcon.loading = icon.loading;
              newA.append(newIcon);
            }
            // Label
            newA.append(document.createTextNode(a.textContent.trim()));
            newLi.append(newA);
          }
          newUl.append(newLi);
        });
        newAside.append(newUl);
      }

      // Sidebar curve (div)
      const sidebarCurve = aside.querySelector('.header-sidebar__curve');
      if (sidebarCurve) {
        const newCurve = document.createElement('div');
        moveInstrumentation(sidebarCurve, newCurve);
        newCurve.className = sidebarCurve.className;
        newAside.append(newCurve);
      }

      // Footer Brand (main footer container in sidebar)
      const footerBrand = aside.querySelector('.header-footer-brand');
      if (footerBrand) {
        const newFooterBrand = document.createElement('div');
        moveInstrumentation(footerBrand, newFooterBrand);
        newFooterBrand.className = footerBrand.className;

        // Footer Brand Primary
        const primary = footerBrand.querySelector('.header-footer-brand__primary');
        if (primary) {
          const newPrimary = document.createElement('section');
          moveInstrumentation(primary, newPrimary);
          newPrimary.className = primary.className;
          if (primary.style.backgroundColor) newPrimary.style.backgroundColor = primary.style.backgroundColor;

          // header-container
          const container = primary.querySelector('.header-container');
          if (container) {
            const newContainer = document.createElement('div');
            moveInstrumentation(container, newContainer);
            newContainer.className = container.className;

            // primary content
            const content = container.querySelector('.header-footer-brand__primary--content');
            if (content) {
              const newContent = document.createElement('div');
              moveInstrumentation(content, newContent);
              newContent.className = content.className;

              // Left Section (logos)
              const leftSec = content.querySelector('.header-footer-brand__left');
              if (leftSec) {
                const newLeftSec = document.createElement('section');
                moveInstrumentation(leftSec, newLeftSec);
                newLeftSec.className = leftSec.className;
                // Logo 1
                const itcLink = leftSec.querySelector('a.header-footer-brand__logo');
                if (itcLink) {
                  const newItcLink = document.createElement('a');
                  moveInstrumentation(itcLink, newItcLink);
                  newItcLink.className = itcLink.className;
                  newItcLink.href = itcLink.href;
                  if (itcLink.hasAttribute('target')) newItcLink.setAttribute('target', itcLink.getAttribute('target'));
                  if (itcLink.hasAttribute('data-cta-region')) newItcLink.setAttribute('data-cta-region', itcLink.getAttribute('data-cta-region'));
                  if (itcLink.hasAttribute('aria-label')) newItcLink.setAttribute('aria-label', itcLink.getAttribute('aria-label'));
                  const itcImg = itcLink.querySelector('img');
                  if (itcImg) {
                    const newItcImg = document.createElement('img');
                    moveInstrumentation(itcImg, newItcImg);
                    newItcImg.className = itcImg.className;
                    newItcImg.src = itcImg.src;
                    newItcImg.alt = itcImg.alt;
                    if (itcImg.loading) newItcImg.loading = itcImg.loading;
                    newItcLink.append(newItcImg);
                  }
                  newLeftSec.append(newItcLink);
                }
                // Logo 2
                const logo2Div = leftSec.querySelector('.header-footer-brand__secondary--logo');
                if (logo2Div) {
                  const newLogo2Div = document.createElement('div');
                  moveInstrumentation(logo2Div, newLogo2Div);
                  newLogo2Div.className = logo2Div.className;
                  const logo2Img = logo2Div.querySelector('img');
                  if (logo2Img) {
                    const newLogo2Img = document.createElement('img');
                    moveInstrumentation(logo2Img, newLogo2Img);
                    newLogo2Img.className = logo2Img.className;
                    newLogo2Img.src = logo2Img.src;
                    newLogo2Img.alt = logo2Img.alt;
                    if (logo2Img.loading) newLogo2Img.loading = logo2Img.loading;
                    newLogo2Div.append(newLogo2Img);
                  }
                  newLeftSec.append(newLogo2Div);
                }
                newContent.append(newLeftSec);
              }

              // Right Section (footer nav links)
              const rightSec = content.querySelector('.header-footer-brand__right');
              if (rightSec) {
                const newRightSec = document.createElement('section');
                moveInstrumentation(rightSec, newRightSec);
                newRightSec.className = rightSec.className;
                // Navbar
                const navbar = rightSec.querySelector('nav.header-footer-brand__navbar');
                if (navbar) {
                  const newNavbar = document.createElement('nav');
                  moveInstrumentation(navbar, newNavbar);
                  newNavbar.className = navbar.className;
                  if (navbar.hasAttribute('aria-label')) newNavbar.setAttribute('aria-label', navbar.getAttribute('aria-label'));
                  // Left/Right columns of links
                  [...navbar.children].forEach((col) => {
                    const newCol = document.createElement('div');
                    moveInstrumentation(col, newCol);
                    newCol.className = col.className;
                    // Each column contains header-footerList(s)
                    [...col.children].forEach((footerList) => {
                      const newFooterList = document.createElement('div');
                      moveInstrumentation(footerList, newFooterList);
                      newFooterList.className = footerList.className;
                      // ul
                      const oldUl = footerList.querySelector('ul');
                      if (oldUl) {
                        const newUl = document.createElement('ul');
                        moveInstrumentation(oldUl, newUl);
                        newUl.className = oldUl.className;
                        [...oldUl.children].forEach((oldLi) => {
                          const newLi = document.createElement('li');
                          moveInstrumentation(oldLi, newLi);
                          newLi.className = oldLi.className;
                          const a = oldLi.querySelector('a');
                          if (a) {
                            const newA = document.createElement('a');
                            moveInstrumentation(a, newA);
                            newA.className = a.className;
                            newA.href = a.href;
                            newA.textContent = a.textContent;
                            [...a.attributes].forEach(attr => {
                              if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                              if (attr.name === 'target') newA.setAttribute('target', attr.value);
                            });
                            newLi.append(newA);
                          }
                          newUl.append(newLi);
                        });
                        newFooterList.append(newUl);
                      }
                      newCol.append(newFooterList);
                    });
                    newNavbar.append(newCol);
                  });
                  newRightSec.append(newNavbar);
                }
                newContent.append(newRightSec);
              }
              newContainer.append(newContent);
            }
            newPrimary.append(newContainer);
          }
          newFooterBrand.append(newPrimary);
        }

        // Footer Brand Secondary
        const secondary = footerBrand.querySelector('.header-footer-brand__secondary');
        if (secondary) {
          const newSecondary = document.createElement('section');
          moveInstrumentation(secondary, newSecondary);
          newSecondary.className = secondary.className;
          if (secondary.style.backgroundColor) newSecondary.style.backgroundColor = secondary.style.backgroundColor;
          // header-container
          const secContainer = secondary.querySelector('.header-container');
          if (secContainer) {
            const newSecContainer = document.createElement('div');
            moveInstrumentation(secContainer, newSecContainer);
            newSecContainer.className = secContainer.className;
            // secondary content
            const secContent = secContainer.querySelector('.header-footer-brand__secondary--content');
            if (secContent) {
              const newSecContent = document.createElement('div');
              moveInstrumentation(secContent, newSecContent);
              newSecContent.className = secContent.className;

              // Social links section
              const secRight = secContent.querySelector('section.header-footer-brand__right');
              if (secRight) {
                const newSecRight = document.createElement('section');
                moveInstrumentation(secRight, newSecRight);
                newSecRight.className = secRight.className;
                // h3
                const h3 = secRight.querySelector('h3');
                if (h3) {
                  const newH3 = document.createElement('h3');
                  moveInstrumentation(h3, newH3);
                  newH3.className = h3.className;
                  newH3.textContent = h3.textContent;
                  newSecRight.append(newH3);
                }
                // ul of social
                const socialUl = secRight.querySelector('ul');
                if (socialUl) {
                  const newSocialUl = document.createElement('ul');
                  moveInstrumentation(socialUl, newSocialUl);
                  newSocialUl.className = socialUl.className;
                  [...socialUl.children].forEach((li) => {
                    const newLi = document.createElement('li');
                    moveInstrumentation(li, newLi);
                    newLi.className = li.className;
                    const socialA = li.querySelector('a');
                    if (socialA) {
                      const newA = document.createElement('a');
                      moveInstrumentation(socialA, newA);
                      newA.className = socialA.className;
                      newA.href = socialA.href;
                      [...socialA.attributes].forEach(attr => {
                        if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                        if (attr.name === 'target') newA.setAttribute('target', attr.value);
                        if (attr.name === 'aria-label') newA.setAttribute('aria-label', attr.value);
                      });
                      const socialImg = socialA.querySelector('img');
                      if (socialImg) {
                        const newImg = document.createElement('img');
                        moveInstrumentation(socialImg, newImg);
                        newImg.className = socialImg.className;
                        newImg.src = socialImg.src;
                        newImg.alt = socialImg.alt;
                        if (socialImg.hasAttribute('aria-label')) newImg.setAttribute('aria-label', socialImg.getAttribute('aria-label'));
                        if (socialImg.loading) newImg.loading = socialImg.loading;
                        newA.append(newImg);
                      }
                      newLi.append(newA);
                    }
                    newSocialUl.append(newLi);
                  });
                  newSecRight.append(newSocialUl);
                }
                newSecContent.append(newSecRight);
              }

              // Footer copyright/portal section
              const secLeft = secContent.querySelector('section.header-footer-brand__left');
              if (secLeft) {
                const newSecLeft = document.createElement('section');
                moveInstrumentation(secLeft, newSecLeft);
                newSecLeft.className = secLeft.className;
                // ul of footer ITC portal links
                const leftUl = secLeft.querySelector('ul');
                if (leftUl) {
                  const newLeftUl = document.createElement('ul');
                  moveInstrumentation(leftUl, newLeftUl);
                  newLeftUl.className = leftUl.className;
                  [...leftUl.children].forEach(li => {
                    const newLi = document.createElement('li');
                    moveInstrumentation(li, newLi);
                    newLi.className = li.className;
                    const a = li.querySelector('a');
                    if (a) {
                      const newA = document.createElement('a');
                      moveInstrumentation(a, newA);
                      newA.className = a.className;
                      newA.href = a.href;
                      newA.textContent = a.textContent;
                      [...a.attributes].forEach(attr => {
                        if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                        if (attr.name === 'target') newA.setAttribute('target', attr.value);
                      });
                      newLi.append(newA);
                    }
                    newLeftUl.append(newLi);
                  });
                  newSecLeft.append(newLeftUl);
                }
                // copyright
                const copyrightDiv = secLeft.querySelector('.header-footer-brand__left--copyright');
                if (copyrightDiv) {
                  const newCopyrightDiv = document.createElement('div');
                  moveInstrumentation(copyrightDiv, newCopyrightDiv);
                  newCopyrightDiv.className = copyrightDiv.className;
                  const span = copyrightDiv.querySelector('span');
                  if (span) {
                    const newSpan = document.createElement('span');
                    moveInstrumentation(span, newSpan);
                    newSpan.className = span.className;
                    newSpan.textContent = span.textContent;
                    newCopyrightDiv.append(newSpan);
                  }
                  newSecLeft.append(newCopyrightDiv);
                }
                newSecContent.append(newSecLeft);
              }
              newSecContainer.append(newSecContent);
            }
            newSecondary.append(newSecContainer);
          }
          newFooterBrand.append(newSecondary);
        }
        newAside.append(newFooterBrand);
      }
      newSubmenuContainer.append(newAside);
    }

    // Overlay
    const overlay = submenuContainer.querySelector('.header-overlay');
    if (overlay) {
      const newOverlay = document.createElement('div');
      moveInstrumentation(overlay, newOverlay);
      newOverlay.className = overlay.className;
      newSubmenuContainer.append(newOverlay);
    }

    block.append(newSubmenuContainer);
  }

  // Remove all original content
  while (block.firstChild && block.firstChild !== block.lastChild) {
    block.removeChild(block.firstChild);
  }
}
