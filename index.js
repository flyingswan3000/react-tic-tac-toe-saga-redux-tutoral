import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Root from './components/Root'
import reducer from './reducer'
import mainSaga from './saga'
import './style.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mainSaga)

ReactDOM.render(<Root />, document.getElementById("root"));

