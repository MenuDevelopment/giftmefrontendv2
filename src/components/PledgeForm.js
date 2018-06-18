import React from 'react'
import connect from 'react-redux'
import {Form, Button, Container, Divider} from 'semantic-ui-react'
import {newPledge, editPledge} from '../actions/giftActions'

class PledgeForm extends React.Component{
  state = {
    message: "",
    amount: "",
    user_id: localStorage.getItem("user_id")
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    newPledge(this.state)


  }

  render(){
    return(
      <Container>
        <Divider/>
        <Form onSubmit = {this.handleSubmit}>
          <h2>Contribute to this gift!</h2>
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
