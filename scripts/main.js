'use strict';

let pageList;
let blogsData;
let resumeData;

const init = async () => {
  pageList = ['#home', '#blogs', '#services', '#resume'];

  document.querySelector('.header__toggle').addEventListener('click', toggleMenu);
  document.querySelector('.dropdown-menu').addEventListener('click', toggleMenu);
  window.onhashchange = navigatePage;

  blogsData = await fetchData('blogsData');
  resumeData = await fetchData('resumeData');

  createPages();
  navigatePage();
};

const fetchData = async fileName => {
  return fetch(`./assets/json/${fileName}.json`).then(res => res.json());
};

const createPages = () => {
  createBlogs(blogsData, document.querySelector('#home'));
  createBlogs(blogsData, document.querySelector('#blogs'));
  createResume();
};

const createBlogs = (postsList, parentNode) => {
  postsList.forEach(post => {
    if (!post.title || post.title === '') return;
    const postNode = document.createElement('article');
    postNode.classList.add('post');
    postNode.innerHTML += `
      <div>
        <a href="${post.href}" target="_blank">
        <h3 class="post__title">${post.title}</h3>
        </a>
        <div class="post__date"><i class="far fa-calendar"></i> ${post.date}</div>
        <p class="post__content">${post.content}</p>
      </div>
    `;
    if (!!post.img)
      postNode.innerHTML += `
      <div class="post__wrapper">
        <img src="${post.img}" alt="${post.title}" class="post__snapshot">
      </div>
    `;
    parentNode.appendChild(postNode);
  });
};

const createResume = () => {
  const eduNode = document.querySelector('#education');
  const expNode = document.querySelector('#experience');

  resumeData.forEach(data => {
    const resumeCardNode = document.createElement('div');

    resumeCardNode.classList.add('cv__card');
    resumeCardNode.innerHTML = `
      <h4 class="cv-card__title">${data.title}</h4>
      <p class="cv-card__company">${data.company}</p>
      <div class="cv-card__date">${data.startDate} - ${data.endDate}</div>
    `;
    if (data.type === 'edu') eduNode.appendChild(resumeCardNode);
    if (data.type === 'exp') expNode.appendChild(resumeCardNode);
  });
};

const navigatePage = () => {
  const hash = getHash();
  changeNavbar(hash);
  showPage(hash);
};

const getHash = () => {
  return pageList.includes(location.hash) ? location.hash : (location.hash = '#home');
};

const changeNavbar = href => {
  const activeNavLink = document.querySelectorAll('.navbar__link--active');
  const clickedNavLink = document.querySelectorAll(`[href="${href}"]`);
  activeNavLink.forEach(link => link.classList.remove('navbar__link--active'));
  clickedNavLink.forEach(link => link.classList.add('navbar__link--active'));
};

const showPage = hash => {
  document.querySelector('.page-show').classList.remove('page-show');
  document.querySelector(`${hash}`).classList.add('page-show');
};

const toggleMenu = () => {
  dropdownMenuNode.classList[1]
    ? dropdownMenuNode.classList.remove('dropdown-menu--show')
    : dropdownMenuNode.classList.add('dropdown-menu--show');
};

window.onload = () => {
  init();
};
