'use strict';

import Home from './views/Home.js';
import Articles from './views/Articles.js';
import Projects from './views/Projects.js';
import Resume from './views/Resume.js';

const main = document.querySelector('.main');
const pageMap = {
  '#home': Home,
  '#articles': Articles,
  '#projects': Projects,
  '#resume': Resume,
};
const navLinks = document.querySelectorAll('.navbar__link');

const navigatePage = () => {
  const hash = getHash();
  changeNavbar(hash);
  render(pageMap[hash], main);
};

const getHash = () => {
  // let hash = location.hash;
  // if (!pageMap[hash]) location.hash = hash = '#home';
  return pageMap[location.hash] ? location.hash : (location.hash = '#home');
};

const changeNavbar = href => {
  const activeNavLink = document.querySelector('.navbar__link--active');
  const clickedNavLink = document.querySelector(`[href="${href}"]`);
  activeNavLink.classList.remove('navbar__link--active');
  clickedNavLink.classList.add('navbar__link--active');
};

const render = (View, element) => {
  const view = new View();
  element.innerHTML = view.getHtml();
};

window.onload = () => {
  window.onhashchange = navigatePage;
  navigatePage();
};
