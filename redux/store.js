import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//add middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let finalCreateStore = composeEnhancers (
  applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = {}){
  console.log("state created")
  console.log(initialState)
  return finalCreateStore(rootReducer, initialState)
}
