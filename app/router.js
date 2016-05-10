import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages
import StudyListContainer from './components/containers/study-list-container';
import SignIn from './components/views/sign-in';
// import StudyDetailsContainer from './components/containers/study-details-container';
// <Route path=":studyId" component={StudyDetailsContainer} />

function requireAuth(nextState, replace) {
  if (!localStorage.user_token) {
    replace({
      pathname: '/signin',
      state: {nextPathname: nextState.location.pathname}
    });
  }
}

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={StudyListContainer} onEnter={requireAuth} />
      <Route path="/signin" component={SignIn} />
    </Route>
  </Router>
);