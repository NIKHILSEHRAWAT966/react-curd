import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart:(state,action)=>{
        state.value.push(action.payload)            // <- state ek array h jisme mathod hota h push
    }, 
    removeProductToCart:(state,action)=>{
        state.value=state.value.filter(p=>p.id!==action.payload.id)            // <- state ek array h jisme mathod hota h push
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart,removeProductToCart} = cartSlice.actions

export default cartSlice.reducer