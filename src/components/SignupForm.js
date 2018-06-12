// fetch("http://localhost:3000/api/v2/users", { method:"POST",
// headers: {"Content-Type": "application/json"},
// body: JSON.stringify({
//     user: {email: "test@test.com",
// 	first_name: "Manuel",
// 	last_name: "Grullon",
// 	password: "test123",
// 	payment: "yeahright"}
// }) }).then(res => res.json()).then(console.log)

import React from 'react'

class SignupForm extends React.Component {

  state = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    paymentInfo : ""
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
        <h2>Sign up Form Yall</h2>
        <div>
          <input type="text" onChange={this.handleChange} value = {this.state.firstName } name = "firstName"  placeholder="First Name"/>
          <input type="text" onChange={this.handleChange} value = {this.state.lastName } name = "lastName" placeholder="Last Name"/>
          <br />
        </div>
        <div>
          <input type="text" onChange={this.handleChange} value = {this.state.email } name = "email" placeholder="Email"/>
          <input type="password" onChange={this.handleChange} value = {this.state.password } name = "password"  placeholder="Password"/>
          <input type="text" onChange={this.handleChange} value = {this.state.paymentInfo } name = "paymentInfo" placeholder="Payment Info"/>
          <br />
        </div>
        <input type="submit"/>
      </form>
    )
  }
}

export default SignupForm
