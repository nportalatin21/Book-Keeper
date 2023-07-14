import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
//import { userReducer } from '../reducers/users/userAuthReducer';

const middlewares = [thunk];

const reducer = combineReducers({
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  //userLogin: userReducer, // login/register
});

// Get user from localstorage and save it into our store
const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  bookCreated: {}, // Initial state for bookCreated reducer
  booksList: [], // Initial state for booksList reducer
  //userLogin: { userInfo: userAuthFromStorage },
};

const store = configureStore({
  reducer, initialState,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
