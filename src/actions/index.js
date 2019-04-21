import Config from './config';
import {
 FETCH_GITHUB_DATA,
 FETCH_GITHUB_DATA_NEXT
} from './types';
import axios from 'axios';


export const fetchData = (data) => {
 return {
  type: FETCH_GITHUB_DATA,
  payload: {
   items: data.items
  }
 }
};


export const fetchDataNext = (data) => {
 return {
  type: FETCH_GITHUB_DATA_NEXT,
  payload: {
   items: data.items
  }
 }
};



export const fetchGithubData = (date) => {
 return (dispatch) => {
  return axios.get(Config.endPointByDate(date))
   .then(response => {
    dispatch(fetchData(response.data))
   })
   .catch(error => {
    throw (error);
   });
 };
};


export const fetchGithubDataByPage = (date, page) => {
 return (dispatch) => {
  return axios.get(Config.endPointPage(date, page))
   .then(response => {
    dispatch(fetchDataNext(response.data))
   })
   .catch(error => {
    throw (error);
   });
 };
};