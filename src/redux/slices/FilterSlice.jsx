import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
    name: 'filter',
    initialState: 'All categories',
    reducers:{
        changeCategory: (state,action)=> {
            return action.payload
        }
    }
})

export const {changeCategory} = FilterSlice.actions
export default FilterSlice.reducer