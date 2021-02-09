import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';


import App from './App';
import * as serviceWorker from './serviceWorker';

/** Redux ve Eklentileri */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

/** Root Reducer */
import rootReducer from './_core/_reducers/rootReducer';

/** Helpers */
import { history } from './_helpers/history';

/** Store */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(promise, thunk, logger)
  )
);



ReactDOM.render(
    <Router history={ history } >
      <Provider store = { store } >
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();