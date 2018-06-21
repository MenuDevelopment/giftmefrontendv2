import React from 'react'
import {connect} from 'react-redux'
import {Container, Button, Header, Progress, Sticky} from 'semantic-ui-react'
import PledgeForm from './PledgeForm'
import {addPledgeClicked} from '../actions/giftActions'

class GiftViewMain extends React.Component {

  state = {
    showPledgeForm: false
  }

  handleClick = (event) => {
    this.props.addPledgeClicked()

  }

  render(){

    const goalPercent = (this.props.pledgeAmount/this.props.gift.item_price * 100).toFixed(2)

    let userList = []

    if (this.props.pledges && this.props.pledges.length > 0){
      userList = this.props.pledges.map((pledge) => {
        return (
          <li>
            {pledge.user.first_name} {pledge.user.last_name}
          </li>
        )
      })
    }



    return(
      <Container >
        <Header as="h1"> {this.props.gift.item_name}</Header>
        <Header as="h3">Goal: {this.props.gift.item_price}</Header>
        <p>Description: {this.props.gift.item_description}</p>
        <Header as="h3">End Date: {this.props.gift.end_date}</Header>
        <Progress percent={goalPercent} indicating progress />

        {localStorage.getItem("user_id") == this.props.gift.user_id ?
          <Button secondary>Edit your Gift</Button> : <p>This gift was not created by you</p>}

        {(this.props.pledges && this.props.pledges.find((pledge) => {
          return pledge.user.id == localStorage.getItem("user_id")}) )? <Button secondary >Edit your pledge</Button> : <Button secondary onClick = {this.handleClick}>Add a pledge</Button>}

        {this.props.showAddPledge ? <PledgeForm giftId = {this.props.gift.id}/> : null}
        {this.props.pledges && this.props.pledges.length > 0 ? <ul><h3>Pledges so far by:</h3>{userList}</ul> : <h3>No one has contributed to this gift yet. Be the first one!</h3>}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gift: state.gifts.selectedGift,
    pledgeAmount: state.gifts.pledgeAmount,
    pledges: state.gifts.pledges,
    showAddPledge: state.gifts.showAddPledge
  }
}


export default connect(mapStateToProps, {addPledgeClicked})(GiftViewMain)
