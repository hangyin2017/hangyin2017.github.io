import React from 'react';

const Link = ({ to, children, active }) => {
  return (
    <a href={to} className={`navbar__link ${!!active && 'navbar__link--active'}`}>
      {children}
    </a>
  );
};

export default Link;
