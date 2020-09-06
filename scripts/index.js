'use strict';

import Home from './views/Home.js';
import Articles from './views/Articles.js';
import Projects from './views/Projects.js';
import Resume from './views/Resume.js';

let main;
let menuToggle;
let pageMap;
let dropdownMenu;

const init = () => {
  main = document.querySelector('.main');
  menuToggle = document.querySelector('.header__toggle');
  dropdownMenu = document.querySelector('.dropdown-menu');

  pageMap = {
    '#home': Home,
    '#articles': Articles,
    '#projects': Projects,
    '#resume': Resume,
  };

  menuToggle.addEventListener('click', toggleMenu);
  dropdownMenu.addEventListener('click', toggleMenu);
  window.onhashchange = navigatePage;

  navigatePage();
};

const navigatePage = () => {
  const hash = getHash();
  changeNavbar(hash);
  render(pageMap[hash], main);
};

const getHash = () => {
  return pageMap[location.hash] ? location.hash : (location.hash = '#home');
};

const changeNavbar = href => {
  const activeNavLink = document.querySelectorAll('.navbar__link--active');
  const clickedNavLink = document.querySelectorAll(`[href="${href}"]`);
  activeNavLink.forEach(link => link.classList.remove('navbar__link--active'));
  clickedNavLink.forEach(link => link.classList.add('navbar__link--active'));
};

const render = (View, element) => {
  const view = new View();
  element.innerHTML = view.getHtml();
};

const toggleMenu = () => {
  dropdownMenu.classList[1]
    ? dropdownMenu.classList.remove('dropdown-menu--show')
    : dropdownMenu.classList.add('dropdown-menu--show');
};

window.onload = () => {
  init();
};
