import React from 'react';
import {studyFields} from '../../constants';


export default function(props) {
  return (
    <div className="study-results-row study-titles">
      <h4 />
      {studyFields.map(field => {
        return (<h4>{field}</h4>);
      })}
    </div>
  );
}