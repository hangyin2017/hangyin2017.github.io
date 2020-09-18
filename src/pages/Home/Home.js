import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Page from '../../common/Page';
import BlogsList from '../../common/BlogsList';

const Home = ({ isShow, data }) => (
  <Page title="home" isShow={isShow}>
    <AboutMe />
    <BlogsList data={data} />
  </Page>
);

export default Home;
