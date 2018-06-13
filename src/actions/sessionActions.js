import {LOG_IN, LOG_OUT} from '../actions/types'

export const LOG_OUT = () => dispatch => {
  localStorage.clear()
  dispatch({
    type: LOG_OUT
  })
}

export const LOG_IN = (login_data) => dispatch => {
  fetch('http://localhost:3000/api/v2/gifts', {
    method: "POST",
    headers: "Content-Type": "application/json"
    body: JSON.stringify(login_data)
  })
  .then(res => res.json())
  .then(token => {
    console.log(token)
    dispatch({
      type: LOG_IN
    })
  })
}
