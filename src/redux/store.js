
import rootReducer from './rootReducers';

// redux
import { applyMiddleware, createStore, compose } from 'redux';

// middleware
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '../middleware/logger';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);



// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

export default store;