import{applyMiddleware, createStore} from 'redux'
import{composeWithDevTools}from 'redux-devtools-extension'
import thunk from "redux-thunk"

import rootReducer from './rootReducer'
import logger from 'redux-logger'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store