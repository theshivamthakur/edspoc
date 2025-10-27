import { readBlockConfig } from '../../scripts/scripts.js';

/**
 * Renders the header block with navigation, logo, and login
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Use the built-in readBlockConfig function
  const config = readBlockConfig(block);
  console.log("this is the block",block);
  console.log("this is th config",config);
  
  console.log('Header config:', config); // Debug: see what's being parsed
  
  // Clear the block
  block.innerHTML = '';
  
  // Create header structure
  const header = document.createElement('header');
  header.className = 'header-container';
  
  // Create top navigation bar
  const topNav = document.createElement('div');
  topNav.className = 'header-top-nav';
  
  // Add logo
  if (config.logoimg || config['logo-image']) {
    const logoSrc = config.logoimg || config['logo-image'];
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    logoLink.className = 'header-logo';
    
    const logoImg = document.createElement('img');
    logoImg.src = logoSrc;
    logoImg.alt = config.appname || config['app-name'] || 'Logo';
    logoImg.loading = 'eager';
    
    logoLink.appendChild(logoImg);
    topNav.appendChild(logoLink);
  }
  
  // Add app name if no logo
  if (!config.logoimg && !config['logo-image'] && (config.appname || config['app-name'])) {
    const appNameEl = document.createElement('a');
    appNameEl.href = '/';
    appNameEl.className = 'header-app-name';
    appNameEl.textContent = config.appname || config['app-name'];
    topNav.appendChild(appNameEl);
  }
  
  // Create navigation menu
  const navData = config.navigation || config['navigation-menu'];
  if (navData) {
    const nav = document.createElement('nav');
    nav.className = 'header-nav';
    
    const navList = document.createElement('ul');
    navList.className = 'header-nav-list';
    
    // Parse navigation items
    const navItems = parseNavigationData(navData);
    
    navItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-nav-item';
      
      const link = document.createElement('a');
      link.href = item.link || '#';
      link.className = 'header-nav-link';
      
      // Add icon if present
      if (item.icon) {
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.alt = '';
        icon.className = 'header-nav-icon';
        link.appendChild(icon);
      }
      
      // Add label
      const label = document.createElement('span');
      label.textContent = item.label || '';
      link.appendChild(label);
      
      li.appendChild(link);
      navList.appendChild(li);
    });
    
    nav.appendChild(navList);
    topNav.appendChild(nav);
  }
  
  // Add login link
  const loginLink = config.loginlink || config['login-link'];
  if (loginLink) {
    const loginBtn = document.createElement('a');
    loginBtn.href = loginLink;
    loginBtn.className = 'header-login-btn button primary';
    loginBtn.textContent = 'Login';
    topNav.appendChild(loginBtn);
  }
  
  header.appendChild(topNav);
  
  // Create footer section (if footer data exists)
  const footerMenusData = config.footermenus || config['footer-menus'];
  const socialLinksData = config.sociallinks || config['social-links'];
  const copyrightText = config.copyright || config['copyright-text'];
  
  if (footerMenusData || socialLinksData || copyrightText) {
    const footer = document.createElement('div');
    footer.className = 'header-footer-section';
    
    // Add footer menus
    if (footerMenusData) {
      const footerNav = document.createElement('nav');
      footerNav.className = 'header-footer-nav';
      
      const footerList = document.createElement('ul');
      footerList.className = 'header-footer-list';
      
      const footerItems = parseFooterMenuData(footerMenusData);
      
      footerItems.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'header-footer-item';
        
        const link = document.createElement('a');
        link.href = item.link || '#';
        link.textContent = item.label || '';
        
        li.appendChild(link);
        footerList.appendChild(li);
      });
      
      footerNav.appendChild(footerList);
      footer.appendChild(footerNav);
    }
    
    // Add social links
    if (socialLinksData) {
      const socialContainer = document.createElement('div');
      socialContainer.className = 'header-social-links';
      
      const socialItems = parseSocialLinksData(socialLinksData);
      
      socialItems.forEach((item) => {
        const link = document.createElement('a');
        link.href = item.link || '#';
        link.className = 'header-social-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        if (item.icon) {
          const icon = document.createElement('img');
          icon.src = item.icon;
          icon.alt = 'Social media icon';
          icon.className = 'header-social-icon';
          link.appendChild(icon);
        }
        
        socialContainer.appendChild(link);
      });
      
      footer.appendChild(socialContainer);
    }
    
    // Add copyright
    if (copyrightText) {
      const copyright = document.createElement('p');
      copyright.className = 'header-copyright';
      copyright.textContent = copyrightText;
      footer.appendChild(copyright);
    }
    
    header.appendChild(footer);
  }
  
  block.appendChild(header);
}

/**
 * Parse navigation data from readBlockConfig result
 * Expected format: array of hrefs and array of labels, or string
 */
function parseNavigationData(data) {
  const items = [];
  
  if (typeof data === 'string') {
    // Single item
    items.push({ label: data, link: '#' });
  } else if (Array.isArray(data)) {
    // readBlockConfig returns arrays for multiple paragraphs/links/images
    // Navigation has 3 fields: menuLink, menuLabel, menuIcon
    // They might come as separate arrays or need to be parsed
    data.forEach((item, index) => {
      if (typeof item === 'string') {
        items.push({ label: item, link: '#' });
      } else {
        items.push({ label: item, link: '#' });
      }
    });
  }
  
  return items;
}

/**
 * Parse footer menu data
 * Expected format: array of links and labels
 */
function parseFooterMenuData(data) {
  const items = [];
  
  if (typeof data === 'string') {
    items.push({ label: data, link: '#' });
  } else if (Array.isArray(data)) {
    // Assume alternating: link, label, link, label...
    for (let i = 0; i < data.length; i += 2) {
      items.push({
        link: data[i] || '#',
        label: data[i + 1] || data[i]
      });
    }
  }
  
  return items;
}

/**
 * Parse social links data
 * Expected format: array of links and icons
 */
function parseSocialLinksData(data) {
  const items = [];
  
  if (typeof data === 'string') {
    items.push({ link: data, icon: '' });
  } else if (Array.isArray(data)) {
    // Assume alternating: link, icon, link, icon...
    for (let i = 0; i < data.length; i += 2) {
      items.push({
        link: data[i] || '#',
        icon: data[i + 1] || ''
      });
    }
  }
  
  return items;
}