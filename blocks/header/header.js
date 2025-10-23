export default function decorate(b) {
  b.classList.add('header-block');
  const appName = b.querySelector('.header-app-name');
  if (appName) appName.classList.add('header-block-appname');
  const header = b.querySelector('header.header-boing-container');
  if (header) header.classList.add('header-block-header');
  const sidebar = b.querySelector('.header-sidebar');
  if (sidebar) sidebar.classList.add('header-block-sidebar');
  const sidebarMenu = sidebar?.querySelector('.header-sidebar-menu');
  if (sidebarMenu) sidebarMenu.classList.add('header-block-sidebar-menu');
  const sidebarMenuItems = sidebarMenu?.querySelectorAll('.header-sidebar-menu-item');
  if (sidebarMenuItems) sidebarMenuItems.forEach((item) => item.classList.add('header-block-sidebar-menu-item'));
  const footerBrand = b.querySelector('.header-footer-brand');
  if (footerBrand) footerBrand.classList.add('header-block-footer-brand');
  const footerBrandLists = footerBrand?.querySelectorAll('.header-footer-list');
  if (footerBrandLists) footerBrandLists.forEach((list) => list.classList.add('header-block-footer-list'));
  const footerBrandListItems = footerBrand?.querySelectorAll('.header-footer-list-item');
  if (footerBrandListItems) footerBrandListItems.forEach((item) => item.classList.add('header-block-footer-list-item'));
  const footerSocialList = b.querySelector('.header-footer-brand-right--list');
  if (footerSocialList) footerSocialList.classList.add('header-block-footer-social-list');
  const footerSocialItems = footerSocialList?.querySelectorAll('.header-footer-brand-right--item');
  if (footerSocialItems) footerSocialItems.forEach((item) => item.classList.add('header-block-footer-social-item'));
  const footerLeftList = b.querySelector('.header-footer-brand-left--list');
  if (footerLeftList) footerLeftList.classList.add('header-block-footer-left-list');
  const footerLeftItems = footerLeftList?.querySelectorAll('.header-footer-brand-left--item');
  if (footerLeftItems) footerLeftItems.forEach((item) => item.classList.add('header-block-footer-left-item'));
}
