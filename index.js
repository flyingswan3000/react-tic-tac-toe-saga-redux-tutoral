import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import Root from './components/Root'
import reducer from './reducer'
import mainSaga from './saga'
import './style.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

// then run the saga
sagaMiddleware.run(mainSaga)

ReactDOM.render(
  (
    <Provider store={store}>
      <Root />
    </Provider>
  )
  , document.getElementById("root")
);

