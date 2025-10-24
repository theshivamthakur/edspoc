export default async function decorate(b) {
  b.classList.add('header-block');
  
  // Handle directly authored content first
  const appName = b.querySelector('[data-aue-prop="appName"]');
  if(appName) appName.classList.add('header-block-app-name');
  
  const logoImg = b.querySelector('[data-aue-prop="logoImg"]');
  if(logoImg) logoImg.classList.add('header-block-logo-img');
  
  const loginBtn = b.querySelector('.button-container a');
  if(loginBtn) loginBtn.classList.add('header-block-login-btn');
  
  const copyright = b.querySelector('[data-aue-prop="copyright"]');
  if(copyright) copyright.classList.add('header-block-copyright');
  
  // Wait for child components to load
  const childComponents = b.querySelectorAll('[data-aue-type="component"]');
  
  // Use MutationObserver to watch for when child components are populated
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        decorateChildComponents(b);
      }
    });
  });
  
  childComponents.forEach(component => {
    observer.observe(component, { childList: true, subtree: true });
  });
  
  // Also try decorating immediately in case they're already loaded
  setTimeout(() => decorateChildComponents(b), 100);
  
  // Try again after a longer delay to catch slower loading components
  setTimeout(() => decorateChildComponents(b), 500);
}

function decorateChildComponents(b) {
  // Navigation menu items
  const menuItems = b.querySelectorAll('.header-sidebar-menu-item');
  menuItems.forEach(item => {
    if (!item.classList.contains('header-block-menu-item')) {
      item.classList.add('header-block-menu-item');
      const a = item.querySelector('a.header-sidebar-menu-link');
      if(a) a.classList.add('header-block-menu-link');
      const img = item.querySelector('img.header-sidebar-menu-icon');
      if(img) img.classList.add('header-block-menu-icon');
    }
  });
  
  // Footer lists
  const footerLists = b.querySelectorAll('.header-footer-list');
  footerLists.forEach(list => {
    if (!list.classList.contains('header-block-footer-list')) {
      list.classList.add('header-block-footer-list');
    }
  });
  
  const footerLinks = b.querySelectorAll('.header-footer-list-item--link');
  footerLinks.forEach(link => {
    if (!link.classList.contains('header-block-footer-link')) {
      link.classList.add('header-block-footer-link');
    }
  });
  
  // Social links
  const socialLinks = b.querySelectorAll('.header-footer-brand-right--link');
  socialLinks.forEach(link => {
    if (!link.classList.contains('header-block-social-link')) {
      link.classList.add('header-block-social-link');
    }
  });
  
  const socialIcons = b.querySelectorAll('.header-footer-brand-right--link img');
  socialIcons.forEach(img => {
    if (!img.classList.contains('header-block-social-icon')) {
      img.classList.add('header-block-social-icon');
    }
  });
}