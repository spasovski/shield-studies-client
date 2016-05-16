import React from 'react';
import {studyFields} from '../../constants';


const StudyResultsRow = React.createClass({
  render: function() {
    return (
      <li className="study-results-row">
        <span>{this.props.type}</span>
        {studyFields.map(field => {
          return (<span>{this.props.channel[this.props.type][field]}</span>);
        })}
      </li>
    );
  }
});

export default function(props) {
  return (
    <ul>
      {Object.keys(props.channel).map(type => {
        return (
          <StudyResultsRow channel={props.channel} type={type} />
        );
      })}
    </ul>
  );
}