import React from 'react';
import AboutMe from './components/AboutMe';
import Page from '../Page/Page';

const Home = ({ children }) => (
  <Page title="home" isShow>
    <AboutMe />
    {children}
  </Page>
);

export default Home;
