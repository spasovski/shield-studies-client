import * as types from '../actions/action-types';

const initialState = {
  studies: []
};

const studyReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.GET_STUDIES_SUCCESS:
      return Object.assign({}, state, {studies: action.studies});
  }

  return state;
}

export default studyReducer;