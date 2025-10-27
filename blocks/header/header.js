/**
 * Renders the header block with navigation, logo, and login
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Read the block configuration
  const config = readHeaderConfig(block);
  
  // Clear the block
  block.innerHTML = '';
  
  // Create header structure
  const header = document.createElement('header');
  header.className = 'header-container';
  
  // Create top navigation bar
  const topNav = document.createElement('div');
  topNav.className = 'header-top-nav';
  
  // Add logo
  if (config.logoImg) {
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    logoLink.className = 'header-logo';
    
    const logoImg = document.createElement('img');
    logoImg.src = config.logoImg;
    logoImg.alt = config.appName || 'Logo';
    logoImg.loading = 'eager';
    
    logoLink.appendChild(logoImg);
    topNav.appendChild(logoLink);
  }
  
  // Add app name if no logo
  if (!config.logoImg && config.appName) {
    const appNameEl = document.createElement('a');
    appNameEl.href = '/';
    appNameEl.className = 'header-app-name';
    appNameEl.textContent = config.appName;
    topNav.appendChild(appNameEl);
  }
  
  // Create navigation menu
  if (config.navigation && config.navigation.length > 0) {
    const nav = document.createElement('nav');
    nav.className = 'header-nav';
    
    const navList = document.createElement('ul');
    navList.className = 'header-nav-list';
    
    config.navigation.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'header-nav-item';
      
      const link = document.createElement('a');
      link.href = item.menuLink || '#';
      link.className = 'header-nav-link';
      
      // Add icon if present
      if (item.menuIcon) {
        const icon = document.createElement('img');
        icon.src = item.menuIcon;
        icon.alt = '';
        icon.className = 'header-nav-icon';
        link.appendChild(icon);
      }
      
      // Add label
      const label = document.createElement('span');
      label.textContent = item.menuLabel || '';
      link.appendChild(label);
      
      li.appendChild(link);
      navList.appendChild(li);
    });
    
    nav.appendChild(navList);
    topNav.appendChild(nav);
  }
  
  // Add login link
  if (config.loginLink) {
    const loginBtn = document.createElement('a');
    loginBtn.href = config.loginLink;
    loginBtn.className = 'header-login-btn button primary';
    loginBtn.textContent = 'Login';
    topNav.appendChild(loginBtn);
  }
  
  header.appendChild(topNav);
  
  // Create footer section (if it's part of header block)
  if (config.footerMenus || config.socialLinks || config.copyright) {
    const footer = document.createElement('div');
    footer.className = 'header-footer-section';
    
    // Add footer menus
    if (config.footerMenus && config.footerMenus.length > 0) {
      const footerNav = document.createElement('nav');
      footerNav.className = 'header-footer-nav';
      
      const footerList = document.createElement('ul');
      footerList.className = 'header-footer-list';
      
      config.footerMenus.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'header-footer-item';
        
        const link = document.createElement('a');
        link.href = item.footerLink || '#';
        link.textContent = item.footerLabel || '';
        
        li.appendChild(link);
        footerList.appendChild(li);
      });
      
      footerNav.appendChild(footerList);
      footer.appendChild(footerNav);
    }
    
    // Add social links
    if (config.socialLinks && config.socialLinks.length > 0) {
      const socialContainer = document.createElement('div');
      socialContainer.className = 'header-social-links';
      
      config.socialLinks.forEach((item) => {
        const link = document.createElement('a');
        link.href = item.socialLink || '#';
        link.className = 'header-social-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        if (item.socialIcon) {
          const icon = document.createElement('img');
          icon.src = item.socialIcon;
          icon.alt = 'Social media icon';
          icon.className = 'header-social-icon';
          link.appendChild(icon);
        }
        
        socialContainer.appendChild(link);
      });
      
      footer.appendChild(socialContainer);
    }
    
    // Add copyright
    if (config.copyright) {
      const copyright = document.createElement('p');
      copyright.className = 'header-copyright';
      copyright.textContent = config.copyright;
      footer.appendChild(copyright);
    }
    
    header.appendChild(footer);
  }
  
  block.appendChild(header);
}

/**
 * Reads and parses the header block configuration
 * @param {Element} block The header block element
 * @returns {Object} Parsed configuration object
 */
function readHeaderConfig(block) {
  const config = {
    appName: '',
    navigation: [],
    logoImg: '',
    loginLink: '',
    footerMenus: [],
    socialLinks: [],
    copyright: ''
  };
  
  // Get all rows from the block
  const rows = [...block.querySelectorAll(':scope > div')];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length < 2) return;
    
    const key = cells[0].textContent.trim().toLowerCase().replace(/\s+/g, '');
    const valueCell = cells[1];
    
    switch (key) {
      case 'appname':
        config.appName = valueCell.textContent.trim();
        break;
        
      case 'logoimage':
      case 'logoimg':
        const logoImg = valueCell.querySelector('img');
        if (logoImg) {
          config.logoImg = logoImg.src;
        }
        break;
        
      case 'loginlink':
        const loginLink = valueCell.querySelector('a');
        if (loginLink) {
          config.loginLink = loginLink.href;
        } else {
          config.loginLink = valueCell.textContent.trim();
        }
        break;
        
      case 'navigationmenu':
      case 'navigation':
        config.navigation = parseMultiField(valueCell, ['menuLink', 'menuLabel', 'menuIcon']);
        break;
        
      case 'footermenus':
        config.footerMenus = parseMultiField(valueCell, ['footerLink', 'footerLabel']);
        break;
        
      case 'sociallinks':
        config.socialLinks = parseMultiField(valueCell, ['socialLink', 'socialIcon']);
        break;
        
      case 'copyrighttext':
      case 'copyright':
        config.copyright = valueCell.textContent.trim();
        break;
        
      default:
        break;
    }
  });
  
  return config;
}

/**
 * Parses multi-field data from a cell
 * @param {Element} cell The cell containing multi-field data
 * @param {Array} fieldNames Array of field names to extract
 * @returns {Array} Array of objects with field data
 */
function parseMultiField(cell, fieldNames) {
  const items = [];
  
  // Check if the cell contains a list structure
  const listItems = cell.querySelectorAll('ul > li, ol > li');
  
  if (listItems.length > 0) {
    // Parse structured list items
    listItems.forEach((li) => {
      const item = {};
      const parts = li.querySelectorAll('p, div');
      
      parts.forEach((part, index) => {
        if (index < fieldNames.length) {
          const fieldName = fieldNames[index];
          
          // Check for link
          const link = part.querySelector('a');
          if (link && (fieldName.includes('Link') || fieldName.includes('link'))) {
            item[fieldName] = link.href;
          } 
          // Check for image
          else if (fieldName.includes('Icon') || fieldName.includes('icon') || fieldName.includes('Img')) {
            const img = part.querySelector('img');
            if (img) {
              item[fieldName] = img.src;
            }
          }
          // Text content
          else {
            item[fieldName] = part.textContent.trim();
          }
        }
      });
      
      if (Object.keys(item).length > 0) {
        items.push(item);
      }
    });
  } else {
    // Fallback: Try to parse as separate blocks
    const blocks = cell.querySelectorAll(':scope > div, :scope > p');
    let currentItem = {};
    let fieldIndex = 0;
    
    blocks.forEach((block) => {
      const fieldName = fieldNames[fieldIndex];
      
      // Check for link
      const link = block.querySelector('a');
      if (link && (fieldName.includes('Link') || fieldName.includes('link'))) {
        currentItem[fieldName] = link.href;
      } 
      // Check for image
      else if (fieldName.includes('Icon') || fieldName.includes('icon') || fieldName.includes('Img')) {
        const img = block.querySelector('img');
        if (img) {
          currentItem[fieldName] = img.src;
        }
      }
      // Text content
      else {
        currentItem[fieldName] = block.textContent.trim();
      }
      
      fieldIndex++;
      
      // When we've collected all fields for one item, add it and start a new one
      if (fieldIndex >= fieldNames.length) {
        items.push(currentItem);
        currentItem = {};
        fieldIndex = 0;
      }
    });
    
    // Add last item if it has data
    if (Object.keys(currentItem).length > 0) {
      items.push(currentItem);
    }
  }
  
  return items;
}