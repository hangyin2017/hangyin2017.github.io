import React, { useEffect, useState } from 'react';

const Blogs = () => {
  let blogsData = fetchBlogs();

  return (
    <section className='page' data-id='blogs'>
      <div className='page__header'>
        <h2>BLOGS</h2>
      </div>
      <div className='page__content' data-id='blogs-content'>
        {blogsData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

const fetchData = async fileName => {
  return fetch(`./assets/json/${fileName}.json`).then(res => res.json());
};

const fetchBlogs = () => {
  let [blogsData, setBlogsData] = useState([]);
  useEffect(function fetch() {
    (async function () {
      setBlogsData(await fetchData('blogsData'));
    })();
  }, []);
  return blogsData;
};

const Post = props => {
  const post = props.post;
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

export default Blogs;
