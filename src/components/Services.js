import React from 'react';

const Services = () => (
  <section className='page' data-id='services'>
    <div className='page__header'>
      <h2>SERVICES</h2>
    </div>
    <div className='page__content'>
      <div className='row services'>
        <div className='services__title col-12'>
          <h3>
            My <span className='highlight'>Services</span>
          </h3>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
      </div>
      <div className='row client'>
        <div className='col-12 client__title'>
          <h3>Clients</h3>
        </div>
        <div className='col-12 client__list'>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
