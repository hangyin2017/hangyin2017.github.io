import React from 'react';
import Post from './Post';

const Content = ({ data }) => {
  return (
    <div>
      {data.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Content;
