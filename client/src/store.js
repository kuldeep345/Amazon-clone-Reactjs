import { configureStore } from '@reduxjs/toolkit'
import { crupApi } from './features/api/crudApi'
import productReducer from './features/slices/productSlice'
import userReducer from './features/slices/userSlice'

export default configureStore({
  reducer: {
    products:productReducer,
    users:userReducer,
    [crupApi.reducerPath]: crupApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(crupApi.middleware)
})