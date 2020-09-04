import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Articles');
  }

  getHtml() {
    return `
      <article class="post">
        <div>
          <a href=""><h3 class="post__title">JR is the best!</h3></a>
          <div class="post__date"><i class="far fa-calendar"></i> 2020-09-03</div>
          <p class="post__content">Enjoy coding! Join JR now! (50 cents each post)</p>
        </div>
      </article> 
    `;
  }
}
