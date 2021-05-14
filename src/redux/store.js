import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './redusers/auth.reducer';
import carReducer from './redusers/car.reducer';

let reducers = combineReducers({
  form: formReducer,
  authTable: authReducer,
  carTable: carReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
