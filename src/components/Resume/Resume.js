import React from 'react';
import Page from '../Page/Page';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';

const Resume = () => {
  return (
    <Page title="resume">
      <div className="row">
        <Timeline header="education" />
        <Timeline header="experience" />
      </div>
      <Skills />
    </Page>
  );
};

export default Resume;
