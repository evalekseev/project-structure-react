import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './counter.state.initial'

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
    selectors: {
        selectValue: (state) => state.value,
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { selectValue } = counterSlice.selectors
