import React from 'react';

const Post = ({ post }) => {
  if (!post) return null;
  if (!post.title || post.title === '') return null;
  return (
    <div className='row post'>
      <div className='col-sm-9'>
        <a href={post.href} target='_blank'>
          <h3 className='post__title'>{post.title}</h3>
        </a>
        <div className='post__date'>
          <i className='far fa-calendar'></i> {post.date}
        </div>
        <p className='post__content'>{post.content}</p>
      </div>
      {!!post.img && (
        <div className='post__snapshot col-sm-3'>
          <img src={post.img} alt={post.title} />
        </div>
      )}
    </div>
  );
};

export default Post;
