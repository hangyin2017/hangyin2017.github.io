import React from 'react';
import NavItem from '../NavItem';

const MobileDropdown = () => {
  return (
    <nav className="dropdown-menu d-xl-none">
      <NavItem to="#home" active>
        Home
      </NavItem>
      <NavItem to="#blogs">Blogs</NavItem>
      <NavItem to="#services">Services</NavItem>
      <NavItem to="#resume">Resume</NavItem>
    </nav>
  );
};

export default MobileDropdown;
