import React from 'react'
import {Segment, Header} from 'semantic-ui-react'

const NavBar = (props) => {

  return (
    <Segment inverted textAlign='center'>
      <Header as='h1'
        inverted color='white'
        textAlign='center'>
        Gift.Me: Sending awesome gifts, together.
      </Header>
    </Segment>
  )
}

export default NavBar
