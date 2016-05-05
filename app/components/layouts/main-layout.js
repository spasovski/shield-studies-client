import React from 'react';
import LoginButtonContainer from '../containers/login-button-container';


export default function(props) {
  return (
    <div className="global-wrapper">
      <header className="primary-header">
        <h1>SHIELD Dashboard</h1>
        <aside>
          <LoginButtonContainer />
        </aside>
      </header>
      <main>{props.children}</main>
    </div>
  );
}