import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreameReducer from "./iceCreame/iceCreameReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame:iceCreameReducer
})

export default rootReducer