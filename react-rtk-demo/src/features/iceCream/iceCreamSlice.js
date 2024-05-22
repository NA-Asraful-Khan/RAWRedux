import { createSlice }from "@reduxjs/toolkit"

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
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase('cake/ordered', (state) => {
                state.numOfIceCream -= 1;
            });
        // You can add more cases with builder.addCase(actionType, reducer)
    },
})

export default iceCreamSlice.reducer
export const {ordered,restocked} = iceCreamSlice.actions