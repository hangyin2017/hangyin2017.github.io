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
    const navItems = [
      { key: 'home', page: <Home /> },
      { key: 'blogs', page: <Blogs /> },
      { key: 'services', page: <Services /> },
      { key: 'resume', page: <Resume /> },
    ];

    const defaultPage = navItems[0].key;

    this.state = {
      blogsData: [],
      navItems,
      currentPage: defaultPage,
    };

    this.navigatePage = this.navigatePage.bind(this);
  }

  componentDidMount() {
    fetchData('blogsData').then(data => this.setState({ blogsData: data }));
    window.onhashchange = this.navigatePage;
    this.navigatePage();
  }

  navigatePage() {
    const currentPage = this.getCurrentPage();
    this.setCurrentPage(currentPage);
  };

  getCurrentPage() {
    const pageList = this.state.navItems.map(navItem => navItem.key);
    let currentPage = location.hash.slice(1);
    if (pageList.indexOf(currentPage) < 0) {
      currentPage = defaultPage;
      location.hash = `#${defaultPage}`;
    }
    return currentPage;
  };

  setCurrentPage(pageName) {
    this.setState({ currentPage: pageName });
  }

  render() {
    const { blogsData, navItems, currentPage } = this.state;
    return (
      <div>
        <Header navItems={navItems} currentPage={currentPage} />
        <div className="container">
          <main className="col-xl-9">
            <div className="main">
              {/* {
                this.state.navItems.map(item => (
                  <React.Fragment key={item.key}>
                    {item.page}
                  </React.Fragment>
                ))
              } */}
              <Home isShow={currentPage === 'home'} data={blogsData} />
              <Blogs isShow={currentPage === 'blogs'} data={blogsData} />
              <Services isShow={currentPage === 'services'} />
              <Resume isShow={currentPage === 'resume'} />
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

let dropdownMenuNode;

const init = () => {
  dropdownMenuNode = document.querySelector('.dropdown-menu');

  document.querySelector('.header__toggle').addEventListener('click', toggleMenu);
  dropdownMenuNode.addEventListener('click', toggleMenu);

};

const toggleMenu = () => {
  dropdownMenuNode.classList.contains('dropdown-menu--show')
    ? dropdownMenuNode.classList.remove('dropdown-menu--show')
    : dropdownMenuNode.classList.add('dropdown-menu--show');
};

window.onload = () => {
  init();
};
