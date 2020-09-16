import React from 'react';
import Page from '../Page/Page';
import MyServices from './components/MyServices/MyServices';
import Clients from './components/Clients/Clients';

const Services = () => {
  return (
    <Page title="services">
      <MyServices />
      <Clients />
    </Page>
  );
};

export default Services;
