import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect } from './helpers/routes';

import * as ROUTES from './constants/routes';

export default function App() {
  const user = {};
  return (
    <Router>
      <Route path={ROUTES.SIGN_UP}>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact />
        <Signup />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact />
        <Signin />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}
