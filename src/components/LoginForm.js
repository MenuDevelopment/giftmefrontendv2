
// fetch("http://localhost:3000/api/v2/sessions", { method:"POST",
// headers: {"Content-Type": "application/json"},
// body: JSON.stringify({
// 	email: "test@test.com",
// 	password: "abc123"}
// ) }).then(res => res.json()).then(console.log)

import React from 'react'

class LoginForm extends React.Component {
  render(){
    return(
      <div>
        <h2>Login Yall</h2>
      </div>
    )
  }
}

export default LoginForm
