import { moveInstrumentation } from '../../scripts/scripts.js';
import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Save original block children (the section)
  const section = block.querySelector('section');
  if (!section) return;

  // Move instrumentation to a new root wrapper
  const wrapper = document.createElement('div');
  moveInstrumentation(section, wrapper);
  wrapper.className = section.className;

  // App Name (hidden span)
  const appNameSpan = section.querySelector('.header-app-name');
  if (appNameSpan) {
    const appNameNew = document.createElement('span');
    moveInstrumentation(appNameSpan, appNameNew);
    appNameNew.className = appNameSpan.className;
    appNameNew.setAttribute('data-app-name', appNameSpan.getAttribute('data-app-name'));
    appNameNew.textContent = appNameSpan.textContent;
    wrapper.append(appNameNew);
  }

  // HEADER BAR
  const header = section.querySelector('header');
  if (header) {
    const headerNew = document.createElement('header');
    moveInstrumentation(header, headerNew);
    headerNew.className = header.className;

    // Each of the 3 flex children
    const headerRows = [...header.children];
    headerRows.forEach((row, i) => {
      const divNew = document.createElement('div');
      moveInstrumentation(row, divNew);
      divNew.className = row.className;

      // First: just svg+xml text
      if (i === 0) {
        divNew.innerHTML = row.innerHTML;
      }
      // Second: logo
      else if (i === 1) {
        // Contains <a> with <div> with <img>
        const logoA = row.querySelector('a');
        if (logoA) {
          const logoANew = document.createElement('a');
          moveInstrumentation(logoA, logoANew);
          logoANew.className = logoA.className;
          logoANew.href = logoA.href;
          logoANew.setAttribute('data-ct', logoA.getAttribute('data-ct'));
          logoANew.setAttribute('a-label', logoA.getAttribute('a-label'));

          const logoDiv = logoA.querySelector('div');
          if (logoDiv) {
            const logoDivNew = document.createElement('div');
            moveInstrumentation(logoDiv, logoDivNew);
            logoDivNew.className = logoDiv.className;

            const logoImg = logoDiv.querySelector('img');
            if (logoImg) {
              const pic = createOptimizedPicture(logoImg.src, logoImg.alt, logoImg.className);
              moveInstrumentation(logoImg, pic.querySelector('img'));
              logoDivNew.append(pic);
            }
            logoANew.append(logoDivNew);
          }
          divNew.append(logoANew);
        }
      }
      // Third: login button
      else if (i === 2) {
        // Contains <a> with <button>
        const loginA = row.querySelector('a');
        if (loginA) {
          const loginANew = document.createElement('a');
          moveInstrumentation(loginA, loginANew);
          loginANew.className = loginA.className;
          loginANew.href = loginA.href;
          loginANew.style.display = loginA.style.display;
          const btn = loginA.querySelector('button');
          if (btn) {
            const btnNew = document.createElement('button');
            moveInstrumentation(btn, btnNew);
            btnNew.className = btn.className;
            btnNew.innerHTML = btn.innerHTML;
            loginANew.append(btnNew);
          }
          divNew.append(loginANew);
        }
      }
      headerNew.append(divNew);
    });
    wrapper.append(headerNew);
  }

  // SUBMENU CONTAINER
  const submenu = section.querySelector('.header-submenu-container');
  if (submenu) {
    const submenuNew = document.createElement('div');
    moveInstrumentation(submenu, submenuNew);
    submenuNew.className = submenu.className;

    // SIDEBAR
    const aside = submenu.querySelector('aside.header-sidebar');
    if (aside) {
      const asideNew = document.createElement('aside');
      moveInstrumentation(aside, asideNew);
      asideNew.className = aside.className;

      // Sidebar Menu
      const ul = aside.querySelector('ul.header-sidebar__menu');
      if (ul) {
        const ulNew = document.createElement('ul');
        moveInstrumentation(ul, ulNew);
        ulNew.className = ul.className;

        [...ul.children].forEach((li) => {
          const liNew = document.createElement('li');
          moveInstrumentation(li, liNew);
          liNew.className = li.className;
          liNew.style.cssText = li.style.cssText;

          const a = li.querySelector('a');
          if (a) {
            const aNew = document.createElement('a');
            moveInstrumentation(a, aNew);
            aNew.className = a.className;
            aNew.href = a.href;
            if (a.hasAttribute('data-link')) aNew.setAttribute('data-link', a.getAttribute('data-link'));
            [...a.attributes].forEach(attr => {
              if (!['href','class','data-link'].includes(attr.name)) {
                aNew.setAttribute(attr.name, attr.value);
              }
            });
            // Icon
            const img = a.querySelector('img');
            if (img) {
              const pic = createOptimizedPicture(img.src, img.alt, img.className);
              moveInstrumentation(img, pic.querySelector('img'));
              aNew.append(pic);
            }
            // Text
            const text = [...a.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim()).map(n => n.textContent.trim()).join(' ');
            if (text) aNew.append(document.createTextNode(text));
            liNew.append(aNew);
          }
          ulNew.append(liNew);
        });
        asideNew.append(ulNew);
      }

      // Sidebar curve
      const curve = aside.querySelector('.header-sidebar__curve');
      if (curve) {
        const curveNew = document.createElement('div');
        moveInstrumentation(curve, curveNew);
        curveNew.className = curve.className;
        asideNew.append(curveNew);
      }

      // Footer Brand
      const footerBrand = aside.querySelector('.header-footer-brand');
      if (footerBrand) {
        const footerBrandNew = document.createElement('div');
        moveInstrumentation(footerBrand, footerBrandNew);
        footerBrandNew.className = footerBrand.className;

        // Primary section
        const primary = footerBrand.querySelector('.header-footer-brand__primary');
        if (primary) {
          const primaryNew = document.createElement('section');
          moveInstrumentation(primary, primaryNew);
          primaryNew.className = primary.className;
          primaryNew.style.backgroundColor = primary.style.backgroundColor;

          const container = primary.querySelector('.header-container');
          if (container) {
            const containerNew = document.createElement('div');
            moveInstrumentation(container, containerNew);
            containerNew.className = container.className;

            const content = container.querySelector('.header-footer-brand__primary--content');
            if (content) {
              const contentNew = document.createElement('div');
              moveInstrumentation(content, contentNew);
              contentNew.className = content.className;

              // Left logos section
              const left = content.querySelector('.header-footer-brand__left');
              if (left) {
                const leftNew = document.createElement('section');
                moveInstrumentation(left, leftNew);
                leftNew.className = left.className;
                // Brand logo
                const brandA = left.querySelector('a');
                if (brandA) {
                  const brandANew = document.createElement('a');
                  moveInstrumentation(brandA, brandANew);
                  brandANew.className = brandA.className;
                  brandANew.href = brandA.href;
                  brandANew.target = brandA.target;
                  [...brandA.attributes].forEach(attr => {
                    if (!['href','class','target'].includes(attr.name)) {
                      brandANew.setAttribute(attr.name, attr.value);
                    }
                  });
                  const brandImg = brandA.querySelector('img');
                  if (brandImg) {
                    const pic = createOptimizedPicture(brandImg.src, brandImg.alt, brandImg.className);
                    moveInstrumentation(brandImg, pic.querySelector('img'));
                    brandANew.append(pic);
                  }
                  leftNew.append(brandANew);
                }
                // Secondary logo
                const secLogoDiv = left.querySelector('.header-footer-brand__secondary--logo');
                if (secLogoDiv) {
                  const secLogoDivNew = document.createElement('div');
                  moveInstrumentation(secLogoDiv, secLogoDivNew);
                  secLogoDivNew.className = secLogoDiv.className;
                  const secImg = secLogoDiv.querySelector('img');
                  if (secImg) {
                    const pic = createOptimizedPicture(secImg.src, secImg.alt, secImg.className);
                    moveInstrumentation(secImg, pic.querySelector('img'));
                    secLogoDivNew.append(pic);
                  }
                  leftNew.append(secLogoDivNew);
                }
                contentNew.append(leftNew);
              }

              // Right nav section
              const right = content.querySelector('.header-footer-brand__right');
              if (right) {
                const rightNew = document.createElement('section');
                moveInstrumentation(right, rightNew);
                rightNew.className = right.className;
                // Nav
                const nav = right.querySelector('nav');
                if (nav) {
                  const navNew = document.createElement('nav');
                  moveInstrumentation(nav, navNew);
                  navNew.className = nav.className;
                  navNew.setAttribute('aria-label', nav.getAttribute('aria-label'));
                  // left and right divs
                  [...nav.children].forEach((navCol) => {
                    const navColNew = document.createElement('div');
                    moveInstrumentation(navCol, navColNew);
                    navColNew.className = navCol.className;
                    // Each footerList
                    const lists = navCol.querySelectorAll('.header-footerList');
                    lists.forEach(list => {
                      const listNew = document.createElement('div');
                      moveInstrumentation(list, listNew);
                      listNew.className = list.className;
                      const ul = list.querySelector('ul');
                      if (ul) {
                        const ulNew = document.createElement('ul');
                        moveInstrumentation(ul, ulNew);
                        ulNew.className = ul.className;
                        [...ul.children].forEach(item => {
                          const liNew = document.createElement('li');
                          moveInstrumentation(item, liNew);
                          liNew.className = item.className;
                          const a = item.querySelector('a');
                          if (a) {
                            const aNew = document.createElement('a');
                            moveInstrumentation(a, aNew);
                            aNew.className = a.className;
                            aNew.href = a.href;
                            if (a.target) aNew.target = a.target;
                            [...a.attributes].forEach(attr => {
                              if (!['href','class','target'].includes(attr.name)) {
                                aNew.setAttribute(attr.name, attr.value);
                              }
                            });
                            aNew.textContent = a.textContent;
                            liNew.append(aNew);
                          }
                          ulNew.append(liNew);
                        });
                        listNew.append(ulNew);
                      }
                      navColNew.append(listNew);
                    });
                    navNew.append(navColNew);
                  });
                  rightNew.append(navNew);
                }
                contentNew.append(rightNew);
              }

              containerNew.append(contentNew);
            }
            primaryNew.append(containerNew);
          }
          footerBrandNew.append(primaryNew);
        }

        // Secondary section (socials, copyright)
        const secondary = footerBrand.querySelector('.header-footer-brand__secondary');
        if (secondary) {
          const secondaryNew = document.createElement('section');
          moveInstrumentation(secondary, secondaryNew);
          secondaryNew.className = secondary.className;
          secondaryNew.style.backgroundColor = secondary.style.backgroundColor;

          const container = secondary.querySelector('.header-container');
          if (container) {
            const containerNew = document.createElement('div');
            moveInstrumentation(container, containerNew);
            containerNew.className = container.className;

            const content = container.querySelector('.header-footer-brand__secondary--content');
            if (content) {
              const contentNew = document.createElement('div');
              moveInstrumentation(content, contentNew);
              contentNew.className = content.className;

              // Socials right
              const right = content.querySelector('.header-footer-brand__right');
              if (right) {
                const rightNew = document.createElement('section');
                moveInstrumentation(right, rightNew);
                rightNew.className = right.className;
                const h3 = right.querySelector('h3');
                if (h3) {
                  const h3New = document.createElement('h3');
                  moveInstrumentation(h3, h3New);
                  h3New.className = h3.className;
                  h3New.textContent = h3.textContent;
                  rightNew.append(h3New);
                }
                const ul = right.querySelector('ul');
                if (ul) {
                  const ulNew = document.createElement('ul');
                  moveInstrumentation(ul, ulNew);
                  ulNew.className = ul.className;
                  [...ul.children].forEach(li => {
                    const liNew = document.createElement('li');
                    moveInstrumentation(li, liNew);
                    liNew.className = li.className;
                    const a = li.querySelector('a');
                    if (a) {
                      const aNew = document.createElement('a');
                      moveInstrumentation(a, aNew);
                      aNew.className = a.className;
                      aNew.href = a.href;
                      if (a.target) aNew.target = a.target;
                      [...a.attributes].forEach(attr => {
                        if (!['href','class','target'].includes(attr.name)) {
                          aNew.setAttribute(attr.name, attr.value);
                        }
                      });
                      const img = a.querySelector('img');
                      if (img) {
                        const pic = createOptimizedPicture(img.src, img.alt, img.className);
                        moveInstrumentation(img, pic.querySelector('img'));
                        aNew.append(pic);
                      }
                      liNew.append(aNew);
                    }
                    ulNew.append(liNew);
                  });
                  rightNew.append(ulNew);
                }
                contentNew.append(rightNew);
              }

              // Copyright left
              const left = content.querySelector('.header-footer-brand__left');
              if (left) {
                const leftNew = document.createElement('section');
                moveInstrumentation(left, leftNew);
                leftNew.className = left.className;
                const ul = left.querySelector('ul');
                if (ul) {
                  const ulNew = document.createElement('ul');
                  moveInstrumentation(ul, ulNew);
                  ulNew.className = ul.className;
                  [...ul.children].forEach(li => {
                    const liNew = document.createElement('li');
                    moveInstrumentation(li, liNew);
                    liNew.className = li.className;
                    const a = li.querySelector('a');
                    if (a) {
                      const aNew = document.createElement('a');
                      moveInstrumentation(a, aNew);
                      aNew.className = a.className;
                      aNew.href = a.href;
                      if (a.target) aNew.target = a.target;
                      [...a.attributes].forEach(attr => {
                        if (!['href','class','target'].includes(attr.name)) {
                          aNew.setAttribute(attr.name, attr.value);
                        }
                      });
                      aNew.textContent = a.textContent;
                      liNew.append(aNew);
                    }
                    ulNew.append(liNew);
                  });
                  leftNew.append(ulNew);
                }
                // Copyright text
                const copyright = left.querySelector('.header-footer-brand__left--copyright');
                if (copyright) {
                  const copyrightNew = document.createElement('div');
                  moveInstrumentation(copyright, copyrightNew);
                  copyrightNew.className = copyright.className;
                  const span = copyright.querySelector('span');
                  if (span) {
                    const spanNew = document.createElement('span');
                    moveInstrumentation(span, spanNew);
                    spanNew.className = span.className;
                    spanNew.textContent = span.textContent;
                    copyrightNew.append(spanNew);
                  }
                  leftNew.append(copyrightNew);
                }
                contentNew.append(leftNew);
              }

              containerNew.append(contentNew);
            }
            secondaryNew.append(containerNew);
          }
          footerBrandNew.append(secondaryNew);
        }
        asideNew.append(footerBrandNew);
      }
      submenuNew.append(asideNew);
    }

    // Overlay div
    const overlay = submenu.querySelector('.header-overlay');
    if (overlay) {
      const overlayNew = document.createElement('div');
      moveInstrumentation(overlay, overlayNew);
      overlayNew.className = overlay.className;
      submenuNew.append(overlayNew);
    }
    wrapper.append(submenuNew);
  }

  block.textContent = '';
  block.append(wrapper);
}
