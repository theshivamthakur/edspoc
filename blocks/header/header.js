import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Find the root section
  const section = block.closest('section');
  if (!section) return;

  // 1. App name
  const appNameSpan = section.querySelector('span[data-app-name]');
  if (appNameSpan) {
    const newSpan = document.createElement('span');
    newSpan.textContent = appNameSpan.textContent;
    // Copy all classes
    newSpan.className = appNameSpan.className;
    // Copy data-app-name
    if (appNameSpan.hasAttribute('data-app-name')) {
      newSpan.setAttribute('data-app-name', appNameSpan.getAttribute('data-app-name'));
    }
    moveInstrumentation(appNameSpan, newSpan);
    appNameSpan.replaceWith(newSpan);
  }

  // 2. Header main container
  const header = section.querySelector('header');
  if (header) {
    const newHeader = document.createElement('header');
    newHeader.className = header.className;
    // 2.1. Left logo area
    const leftDiv = header.children[0];
    if (leftDiv) {
      const newLeftDiv = document.createElement('div');
      newLeftDiv.className = leftDiv.className;
      newLeftDiv.innerHTML = leftDiv.innerHTML;
      moveInstrumentation(leftDiv, newLeftDiv);
      newHeader.appendChild(newLeftDiv);
    }
    // 2.2. Center logo with link
    const centerDiv = header.children[1];
    if (centerDiv) {
      const newCenterDiv = document.createElement('div');
      newCenterDiv.className = centerDiv.className;
      // There may be an <a> inside
      const link = centerDiv.querySelector('a');
      if (link) {
        const newLink = document.createElement('a');
        newLink.href = link.href;
        newLink.className = link.className;
        // Copy all data-* attributes
        [...link.attributes].forEach(attr => {
          if (attr.name.startsWith('data-')) newLink.setAttribute(attr.name, attr.value);
          if (attr.name === 'a-label') newLink.setAttribute('a-label', attr.value);
        });
        // There is a div.logo inside the link
        const logoDiv = link.querySelector('div');
        if (logoDiv) {
          const newLogoDiv = document.createElement('div');
          newLogoDiv.className = logoDiv.className;
          // There is an img inside
          const logoImg = logoDiv.querySelector('img');
          if (logoImg) {
            const newImg = document.createElement('img');
            newImg.src = logoImg.src;
            newImg.alt = logoImg.alt;
            newImg.className = logoImg.className;
            moveInstrumentation(logoImg, newImg);
            newLogoDiv.appendChild(newImg);
          }
          moveInstrumentation(logoDiv, newLogoDiv);
          newLink.appendChild(newLogoDiv);
        }
        moveInstrumentation(link, newLink);
        newCenterDiv.appendChild(newLink);
      }
      moveInstrumentation(centerDiv, newCenterDiv);
      newHeader.appendChild(newCenterDiv);
    }
    // 2.3. Right login area
    const rightDiv = header.children[2];
    if (rightDiv) {
      const newRightDiv = document.createElement('div');
      newRightDiv.className = rightDiv.className;
      // There may be an <a> with button inside
      const loginLink = rightDiv.querySelector('a');
      if (loginLink) {
        const newLoginLink = document.createElement('a');
        newLoginLink.href = loginLink.href;
        newLoginLink.className = loginLink.className;
        // Copy style if exists
        if (loginLink.hasAttribute('style')) newLoginLink.setAttribute('style', loginLink.getAttribute('style'));
        // Copy all data-* attributes
        [...loginLink.attributes].forEach(attr => {
          if (attr.name.startsWith('data-')) newLoginLink.setAttribute(attr.name, attr.value);
        });
        const btn = loginLink.querySelector('button');
        if (btn) {
          const newBtn = document.createElement('button');
          newBtn.className = btn.className;
          newBtn.textContent = btn.textContent;
          moveInstrumentation(btn, newBtn);
          newLoginLink.appendChild(newBtn);
        }
        moveInstrumentation(loginLink, newLoginLink);
        newRightDiv.appendChild(newLoginLink);
      }
      moveInstrumentation(rightDiv, newRightDiv);
      newHeader.appendChild(newRightDiv);
    }
    moveInstrumentation(header, newHeader);
    header.replaceWith(newHeader);
  }

  // 3. Submenu container (sidebar, overlay, etc)
  const submenuContainer = section.querySelector('.header-submenu-container');
  if (submenuContainer) {
    const newSubmenuContainer = document.createElement('div');
    newSubmenuContainer.className = submenuContainer.className;

    // Sidebar (aside)
    const aside = submenuContainer.querySelector('aside');
    if (aside) {
      const newAside = document.createElement('aside');
      newAside.className = aside.className;
      // Sidebar menu (ul)
      const ul = aside.querySelector('ul');
      if (ul) {
        const newUl = document.createElement('ul');
        newUl.className = ul.className;
        // Each li
        [...ul.children].forEach((li) => {
          const newLi = document.createElement('li');
          newLi.className = li.className;
          if (li.hasAttribute('style')) newLi.setAttribute('style', li.getAttribute('style'));
          // a inside li
          const a = li.querySelector('a');
          if (a) {
            const newA = document.createElement('a');
            newA.href = a.href;
            newA.className = a.className;
            // Copy all data-* attributes
            [...a.attributes].forEach(attr => {
              if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
            });
            // img in a
            const img = a.querySelector('img');
            if (img) {
              const newImg = document.createElement('img');
              newImg.src = img.src;
              newImg.alt = img.alt;
              newImg.className = img.className;
              if (img.hasAttribute('loading')) newImg.setAttribute('loading', img.getAttribute('loading'));
              moveInstrumentation(img, newImg);
              newA.appendChild(newImg);
            }
            // a label text (after img)
            const aText = [...a.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);
            if (aText) {
              newA.appendChild(document.createTextNode(aText.textContent.trim()));
            }
            moveInstrumentation(a, newA);
            newLi.appendChild(newA);
          }
          moveInstrumentation(li, newLi);
          newUl.appendChild(newLi);
        });
        moveInstrumentation(ul, newUl);
        newAside.appendChild(newUl);
      }
      // Sidebar curve div
      const curveDiv = aside.querySelector('.header-sidebar__curve');
      if (curveDiv) {
        const newCurveDiv = document.createElement('div');
        newCurveDiv.className = curveDiv.className;
        moveInstrumentation(curveDiv, newCurveDiv);
        newAside.appendChild(newCurveDiv);
      }
      // Footer brand container
      const footerBrand = aside.querySelector('.header-footer-brand');
      if (footerBrand) {
        const newFooterBrand = document.createElement('div');
        newFooterBrand.className = footerBrand.className;
        // Primary brand section
        const primary = footerBrand.querySelector('.header-footer-brand__primary');
        if (primary) {
          const newPrimary = document.createElement('section');
          newPrimary.className = primary.className;
          if (primary.hasAttribute('style')) newPrimary.setAttribute('style', primary.getAttribute('style'));
          // header-container > header-footer-brand__primary--content
          const primaryContainer = primary.querySelector('.header-container');
          if (primaryContainer) {
            const newPrimaryContainer = document.createElement('div');
            newPrimaryContainer.className = primaryContainer.className;
            const primaryContent = primaryContainer.querySelector('.header-footer-brand__primary--content');
            if (primaryContent) {
              const newPrimaryContent = document.createElement('div');
              newPrimaryContent.className = primaryContent.className;
              // Left logos
              const leftSec = primaryContent.querySelector('.header-footer-brand__left');
              if (leftSec) {
                const newLeftSec = document.createElement('section');
                newLeftSec.className = leftSec.className;
                // a ITC logo
                const itcLogoA = leftSec.querySelector('a');
                if (itcLogoA) {
                  const newItcLogoA = document.createElement('a');
                  newItcLogoA.href = itcLogoA.href;
                  newItcLogoA.target = itcLogoA.target;
                  newItcLogoA.className = itcLogoA.className;
                  // Copy all data-* attributes
                  [...itcLogoA.attributes].forEach(attr => {
                    if (attr.name.startsWith('data-')) newItcLogoA.setAttribute(attr.name, attr.value);
                    if (attr.name === 'aria-label') newItcLogoA.setAttribute('aria-label', attr.value);
                  });
                  // img inside
                  const itcImg = itcLogoA.querySelector('img');
                  if (itcImg) {
                    const newItcImg = document.createElement('img');
                    newItcImg.src = itcImg.src;
                    newItcImg.alt = itcImg.alt;
                    newItcImg.className = itcImg.className;
                    if (itcImg.hasAttribute('loading')) newItcImg.setAttribute('loading', itcImg.getAttribute('loading'));
                    moveInstrumentation(itcImg, newItcImg);
                    newItcLogoA.appendChild(newItcImg);
                  }
                  moveInstrumentation(itcLogoA, newItcLogoA);
                  newLeftSec.appendChild(newItcLogoA);
                }
                // FSSI Logo div
                const fssiLogoDiv = leftSec.querySelector('.header-footer-brand__secondary--logo');
                if (fssiLogoDiv) {
                  const newFssiLogoDiv = document.createElement('div');
                  newFssiLogoDiv.className = fssiLogoDiv.className;
                  const fssiImg = fssiLogoDiv.querySelector('img');
                  if (fssiImg) {
                    const newFssiImg = document.createElement('img');
                    newFssiImg.src = fssiImg.src;
                    newFssiImg.alt = fssiImg.alt;
                    newFssiImg.className = fssiImg.className;
                    if (fssiImg.hasAttribute('loading')) newFssiImg.setAttribute('loading', fssiImg.getAttribute('loading'));
                    moveInstrumentation(fssiImg, newFssiImg);
                    newFssiLogoDiv.appendChild(newFssiImg);
                  }
                  moveInstrumentation(fssiLogoDiv, newFssiLogoDiv);
                  newLeftSec.appendChild(newFssiLogoDiv);
                }
                moveInstrumentation(leftSec, newLeftSec);
                newPrimaryContent.appendChild(newLeftSec);
              }
              // Right nav links
              const rightSec = primaryContent.querySelector('.header-footer-brand__right');
              if (rightSec) {
                const newRightSec = document.createElement('section');
                newRightSec.className = rightSec.className;
                // nav inside
                const nav = rightSec.querySelector('nav');
                if (nav) {
                  const newNav = document.createElement('nav');
                  newNav.className = nav.className;
                  if (nav.hasAttribute('aria-label')) newNav.setAttribute('aria-label', nav.getAttribute('aria-label'));
                  // Two left/right navbars
                  const leftNav = nav.querySelector('.header-footer-brand__navbar--left');
                  if (leftNav) {
                    const newLeftNav = document.createElement('div');
                    newLeftNav.className = leftNav.className;
                    // Each .header-footerList inside leftNav
                    [...leftNav.querySelectorAll('.header-footerList')].forEach(listDiv => {
                      const newListDiv = document.createElement('div');
                      newListDiv.className = listDiv.className;
                      const ul = listDiv.querySelector('ul');
                      if (ul) {
                        const newUl = document.createElement('ul');
                        newUl.className = ul.className;
                        [...ul.children].forEach(li => {
                          const newLi = document.createElement('li');
                          newLi.className = li.className;
                          const a = li.querySelector('a');
                          if (a) {
                            const newA = document.createElement('a');
                            newA.href = a.href;
                            newA.className = a.className;
                            newA.textContent = a.textContent;
                            // Copy all data-* attributes
                            [...a.attributes].forEach(attr => {
                              if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                              if(attr.name==='target') newA.setAttribute('target', attr.value);
                            });
                            moveInstrumentation(a, newA);
                            newLi.appendChild(newA);
                          }
                          moveInstrumentation(li, newLi);
                          newUl.appendChild(newLi);
                        });
                        moveInstrumentation(ul, newUl);
                        newListDiv.appendChild(newUl);
                      }
                      moveInstrumentation(listDiv, newListDiv);
                      newLeftNav.appendChild(newListDiv);
                    });
                    moveInstrumentation(leftNav, newLeftNav);
                    newNav.appendChild(newLeftNav);
                  }
                  const rightNav = nav.querySelector('.header-footer-brand__navbar--right');
                  if (rightNav) {
                    const newRightNav = document.createElement('div');
                    newRightNav.className = rightNav.className;
                    [...rightNav.querySelectorAll('.header-footerList')].forEach(listDiv => {
                      const newListDiv = document.createElement('div');
                      newListDiv.className = listDiv.className;
                      const ul = listDiv.querySelector('ul');
                      if (ul) {
                        const newUl = document.createElement('ul');
                        newUl.className = ul.className;
                        [...ul.children].forEach(li => {
                          const newLi = document.createElement('li');
                          newLi.className = li.className;
                          const a = li.querySelector('a');
                          if (a) {
                            const newA = document.createElement('a');
                            newA.href = a.href;
                            newA.className = a.className;
                            newA.textContent = a.textContent;
                            // Copy all data-* attributes
                            [...a.attributes].forEach(attr => {
                              if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                              if(attr.name==='target') newA.setAttribute('target', attr.value);
                            });
                            moveInstrumentation(a, newA);
                            newLi.appendChild(newA);
                          }
                          moveInstrumentation(li, newLi);
                          newUl.appendChild(newLi);
                        });
                        moveInstrumentation(ul, newUl);
                        newListDiv.appendChild(newUl);
                      }
                      moveInstrumentation(listDiv, newListDiv);
                      newRightNav.appendChild(newListDiv);
                    });
                    moveInstrumentation(rightNav, newRightNav);
                    newNav.appendChild(newRightNav);
                  }
                  moveInstrumentation(nav, newNav);
                  newRightSec.appendChild(newNav);
                }
                moveInstrumentation(rightSec, newRightSec);
                newPrimaryContent.appendChild(newRightSec);
              }
              moveInstrumentation(primaryContent, newPrimaryContent);
              newPrimaryContainer.appendChild(newPrimaryContent);
            }
            moveInstrumentation(primaryContainer, newPrimaryContainer);
            newPrimary.appendChild(newPrimaryContainer);
          }
          moveInstrumentation(primary, newPrimary);
          newFooterBrand.appendChild(newPrimary);
        }
        // Secondary brand section
        const secondary = footerBrand.querySelector('.header-footer-brand__secondary');
        if (secondary) {
          const newSecondary = document.createElement('section');
          newSecondary.className = secondary.className;
          if (secondary.hasAttribute('style')) newSecondary.setAttribute('style', secondary.getAttribute('style'));
          const secondaryContainer = secondary.querySelector('.header-container');
          if (secondaryContainer) {
            const newSecContainer = document.createElement('div');
            newSecContainer.className = secondaryContainer.className;
            const secContent = secondaryContainer.querySelector('.header-footer-brand__secondary--content');
            if (secContent) {
              const newSecContent = document.createElement('div');
              newSecContent.className = secContent.className;
              // Social links section
              const rightSec = secContent.querySelector('.header-footer-brand__right');
              if (rightSec) {
                const newRightSec = document.createElement('section');
                newRightSec.className = rightSec.className;
                // h3 title
                const h3 = rightSec.querySelector('h3');
                if (h3) {
                  const newH3 = document.createElement('h3');
                  newH3.className = h3.className;
                  newH3.textContent = h3.textContent;
                  moveInstrumentation(h3, newH3);
                  newRightSec.appendChild(newH3);
                }
                // ul social links
                const socialUl = rightSec.querySelector('ul');
                if (socialUl) {
                  const newSocialUl = document.createElement('ul');
                  newSocialUl.className = socialUl.className;
                  [...socialUl.children].forEach(li => {
                    const newLi = document.createElement('li');
                    newLi.className = li.className;
                    const a = li.querySelector('a');
                    if (a) {
                      const newA = document.createElement('a');
                      newA.href = a.href;
                      newA.className = a.className;
                      // Copy all data-* attributes
                      [...a.attributes].forEach(attr => {
                        if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                        if(attr.name==='target') newA.setAttribute('target', attr.value);
                        if(attr.name==='aria-label') newA.setAttribute('aria-label', attr.value);
                      });
                      const img = a.querySelector('img');
                      if (img) {
                        const newImg = document.createElement('img');
                        newImg.src = img.src;
                        newImg.alt = img.alt;
                        newImg.className = img.className;
                        if (img.hasAttribute('loading')) newImg.setAttribute('loading', img.getAttribute('loading'));
                        if (img.hasAttribute('aria-label')) newImg.setAttribute('aria-label', img.getAttribute('aria-label'));
                        moveInstrumentation(img, newImg);
                        newA.appendChild(newImg);
                      }
                      moveInstrumentation(a, newA);
                      newLi.appendChild(newA);
                    }
                    moveInstrumentation(li, newLi);
                    newSocialUl.appendChild(newLi);
                  });
                  moveInstrumentation(socialUl, newSocialUl);
                  newRightSec.appendChild(newSocialUl);
                }
                moveInstrumentation(rightSec, newRightSec);
                newSecContent.appendChild(newRightSec);
              }
              // Footer left section (copyright)
              const leftSec = secContent.querySelector('.header-footer-brand__left');
              if (leftSec) {
                const newLeftSec = document.createElement('section');
                newLeftSec.className = leftSec.className;
                // ul of links
                const leftUl = leftSec.querySelector('ul');
                if (leftUl) {
                  const newLeftUl = document.createElement('ul');
                  newLeftUl.className = leftUl.className;
                  [...leftUl.children].forEach(li => {
                    const newLi = document.createElement('li');
                    newLi.className = li.className;
                    const a = li.querySelector('a');
                    if (a) {
                      const newA = document.createElement('a');
                      newA.href = a.href;
                      newA.className = a.className;
                      newA.textContent = a.textContent;
                      // Copy all data-* attributes
                      [...a.attributes].forEach(attr => {
                        if (attr.name.startsWith('data-')) newA.setAttribute(attr.name, attr.value);
                        if(attr.name==='target') newA.setAttribute('target', attr.value);
                      });
                      moveInstrumentation(a, newA);
                      newLi.appendChild(newA);
                    }
                    moveInstrumentation(li, newLi);
                    newLeftUl.appendChild(newLi);
                  });
                  moveInstrumentation(leftUl, newLeftUl);
                  newLeftSec.appendChild(newLeftUl);
                }
                // copyright div
                const copyrightDiv = leftSec.querySelector('.header-footer-brand__left--copyright');
                if (copyrightDiv) {
                  const newCopyrightDiv = document.createElement('div');
                  newCopyrightDiv.className = copyrightDiv.className;
                  const span = copyrightDiv.querySelector('span');
                  if (span) {
                    const newSpan = document.createElement('span');
                    newSpan.className = span.className;
                    newSpan.textContent = span.textContent;
                    moveInstrumentation(span, newSpan);
                    newCopyrightDiv.appendChild(newSpan);
                  }
                  moveInstrumentation(copyrightDiv, newCopyrightDiv);
                  newLeftSec.appendChild(newCopyrightDiv);
                }
                moveInstrumentation(leftSec, newLeftSec);
                newSecContent.appendChild(newLeftSec);
              }
              moveInstrumentation(secContent, newSecContent);
              newSecContainer.appendChild(newSecContent);
            }
            moveInstrumentation(secondaryContainer, newSecContainer);
            newSecondary.appendChild(newSecContainer);
          }
          moveInstrumentation(secondary, newSecondary);
          newFooterBrand.appendChild(newSecondary);
        }
        moveInstrumentation(footerBrand, newFooterBrand);
        newAside.appendChild(newFooterBrand);
      }
      moveInstrumentation(aside, newAside);
      newSubmenuContainer.appendChild(newAside);
    }
    // Overlay div
    const overlayDiv = submenuContainer.querySelector('.header-overlay');
    if (overlayDiv) {
      const newOverlayDiv = document.createElement('div');
      newOverlayDiv.className = overlayDiv.className;
      moveInstrumentation(overlayDiv, newOverlayDiv);
      newSubmenuContainer.appendChild(newOverlayDiv);
    }
    moveInstrumentation(submenuContainer, newSubmenuContainer);
    submenuContainer.replaceWith(newSubmenuContainer);
  }
}
