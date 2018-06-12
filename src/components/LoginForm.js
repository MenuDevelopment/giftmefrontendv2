
// fetch("http://localhost:3000/api/v2/sessions", { method:"POST",
// headers: {"Content-Type": "application/json"},
// body: JSON.stringify({
// 	email: "test@test.com",
// 	password: "abc123"}
// ) }).then(res => res.json()).then(console.log)

import React from 'react'

class LoginForm extends React.Component {

  state = {
    email : "",
    password : ""
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <form>
        <h2> Log In Yall</h2>
        <input type="text" onChange={this.handleChange} value = {this.state.email } name = "email" placeholder="Email"/>
        <input type="password" onChange={this.handleChange} value = {this.state.password } name = "password"  placeholder="Password"/>
        <input type="submit"/>
      </form>
    )
  }
}

export default LoginForm
