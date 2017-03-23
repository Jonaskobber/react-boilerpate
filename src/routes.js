// EXTERNAL DEPENDENCIES
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// INTERNAL DEPENDENCIES
import App from './components/App';
import Frontpage from './components/pages/Frontpage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Frontpage} />
  </Route>
);

export default routes;
