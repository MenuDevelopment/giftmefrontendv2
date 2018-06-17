import React from 'react'
import {connect} from 'react-redux'
import {Container, Button, Header, Progress, Sticky} from 'semantic-ui-react'

class GiftViewMain extends React.Component {


  render(){
    const goalPercent = (this.props.gift.pledge_amount/this.props.gift.item_price * 100).toFixed(2)

    return(
      <Container >
        <Header as="h1"> {this.props.gift.item_name}</Header>
        <Header as="h3">Goal: {this.props.gift.item_price}</Header>
        <p>Description: {this.props.gift.item_description}</p>
        <Header as="h3">End Date: {this.props.gift.end_date}</Header>
        <Progress percent={goalPercent} indicating progress />
        {localStorage.getItem("user_id") == this.props.gift.user_id ?
          <Button secondary>Edit your Gift</Button> : <p>This gift was not created by you</p>}
        <Button secondary>Add a pledge</Button>
      </Container>
    )
  }
}


export default GiftViewMain
