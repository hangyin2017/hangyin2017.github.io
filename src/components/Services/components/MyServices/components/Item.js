import React from 'react';

const Item = ({ title, children, icon }) => {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="services__block">
        <div className="services__icon">
          <i className={`fas fa-${icon}`} />
        </div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Item;
