import React from 'react';


// Predefined to impose presentation order.
// It would be more flexible to have these be fully dynamic.
const fields = [
  'completed',
  'ineligible',
  'installed',
  'left_study',
  'seen1',
  'seen2',
  'seen3',
  'seen7'
];

const renderFieldTitles = function(channel) {
  return (
    <div className="study-results-row study-titles">
      <h4 />
      {fields.map(field => {
        return (<h4>{field}</h4>);
      })}
    </div>
  );
}

const renderResults = function(channel) {
  return (
    <ul>
      {Object.keys(channel).map(type => {
        return (
          <li className="study-results-row">
            <span>{type}</span>
            {fields.map(field => {
              return (<span>{channel[type][field]}</span>);
            })}
          </li>
        );
      })}
    </ul>
  );
}

const renderChannel = function(name, channel) {
  return (
    <article>
      <h3 className="release-channel-title">Firefox: {name}</h3>
      {renderFieldTitles(channel)}
      {renderResults(channel)}
    </article>
  );
}

export default function(props) {
  return (
    <div className="study-wrapper">
      <h2 className="study-title">{props.study}</h2>
      {Object.keys(props.channels).map(channelName => {
        return renderChannel(channelName, props.channels[channelName]);
      })}
    </div>
  );
}