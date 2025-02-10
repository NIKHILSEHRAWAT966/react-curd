import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counterSlice'
import  cartSlice  from './slices/CartSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    cart:cartSlice
  },
})