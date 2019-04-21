import {
    FETCH_GITHUB_DATA,
    FETCH_GITHUB_DATA_NEXT
   } from '../actions/types';
   
   const initState = {
    items: [],
    page: 1
   }
   
   
   
   export default function githubReducer(state = initState, action) {
    switch (action.type) {
     case FETCH_GITHUB_DATA_NEXT:
      return {
       page: state.page++,
       items: state.items.concat(action.payload.items)
      }
     case FETCH_GITHUB_DATA:
      return {
       items: state.items.concat(action.payload.items)
      }
   
     default:
      return state;
    }
   }