import React from 'react';
import NavItem from '../NavItem';
import { toCapitalWord } from '../../../../utils'

const Navbar = ({ navItems }) => {
  return (
    <nav className="navbar d-none d-xl-block">
      {navItems.map(navItem => (
        <NavItem key={navItem.key} to={`#${navItem.key}`}>
          {toCapitalWord(navItem.key)}
        </NavItem>
      ))}
    </nav>
  );
};

export default Navbar;
