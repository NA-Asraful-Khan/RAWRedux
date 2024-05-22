import { ordered as iceCreamOrdered } from '../iceCream/iceCreamSlice'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfCakes:10
}

const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCakes -= (state.numOfCakes>0?1:0)
        },
        restocked:(state,action)=>{
            state.numOfCakes += (action.payload>0?action.payload:0)
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(iceCreamOrdered,(state)=>{
                state.numOfCakes-=(state.numOfCakes>0?1:0)
            })
    }
})
const cakeReducer = cakeSlice.reducer
export default cakeReducer
export const {ordered, restocked} = cakeSlice.actions