import React from 'react';

const Item = ({ icon }) => {
  return (
    <div className="client__item">
      <i className={`fas fa-${icon}`} />
    </div>
  );
};

export default Item;
