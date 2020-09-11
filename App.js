import React from 'react';

const App = () => (
  <div>
    <Header></Header>
    <Container></Container>
  </div>
);
const Header = () => (
  <header className='header container-sm'>
    <div className='header__content'>
      <h3 className='header__name'>
        Hang <span className='highlight'>Yin</span>
      </h3>
      <button className='header__toggle d-xl-none'>
        <i className='fas fa-bars'></i>
      </button>
      <nav className='navbar d-none d-xl-block'>
        <a href='#home' className='navbar__link navbar__link--active'>
          Home
        </a>
        <a href='#blogs' className='navbar__link'>
          Blogs
        </a>
        <a href='#services' className='navbar__link'>
          Services
        </a>
        <a href='#resume' className='navbar__link'>
          Resume
        </a>
      </nav>
    </div>
    <nav className='dropdown-menu d-xl-none'>
      <a href='#home' className='navbar__link navbar__link--active'>
        Home
      </a>
      <a href='#blogs' className='navbar__link'>
        Blogs
      </a>
      <a href='#services' className='navbar__link'>
        Services
      </a>
      <a href='#resume' className='navbar__link'>
        Resume
      </a>
    </nav>
  </header>
);

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
          <img src='assets/img/avatar.jpg' alt='Hang Yin'></img>
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

const Home = () => (
  <section className='page page--show' data-id='home'>
    <div className='page__header'>
      <h2>HOME</h2>
    </div>
    <div className='page__content' data-id='home-content'>
      <div className='about-me'>
        <h3>
          About <span className='highlight'>Me</span>
        </h3>
        {/* <p>Hi, I'm Hang Yin. <br>
          A web developer.<br>
          A learner.<br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Minima fugit modi, quisquam laborum recusandae nesciunt voluptate nulla animi. 
          Cum, officiis.</p> */}
      </div>
    </div>
  </section>
);

const Blogs = () => (
  <section className='page' data-id='blogs'>
    <div className='page__header'>
      <h2>BLOGS</h2>
    </div>
    <div className='page__content' data-id='blogs-content'></div>
  </section>
);

const Services = () => (
  <section className='page' data-id='services'>
    <div className='page__header'>
      <h2>SERVICES</h2>
    </div>
    <div className='page__content'>
      <div className='row services'>
        <div className='services__title col-12'>
          <h3>
            My <span className='highlight'>Services</span>
          </h3>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='services__block'>
            <div className='services__icon'>
              <i className='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
      </div>
      <div className='row client'>
        <div className='col-12 client__title'>
          <h3>Clients</h3>
        </div>
        <div className='col-12 client__list'>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
          <div className='client__item'>
            <i className='fas fa-briefcase'></i>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Resume = () => (
  <section className='page' data-id='resume'>
    <div className='page__header'>
      <h2>RESUME</h2>
    </div>
    <div className='page__content'>
      <div className='row'>
        <section className='col-lg-6 timeline'>
          <h3 className='timeline__header'>EDUCATION</h3>
          <div className='timeline__list' data-id='education'></div>
        </section>
        <section className='col-lg-6 timeline'>
          <h3 className='timeline__title'>EXPERIENCE</h3>
          <div className='timeline__list' data-id='experience'></div>
        </section>
      </div>
      <div className='row skills'>
        <h3 className='col-12'>SKILLS</h3>
        <div className='skills__list col-12'>
          <div className='skills__item'>
            <i className='fab fa-html5'></i>
            <span>HTML5</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-css3-alt'></i>
            <span>CSS3</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-js'></i>
            <span>Javascript ES6</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-sass'></i>
            <span>Sass</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-react'></i>
            <span>React</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-java'></i>
            <span>Java</span>
          </div>
          <div className='skills__item'>
            <i className='fab fa-git'></i>
            <span>git</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
