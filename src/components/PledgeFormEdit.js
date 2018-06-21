import React from 'react'
import {connect} from 'react-redux'
import {Form, Button, Container, Divider} from 'semantic-ui-react'
import {newPledge, editPledge} from '../actions/giftActions'

class PledgeFormEdit extends React.Component{
  state = {
    message: this.props.yourPledge.message,
    amount: this.props.yourPledge.amount,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const giftData = {...this.state, gift_id: this.props.giftId, user_id: localStorage.getItem("user_id")}
    // this.props.editPledge(giftData)
  }

  render(){
    return(
      <Container>
        <Divider/>
        <Form onSubmit = {this.handleSubmit}>
          <h2>Contribute to this gift!</h2>
          <label>Message:</label>
          <input
            type ="text"
            name="message"
            id="messageBox"
            required
            placeholder="Attach a message along with your pledge!"
            onChange = {this.handleChange}
            value = {this.state.message}
          />
          <label>Pledge Amount:</label>
          <input
            type ="number"
            name ="amount"
            min="0"
            required
            placeholder= "How much are you pledging towards this gift?"
            onChange = {this.handleChange}
            value = {this.state.amount}
          />
          <input type="submit" />

        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gift: state.gifts.selectedGift,
    yourPledge: state.gifts.pledges.find((pledge) => {
      return pledge.user.id == localStorage.getItem("user_id")
    })
  }
}

export default connect (mapStateToProps, {newPledge}) (PledgeFormEdit)
