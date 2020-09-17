import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Page from '../../common/Page';

const Home = ({ children }) => (
  <Page title="home" isShow>
    <AboutMe />
    {children}
  </Page>
);

export default Home;
