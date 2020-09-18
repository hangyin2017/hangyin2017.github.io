import React from 'react';
import NavItem from '../NavItem';
import { toCapitalWord } from '../../../../utils';

const Navbar = ({ navItems, currentPage }) => {
  return (
    <nav className="navbar d-none d-xl-block">
      {navItems.map(navItem => (
        <NavItem key={navItem.key} to={`#${navItem.key}`} active={currentPage === navItem.key}>
          {toCapitalWord(navItem.key)}
        </NavItem>
      ))}
    </nav>
  );
};

export default Navbar;
