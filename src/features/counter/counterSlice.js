import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 777,
}

export const counterSlice = createSlice({
  name: 'counter111',
  initialState,
  reducers: {
    increment1: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      console.log('increment',state.value)
    },
    decrement: (state) => {
      state.value -= 1
      console.log('increment',state)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      console.log(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment1, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer