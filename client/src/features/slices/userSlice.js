import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user:null,
 cart:[],
 token:null
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
    logout(state,action){
      state.user = null
    },
    setToken(state,action){
      state.token= action.payload
    }
  }
})

export const { setUser , setCart , increaseCart , decreaseCart , logout , setToken} = userSlice.actions

export default userSlice.reducer