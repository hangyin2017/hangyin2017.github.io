import React from 'react';
import Home from './Home/Home';
import Blogs from './Blogs/Blogs';
import BlogsContent from './Blogs/components/Content';
import Services from './Services';
import Resume from './Resume';
import Bio from './Bio/Bio';

const Container = ({ blogsData }) => (
  <div className='container'>
    <main className='col-xl-9'>
      <div className='main'>
        <Home>
          <BlogsContent data={blogsData} />
        </Home>
        <Blogs data={blogsData} />
        <Services />
        <Resume />
      </div>
    </main>

    <Bio />
  </div>
);

export default Container;
