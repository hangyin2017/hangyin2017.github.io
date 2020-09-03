const route = () => {
  switch (location.pathname.slice(1)) {
    case 'articles':
      renderArticles();
      break;

    case 'projects':
      renderProjects();
      break;

    case 'resume':
      renderResume();
      break;

    default:
      break;
  }
};

const renderArticles = () => {
  main.innerHTML = `
    <article class="post">
      <div>
        <a href=""><h3 class="post__title">JR is the best!</h3></a>
        <div class="post__date"><i class="far fa-calendar"></i> 2020-09-03</div>
        <p class="post__content">Enjoy coding! Join JR now! (50 cents each post)</p>
      </div>
    </article> 
  `;
};

const renderProjects = () => {
  main.innerHTML = `
    <article class="post">
      <div>
        <a href="https://github.com/hangyin2017/gomoku" target="_blank">
          <h3 class="post__title">Gomoku</h3>
        </a>
        <div class="post__date"><i class="far fa-calendar"></i> 2020-08-28</div>
        <p class="post__content">A Gomoku game.</p>
      </div>
      <div class="post__wrapper">
        <img src="img/gomoku.png" alt="Gomoku game" class="post__snapshot">
      </div>
    </article>

    <article class="post">
      <div>
        <a href="https://github.com/hangyin2017/CSS-Card-Design" target="_blank">
          <h3 class="post__title">Card Design</h3>
        </a>
        <div class="post__date"><i class="far fa-calendar"></i> 2020-08-24</div>
        <p class="post__content">Designs of flexable cards using purely CSS.</p>
      </div>
      <div class="post__wrapper">
        <img src="img/card-design.png" alt="Card design" class="post__snapshot">
      </div>
    </article>

    <article class="post">
      <div>
        <a href="https://github.com/hangyin2017/react-todo-list" target="_blank">
          <h3 class="post__title">To-Do List</h3>
        </a>
        <div class="post__date"><i class="far fa-calendar"></i> 2020-08-10</div>
        <p class="post__content">A to-do list app using React.</p>
      </div>
      <div class="post__wrapper">
        <img src="img/to-do-list.png" alt="To-do list" class="post__snapshot">
      </div>
    </article>

    <article class="post">
      <div>
        <a href="https://github.com/hangyin2017/React-ShoppingCart" target="_blank">
          <h3 class="post__title">Shopping Cart</h3>
        </a>
        <div class="post__date"><i class="far fa-calendar"></i> 2020-07-25</div>
        <p class="post__content">My first dip into React development.</p>
      </div>
    </article>
  `;
};

const main = document.querySelector('.main');

document.body.addEventListener('click', e => {
  if (e.target.matches('.navbar__link')) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    route();
  }
});
