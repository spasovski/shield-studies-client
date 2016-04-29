import {combineReducers} from 'redux';

// Individual reducers
import studyReducer from './study-reducer';

var reducers = combineReducers({
  studyState: studyReducer
});

export default reducers;