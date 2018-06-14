import React from "react"
import {Button, Card, Header, Progress} from 'semantic-ui-react'

const GiftFullView = (props) => {



  let goalPercent = props.gift.pledge_amount/props.gift.item_price * 100
  goalPercent = goalPercent.toFixed(2)

  return (
    <Card >
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

export default GiftFullView
