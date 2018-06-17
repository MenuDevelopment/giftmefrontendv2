import React from 'react'
import connect from 'react-redux'
import {Form, Button, Container, Divider} from 'semantic-ui-react'

class PledgeForm extends React.Component{
  state = {
    message: "",
    amount: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <Container>
        <Divider/>
        <Form onSubmit = {this.handleSubmit}>
          <h1>Hey Kid! Im a computer! Stop all the downloading!</h1>
          <input
            type ="text"
            name="message"
            placeholder="Attach a message along with your pledge!"
            onChange = {this.handleChange}
            value = {this.state.message}
          />
          <input
            type ="number"
            name ="amount"
            placeholder= "How much are you pledging towards this gift?"
            onChange = {this.handleChange}
            value = {this.state.amount}
          />
        </Form>
      </Container>
    )
  }
}

export default PledgeForm
