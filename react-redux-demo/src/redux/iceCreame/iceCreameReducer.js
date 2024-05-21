import { BUY_ICE_CREAME } from "./iceCreameActionType"


const initialIceCreameState = {
    numOfIceCream:20
}

const iceCreameReducer =(state=initialIceCreameState,action)=>{

    switch(action.type){
        case BUY_ICE_CREAME:
            return{
                numOfIceCream:state.numOfIceCream-1

            }
        default: return state
    }

}

export default iceCreameReducer