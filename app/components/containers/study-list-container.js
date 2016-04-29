import React from 'react';
import {connect} from 'react-redux';
import StudyList from '../views/study-list';
import * as studyApi from '../../api/study-api';
import store from '../../store';
//import {getStudiesSuccess} from '../../actions/study-actions';
//import {loadStudyList} from '../../actions/study-list-actions';


const StudyListContainer = React.createClass({
  componentDidMount: function() {
    studyApi.getStudies();
    //store.dispatch(getStudiesSuccess());
  },
  render: function() {
    return (
      <StudyList studies={this.props.studies} />
    );
  }
});

const mapStateToProps = function(store) {
  return {
    studies: store.studyState.studies
  };
};

export default connect(mapStateToProps)(StudyListContainer);