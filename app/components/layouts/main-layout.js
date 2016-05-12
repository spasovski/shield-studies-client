import React from 'react';
import LoginButtonContainer from '../containers/login-button-container';
import {Link} from 'react-router';


// TODO: This won't work without a wrapping component.
var renderHeading = function(isLinked) {
  if (isLinked) {
    return (<h1><Link to="/">SHIELD Dashboard</Link></h1>);
  }
  return (<h1>SHIELD Dashboard</h1>);
}

export default function(props) {
  return (
    <div className="global-wrapper">
      <header className="primary-header">
        {props.route.linkedHeading ? renderHeading(true) : renderHeading(false)}
        <aside>
          <LoginButtonContainer />
        </aside>
      </header>
      <main>{props.children}</main>
    </div>
  );
}