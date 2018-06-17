import React from 'react'
import connect from 'react-redux'
import {Form, Button, Container} from 'semantic-ui-react'

class PledgeForm extends React.Component{
  state = {
    message: "",
    amount: "",
  }

  render(){
    return(
      <Form onSubmit = {this.handleSubmit}>
        <h1>Hey Kid! Im a computer! Stop all the downloading!</h1>
        <input
          type ="text"
          placeholder="Attach a message along with your pledge!"
          onChange = {this.handleChange}
          value = {this.state.message}
        />
        <input
          type ="number"
          placeholder= "How much are you pledging towards this gift?"
          onChange = {this.handleChange}
          value = {this.state.amount}
        />
      </Form>
    )
  }
}

export Default
