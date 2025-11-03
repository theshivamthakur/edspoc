export default function decorate(block) {
  // Top header structure
  block.classList.add('header-position-relative', 'header-mb-15');

  // App name
  const appName = document.createElement('span');
  appName.className = 'header-d-none header-app-name';
  appName.dataset.appName = 'boing';
  appName.textContent = 'boing';
  block.appendChild(appName);

  // Header container
  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';
  
  // Left blank div (could be logo or svg)
  const leftDiv = document.createElement('div');
  leftDiv.className = 'header-d-flex header-w-25';
  header.appendChild(leftDiv);

  // Center logo
  const centerDiv = document.createElement('div');
  centerDiv.className = 'header-d-flex  header-justify-content-center header-w-25';
  const logoLink = document.createElement('a');
  logoLink.href = '/';
  logoLink.className = 'header-analytics_cta_click';
  logoLink.setAttribute('a-label', 'header-logo-boing');
  const logoDiv = document.createElement('div');
  logoDiv.className = 'header__logo header-d-flex header-align-items-center';
  const logoImg = document.createElement('img');
  logoImg.src = '/content/dam/aemigrate/uploaded-folder/image/lets-boing-logo?fmt=webp-alpha.webp';
  logoImg.alt = "Let's Boing";
  logoImg.className = 'header__logo-img';
  logoDiv.appendChild(logoImg);
  logoLink.appendChild(logoDiv);
  centerDiv.appendChild(logoLink);
  header.appendChild(centerDiv);

  // Right login button
  const rightDiv = document.createElement('div');
  rightDiv.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginLink = document.createElement('a');
  loginLink.href = '/login.html';
  loginLink.className = 'header__login-btn-wrapper header-analytics_cta_click';
  loginLink.style.display = 'inline';
  const loginBtn = document.createElement('button');
  loginBtn.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
  loginBtn.textContent = 'Login ';
  loginLink.appendChild(loginBtn);
  rightDiv.appendChild(loginLink);
  header.appendChild(rightDiv);

  block.appendChild(header);

  // Sidebar submenu container
  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  // Sidebar (aside)
  const sidebar = document.createElement('aside');
  sidebar.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';
  // Sidebar menu
  const menuUl = document.createElement('ul');
  menuUl.className = 'header-sidebar__menu header-list-unstyled header-px-4';
  const menuItems = [
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/home?fmt=webp-alpha.webp',
      text: 'Home',
      href: '/',
      class: 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click'
    },
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/profile-circle-1?fmt=webp-alpha.webp',
      text: 'Profile',
      href: '/login/profile.html',
      class: 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click'
    },
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/news?fmt=webp-alpha.webp',
      text: 'Tedhe Medhe Samachaar',
      href: '/tedhe-medhe-samachaar.html',
      class: 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click'
    },
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/star?fmt=webp-alpha.webp',
      text: 'Bolte Sitaare',
      href: '/bolte-sitare.html',
      class: 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click'
    },
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/logout-3?fmt=webp-alpha.webp',
      text: 'Logout',
      href: '/',
      class: 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click header__menu-item--logout',
      style: 'display: none;'
    }
  ];
  menuItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200' + (item.class.includes('logout') ? ' header__menu-item--logout' : '');
    if(item.style) li.style.display = 'none';
    const a = document.createElement('a');
    a.href = item.href;
    a.className = item.class;
    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = item.text;
    img.className = 'header-sidebar__menu-icon header-me-4';
    img.loading = 'lazy';
    a.appendChild(img);
    a.appendChild(document.createTextNode(item.text));
    li.appendChild(a);
    menuUl.appendChild(li);
  });
  sidebar.appendChild(menuUl);

  // Sidebar curve
  const curveDiv = document.createElement('div');
  curveDiv.className = 'header-sidebar__curve';
  sidebar.appendChild(curveDiv);

  // Footer brand section
  const footerBrand = document.createElement('div');
  footerBrand.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';

  // Primary footer
  const primarySection = document.createElement('section');
  primarySection.className = 'header-footer-brand__primary';
  primarySection.style.backgroundColor = '';
  const primaryContainer = document.createElement('div');
  primaryContainer.className = 'header-container';
  const primaryContent = document.createElement('div');
  primaryContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';
  // Left logos
  const leftSection = document.createElement('section');
  leftSection.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';
  const itcLink = document.createElement('a');
  itcLink.href = 'https://www.itcportal.com/';
  itcLink.target = '_blank';
  itcLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  itcLink.setAttribute('data-cta-region','Footer');
  itcLink.setAttribute('aria-label','ITC Logo');
  const itcImg = document.createElement('img');
  itcImg.src = '/content/dam/aemigrate/uploaded-folder/image/itc-logo-2?fmt=webp-alpha.webp';
  itcImg.alt = 'ITC Logo';
  itcImg.className = 'header-object-fit-contain header-w-100 header-h-100';
  itcImg.loading = 'lazy';
  itcLink.appendChild(itcImg);
  leftSection.appendChild(itcLink);
  const fssiDiv = document.createElement('div');
  fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
  const fssiImg = document.createElement('img');
  fssiImg.className = 'header-object-fit-contain header-w-100';
  fssiImg.src = '/content/dam/aemigrate/uploaded-folder/image/fssi-logo-update?fmt=webp-alpha.webp';
  fssiImg.alt = 'FSSI Logo';
  fssiImg.loading = 'lazy';
  fssiDiv.appendChild(fssiImg);
  leftSection.appendChild(fssiDiv);
  primaryContent.appendChild(leftSection);
  // Right footer nav
  const rightSection = document.createElement('section');
  rightSection.className = 'header-footer-brand__right';
  const nav = document.createElement('nav');
  nav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  nav.setAttribute('aria-label','footer navbar');
  // Nav left
  const navLeft = document.createElement('div');
  navLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';
  // 2 columns of footer lists (left)
  const footerListsLeft = [
    [
      {text:'About us', href:'/about-us.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'},
      {text:'Terms and Conditions', href:'/terms-and-conditions.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'},
      {text:'Privacy Policy', href:'/privacy-policy.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'}
    ],
    [
      {text:'BoingWale Blogs', href:'/bolte-sitare/boingwale-blogs.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'},
      {text:'Tedhe Medhe Highlights', href:'/tedhe-medhe-samachaar/tedhe-medhe-highlights.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'},
      {text:'Numbers Ka Khel', href:'/bolte-sitare/number-ka-khel.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'}
    ]
  ];
  footerListsLeft.forEach(list => {
    const div = document.createElement('div');
    div.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    list.forEach(item => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = item.href;
      a.className = item.class;
      a.setAttribute('data-link-region','Footer List');
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    navLeft.appendChild(div);
  });
  nav.appendChild(navLeft);
  // Nav right
  const navRight = document.createElement('div');
  navRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
  const footerListsRight = [
    [
      {text:'Contact us', href:'https://www.itcportal.com/contact-us.aspx', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block', target:'_blank'},
      {text:'Sa-Meme-Char', href:'/tedhe-medhe-samachaar/sa-meme-chaar.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'},
      {text:'Numbers Ka Khel', href:'/bolte-sitare/number-ka-khel.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'}
    ],
    [
      {text:'Pyaar O Scope', href:'/bolte-sitare/love-compatibility.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'},
      {text:'Bhavishya On The Go', href:'/bolte-sitare/bhavishya-on-the-go.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'},
      {text:'Boing Weekly', href:'/tedhe-medhe-samachaar/boing-weekly.html', class:'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block'}
    ]
  ];
  footerListsRight.forEach(list => {
    const div = document.createElement('div');
    div.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    list.forEach(item => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = item.href;
      a.className = item.class;
      a.setAttribute('data-link-region','Footer List');
      if(item.target) a.target = item.target;
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    navRight.appendChild(div);
  });
  nav.appendChild(navRight);
  rightSection.appendChild(nav);
  primaryContent.appendChild(rightSection);
  primaryContainer.appendChild(primaryContent);
  primarySection.appendChild(primaryContainer);
  footerBrand.appendChild(primarySection);

  // Secondary footer
  const secondarySection = document.createElement('section');
  secondarySection.className = 'header-footer-brand__secondary';
  secondarySection.style.backgroundColor = '';
  const secondaryContainer = document.createElement('div');
  secondaryContainer.className = 'header-container';
  const secondaryContent = document.createElement('div');
  secondaryContent.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';
  // Social icons
  const socSection = document.createElement('section');
  socSection.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
  const socTitle = document.createElement('h3');
  socTitle.className = 'header-social_media--title';
  socTitle.textContent = 'Follow Us On';
  socSection.appendChild(socTitle);
  const socUl = document.createElement('ul');
  socUl.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';
  const socialItems = [
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/facebook-5?fmt=webp-alpha.webp',
      href: 'https://www.facebook.com/share/1BiTDumTX4/?mibextid=wwXIf',
      class: 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click'
    },
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/instagram-2?fmt=webp-alpha.webp',
      href: 'https://www.instagram.com/bingo_snacks?igsh=bjc5eXg1cDNkM3U1',
      class: 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click'
    },
    {
      icon: '/content/dam/aemigrate/uploaded-folder/image/youtube-2?fmt=webp-alpha.webp',
      href: 'http://www.youtube.com/@BingoSnacks',
      class: 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click'
    }
  ];
  socialItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    const a = document.createElement('a');
    a.href = item.href;
    a.className = item.class;
    a.target = '_blank';
    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = item.href;
    img.className = 'header-object-fit-contain header-w-100 header-h-100';
    img.loading = 'lazy';
    a.appendChild(img);
    li.appendChild(a);
    socUl.appendChild(li);
  });
  socSection.appendChild(socUl);
  secondaryContent.appendChild(socSection);
  // Secondary left copyright
  const leftFootSection = document.createElement('section');
  leftFootSection.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  const leftFootUl = document.createElement('ul');
  leftFootUl.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
  const leftFootLi = document.createElement('li');
  leftFootLi.className = 'header-footer-brand__left--item header-foot_link';
  const leftFootA = document.createElement('a');
  leftFootA.href = 'https://www.itcportal.com/';
  leftFootA.target = '_blank';
  leftFootA.className = 'header-footer-brand__left--link header-analytics_cta_click';
  leftFootA.setAttribute('data-cta-region','Footer');
  leftFootA.textContent = 'ITC portal';
  leftFootLi.appendChild(leftFootA);
  leftFootUl.appendChild(leftFootLi);
  leftFootSection.appendChild(leftFootUl);
  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
  const copyrightSpan = document.createElement('span');
  copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpan.textContent = '© 2025 Bingo! All Rights Reserved.';
  copyrightDiv.appendChild(copyrightSpan);
  leftFootSection.appendChild(copyrightDiv);
  secondaryContent.appendChild(leftFootSection);
  secondaryContainer.appendChild(secondaryContent);
  secondarySection.appendChild(secondaryContainer);
  footerBrand.appendChild(secondarySection);
  sidebar.appendChild(footerBrand);

  submenuContainer.appendChild(sidebar);

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.appendChild(overlay);
  block.appendChild(submenuContainer);
}