import React from "react"
import {Button, Card, Header, Progress} from 'semantic-ui-react'

const GiftFullView = (props) => {
  const goalPercent = props.gift.pledge_amount/props.gift.item_price * 100
  return (
    <Card>
      <Card.Content header={props.gift.item_name}/>
      <Card.Content extra>
        <Header as="h3">Goal: {props.gift.item_price}</Header>
        <Progress percent={goalPercent} indicating progress />

      </Card.Content>
    </Card>
  )
}

export default GiftFullView
