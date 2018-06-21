import React from 'react'
import {Button, Segment, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {logOut} from '../actions/sessionActions'
import Headroom from 'react-headroom'

const NavBar = (props) => {



  return (
    <Headroom>
      <Segment inverted textAlign='center'>
        <Header as='h1'
          inverted color='white'
          textAlign='center'>
          Gift.Me: Sending awesome gifts, together.
          {localStorage.getItem("user_id") ? <Button floated="right" onClick={props.logOut}>Log Out</Button> : null }
        </Header>
      </Segment>
    </Headroom>
  )
}

export default connect (null, {logOut}) (NavBar)
