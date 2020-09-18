import React from 'react';
import NavItem from '../NavItem';
import { toCapitalWord } from '../../../../utils';

const MobileDropdown = ({ navItems, currentPage, isShow, onMobileDropdownClick }) => {
  return (
    <nav
      className={`dropdown-menu d-xl-none ${isShow ? 'dropdown-menu--show' : ''}`}
      onClick={onMobileDropdownClick}
    >
      {navItems.map(navItem => (
        <NavItem key={navItem.key} to={`#${navItem.key}`} active={currentPage === navItem.key}>
          {toCapitalWord(navItem.key)}
        </NavItem>
      ))}
    </nav>
  );
};

export default MobileDropdown;
