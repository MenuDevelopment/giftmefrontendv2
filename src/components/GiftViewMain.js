import React from 'react'
import {connect} from 'react-redux'
import {Container, Button, Header, Progress, Sticky} from 'semantic-ui-react'
import PledgeForm from './PledgeForm'

class GiftViewMain extends React.Component {

  state = {
    showPledgeForm: false
  }

  handleClick = (event) => {
    this.setState((prevState)=>{
      return {showPledgeForm: !prevState.showPledgeForm}
    })

  }

  render(){
    const goalPercent = (this.props.pledgeAmount/this.props.gift.item_price * 100).toFixed(2)

    return(
      <Container >
        <Header as="h1"> {this.props.gift.item_name}</Header>
        <Header as="h3">Goal: {this.props.gift.item_price}</Header>
        <h2> Bar test</h2>
        <Progress percent={goalPercent} indicating progress />
        <p>Description: {this.props.gift.item_description}</p>
        <Header as="h3">End Date: {this.props.gift.end_date}</Header>
        <Progress percent={goalPercent} indicating progress />
        {localStorage.getItem("user_id") == this.props.gift.user_id ?
          <Button secondary>Edit your Gift</Button> : <p>This gift was not created by you</p>}
        <Button secondary onClick = {this.handleClick}>Add a pledge</Button>
        {this.state.showPledgeForm ? <PledgeForm giftId = {this.props.gift.id}/> : null}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gift: state.gifts.selectedGift,
    pledgeAmount: state.gifts.pledgeAmount
  }
}


export default connect(mapStateToProps)(GiftViewMain)
