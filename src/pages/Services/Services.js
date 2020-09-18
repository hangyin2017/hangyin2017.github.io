import React from 'react';
import Page from '../../common/Page';
import MyServices from './components/MyServices';
import Clients from './components/Clients';

const Services = ({ isShow }) => {
  return (
    <Page title="services" isShow={isShow}>
      <MyServices />
      <Clients />
    </Page>
  );
};

export default Services;
