'use strict';

var App = function App() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Header, null),
    /*#__PURE__*/ React.createElement(Container, null)
  );
};

var Header = function Header() {
  return /*#__PURE__*/ React.createElement(
    'header',
    {
      class: 'header container-sm',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        class: 'header__content',
      },
      /*#__PURE__*/ React.createElement(
        'h3',
        {
          class: 'header__name',
        },
        'Hang ',
        /*#__PURE__*/ React.createElement(
          'span',
          {
            class: 'highlight',
          },
          'Yin'
        )
      ),
      /*#__PURE__*/ React.createElement(
        'button',
        {
          class: 'header__toggle d-xl-none',
        },
        /*#__PURE__*/ React.createElement('i', {
          class: 'fas fa-bars',
        })
      ),
      /*#__PURE__*/ React.createElement(
        'nav',
        {
          class: 'navbar d-none d-xl-block',
        },
        /*#__PURE__*/ React.createElement(
          'a',
          {
            href: '#home',
            class: 'navbar__link navbar__link--active',
          },
          'Home'
        ),
        /*#__PURE__*/ React.createElement(
          'a',
          {
            href: '#blogs',
            class: 'navbar__link',
          },
          'Blogs'
        ),
        /*#__PURE__*/ React.createElement(
          'a',
          {
            href: '#services',
            class: 'navbar__link',
          },
          'Services'
        ),
        /*#__PURE__*/ React.createElement(
          'a',
          {
            href: '#resume',
            class: 'navbar__link',
          },
          'Resume'
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      'nav',
      {
        class: 'dropdown-menu d-xl-none',
      },
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '#home',
          class: 'navbar__link navbar__link--active',
        },
        'Home'
      ),
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '#blogs',
          class: 'navbar__link',
        },
        'Blogs'
      ),
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '#services',
          class: 'navbar__link',
        },
        'Services'
      ),
      /*#__PURE__*/ React.createElement(
        'a',
        {
          href: '#resume',
          class: 'navbar__link',
        },
        'Resume'
      )
    )
  );
};

var Container = function Container() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      class: 'container',
    },
    /*#__PURE__*/ React.createElement(
      'main',
      {
        class: 'col-xl-9',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'main',
        },
        /*#__PURE__*/ React.createElement(Home, null),
        /*#__PURE__*/ React.createElement(Blogs, null),
        /*#__PURE__*/ React.createElement(Services, null),
        /*#__PURE__*/ React.createElement(Resume, null)
      )
    ),
    /*#__PURE__*/ React.createElement(
      'aside',
      {
        class: 'col-xl-3',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'bio',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'bio__photo',
          },
          /*#__PURE__*/ React.createElement('img', {
            src: 'assets/img/avatar.jpg',
            alt: 'Hang Yin',
          })
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'bio__content',
          },
          /*#__PURE__*/ React.createElement(
            'h2',
            {
              class: 'bio__name',
            },
            'Hang ',
            /*#__PURE__*/ React.createElement(
              'span',
              {
                class: 'highlight',
              },
              'Yin'
            )
          ),
          /*#__PURE__*/ React.createElement(
            'h3',
            {
              class: 'bio__job',
            },
            'Web Developer'
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'bio__contact',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                class: 'bio__location',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fas fa-map-marker-alt',
              }),
              /*#__PURE__*/ React.createElement('span', null, ' Melbourne, VIC')
            ),
            /*#__PURE__*/ React.createElement(
              'div',
              {
                class: 'bio__company',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fas fa-briefcase',
              }),
              /*#__PURE__*/ React.createElement('span', null, ' JR Academy')
            ),
            /*#__PURE__*/ React.createElement(
              'div',
              {
                class: 'bio__email',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fas fa-envelope',
              }),
              /*#__PURE__*/ React.createElement(
                'a',
                {
                  href: 'mailto: hang.yin2017@outlook.com',
                  class: 'bio__email-link',
                },
                ' ',
                'hang.yin2017@outlook.com'
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'bio__sns',
            },
            /*#__PURE__*/ React.createElement(
              'a',
              {
                href: 'https://github.com/hangyin2017',
                target: '_blank',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fab fa-github',
              })
            ),
            /*#__PURE__*/ React.createElement(
              'a',
              {
                href: 'https://www.linkedin.com/in/hang-yin-ab967313a/',
                target: '_blank',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fab fa-linkedin',
              })
            )
          )
        )
      )
    )
  );
};

var Home = function Home() {
  return /*#__PURE__*/ React.createElement(
    'section',
    {
      'class': 'page page--show',
      'data-id': 'home',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        class: 'page__header',
      },
      /*#__PURE__*/ React.createElement('h2', null, 'HOME')
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        'class': 'page__content',
        'data-id': 'home-content',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'about-me',
        },
        /*#__PURE__*/ React.createElement(
          'h3',
          null,
          'About ',
          /*#__PURE__*/ React.createElement(
            'span',
            {
              class: 'highlight',
            },
            'Me'
          )
        )
      )
    )
  );
};

var Blogs = function Blogs() {
  return /*#__PURE__*/ React.createElement(
    'section',
    {
      'class': 'page',
      'data-id': 'blogs',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        class: 'page__header',
      },
      /*#__PURE__*/ React.createElement('h2', null, 'BLOGS')
    ),
    /*#__PURE__*/ React.createElement('div', {
      'class': 'page__content',
      'data-id': 'blogs-content',
    })
  );
};

var Services = function Services() {
  return /*#__PURE__*/ React.createElement(
    'section',
    {
      'class': 'page',
      'data-id': 'services',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        class: 'page__header',
      },
      /*#__PURE__*/ React.createElement('h2', null, 'SERVICES')
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        class: 'page__content',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'row services',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'services__title col-12',
          },
          /*#__PURE__*/ React.createElement(
            'h3',
            null,
            'My ',
            /*#__PURE__*/ React.createElement(
              'span',
              {
                class: 'highlight',
              },
              'Services'
            )
          )
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'col-sm-6 col-md-3',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'services__block',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                class: 'services__icon',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fas fa-shopping-bag',
              })
            ),
            /*#__PURE__*/ React.createElement('h4', null, 'Web Design'),
            /*#__PURE__*/ React.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.'
            )
          )
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'col-sm-6 col-md-3',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'services__block',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                class: 'services__icon',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fas fa-shopping-bag',
              })
            ),
            /*#__PURE__*/ React.createElement('h4', null, 'Web Design'),
            /*#__PURE__*/ React.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.'
            )
          )
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'col-sm-6 col-md-3',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'services__block',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                class: 'services__icon',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fas fa-shopping-bag',
              })
            ),
            /*#__PURE__*/ React.createElement('h4', null, 'Web Design'),
            /*#__PURE__*/ React.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.'
            )
          )
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'col-sm-6 col-md-3',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'services__block',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                class: 'services__icon',
              },
              /*#__PURE__*/ React.createElement('i', {
                class: 'fas fa-shopping-bag',
              })
            ),
            /*#__PURE__*/ React.createElement('h4', null, 'Web Design'),
            /*#__PURE__*/ React.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, neque.'
            )
          )
        )
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'row client',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'col-12 client__title',
          },
          /*#__PURE__*/ React.createElement('h3', null, 'Clients')
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'col-12 client__list',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'client__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fas fa-briefcase',
            })
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'client__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fas fa-briefcase',
            })
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'client__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fas fa-briefcase',
            })
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'client__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fas fa-briefcase',
            })
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'client__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fas fa-briefcase',
            })
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'client__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fas fa-briefcase',
            })
          )
        )
      )
    )
  );
};

var Resume = function Resume() {
  return /*#__PURE__*/ React.createElement(
    'section',
    {
      'class': 'page',
      'data-id': 'resume',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        class: 'page__header',
      },
      /*#__PURE__*/ React.createElement('h2', null, 'RESUME')
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        class: 'page__content',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'row',
        },
        /*#__PURE__*/ React.createElement(
          'section',
          {
            class: 'col-lg-6 timeline',
          },
          /*#__PURE__*/ React.createElement(
            'h3',
            {
              class: 'timeline__header',
            },
            'EDUCATION'
          ),
          /*#__PURE__*/ React.createElement('div', {
            'class': 'timeline__list',
            'data-id': 'education',
          })
        ),
        /*#__PURE__*/ React.createElement(
          'section',
          {
            class: 'col-lg-6 timeline',
          },
          /*#__PURE__*/ React.createElement(
            'h3',
            {
              class: 'timeline__title',
            },
            'EXPERIENCE'
          ),
          /*#__PURE__*/ React.createElement('div', {
            'class': 'timeline__list',
            'data-id': 'experience',
          })
        )
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          class: 'row skills',
        },
        /*#__PURE__*/ React.createElement(
          'h3',
          {
            class: 'col-12',
          },
          'SKILLS'
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            class: 'skills__list col-12',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'skills__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fab fa-html5',
            }),
            /*#__PURE__*/ React.createElement('span', null, 'HTML5')
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'skills__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fab fa-css3-alt',
            }),
            /*#__PURE__*/ React.createElement('span', null, 'CSS3')
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'skills__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fab fa-js',
            }),
            /*#__PURE__*/ React.createElement('span', null, 'Javascript ES6')
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'skills__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fab fa-sass',
            }),
            /*#__PURE__*/ React.createElement('span', null, 'Sass')
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'skills__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fab fa-react',
            }),
            /*#__PURE__*/ React.createElement('span', null, 'React')
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'skills__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fab fa-java',
            }),
            /*#__PURE__*/ React.createElement('span', null, 'Java')
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              class: 'skills__item',
            },
            /*#__PURE__*/ React.createElement('i', {
              class: 'fab fa-git',
            }),
            /*#__PURE__*/ React.createElement('span', null, 'git')
          )
        )
      )
    )
  );
};

ReactDOM.render(/*#__PURE__*/ React.createElement(App, null), document.querySelector('#root'));
