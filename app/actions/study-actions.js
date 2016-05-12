import * as types from './action-types';


export function getStudiesSuccess(studies) {
  return {
    type: types.GET_STUDIES_SUCCESS,
    studies
  };
}

export function getStudySuccess(study) {
  return {
    type: types.GET_STUDY_SUCCESS,
    study
  };
}