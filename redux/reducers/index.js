import {combineReducers} from 'redux'
import guidesReducer from './guidesReducer'
import adventuresReducer from './adventuresReducer'

import userReducer from './userReducer'
import authReducer from './auth'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  guides: guidesReducer,
  adventures: adventuresReducer,
  routing: routerReducer,
  auth: authReducer
})

export default rootReducer
