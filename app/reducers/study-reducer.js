import * as types from '../actions/action-types';


const channel = {
  medium: {},
  weak: {},
  aggressive: {},
  ut: {}
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