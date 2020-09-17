import React, { useState, useEffect } from 'react';
import { fetchData } from '../../utils';
import Page from '../../common/Page';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

const Resume = () => {
  let eduData = [], expData = [];
  let [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    fetchData('resumeData').then(data => {
      setTimelineData(data);
    });
  }, []);

  timelineData.forEach(data => {
    if (data.type === 'edu') eduData.push(data);
    if (data.type === 'exp') expData.push(data);
  });

  return (
    <Page title="resume">
      <div className="row">
        <Timeline header="education" data={eduData} />
        <Timeline header="experience" data={expData} />
      </div>
      <Skills />
    </Page>
  );
};

export default Resume;
