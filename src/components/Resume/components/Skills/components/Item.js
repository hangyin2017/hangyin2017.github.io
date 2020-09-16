import React from 'react';

const Item = ({ icon, children }) => {
  return (
    <div className="skills__item">
      <i className={`fab fa-${icon}`} />
      <span>{children}</span>
    </div>
  );
};

export default Item;
