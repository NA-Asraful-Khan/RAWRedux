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
            state.numOfCakes -= 1
        },
        restocked:(state,action)=>{
            state.numOfCakes += action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(iceCreamOrdered,(state)=>{
                state.numOfCakes-=1
            })
    }
})
const cakeReducer = cakeSlice.reducer
export default cakeReducer
export const {ordered, restocked} = cakeSlice.actions