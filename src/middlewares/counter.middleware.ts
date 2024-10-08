import { createListenerMiddleware } from "@reduxjs/toolkit"
import { counterSlice } from "../store/slices/counter"
import { AppDispatch, RootState } from "../store"

export const counterMiddleware = createListenerMiddleware()

counterMiddleware.startListening.withTypes<RootState, AppDispatch>()({
    actionCreator: counterSlice.actions.increment,
    effect: async (_, { getState}) => {
        const count = getState().counter.value
        console.log('count', count)
    },
})