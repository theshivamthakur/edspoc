import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Add all missing classes to block root
  block.classList.add('header-position-relative', 'header-mb-15');

  // 1. App Name Span
  const span = document.createElement('span');
  span.className = 'header-d-none header-app-name';
  span.setAttribute('data-app-name', 'boing');
  span.textContent = 'boing';
  block.prepend(span);

  // 2. Header Container
  const header = document.createElement('header');
  header.className = 'header-boing-container header-d-flex header-justify-content-between header-align-items-center header-h-15 header-px-5 header-py-2 header-fixed-top header-w-100 header-bg-white';

  // 2a. Left Logo/Side Logo
  const leftDiv = document.createElement('div');
  leftDiv.className = 'header-d-flex header-w-25';
  // SVG/side image not available as <img>, so not rendered (was just a path string in html)
  header.append(leftDiv);

  // 2b. Center Logo
  const centerDiv = document.createElement('div');
  centerDiv.className = 'header-d-flex  header-justify-content-center header-w-25';
  const logoLink = document.createElement('a');
  logoLink.href = '/';
  logoLink.className = 'header-analytics_cta_click';
  logoLink.setAttribute('data-ct', '');
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
  header.append(centerDiv);

  // 2c. Right Login Button
  const rightDiv = document.createElement('div');
  rightDiv.className = 'header-d-flex header-w-25 header-justify-content-end';
  const loginLink = document.createElement('a');
  loginLink.href = '/login.html';
  loginLink.className = 'header__login-btn-wrapper header-analytics_cta_click';
  loginLink.style.display = 'inline';
  const loginBtn = document.createElement('button');
  loginBtn.className = 'header__login-btn header-btn header-text-boing-primary header-bg-transparent header-fw-semibold header-rounded-4 header-btn-sm header-py-3 header-px-4';
  loginBtn.innerHTML = 'Login ';
  loginLink.appendChild(loginBtn);
  rightDiv.appendChild(loginLink);
  header.append(rightDiv);

  // Add header to block
  block.appendChild(header);

  // 3. Submenu Container (Sidebar + Overlay)
  const submenuContainer = document.createElement('div');
  submenuContainer.className = 'header-submenu-container header-position-fixed header-top-0 header-start-0 header-end-0 header-m-auto header-overflow-hidden';

  // Sidebar (aside)
  const aside = document.createElement('aside');
  aside.className = 'header-sidebar header-start-0 header-bg-white header-position-absolute';

  // Sidebar Menu UL
  const sidebarMenuUl = document.createElement('ul');
  sidebarMenuUl.className = 'header-sidebar__menu header-list-unstyled header-px-4';
  // Sidebar menu items data
  const sidebarItems = [
    {
      title: 'Home',
      url: '/',
      icon: '/content/dam/aemigrate/uploaded-folder/image/home?fmt=webp-alpha.webp',
      iconAlt: 'Home',
      liClass: 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200',
      style: ''
    },
    {
      title: 'Profile',
      url: '/login/profile.html',
      icon: '/content/dam/aemigrate/uploaded-folder/image/profile-circle-1?fmt=webp-alpha.webp',
      iconAlt: 'Profile',
      liClass: 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200',
      style: ''
    },
    {
      title: 'Tedhe Medhe Samachaar',
      url: '/tedhe-medhe-samachaar.html',
      icon: '/content/dam/aemigrate/uploaded-folder/image/news?fmt=webp-alpha.webp',
      iconAlt: 'Tedhe Medhe Samachaar',
      liClass: 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200',
      style: ''
    },
    {
      title: 'Bolte Sitaare',
      url: '/bolte-sitare.html',
      icon: '/content/dam/aemigrate/uploaded-folder/image/star?fmt=webp-alpha.webp',
      iconAlt: 'Bolte Sitaare',
      liClass: 'header-sidebar__menu-item  header-py-6 header-border-bottom header-border-boing-neutral-gray-200',
      style: ''
    },
    {
      title: 'Logout',
      url: '/',
      icon: '/content/dam/aemigrate/uploaded-folder/image/logout-3?fmt=webp-alpha.webp',
      iconAlt: 'Logout',
      liClass: 'header-sidebar__menu-item header__menu-item--logout header-py-6 header-border-bottom header-border-boing-neutral-gray-200',
      style: 'display: none;'
    }
  ];
  sidebarItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = item.liClass;
    if (item.style) li.style = item.style;
    const a = document.createElement('a');
    a.href = item.url;
    a.className = 'header-sidebar__menu-link header-d-flex header-align-items-center header-text-decoration-none header-px-6 header-fw-medium header-analytics_cta_click';
    a.setAttribute('data-link', item.url.replace('.html', '').replace('/login', '/content/boing/in/en/login').replace('/tedhe-medhe-samachaar', '/content/boing/in/en/tedhe-medhe-samachaar').replace('/bolte-sitare', '/content/boing/in/en/bolte-sitare').replace('/', '/content/boing/in/en/home'));
    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = item.iconAlt;
    img.className = 'header-sidebar__menu-icon header-me-4';
    img.loading = 'lazy';
    a.appendChild(img);
    a.appendChild(document.createTextNode(item.title));
    li.appendChild(a);
    sidebarMenuUl.appendChild(li);
  });
  aside.appendChild(sidebarMenuUl);

  // Sidebar curve
  const curveDiv = document.createElement('div');
  curveDiv.className = 'header-sidebar__curve';
  aside.appendChild(curveDiv);

  // Footer Brand
  const footerBrandDiv = document.createElement('div');
  footerBrandDiv.className = 'header-footer-brand header-w-100 header-bg-boing-neutral-gray-600';
  // Footer brand primary section
  const footerBrandPrimary = document.createElement('section');
  footerBrandPrimary.className = 'header-footer-brand__primary';
  footerBrandPrimary.style.backgroundColor = '';
  const footerContainer = document.createElement('div');
  footerContainer.className = 'header-container';
  const footerContent = document.createElement('div');
  footerContent.className = 'header-footer-brand__primary--content header-d-flex header-flex-column header-flex-md-row header-justify-content-md-between header-align-items-center';
  // Left logos
  const footerLeft = document.createElement('section');
  footerLeft.className = 'header-footer-brand__left header-d-flex header-gap-16 header-px-10 header-align-items-center header-justify-content-center';
  // ITC logo
  const itcLink = document.createElement('a');
  itcLink.href = 'https://www.itcportal.com/';
  itcLink.target = '_blank';
  itcLink.className = 'header-footer-brand__logo header-d-inline-block header-analytics_cta_click';
  itcLink.setAttribute('data-cta-region', 'Footer');
  itcLink.setAttribute('aria-label', 'ITC Logo');
  const itcImg = document.createElement('img');
  itcImg.src = '/content/dam/aemigrate/uploaded-folder/image/itc-logo-2?fmt=webp-alpha.webp';
  itcImg.alt = 'ITC Logo';
  itcImg.className = 'header-object-fit-contain header-w-100 header-h-100';
  itcImg.loading = 'lazy';
  itcLink.appendChild(itcImg);
  footerLeft.appendChild(itcLink);
  // FSSI logo
  const fssiDiv = document.createElement('div');
  fssiDiv.className = 'header-footer-brand__secondary--logo header-d-inline-block';
  const fssiImg = document.createElement('img');
  fssiImg.className = 'header-object-fit-contain header-w-100';
  fssiImg.src = '/content/dam/aemigrate/uploaded-folder/image/fssi-logo-update?fmt=webp-alpha.webp';
  fssiImg.alt = 'FSSI Logo';
  fssiImg.loading = 'lazy';
  fssiDiv.appendChild(fssiImg);
  footerLeft.appendChild(fssiDiv);
  footerContent.appendChild(footerLeft);
  // Footer navbar (links)
  const footerRight = document.createElement('section');
  footerRight.className = 'header-footer-brand__right';
  const nav = document.createElement('nav');
  nav.className = 'header-footer-brand__navbar header-d-grid header-d-md-flex';
  nav.setAttribute('aria-label', 'footer navbar');
  // Left and right footer link columns
  const navLeft = document.createElement('div');
  navLeft.className = 'header-footer-brand__navbar--left header-d-flex header-flex-column header-flex-md-row ';
  const navRight = document.createElement('div');
  navRight.className = 'header-footer-brand__navbar--right header-d-flex header-flex-column header-flex-md-row';
  // Footer lists (left)
  const footerListsLeft = [
    [
      { title: 'About us', url: '/about-us.html' },
      { title: 'Terms and Conditions', url: '/terms-and-conditions.html' },
      { title: 'Privacy Policy', url: '/privacy-policy.html' }
    ],
    [
      { title: 'BoingWale Blogs', url: '/bolte-sitare/boingwale-blogs.html' },
      { title: 'Tedhe Medhe Highlights', url: '/tedhe-medhe-samachaar/tedhe-medhe-highlights.html' },
      { title: 'Numbers Ka Khel', url: '/bolte-sitare/number-ka-khel.html' }
    ]
  ];
  footerListsLeft.forEach(list => {
    const div = document.createElement('div');
    div.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    list.forEach(link => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = link.url;
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.setAttribute('data-link-region', 'Footer List');
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    navLeft.appendChild(div);
  });
  // Footer lists (right)
  const footerListsRight = [
    [
      { title: 'Contact us', url: 'https://www.itcportal.com/contact-us.aspx', target: '_blank' },
      { title: 'Sa-Meme-Char', url: '/tedhe-medhe-samachaar/sa-meme-chaar.html' },
      { title: 'Numbers Ka Khel', url: '/bolte-sitare/number-ka-khel.html' }
    ],
    [
      { title: 'Pyaar O Scope', url: '/bolte-sitare/love-compatibility.html' },
      { title: 'Bhavishya On The Go', url: '/bolte-sitare/bhavishya-on-the-go.html' },
      { title: 'Boing Weekly', url: '/tedhe-medhe-samachaar/boing-weekly.html' }
    ]
  ];
  footerListsRight.forEach(list => {
    const div = document.createElement('div');
    div.className = 'header-footerList';
    const ul = document.createElement('ul');
    ul.className = 'header-footer-list header-d-flex header-align-items-center header-justify-content-center header-align-items-md-start header-flex-column';
    list.forEach(link => {
      const li = document.createElement('li');
      li.className = 'header-footer-list__item';
      const a = document.createElement('a');
      a.href = link.url;
      a.className = 'header-cta-analytics header-analytics_cta_click header-footer-list__item--link header-d-inline-block';
      a.setAttribute('data-link-region', 'Footer List');
      if (link.target) a.setAttribute('target', link.target);
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    navRight.appendChild(div);
  });
  nav.appendChild(navLeft);
  nav.appendChild(navRight);
  footerRight.appendChild(nav);
  footerContent.appendChild(footerRight);
  footerContainer.appendChild(footerContent);
  footerBrandPrimary.appendChild(footerContainer);
  footerBrandDiv.appendChild(footerBrandPrimary);

  // Footer brand secondary section
  const footerBrandSecondary = document.createElement('section');
  footerBrandSecondary.className = 'header-footer-brand__secondary';
  footerBrandSecondary.style.backgroundColor = '';
  const footerContainer2 = document.createElement('div');
  footerContainer2.className = 'header-container';
  const footerContent2 = document.createElement('div');
  footerContent2.className = 'header-footer-brand__secondary--content header-d-flex header-flex-column  header-justify-content-md-between header-align-items-center';
  // Social links
  const footerSocialSection = document.createElement('section');
  footerSocialSection.className = 'header-footer-brand__right header-d-flex header-flex-column header-pb-5';
  const socialTitle = document.createElement('h3');
  socialTitle.className = 'header-social_media--title';
  socialTitle.textContent = 'Follow Us On';
  footerSocialSection.appendChild(socialTitle);
  const socialLinksUl = document.createElement('ul');
  socialLinksUl.className = 'header-footer-brand__right--list header-d-flex header-align-items-center header-justify-content-center header-px-10 header-flex-wrap';
  const socialLinks = [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/share/1BiTDumTX4/?mibextid=wwXIf',
      icon: '/content/dam/aemigrate/uploaded-folder/image/facebook-5?fmt=webp-alpha.webp',
      iconAlt: 'https://www.facebook.com/share/1BiTDumTX4/?mibextid=wwXIf',
      dataCtaLabel: 'footer-facebook'
    },
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/bingo_snacks?igsh=bjc5eXg1cDNkM3U1',
      icon: '/content/dam/aemigrate/uploaded-folder/image/instagram-2?fmt=webp-alpha.webp',
      iconAlt: 'https://www.instagram.com/bingo_snacks?igsh=bjc5eXg1cDNkM3U1',
      dataCtaLabel: 'footer-instagram'
    },
    {
      platform: 'youtube',
      url: 'http://www.youtube.com/@BingoSnacks',
      icon: '/content/dam/aemigrate/uploaded-folder/image/youtube-2?fmt=webp-alpha.webp',
      iconAlt: 'http://www.youtube.com/@BingoSnacks',
      dataCtaLabel: 'footer-youtube'
    }
  ];
  socialLinks.forEach(link => {
    const li = document.createElement('li');
    li.className = 'header-footer-brand__right--item header-d-flex header-justify-content-center header-align-items-center';
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'header-footer-brand__right--link header-d-flex header-justify-content-center header-align-items-center header-analytics_cta_click';
    a.setAttribute('data-cta-region', 'Footer');
    a.setAttribute('data-cta-label', link.dataCtaLabel);
    a.setAttribute('target', '_blank');
    a.setAttribute('data-platform-name', link.platform);
    a.setAttribute('data-social-linktype', 'follow');
    const img = document.createElement('img');
    img.setAttribute('aria-label', link.platform);
    img.src = link.icon;
    img.className = 'header-object-fit-contain header-w-100 header-h-100';
    img.alt = link.iconAlt;
    img.loading = 'lazy';
    a.appendChild(img);
    li.appendChild(a);
    socialLinksUl.appendChild(li);
  });
  footerSocialSection.appendChild(socialLinksUl);
  footerContent2.appendChild(footerSocialSection);
  // Footer bottom left copyright
  const footerBottomLeft = document.createElement('section');
  footerBottomLeft.className = 'header-footer-brand__left header-py-5 header-d-flex header-flex-column header-gap-3';
  const leftListUl = document.createElement('ul');
  leftListUl.className = 'header-footer-brand__left--list header-d-flex header-align-items-center header-justify-content-center header-flex-wrap';
  const leftListLi = document.createElement('li');
  leftListLi.className = 'header-footer-brand__left--item header-foot_link';
  const leftListA = document.createElement('a');
  leftListA.href = 'https://www.itcportal.com/';
  leftListA.target = '_blank';
  leftListA.className = 'header-footer-brand__left--link header-analytics_cta_click';
  leftListA.setAttribute('data-cta-region', 'Footer');
  leftListA.textContent = 'ITC portal';
  leftListLi.appendChild(leftListA);
  leftListUl.appendChild(leftListLi);
  footerBottomLeft.appendChild(leftListUl);
  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'header-footer-brand__left--copyright header-text-center ';
  const copyrightSpan = document.createElement('span');
  copyrightSpan.className = 'header-footer-brand__left--text header-text-white';
  copyrightSpan.textContent = '© 2025 Bingo! All Rights Reserved.';
  copyrightDiv.appendChild(copyrightSpan);
  footerBottomLeft.appendChild(copyrightDiv);
  footerContent2.appendChild(footerBottomLeft);
  footerContainer2.appendChild(footerContent2);
  footerBrandSecondary.appendChild(footerContainer2);
  footerBrandDiv.appendChild(footerBrandSecondary);
  aside.appendChild(footerBrandDiv);

  // Add aside to submenu container
  submenuContainer.appendChild(aside);

  // Overlay
  const overlayDiv = document.createElement('div');
  overlayDiv.className = 'header-overlay header-position-absolute header-top-0 header-start-0 header-w-100 header-h-100 header-bg-black header-opacity-25';
  submenuContainer.appendChild(overlayDiv);

  // Add submenu container to block
  block.appendChild(submenuContainer);
}
