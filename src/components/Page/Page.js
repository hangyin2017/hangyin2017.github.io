import React from 'react';

const Page = ({ title, children, isShow }) => {
  const upperTitle = title.toUpperCase();
  return (
    <section className={`page ${!!isShow && 'page--show'}`} data-id={title}>
      <div className='page__header'>
        <h2>{upperTitle}</h2>
      </div>
      <div className='page__content' data-id={`'${title}-content`}>
        {children}
      </div>
    </section>
  );
};

export default Page;
