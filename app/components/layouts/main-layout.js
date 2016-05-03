import React from 'react';


export default function(props) {
  return (
    <div className="global-wrapper">
      <header className="primary-header">
        <h1>SHIELD Studies</h1>
        <aside>
          signed in as: dspasovski
        </aside>
      </header>
      <main>{props.children}</main>
    </div>
  );
}