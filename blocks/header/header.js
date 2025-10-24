export default function decorate(block) {
  block.classList.add('header-block');
  
  // Get all direct child rows
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cell = row.firstElementChild;
    if (!cell) return;
    
    // Handle app name
    const appName = cell.querySelector('[data-aue-prop="appName"]');
    if (appName) {
      appName.classList.add('header-block-app-name');
    }
    
    // Handle logo
    const logoImg = cell.querySelector('[data-aue-prop="logoImg"]');
    if (logoImg) {
      logoImg.classList.add('header-block-logo-img');
    }
    
    // Handle login link
    const loginLink = cell.querySelector('.button-container a');
    if (loginLink) {
      loginLink.classList.add('header-block-login-btn');
    }
    
    // Handle copyright
    const copyright = cell.querySelector('[data-aue-prop="copyright"]');
    if (copyright) {
      copyright.classList.add('header-block-copyright');
    }
    
    // Handle multifield containers
    const componentContainer = cell.querySelector('[data-aue-type="component"]');
    if (componentContainer) {
      const resource = componentContainer.getAttribute('data-aue-resource');
      
      // Set up observer for when content loads
      const observer = new MutationObserver(() => {
        decorateMultifield(componentContainer, resource);
      });
      
      observer.observe(componentContainer, { 
        childList: true, 
        subtree: true 
      });
      
      // Also try immediate decoration
      setTimeout(() => decorateMultifield(componentContainer, resource), 100);
      setTimeout(() => decorateMultifield(componentContainer, resource), 500);
      setTimeout(() => decorateMultifield(componentContainer, resource), 1000);
    }
  });
}

function decorateMultifield(container, resource) {
  console.log('Decorating:', resource);
console.log('Container HTML:', container.innerHTML);
  if (!container.firstElementChild) return;
  
  // Navigation multifield
  if (resource.includes('navigation')) {
    // Each navigation item should be in a row > cell structure
    const items = container.querySelectorAll(':scope > div > div');
    items.forEach(item => {
      item.classList.add('header-block-menu-item');
      
      const link = item.querySelector('[data-aue-prop="menuLink"]');
      if (link) {
        const anchor = link.querySelector('a');
        if (anchor) anchor.classList.add('header-block-menu-link');
      }
      
      const icon = item.querySelector('[data-aue-prop="menuIcon"]');
      if (icon) {
        const img = icon.querySelector('img');
        if (img) img.classList.add('header-block-menu-icon');
      }
    });
  }
  
  // Footer menus multifield
  if (resource.includes('footerMenus')) {
    container.classList.add('header-block-footer-list');
    
    const items = container.querySelectorAll(':scope > div > div');
    items.forEach(item => {
      const link = item.querySelector('[data-aue-prop="footerLink"]');
      if (link) {
        const anchor = link.querySelector('a');
        if (anchor) anchor.classList.add('header-block-footer-link');
      }
    });
  }
  
  // Social links multifield
  if (resource.includes('socialLinks')) {
    const items = container.querySelectorAll(':scope > div > div');
    items.forEach(item => {
      const link = item.querySelector('[data-aue-prop="socialLink"]');
      if (link) {
        const anchor = link.querySelector('a');
        if (anchor) anchor.classList.add('header-block-social-link');
      }
      
      const icon = item.querySelector('[data-aue-prop="socialIcon"]');
      if (icon) {
        const img = icon.querySelector('img');
        if (img) img.classList.add('header-block-social-icon');
      }
    });
  }
}