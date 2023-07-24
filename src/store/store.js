import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({ currUser: userReducer });

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({ reducer: persistedReducer });

export default store;
