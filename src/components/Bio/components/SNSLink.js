import React from 'react';

const SNSLink = ({ to, icon }) => {
  return (
    <a href={to} target='_blank'>
      <i className={`fab fa-${icon}`} />
    </a>
  );
};

export default SNSLink;
