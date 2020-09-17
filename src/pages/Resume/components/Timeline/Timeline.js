import React from 'react';

const Timeline = ({ header, data }) => {
  const upperHeader = header.toUpperCase();
  return (
    <section className="col-lg-6 timeline">
      <h3 className="timeline__header">{upperHeader}</h3>
      <div className="timeline__list" data-id={header}>
        {data.map((item, index) => (
          <div key={index} className="timeline__item">
            <h4 className="timeline__title">{item.title}</h4>
            <div className="timeline__company">{item.company}</div>
            <div className="timeline__date">
              {item.startDate} - {item.endDate}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
