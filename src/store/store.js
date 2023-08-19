import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import searchReducer from './slices/SearchSlice';
import postReducer from './slices/PostSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  currUser: userReducer,
  search: searchReducer,
  post: postReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({ reducer: persistedReducer });

export default store;
