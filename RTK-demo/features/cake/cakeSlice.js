const { iceCreamActions } = require('../iceCream/iceCreamSlice')

const createSlice = require('@reduxjs/toolkit').createSlice


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
            .addCase(iceCreamActions.ordered,(state)=>{
                state.numOfCakes-=1
            })
    }
})

module.exports.cakeReducer = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions