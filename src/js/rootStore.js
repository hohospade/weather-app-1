import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import promiseMiddleware from 'redux-promise-middleware';
//File taken from budget tracker and modified to work with weather app.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));


export default rootStore;