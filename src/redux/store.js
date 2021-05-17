import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './redusers/authReducer';
import carReducer from './redusers/carReducer';
import categoryReducer from './redusers/categoryReducer';

let reducers = combineReducers({
  form: formReducer,
  authTable: authReducer,
  carTable: carReducer,
  categoryTable: categoryReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
