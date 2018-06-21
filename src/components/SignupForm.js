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
import {connect} from 'react-redux'
import {signup} from '../actions/sessionActions'
import {Form} from 'semantic-ui-react'

class SignupForm extends React.Component {

  state = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    paymentInfo : ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const signupData = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      payment_info: this.state.paymentInfo,
    }
    this.props.signup(signupData)
  }

  render(){
    return(
      <Form onSubmit = {this.handleSubmit}>
        <h2>Sign up Form</h2>
        <input
          required
          type="text"
          onChange={this.handleChange}
          value = {this.state.firstName }
          name = "firstName"
          placeholder="First Name"
        />
        <input
          required
          type="text"
          onChange={this.handleChange}
          value = {this.state.lastName }
          name = "lastName"
          placeholder="Last Name"
        />
        <input
          required
          type="email"
          onChange={this.handleChange}
          value = {this.state.email }
          name = "email"
          placeholder="Email"
        />
        <input
          required
          type="password"
          onChange={this.handleChange}
          value = {this.state.password }
          name = "password"
          placeholder="Password"
        />
        <input
          required
          type="text"
          onChange={this.handleChange}
          value = {this.state.paymentInfo }
          name = "paymentInfo"
          placeholder="Payment Info"
        />
        <input type="submit"/>
      </Form>
    )
  }
}

export default connect (null, {signup})(SignupForm)
