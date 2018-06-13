import {LOG_IN, LOG_OUT} from '../actions/types'

export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({
    type: LOG_OUT
  })
}

export const logIn = (login_data) => dispatch => {
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
