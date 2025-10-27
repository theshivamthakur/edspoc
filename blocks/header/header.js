export default function decorate(b) {
  b.classList.add('header-block');
  const appName = b.querySelector('.header-app-name');
  if (appName) appName.classList.add('header-block-app-name');
  const navMenuItems = b.querySelectorAll('.header-sidebar-menu-item');
  navMenuItems.forEach(li => {
    li.classList.add('header-block-nav-menu-item');
    const a = li.querySelector('a');
    if (a) a.classList.add('header-block-nav-menu-link');
    const img = a ? a.querySelector('img') : null;
    if (img) img.classList.add('header-block-nav-menu-icon');
  });
  const footerLinks = b.querySelectorAll('.header-footer-list-item a');
  footerLinks.forEach(a => {
    a.classList.add('header-block-footer-link');
  });
  const footerSocialLinks = b.querySelectorAll('.header-footer-brand-right--list .header-footer-brand-right--link');
  footerSocialLinks.forEach(a => {
    a.classList.add('header-block-footer-social-link');
    const img = a.querySelector('img');
    if (img) img.classList.add('header-block-footer-social-icon');
  });
  const copyright = b.querySelector('.header-footer-brand-left--copyright');
  if (copyright) copyright.classList.add('header-block-footer-copyright');
}