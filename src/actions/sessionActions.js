import {LOG_IN, LOG_OUT} from '../actions/types'

export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({
    type: LOG_OUT
  })
}

export const logIn = (loginData) => dispatch => {
  fetch('http://localhost:3000/api/v2/sessions', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(loginData)
  })
  .then(res => res.json())
  .then(token => {
    console.log(token)
    if (token.token){
      dispatch({
        type: LOG_IN
      })
    } else{
      console.log("failed to log in")
    }

  })
}
