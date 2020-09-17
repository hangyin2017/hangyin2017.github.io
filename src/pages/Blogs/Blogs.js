import React from 'react';
import Page from '../../common/Page';
import BlogsList from '../../common/BlogsList';

const Blogs = ({ data }) => {
  return (
    <Page title="blogs">
      <BlogsList data={data} />
    </Page>
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
