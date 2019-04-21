import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';
import { fetchGithubDataByPage } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));


store.dispatch(fetchGithubDataByPage(moment().subtract(160, "d").format("YYYY-MM-DD"), 1));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
