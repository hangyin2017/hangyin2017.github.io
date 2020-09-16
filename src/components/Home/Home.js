import React from 'react';
import AboutMe from './components/AboutMe';
import Blogs from '../Blogs/Blogs';

const Home = ({ children }) => (
  <section className='page page--show' data-id='home'>
    <div className='page__header'>
      <h2>HOME</h2>
    </div>
    <div className='page__content' data-id='home-content'>
      <AboutMe />
      {children}
      {/* <Blogs /> */}
    </div>
  </section>
);

export default Home;
