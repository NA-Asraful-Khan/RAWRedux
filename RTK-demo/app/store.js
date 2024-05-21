const { cakeReducer } = require("../features/cake/cakeSlice");
const { iceCreameReducer } = require("../features/iceCream/iceCreamSlice");

const configureStore = require("@reduxjs/toolkit").configureStore;
// const cakeReducer = require("../features/cake/cakeSlice")

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream:iceCreameReducer
    }
})

module.exports = store