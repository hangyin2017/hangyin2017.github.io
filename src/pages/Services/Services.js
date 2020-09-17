import React from 'react';
import Page from '../../common/Page';
import MyServices from './components/MyServices';
import Clients from './components/Clients';

const Services = () => {
  return (
    <Page title="services">
      <MyServices />
      <Clients />
    </Page>
  );
};

export default Services;
