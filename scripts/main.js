'use strict';

let hashList;
let dropdownMenuNode;

const init = () => {
  hashList = ['#home', '#blogs', '#services', '#resume'];
  dropdownMenuNode = document.querySelector('.dropdown-menu');

  document.querySelector('.header__toggle').addEventListener('click', toggleMenu);
  dropdownMenuNode.addEventListener('click', toggleMenu);
  window.onhashchange = navigatePage;

  createPages();
  navigatePage();
};

const createPages = async () => {
  createBlogs(await fetchData('blogsData'));
  createResume(await fetchData('resumeData'));
};

/**
 * Fetch a json file.
 * @param {string} fileName - The json file's name that you want to fetch.
 * @returns {object} The promise that contains the targeted json file.
 */
const fetchData = async fileName => {
  return fetch(`./assets/json/${fileName}.json`).then(res => res.json());
};

/**
 * Dynamically create blog posts.
 * @param {object[]} blogsData - Blogs' data in json format.
 */
const createBlogs = blogsData => {
  const blogsNode = document.querySelector('[data-id="blogs-content"]');
  const homeNode = document.querySelector('[data-id="home-content"]');

  blogsData.forEach(post => {
    if (!post.title || post.title === '') return;
    const postNode = document.createElement('div');
    postNode.classList.add('row');
    postNode.classList.add('post');
    postNode.innerHTML += `
      <div class="col-sm-9">
        <a href="${post.href}" target="_blank">
        <h3 class="post__title">${post.title}</h3>
        </a>
        <div class="post__date"><i class="far fa-calendar"></i> ${post.date}</div>
        <p class="post__content">${post.content}</p>
      </div>
    `;
    if (!!post.img)
      postNode.innerHTML += `
      <div class="post__snapshot col-sm-3">
        <img src="${post.img}" alt="${post.title}">
      </div>
    `;

    // Display blog posts on both blogs page and home page.
    blogsNode.appendChild(postNode);
    homeNode.appendChild(postNode.cloneNode(true));
  });
};

/**
 * Dynamically create resume timeline items.
 * @param {object[]} resumeData - Resume timelines' data in json format.
 */
const createResume = resumeData => {
  const eduNode = document.querySelector('[data-id="education"]');
  const expNode = document.querySelector('[data-id="experience"]');

  resumeData.forEach(data => {
    const timelineItemNode = document.createElement('div');

    timelineItemNode.classList.add('timeline__item');
    timelineItemNode.innerHTML = `
      <h4 class="timeline__title">${data.title}</h4>
      <div class="timeline__company">${data.company}</div>
      <div class="timeline__date">${data.startDate} - ${data.endDate}</div>
    `;

    // Append items to either education or experience column.
    if (data.type === 'edu') eduNode.appendChild(timelineItemNode);
    if (data.type === 'exp') expNode.appendChild(timelineItemNode);
  });
};

/** Navigate page when click on the navbar. */
const navigatePage = () => {
  const hash = getHash();
  changeNavbar(hash);
  showPage(hash);
};

/**
 * Return current hash if it's legal, otherwise set the hash to default '#home'.
 * @returns {string} A legal hash string.
 */
const getHash = () => {
  return hashList.includes(location.hash) ? location.hash : (location.hash = '#home');
};

/**
 * Style the clicked navbar link to active.
 * @param {string} hash - Current hash string.
 */
const changeNavbar = hash => {
  const activeNavLink = document.querySelectorAll('.navbar__link--active');
  const clickedNavLink = document.querySelectorAll(`[href="${hash}"]`);
  activeNavLink.forEach(link => link.classList.remove('navbar__link--active'));
  clickedNavLink.forEach(link => link.classList.add('navbar__link--active'));
};

/**
 * Show current page.
 * @param {string} hash - Current hash string.
 */
const showPage = hash => {
  document.querySelector('.page--show').classList.remove('page--show');
  document.querySelector(`[data-id="${hash.slice(1)}"]`).classList.add('page--show');
};

/** Toggle the dropdown menu when click on the menu toggle. */
const toggleMenu = () => {
  dropdownMenuNode.classList.contains('dropdown-menu--show')
    ? dropdownMenuNode.classList.remove('dropdown-menu--show')
    : dropdownMenuNode.classList.add('dropdown-menu--show');
};

window.onload = () => {
  init();
};
