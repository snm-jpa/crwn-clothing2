import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { loggerMiddleware } from '../store/middleware/logger';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== 'production' && loggerMiddleware, 
    thunk,]
    .filter(Boolean);

//using redux dev tools
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
console.log(composeEnhancer);

//const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

//export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);


export const persister = persistStore(store);