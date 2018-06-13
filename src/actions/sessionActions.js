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
      localStorage.setItem("email", token.email)
      localStorage.setItem("token", token.token)
      localStorage.setItem("user_id", token.user_id)
      dispatch({
        type: LOG_IN,
        payload: token.email
      })
    } else{
      console.log("failed to log in")
    }

  })
}

export const signup = (signupData) => dispatch => {
  fetch('http://localhost:3000/api/v2/users', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({user:signupData})
  })
  .then(res => res.json())
  .then(token => {
    console.log(token)
    if (token.token){
      localStorage.setItem("email", token.email)
      localStorage.setItem("token", token.token)
      localStorage.setItem("user_id", token.user_id)
      dispatch({
        type: LOG_IN,
        payload: token.email
      })
    } else{
      console.log("failed to log in")
    }
  })
}
