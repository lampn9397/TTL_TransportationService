import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSagas from './rootSaga';
import authReducer from './AuthModule/reducer';
import orderReducer from './OrderModule/reducer';

// import { composeWithDevTools } from 'redux-devtools-extension';

// Middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

// Reducer
const rootReducer = combineReducers({
  authReducer,
  orderReducer,
});

const store = createStore(
  rootReducer,
  // DEV-MODE:
  // composeWithDevTools(applyMiddleware(...middlewares)),
  // PRODUCTION-MODE:
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSagas);

export default store;
