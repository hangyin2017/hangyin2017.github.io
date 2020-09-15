import React from 'react';

const Blogs = ({ data }) => {
  return (
    <section className='page' data-id='blogs'>
      <div className='page__header'>
        <h2>BLOGS</h2>
      </div>
      <div className='page__content' data-id='blogs-content'>
        {data.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

/** Use hook to fetch async data. */
// const fetchBlogs = () => {
//   let [blogsData, setBlogsData] = useState([]);
//   useEffect(function fetch() {
//     (async function () {
//       setBlogsData(await fetchData('blogsData'));
//     })();
//   }, []);
//   return blogsData;
// };

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

export default Blogs;
