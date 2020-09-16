import React from 'react';

const Timeline = ({ header }) => {
  const upperHeader = header.toUpperCase();
  return (
    <section className="col-lg-6 timeline">
      <h3 className="timeline__header">{upperHeader}</h3>
      <div className="timeline__list" data-id={header}></div>
    </section>
  );
};

export default Timeline;
