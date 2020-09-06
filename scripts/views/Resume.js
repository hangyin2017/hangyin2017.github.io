import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Resume');
  }

  getHtml() {
    return `
      <div class="cv">
        <div class="cv__header">
          <h2>RESUME</h2>
        </div>

        <div class="cv__wrapper">
          <section class="cv__col">
            <h3>EDUCATION</h3>
            <div class="cv-card">
              <h4 class="cv-card__title">Bachelor of Engineering</h4>
              <p class="cv-card__company">The University of Adelaide</p>
              <div class="cv-card__date">2015 - 2016</div>
            </div>
          </section>

          <section class="cv__col">
            <h3>EXPERIENCE</h3>
            <div class="cv-card">
              <h4 class="cv-card__title">Web Developer</h4>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h4 class="cv-card__title">Web Developer</h4>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h4 class="cv-card__title">Web Developer</h4>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h4 class="cv-card__title">Web Developer</h4>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>
            <div class="cv-card">
              <h4 class="cv-card__title">Web Developer</h4>
              <p class="cv-card__company">Company</p>
              <div class="cv-card__date">2017 - 2020</div>
            </div>                                                
          </section>
        </div>

        <div>
          <h3>SKILLS</h3>
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
