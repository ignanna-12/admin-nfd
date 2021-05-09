import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import citiesReducer from './redusers/city.reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  citiesTable: citiesReducer,
  form: formReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
