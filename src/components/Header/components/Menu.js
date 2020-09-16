import React from 'react';
import Link from './Navbar/components/Link';

const Menu = () => {
  return (
    <nav className="dropdown-menu d-xl-none">
      <Link to="#home" active>
        Home
      </Link>
      <Link to="#blogs">Blogs</Link>
      <Link to="#services">Services</Link>
      <Link to="#resume">Resume</Link>
    </nav>
  );
};

export default Menu;
