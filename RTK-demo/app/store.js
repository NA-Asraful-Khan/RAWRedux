const { createLogger } = require("redux-logger");
const { cakeReducer } = require("../features/cake/cakeSlice");
const { iceCreameReducer } = require("../features/iceCream/iceCreamSlice");
const { userReducer } = require("../features/user/userSlice");

const configureStore = require("@reduxjs/toolkit").configureStore;
// const cakeReducer = require("../features/cake/cakeSlice")

const logger = createLogger()

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream:iceCreameReducer,
        user:userReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports = store