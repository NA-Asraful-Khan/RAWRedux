import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreameReducer from "./iceCreame/iceCreameReducer";
import userReducer from "./user/userReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame:iceCreameReducer,
    user:userReducer
})

export default rootReducer