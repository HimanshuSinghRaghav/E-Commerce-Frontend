import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tokenSlice from './tokenSlice';
import AddProductDataSlice from './AddProductDataSlice';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  authToken:tokenSlice,
  addProduct: AddProductDataSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
