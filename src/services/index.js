import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const middlewares = [];

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// Make exception for redux dev tools
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */

const storeReducer = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export {storeReducer};
