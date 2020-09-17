import React, { Component } from 'react';
import { fetchData } from './utils';
import Header from './common/Header';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Bio from './common/Bio';
import Footer from './common/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogsData: [],
      navItems: [
        { key: 'home', active: true },
        { key: 'blogs', active: false },
        { key: 'services', active: false },
        { key: 'resume', active: false },
      ],
    };
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
              <Home data={blogsData} />
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

  navigatePage();
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
