import * as types from '../actions/action-types';


const fields = {
  completed: 0,
  ineligible: 0,
  installed: 0,
  left_study: 0,
  seen1: 0,
  seen2: 0,
  seen3: 0,
  seen7: 0
};

const channel = {
  medium: fields,
  weak: fields,
  aggressive: fields,
  ut: fields
};

const initialState = {
  studies: [],
  study: {
    channels: {
      release: channel,
      aurora: channel,
      beta: channel
    }
  }
};

const studyReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.GET_STUDIES_SUCCESS:
      return Object.assign({}, state, {studies: action.studies});
    case types.GET_STUDY_SUCCESS:
      return Object.assign({}, state, {study: action.study});
  }

  return state;
}

export default studyReducer;