import React from 'react';


export default function(props) {
  return (
    <div className="global-wrapper">
      <header className="primary-header">
        <h1>SHIELD Studies</h1>
      </header>
      <aside>
        Logged in as: dspasovski
      </aside>
      <main>{props.children}</main>
    </div>
  );
}