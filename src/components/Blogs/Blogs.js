import React from 'react';
import Page from '../Page';
import Content from './components/Content';

const Blogs = ({ data }) => {
  return (
    <Page title='blogs'>
      <Content data={data} />
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
