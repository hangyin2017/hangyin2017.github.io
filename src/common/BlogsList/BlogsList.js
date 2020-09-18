import React from 'react';
import Post from './components/Post';

const BlogsList = ({ data }) => {
  return (
    <div>
      {data.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogsList;
