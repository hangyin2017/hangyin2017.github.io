import React, { useState } from 'react';
import Logo from './components/Logo';
import MobileDropdownToggle from './components/MobileDropdownToggle';
import Navbar from './components/Navbar';
import MobileDropdown from './components/MobileDropdown';

const Header = ({ navItems, currentPage }) => {
  const [isShowMobileDropdown, setIsShowMobileDropdown] = useState(false);

  return (
    <header className="header container-sm">
      <div className="header__content">
        <Logo />
        <MobileDropdownToggle
          onMobileDropdownToggleClick={() => setIsShowMobileDropdown(!isShowMobileDropdown)}
        />
        <Navbar navItems={navItems} currentPage={currentPage} />
      </div>
      <MobileDropdown
        navItems={navItems}
        currentPage={currentPage}
        isShow={isShowMobileDropdown}
        onMobileDropdownClick={() => setIsShowMobileDropdown(!isShowMobileDropdown)}
      />
    </header>
  )
};

export default Header;
