import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
import userReducer from '../reducers/books/users/userAuthReducer'; // Fix the import statement here

const middlewares = [thunk];

const reducer = combineReducers({
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  userLogin: userReducer,
});

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  bookCreated: {},
  booksList: [],
  userLogin: { userInfo: userAuthFromStorage },
};

const store = configureStore({
  reducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
