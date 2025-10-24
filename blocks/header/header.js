export default function decorate(b){
  b.classList.add('header-block');
  const appName = b.querySelector('.header-app-name');
  if(appName) appName.classList.add('header-block-app-name');
  const logoImg = b.querySelector('.header-logo-img');
  if(logoImg) logoImg.classList.add('header-block-logo-img');
  const loginBtn = b.querySelector('.header-login-btn');
  if(loginBtn) loginBtn.classList.add('header-block-login-btn');
  const menuItems = b.querySelectorAll('.header-sidebar-menu-item');
  menuItems.forEach(item => {
    item.classList.add('header-block-menu-item');
    const a = item.querySelector('a.header-sidebar-menu-link');
    if(a) a.classList.add('header-block-menu-link');
    const img = item.querySelector('img.header-sidebar-menu-icon');
    if(img) img.classList.add('header-block-menu-icon');
  });
  const footerLists = b.querySelectorAll('.header-footer-list');
  footerLists.forEach(list => list.classList.add('header-block-footer-list'));
  const footerLinks = b.querySelectorAll('.header-footer-list-item--link');
  footerLinks.forEach(link => link.classList.add('header-block-footer-link'));
  const socialLinks = b.querySelectorAll('.header-footer-brand-right--link');
  socialLinks.forEach(link => link.classList.add('header-block-social-link'));
  const socialIcons = b.querySelectorAll('.header-footer-brand-right--link img');
  socialIcons.forEach(img => img.classList.add('header-block-social-icon'));
  const copyright = b.querySelector('.header-footer-brand-left--text');
  if(copyright) copyright.classList.add('header-block-copyright');
}