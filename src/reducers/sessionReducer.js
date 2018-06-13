import {LOG_IN, LOG_OUT} from '../actions/types'

const initialState = {
  logged_in: !!localStorage.token,
}

export default function(state=initialState, action){
  switch(action.type) {
    case LOG_OUT:
      return {
        ...state,
        logged_in: false
      }
    case LOG_IN:
      return{
        ...state,
        logged_in: true
      }
    default:
      return state
  }
}
