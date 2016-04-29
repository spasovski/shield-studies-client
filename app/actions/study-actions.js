import * as types from '../actions/action-types';


export function getStudiesSuccess(studies) {
  return {
    type: types.GET_STUDIES_SUCCESS,
    studies
  };
}
