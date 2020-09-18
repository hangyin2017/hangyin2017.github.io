import React from 'react';
import Page from '../../common/Page';
import BlogsList from '../../common/BlogsList';

const Blogs = ({ isShow, data }) => {
  return (
    <Page title="blogs" isShow={isShow}>
      <BlogsList data={data} />
    </Page>
  );
};

export default Blogs;
