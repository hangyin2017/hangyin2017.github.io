'use strict';

import Home from './views/Home.js';
import Articles from './views/Articles.js';
import Projects from './views/Projects.js';
import Resume from './views/Resume.js';

const main = document.querySelector('.main');

const routes = {
  '/': Home,
  '/articles': Articles,
  '/projects': Projects,
  '/resume': Resume,
};

const router = () => {
  render(routes[location.pathname], main);
};

const render = (View, element) => {
  const view = new View();
  element.innerHTML = view.getHtml();
};

const handleNavClick = e => {
  if (e.target.matches('.navbar__link')) {
    e.preventDefault();
    document.querySelector('.navbar__link--active').classList.remove('navbar__link--active');
    e.target.classList.add('navbar__link--active');
    history.pushState(null, null, e.target.href);
    router();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', handleNavClick);
  router();
});
