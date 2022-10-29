import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    width: false,
    isVisible: false,
    theme: localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme')
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setWidth: (state, action) => {
       state.width = action.payload
    },
    setVisible: (state, action) => {
      state.isVisible = action.payload
    },
    switchTheme: (state, action) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setWidth, setVisible, switchTheme } = counterSlice.actions

export default counterSlice.reducer