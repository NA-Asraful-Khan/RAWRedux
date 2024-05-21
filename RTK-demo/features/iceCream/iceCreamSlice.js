const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    numOfIceCream: 15
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream -=1
        },
        restocked:(state,action)=>{
            state.numOfIceCream += action.payload
        }
    }
})

module.exports.iceCreameReducer = iceCreamSlice.reducer
module.exports.iceCreamActions= iceCreamSlice.actions