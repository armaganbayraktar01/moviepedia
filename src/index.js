import React from 'react';
import ReactDOM from 'react-dom';
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

/** React Router */
import { BrowserRouter } from 'react-router-dom';

/** Root Reducer */
import rootReducer from './reducers/rootReducer';

/** JWT */
import { setAuthorizationToken } from "./config/setAuthorizationToken";

/** Store */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(promise, thunk, logger)
  )
);

/** JWT TOKEN */

const jwtToken = localStorage.getItem("jwtToken");
if (jwtToken) {
    setAuthorizationToken(jwtToken);
}


ReactDOM.render(
    <BrowserRouter>
      <Provider store = { store } >
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
