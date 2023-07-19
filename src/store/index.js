// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// import all reducers from barrel file
import * as reducers from './reducers';

// Construct our Redux store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
//const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;