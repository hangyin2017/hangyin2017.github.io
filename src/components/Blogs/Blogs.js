import React from 'react';
import Content from './components/Content';

const Blogs = ({ data }) => {
  return (
    <section className='page' data-id='blogs'>
      <div className='page__header'>
        <h2>BLOGS</h2>
      </div>
      <div className='page__content' data-id='blogs-content'>
        <Content data={data} />
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

export default Blogs;
