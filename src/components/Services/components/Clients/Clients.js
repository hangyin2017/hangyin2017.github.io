import React from 'react';
import Item from './components/Item';

const Clients = () => {
  return (
    <div className="row client">
      <div className="col-12 client__title">
        <h3>Clients</h3>
      </div>
      <div className="col-12 client__list">
        <Item icon="briefcase" />
        <Item icon="briefcase" />
        <Item icon="briefcase" />
        <Item icon="briefcase" />
        <Item icon="briefcase" />
        <Item icon="briefcase" />
      </div>
    </div>
  );
};

export default Clients;
