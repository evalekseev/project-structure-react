import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { counterMiddleware } from '../middlewares/counter.middleware'

export const rootReducer = combineSlices(counterSlice)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(counterMiddleware.middleware),
})
