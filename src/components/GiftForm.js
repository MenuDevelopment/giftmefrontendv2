import React from 'react'
import {connect} from 'react-redux'
import {newGift} from '../actions/giftActions'
import {Form} from 'semantic-ui-react'

class GiftForm extends React.Component{
  state = {
    item_name: "",
    item_link: "",
    item_description: "",
    item_price: "",
    end_date: ""
  }

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const giftData = this.state
    this.props.newGift(giftData)
  }

  render(){
    return(
      <Form onSubmit = {this.handleSubmit}>
        <h2>Plan a new gift!</h2>
        <input
          required
          type="text"
          placeholder = "Name of the Gift"
          value={this.state.item_name}
          name="item_name"
          onChange = {this.handleChange}
        />
        <input
          required
          type="text"
          placeholder = "Link to the thing"
          value={this.state.item_link}
          name="item_link"
          onChange = {this.handleChange}
        />
        <textarea
          required
          placeholder = "Description of the Gift"
          value={this.state.item_description}
          name="item_description"
          onChange = {this.handleChange}
        />
        <input
          required
          type="text"
          placeholder = "How much does it cost?"
          value={this.state.item_price}
          name="item_price"
          onChange = {this.handleChange}
        />
        <input
          required
          type="text"
          placeholder = "When do we have until? This is gonna be a date picker eventually"
          value={this.state.end_date}
          name="end_date"
          onChange = {this.handleChange}
        />
        <input type="submit" />
      </Form>
    )
  }
}

export default connect (null, {newGift})(GiftForm)
