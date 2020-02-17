import {createStore, applyMiddleware, compose} from 'redux';
// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import {routerReducer} from 'react-router-redux';
import combineReducers from './reducers/index';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware))
);
