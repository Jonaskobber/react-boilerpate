// EXTERNAL DEPENDENCIES
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';

// INTERNAL DEPENDENCIES_
import './styles/styles.scss';
import routes from './routes';

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
    onUpdate={() => window.scrollTo(0, 0)} />,
  document.querySelector('#root'));
