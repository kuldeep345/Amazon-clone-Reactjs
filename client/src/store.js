import { configureStore} from '@reduxjs/toolkit'
import { crupApi } from './features/api/crudApi'
import productReducer from './features/slices/productSlice'
import userReducer from './features/slices/userSlice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  products:productReducer,
  users:userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: {
    persistedReducer,
    [crupApi.reducerPath]: crupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(crupApi.middleware)
})