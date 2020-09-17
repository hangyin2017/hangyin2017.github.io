import React from 'react';
import Item from './components/Item';

const MyServices = () => {
  return (
    <div className="row services">
      <div className="services__title col-12">
        <h3>
          My <span className="highlight">Services</span>
        </h3>
      </div>
      <Item title="Web Design" icon="shopping-bag">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.
      </Item>

      <Item title="Web Design" icon="shopping-bag">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.
      </Item>

      <Item title="Web Design" icon="shopping-bag">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.
      </Item>

      <Item title="Web Design" icon="shopping-bag">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.
      </Item>
    </div>
  );
};

export default MyServices;
