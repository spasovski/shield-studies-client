import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages
import StudyListContainer from './components/containers/study-list-container';
// import StudyDetailsContainer from './components/containers/study-details-container';
// <Route path=":studyId" component={StudyDetailsContainer} />

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/">
        <Route component={StudyListContainer} />
      </Route>
    </Route>
  </Router>
);