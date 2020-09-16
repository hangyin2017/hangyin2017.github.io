import React, { Component } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Blogs from '../Blogs/Blogs';
import BlogsContent from '../Blogs/components/Content';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Bio from '../Bio/Bio';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogsData: [],
      resumeData: [],
    };
  }

  async fetchData(fileName) {
    return fetch(`./assets/json/${fileName}.json`).then(res => res.json());
  }

  componentDidMount() {
    fetchData('blogsData').then(data => this.setState({ blogsData: data }));
  }

  render() {
    const blogsData = this.state.blogsData;
    return (
      <div>
        <Header />
        <div className="container">
          <main className="col-xl-9">
            <div className="main">
              <Home>
                <BlogsContent data={blogsData} />
              </Home>
              <Blogs data={blogsData} />
              <Services />
              <Resume />
            </div>
          </main>
          <Bio />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

('use strict');

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

const fetchData = async fileName => {
  return fetch(`./assets/json/${fileName}.json`).then(res => res.json());
};

const createBlogs = blogsData => {
  // const blogsNode = document.querySelector('[data-id="blogs-content"]');
  // const homeNode = document.querySelector('[data-id="home-content"]');
  // blogsData.forEach(post => {
  //   if (!post.title || post.title === '') return;
  //   const postNode = document.createElement('div');
  //   postNode.classList.add('row');
  //   postNode.classList.add('post');
  //   postNode.innerHTML += `
  //     <div class="col-sm-9">
  //       <a href="${post.href}" target="_blank">
  //       <h3 class="post__title">${post.title}</h3>
  //       </a>
  //       <div class="post__date"><i class="far fa-calendar"></i> ${post.date}</div>
  //       <p class="post__content">${post.content}</p>
  //     </div>
  //   `;
  //   if (!!post.img)
  //     postNode.innerHTML += `
  //     <div class="post__snapshot col-sm-3">
  //       <img src="${post.img}" alt="${post.title}">
  //     </div>
  //   `;
  //   blogsNode.appendChild(postNode);
  //   homeNode.appendChild(postNode.cloneNode(true));
  // });
};

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
    if (data.type === 'edu') eduNode.appendChild(timelineItemNode);
    if (data.type === 'exp') expNode.appendChild(timelineItemNode);
  });
};

const navigatePage = () => {
  const hash = getHash();
  changeNavbar(hash);
  showPage(hash);
};

const getHash = () => {
  return hashList.includes(location.hash) ? location.hash : (location.hash = '#home');
};

const changeNavbar = hash => {
  const activeNavLink = document.querySelectorAll('.navbar__link--active');
  const clickedNavLink = document.querySelectorAll(`[href="${hash}"]`);
  activeNavLink.forEach(link => link.classList.remove('navbar__link--active'));
  clickedNavLink.forEach(link => link.classList.add('navbar__link--active'));
};

const showPage = hash => {
  document.querySelector('.page--show').classList.remove('page--show');
  document.querySelector(`[data-id="${hash.slice(1)}"]`).classList.add('page--show');
};

const toggleMenu = () => {
  dropdownMenuNode.classList.contains('dropdown-menu--show')
    ? dropdownMenuNode.classList.remove('dropdown-menu--show')
    : dropdownMenuNode.classList.add('dropdown-menu--show');
};

window.onload = () => {
  init();
};
