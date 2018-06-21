import React from 'react'
import {Segment, Header} from 'semantic-ui-react'
import Headroom from 'react-headroom'

const NavBar = (props) => {



  return (
    <Headroom>
      <Segment inverted textAlign='center'>
        <Header as='h1'
          inverted color='white'
          textAlign='center'>
          Gift.Me: Sending awesome gifts, together.
        </Header>
      </Segment>
    </Headroom>
  )
}

export default NavBar
