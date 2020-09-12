import React from 'react';

const Header = () => (
  <header className='header container-sm'>
    <div className='header__content'>
      <h3 className='header__name'>
        Hang <span className='highlight'>Yin</span>
      </h3>
      <button className='header__toggle d-xl-none'>
        <i className='fas fa-bars'></i>
      </button>
      <nav className='navbar d-none d-xl-block'>
        <a href='#home' className='navbar__link navbar__link--active'>
          Home
        </a>
        <a href='#blogs' className='navbar__link'>
          Blogs
        </a>
        <a href='#services' className='navbar__link'>
          Services
        </a>
        <a href='#resume' className='navbar__link'>
          Resume
        </a>
      </nav>
    </div>
    <nav className='dropdown-menu d-xl-none'>
      <a href='#home' className='navbar__link navbar__link--active'>
        Home
      </a>
      <a href='#blogs' className='navbar__link'>
        Blogs
      </a>
      <a href='#services' className='navbar__link'>
        Services
      </a>
      <a href='#resume' className='navbar__link'>
        Resume
      </a>
    </nav>
  </header>
);

export default Header;
