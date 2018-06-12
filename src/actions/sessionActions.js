import {LOG_IN, LOG_OUT} from '../actions/types'

export const LOG_OUT = () => dispatch => {
  localStorage.clear()
  dispatch({
    type: LOG_OUT
  })
}
