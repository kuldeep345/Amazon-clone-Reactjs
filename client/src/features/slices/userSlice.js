import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user:null,
 cart:[]
}

const userSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setUser(state, action) {
        state.user = action.payload
    },
    setCart(state , action){
        state.cart = action.payload
    },
    increaseCart(state ,action){
        state.cart.push(action.payload)   
    },
    decreaseCart(state ,action){
        state.cart = state.cart.filter((item)=>{
          return (item._id).toString() !== action.payload
        })
    },
  }
})

export const { setUser , setCart , increaseCart , decreaseCart} = userSlice.actions

export default userSlice.reducer