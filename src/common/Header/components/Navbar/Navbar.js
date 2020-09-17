import React from 'react';
import NavItem from '../NavItem';

const Navbar = () => {
  return (
    <nav className="navbar d-none d-xl-block">
      <NavItem to="#home" active>
        Home
      </NavItem>
      <NavItem to="#blogs">Blogs</NavItem>
      <NavItem to="#services">Services</NavItem>
      <NavItem to="#resume">Resume</NavItem>
    </nav>
  );
};

export default Navbar;
