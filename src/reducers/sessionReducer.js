import {LOG_IN, LOG_OUT} from '../actions/types'

const initialState = {
  logged_in: !!localStorage.token,
  current_email: localStorage.email
}

export default function(state=initialState, action){
  switch(action.type) {
    case LOG_OUT:
      return {
        ...state,
        logged_in: false,
        current_email: false
      }
    case LOG_IN:
      return{
        ...state,
        logged_in: true,
        current_email: action.payload
      }
    default:
      return state
  }
}
