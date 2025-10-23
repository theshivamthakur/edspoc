export default function decorate(b) {
  b.classList.add('footer-brand-block');
  const wrapper = b.querySelector('.footer-brand--wrapper');
  if (wrapper) wrapper.classList.add('footer-brand-wrapper');
  const primary = b.querySelector('.footer-brand--primary');
  if (primary) primary.classList.add('footer-brand-primary');
  const logo = b.querySelector('.footer-brand--logo');
  if (logo) logo.classList.add('footer-brand-logo');
  const logoImg = logo ? logo.querySelector('img') : null;
  if (logoImg) logoImg.classList.add('footer-brand-logo-img');
  const secondaryLogo = b.querySelector('.footer-brand--secondary-logo');
  if (secondaryLogo) secondaryLogo.classList.add('footer-brand-secondary-logo');
  const secondaryLogoImg = secondaryLogo ? secondaryLogo.querySelector('img') : null;
  if (secondaryLogoImg) secondaryLogoImg.classList.add('footer-brand-secondary-logo-img');
  const navLinks = b.querySelectorAll('.footer-list--item-link');
  navLinks.forEach(a => a.classList.add('footer-nav-link'));
  const socialLinks = b.querySelectorAll('.footer-brand--social-link');
  socialLinks.forEach(a => a.classList.add('footer-social-link'));
  const socialImgs = b.querySelectorAll('.footer-brand--social-link img');
  socialImgs.forEach(img => img.classList.add('footer-social-icon'));
  const leftLink = b.querySelector('.footer-brand--left-link');
  if (leftLink) leftLink.classList.add('footer-left-link');
  const copyright = b.querySelector('.footer-brand--left-copyright');
  if (copyright) copyright.classList.add('footer-copyright');
}