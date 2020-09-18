import React from 'react';

const MobileDropdownToggle = ({ onMobileDropdownToggleClick }) => {
  return (
    <button
      className="header__toggle d-xl-none"
      onClick={onMobileDropdownToggleClick}
    >
      <i className="fas fa-bars"></i>
    </button>
  );
};

export default MobileDropdownToggle;
