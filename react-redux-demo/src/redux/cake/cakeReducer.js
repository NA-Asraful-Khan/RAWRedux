import { BUY_CAKE } from "./cakeActionType"

const cakeState={
    numOfCakes:10
}

const cakeReducer=(state=cakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-action.payload
        }

        default: return state
    }
}

export default cakeReducer