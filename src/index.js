import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
// import css from './index.css';
require('./index.css');
// require('./lib/bootstrap.min.css');
import bootstrap from './lib/bootstrap.min.css';

ReactDOM.render(<App />, document.querySelector('#root'));
