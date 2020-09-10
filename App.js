const App = () => (
  <div>
    <Header></Header>
    <Container></Container>
  </div>
);
const Header = () => (
  <header class='header container-sm'>
    <div class='header__content'>
      <h3 class='header__name'>
        Hang <span class='highlight'>Yin</span>
      </h3>
      <button class='header__toggle d-xl-none'>
        <i class='fas fa-bars'></i>
      </button>
      <nav class='navbar d-none d-xl-block'>
        <a href='#home' class='navbar__link navbar__link--active'>
          Home
        </a>
        <a href='#blogs' class='navbar__link'>
          Blogs
        </a>
        <a href='#services' class='navbar__link'>
          Services
        </a>
        <a href='#resume' class='navbar__link'>
          Resume
        </a>
      </nav>
    </div>
    <nav class='dropdown-menu d-xl-none'>
      <a href='#home' class='navbar__link navbar__link--active'>
        Home
      </a>
      <a href='#blogs' class='navbar__link'>
        Blogs
      </a>
      <a href='#services' class='navbar__link'>
        Services
      </a>
      <a href='#resume' class='navbar__link'>
        Resume
      </a>
    </nav>
  </header>
);

const Container = () => (
  <div class='container'>
    <main class='col-xl-9'>
      <div class='main'>
        <Home></Home>
        <Blogs></Blogs>
        <Services></Services>
        <Resume></Resume>
      </div>
    </main>

    <aside class='col-xl-3'>
      <div class='bio'>
        <div class='bio__photo'>
          <img src='assets/img/avatar.jpg' alt='Hang Yin'></img>
        </div>
        <div class='bio__content'>
          <h2 class='bio__name'>
            Hang <span class='highlight'>Yin</span>
          </h2>
          <h3 class='bio__job'>Web Developer</h3>
          <div class='bio__contact'>
            <div class='bio__location'>
              <i class='fas fa-map-marker-alt'></i>
              <span> Melbourne, VIC</span>
            </div>
            <div class='bio__company'>
              <i class='fas fa-briefcase'></i>
              <span> JR Academy</span>
            </div>
            <div class='bio__email'>
              <i class='fas fa-envelope'></i>
              <a href='mailto: hang.yin2017@outlook.com' class='bio__email-link'>
                {' '}
                hang.yin2017@outlook.com
              </a>
            </div>
          </div>
          <div class='bio__sns'>
            <a href='https://github.com/hangyin2017' target='_blank'>
              <i class='fab fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/hang-yin-ab967313a/' target='_blank'>
              <i class='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
    </aside>
  </div>
);

const Home = () => (
  <section class='page page--show' data-id='home'>
    <div class='page__header'>
      <h2>HOME</h2>
    </div>
    <div class='page__content' data-id='home-content'>
      <div class='about-me'>
        <h3>
          About <span class='highlight'>Me</span>
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
  <section class='page' data-id='blogs'>
    <div class='page__header'>
      <h2>BLOGS</h2>
    </div>
    <div class='page__content' data-id='blogs-content'></div>
  </section>
);

const Services = () => (
  <section class='page' data-id='services'>
    <div class='page__header'>
      <h2>SERVICES</h2>
    </div>
    <div class='page__content'>
      <div class='row services'>
        <div class='services__title col-12'>
          <h3>
            My <span class='highlight'>Services</span>
          </h3>
        </div>
        <div class='col-sm-6 col-md-3'>
          <div class='services__block'>
            <div class='services__icon'>
              <i class='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div class='col-sm-6 col-md-3'>
          <div class='services__block'>
            <div class='services__icon'>
              <i class='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div class='col-sm-6 col-md-3'>
          <div class='services__block'>
            <div class='services__icon'>
              <i class='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
        <div class='col-sm-6 col-md-3'>
          <div class='services__block'>
            <div class='services__icon'>
              <i class='fas fa-shopping-bag'></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.</p>
          </div>
        </div>
      </div>
      <div class='row client'>
        <div class='col-12 client__title'>
          <h3>Clients</h3>
        </div>
        <div class='col-12 client__list'>
          <div class='client__item'>
            <i class='fas fa-briefcase'></i>
          </div>
          <div class='client__item'>
            <i class='fas fa-briefcase'></i>
          </div>
          <div class='client__item'>
            <i class='fas fa-briefcase'></i>
          </div>
          <div class='client__item'>
            <i class='fas fa-briefcase'></i>
          </div>
          <div class='client__item'>
            <i class='fas fa-briefcase'></i>
          </div>
          <div class='client__item'>
            <i class='fas fa-briefcase'></i>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Resume = () => (
  <section class='page' data-id='resume'>
    <div class='page__header'>
      <h2>RESUME</h2>
    </div>
    <div class='page__content'>
      <div class='row'>
        <section class='col-lg-6 timeline'>
          <h3 class='timeline__header'>EDUCATION</h3>
          <div class='timeline__list' data-id='education'></div>
        </section>
        <section class='col-lg-6 timeline'>
          <h3 class='timeline__title'>EXPERIENCE</h3>
          <div class='timeline__list' data-id='experience'></div>
        </section>
      </div>
      <div class='row skills'>
        <h3 class='col-12'>SKILLS</h3>
        <div class='skills__list col-12'>
          <div class='skills__item'>
            <i class='fab fa-html5'></i>
            <span>HTML5</span>
          </div>
          <div class='skills__item'>
            <i class='fab fa-css3-alt'></i>
            <span>CSS3</span>
          </div>
          <div class='skills__item'>
            <i class='fab fa-js'></i>
            <span>Javascript ES6</span>
          </div>
          <div class='skills__item'>
            <i class='fab fa-sass'></i>
            <span>Sass</span>
          </div>
          <div class='skills__item'>
            <i class='fab fa-react'></i>
            <span>React</span>
          </div>
          <div class='skills__item'>
            <i class='fab fa-java'></i>
            <span>Java</span>
          </div>
          <div class='skills__item'>
            <i class='fab fa-git'></i>
            <span>git</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

ReactDOM.render(<App />, document.querySelector('#root'));
