const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")
const { default: axios } = require("axios")

const initialState = {
    loading:false,
    users:[],
    error:''
}


const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(response=>response.data.map(user=>user.name))
})


const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error=''
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.payload
        })
    }
})

module.exports.userReducer = userSlice.reducer
module.exports.fetchUsers = fetchUsers