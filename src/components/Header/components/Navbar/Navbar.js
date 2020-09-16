import React from 'react';
import Link from './components/Link';

const Navbar = () => {
  return (
    <nav className="navbar d-none d-xl-block">
      <Link to="#home" active>
        Home
      </Link>
      <Link to="#blogs">Blogs</Link>
      <Link to="#services">Services</Link>
      <Link to="#resume">Resume</Link>
    </nav>
  );
};

export default Navbar;
