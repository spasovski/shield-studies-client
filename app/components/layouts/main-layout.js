import React from 'react';


export default function(props) {
  return (
    <div className="global-wrapper">
      <header className="primary-header">
        <h1>SHIELD Dashboard</h1>
        <aside>
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </aside>
      </header>
      <main>{props.children}</main>
    </div>
  );
}