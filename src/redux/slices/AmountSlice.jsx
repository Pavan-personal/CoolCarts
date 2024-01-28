import { createSlice } from "@reduxjs/toolkit";

export const AmountSlice = createSlice({
    name:'amount',
    initialState:0,
    reducers:{
        addAmount: (state,action) => {
            state += action.payload
            return parseFloat(state.toFixed(3))
        },
        deductAmount: (state,action) => {
            state -= action.payload
            state<1? state = 0 : ''
            return parseFloat(state.toFixed(3))
        }
    }
})

export const {addAmount, deductAmount} = AmountSlice.actions
export default AmountSlice.reducer
