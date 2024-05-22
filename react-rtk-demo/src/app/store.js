import {createLogger} from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreameReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

import {configureStore}  from"@reduxjs/toolkit"

const logger = createLogger()

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream:iceCreameReducer,
        user:userReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store