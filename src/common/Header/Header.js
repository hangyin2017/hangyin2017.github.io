import React from 'react';
import Logo from './components/Logo';
import MobileDropdownToggle from './components/MobileDropdownToggle';
import Navbar from './components/Navbar';
import MobileDropdown from './components/MobileDropdown';

const Header = ({ navItems }) => (
  <header className="header container-sm">
    <div className="header__content">
      <Logo />
      <MobileDropdownToggle />
      <Navbar navItems={navItems} />
    </div>
    <MobileDropdown navItems={navItems} />
  </header>
);

export default Header;
