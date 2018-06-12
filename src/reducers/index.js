import {combineReducers} from 'redux'
import giftReducer from './giftReducer'
import sessionReducer from './sessionReducer'




export default combineReducers({
  gifts: giftReducer,
  session: sessionReducer
})
