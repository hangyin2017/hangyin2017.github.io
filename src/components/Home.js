import React from 'react';

const Home = () => (
  <section className='page page--show' data-id='home'>
    <div className='page__header'>
      <h2>HOME</h2>
    </div>
    <div className='page__content' data-id='home-content'>
      <div className='about-me'>
        <h3>
          About <span className='highlight'>Me</span>
        </h3>
        {/* <p>Hi, I'm Hang Yin. <br>
          A web developer.<br>
          A learner.<br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Minima fugit modi, quisquam laborum recusandae nesciunt voluptate nulla animi. 
          Cum, officiis.</p> */}
      </div>
    </div>
  </section>
);

export default Home;
