const redux = require('redux')
const reduxLogger= require('redux-logger')

const createStore = redux.createStore
const combineReducer=redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAME = "BUY_ICE_CREAME";

const buyCake=()=>{
    return{
        type: BUY_CAKE,
        info:"Sell Cake",
        payload: 2
    }
}

const buyIceCream=()=>{
    return{
        type:BUY_ICE_CREAME,
        info:"Sell Ice Creame",
        payload: 2
    }
}

const initialCakeState = {
    numOfCakes : 10
}
const initialIceCreameState={
    numOfIceCream:10
}

const cakeReducer =(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes -action.payload
        }
        default: return state
    }
}

const iceCreameReducer =(state=initialIceCreameState,action)=>{
    switch(action.type){
        case BUY_ICE_CREAME: return{
            ...state,
            numOfIceCream:state.numOfIceCream -action.payload
        }
        default: return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCreame: iceCreameReducer
})


const store = createStore(rootReducer,applyMiddleware(logger))
console.log("Initial State",store.getState());

const unsubscribe = store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

