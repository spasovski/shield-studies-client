import axios from 'axios';
import store from '../store';
import {getStudiesSuccess} from '../actions/study-actions';

const endpoints = {
  GET_STUDIES: 'http://localhost:3009/studies'
};

// We should only hit this once signed in.
var apiArgs = {
  idtoken: localStorage.user_token
};

export function getStudies() {
  return axios.get(endpoints.GET_STUDIES, {params: apiArgs}).then(response => {
    store.dispatch(getStudiesSuccess(response.data));
    return response;
  }).catch(err => {
    console.error(err);
  });
}
