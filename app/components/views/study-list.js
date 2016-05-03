import React from 'react';


export default function(props) {
  return (
    <ul className="studies-list">
      {props.studies.map(study => {
        return (
          <li key={study.id} className="study-list-item">
            <h2 className="study-list-heading"><a href="#">{study.name}</a></h2>
            <p>{study.description}</p>
          </li>
        );
      })}
    </ul>
  );
}