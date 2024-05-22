import { createSlice }from "@reduxjs/toolkit"

const initialState={
    numOfIceCream: 15
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream -=(state.numOfIceCream>0?1:0)
        },
        restocked:(state,action)=>{
            state.numOfIceCream += (action.payload>0?action.payload:0)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase('cake/ordered', (state) => {
                state.numOfIceCream -= (state.numOfIceCream>0?1:0)
            });
        // You can add more cases with builder.addCase(actionType, reducer)
    },
})
const iceCreamReducer = iceCreamSlice.reducer
export default iceCreamReducer
export const {ordered,restocked} = iceCreamSlice.actions