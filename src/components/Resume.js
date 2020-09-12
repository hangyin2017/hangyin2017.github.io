import React from 'react';

const Resume = () => (
  <section className='page' data-id='resume'>
    <div className='page__header'>
      <h2>RESUME</h2>
    </div>
    <div className='page__content'>
      <div className='row'>
        <section className='col-lg-6 timeline'>
          <h3 className='timeline__header'>EDUCATION</h3>
          <div className='timeline__list' data-id='education'></div>
        </section>
        <section className='col-lg-6 timeline'>
          <h3 className='timeline__title'>EXPERIENCE</h3>
          <div className='timeline__list' data-id='experience'></div>
        </section>
      </div>
      <div className='row skills'>
        <h3 className='col-12'>SKILLS</h3>
        <div className='skills__list col-12'>
          <div className='skills__item'>
            <i className='fab fa-html5'></i>
            <span>HTML5</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-css3-alt'></i>
            <span>CSS3</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-js'></i>
            <span>Javascript ES6</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-sass'></i>
            <span>Sass</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-react'></i>
            <span>React</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-java'></i>
            <span>Java</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-git'></i>
            <span>git</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
