import { BUY_CAKE } from "./cakeActionType"

const cakeState={
    numOfCakes:10
}

const cakeReducer=(state=cakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            numOfCakes:state.numOfCakes-1
        }

        default: return state
    }
}

export default cakeReducer