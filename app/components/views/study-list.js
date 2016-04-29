import React from 'react';


export default function(props) {
  return (
    <ul className="studies-list">
      {props.studies.map(study => {
        return (
          <li key={study.id} className="study-list-item">{study.name}</li>
        );
      })}
    </ul>
  );
}