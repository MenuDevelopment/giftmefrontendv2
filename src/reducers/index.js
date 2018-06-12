import {combineReducers} from 'redux'
import giftReducer from './giftReducer'
import 'semantic-ui-css/semantic.min.css'



export default combineReducers({
  gifts: giftReducer
})
