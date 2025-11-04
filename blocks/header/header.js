export default function decorate(block) {
  const appNameSpan = block.querySelector('.header-app-name');
  const appName = appNameSpan ? appNameSpan.dataset.appName : '';

  const headerBoingContainer = block.querySelector('.header-boing-container');
  if (headerBoingContainer) {
    headerBoingContainer.classList.add(`${appName}-container`);
  }

  const loginButtonWrapper = block.querySelector('.header__login-btn-wrapper');
  const logoutMenuItem = block.querySelector('.header__menu-item--logout');

  // Function to update login/logout button visibility
  const updateLoginLogoutVisibility = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      if (loginButtonWrapper) loginButtonWrapper.style.display = 'none';
      if (logoutMenuItem) logoutMenuItem.style.display = 'block';
    } else {
      if (loginButtonWrapper) loginButtonWrapper.style.display = 'inline';
      if (logoutMenuItem) logoutMenuItem.style.display = 'none';
    }
  };

  // Initial visibility update
  updateLoginLogoutVisibility();

  // Add event listener for custom event to update visibility
  window.addEventListener('statusChanged', updateLoginLogoutVisibility);

  // Logout functionality
  if (logoutMenuItem) {
    logoutMenuItem.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('accessToken');
      window.dispatchEvent(new CustomEvent('statusChanged'));
      // Redirect to home or login page after logout
      window.location.href = '/'; 
    });
  }

  // Hamburger menu toggle
  const hamburgerMenu = block.querySelector('.header-d-flex.header-w-25 .header-analytics_cta_click');
  const submenuContainer = block.querySelector('.header-submenu-container');
  const overlay = block.querySelector('.header-overlay');

  if (hamburgerMenu && submenuContainer && overlay) {
    hamburgerMenu.addEventListener('click', () => {
      submenuContainer.classList.toggle('header-d-none');
      overlay.classList.toggle('header-d-none');
    });

    overlay.addEventListener('click', () => {
      submenuContainer.classList.add('header-d-none');
      overlay.classList.add('header-d-none');
    });
  }

  // Footer links target blank
  const footerLinks = block.querySelectorAll('.header-footer-list__item--link');
  footerLinks.forEach(link => {
    if (link.href.startsWith('http') && !link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
    }
  });

  // Social media links target blank
  const socialLinks = block.querySelectorAll('.header-footer-brand__right--link');
  socialLinks.forEach(link => {
    link.setAttribute('target', '_blank');
  });

  // ITC portal link target blank
  const itcPortalLink = block.querySelector('.header-foot_link a');
  if (itcPortalLink) {
    itcPortalLink.setAttribute('target', '_blank');
  }
}