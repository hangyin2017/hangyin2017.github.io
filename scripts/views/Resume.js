import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Resume');
  }

  getHtml() {
    return `
      <div class="cv">
        <header class="cv__header">
          <h1>RESUME</h1>
        </header>

        <div class="cv__wrapper">
          <section class="cv__col">
            <h2>EDUCATION</h2>
            <div class="cv-card">
              <h3 class="cv-card__title">Bachelor of Engineering</h3>
              <p class="cv-card__company">The University of Adelaide</p>
              <div class="cv-card__date">2015 - 2016</div>
            </div>
          </section>

          <section class="cv__col">
            <h2>EXPERIENCE</h2>
            <div class="cv-card">
              <h3 class="cv-card__title">Web Developer</h3>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h3 class="cv-card__title">Web Developer</h3>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h3 class="cv-card__title">Web Developer</h3>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h3 class="cv-card__title">Web Developer</h3>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h3 class="cv-card__title">Web Developer</h3>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>                                                
          </section>
        </div>

        <div>
          <h2>SKILLS</h2>
          <div class="cv__skillset">
            <div class="cv__skill">
              <i class="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div class="cv__skill">
              <i class="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
            <div class="cv__skill">
              <i class="fab fa-js"></i>
              <span>Javascript ES6</span>
            </div>
            <div class="cv__skill">
              <i class="fab fa-sass"></i>
              <span>Sass</span>
            </div>
            <div class="cv__skill">
              <i class="fab fa-react"></i>
              <span>React</span>
            </div>
            <div class="cv__skill">
              <i class="fab fa-java"></i>
              <span>Java</span>
            </div>            
            <div class="cv__skill">
              <i class="fab fa-git"></i>
              <span>git</span>
            </div>                                  
          </div>
        </div>
      </div>
    `;
  }
}
