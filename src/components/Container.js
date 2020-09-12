import React from 'react';
import Home from './Home';
import Blogs from './Blogs';
import Services from './Services';
import Resume from './Resume';

const Container = () => (
  <div className='container'>
    <main className='col-xl-9'>
      <div className='main'>
        <Home></Home>
        <Blogs></Blogs>
        <Services></Services>
        <Resume></Resume>
      </div>
    </main>

    <aside className='col-xl-3'>
      <div className='bio'>
        <div className='bio__photo'>
          <img src='./assets/img/avatar.jpg' alt='Hang Yin'></img>
        </div>
        <div className='bio__content'>
          <h2 className='bio__name'>
            Hang <span className='highlight'>Yin</span>
          </h2>
          <h3 className='bio__job'>Web Developer</h3>
          <div className='bio__contact'>
            <div className='bio__location'>
              <i className='fas fa-map-marker-alt'></i>
              <span> Melbourne, VIC</span>
            </div>
            <div className='bio__company'>
              <i className='fas fa-briefcase'></i>
              <span> JR Academy</span>
            </div>
            <div className='bio__email'>
              <i className='fas fa-envelope'></i>
              <a href='mailto: hang.yin2017@outlook.com' className='bio__email-link'>
                {' '}
                hang.yin2017@outlook.com
              </a>
            </div>
          </div>
          <div className='bio__sns'>
            <a href='https://github.com/hangyin2017' target='_blank'>
              <i className='fab fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/hang-yin-ab967313a/' target='_blank'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
    </aside>
  </div>
);

export default Container;
