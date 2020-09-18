import React from 'react';
import Logo from './components/Logo';
import MobileDropdownToggle from './components/MobileDropdownToggle';
import Navbar from './components/Navbar';
import MobileDropdown from './components/MobileDropdown';

const Header = ({ navItems, currentPage }) => (
  <header className="header container-sm">
    <div className="header__content">
      <Logo />
      <MobileDropdownToggle />
      <Navbar navItems={navItems} currentPage={currentPage} />
    </div>
    <MobileDropdown navItems={navItems} currentPage={currentPage} />
  </header>
);

export default Header;
