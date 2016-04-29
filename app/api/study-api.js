import axios from 'axios';
import store from '../store';
import {getStudiesSuccess} from '../actions/study-actions';

const endpoints = {
  GET_STUDIES: 'http://localhost:3009/studies'
};

export function getStudies() {
  return axios.get(endpoints.GET_STUDIES).then(response => {
    store.dispatch(getStudiesSuccess(response.data));
    console.log('data found', response.data);
    return response;
  });
}
