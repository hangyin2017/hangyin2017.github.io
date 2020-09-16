import React from 'react';
import Logo from './components/Logo';
import Toggle from './components/Toggle';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu';

const Header = () => (
  <header className="header container-sm">
    <div className="header__content">
      <Logo />
      <Toggle />
      <Navbar />
    </div>
    <Menu />
  </header>
);

export default Header;
