import React from 'react';
import AboutMe from './components/AboutMe';
import Page from '../Pages/Page';

const Home = ({ children }) => (
  <Page title="home" isShow>
    <AboutMe />
    {children}
  </Page>
);

export default Home;
