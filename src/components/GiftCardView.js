import React from "react"
import {connect} from 'react-redux'
import {setGift} from '../actions/giftActions'
import {Button, Card, Header, Progress} from 'semantic-ui-react'

const GiftCardView = (props) => {

  const handleClick = (event) => {
    props.setGift(props.gift)
  }

  let goalPercent = (props.gift.pledge_amount/props.gift.item_price * 100).toFixed(2)

  return (
    <Card onClick = {handleClick}>
      <Card.Content header={props.gift.item_name}/>
      <Card.Content extra>
        <Header as="h3">Goal: {props.gift.item_price}</Header>
        <p>Description: {props.gift.item_description}</p>
        <Header as="h3">End Date: {props.gift.end_date}</Header>
        <Progress percent={goalPercent} indicating progress />

      </Card.Content>
    </Card>
  )
}

export default connect(null,{setGift})(GiftCardView)
