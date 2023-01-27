import { configureStore } from '@reduxjs/toolkit'
import { crupApi } from './features/api/crudApi'
import productReducer from './features/slices/productSlice'

export default configureStore({
  reducer: {
    products:productReducer,
    [crupApi.reducerPath]: crupApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(crupApi.middleware)
})