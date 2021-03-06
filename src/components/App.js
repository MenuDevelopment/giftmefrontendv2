import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../actions/sessionActions'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import GiftList from './GiftList'
import GiftForm from './GiftForm'
import NavBar from './NavBar'
import {Button, Divider} from 'semantic-ui-react'

class App extends React.Component {

  state = {
    showGiftForm: false
  }

  newGiftClicked = (event) => {
    this.setState({
      showGiftForm: !this.state.showGiftForm
    })
  }

  render(){
    const loggedInStuff =
      [<div>
        <h1>Currently logged in: {this.props.current_email}</h1>
        
        <Button onClick={this.newGiftClicked}>Create a new Gift!</Button>
        {this.state.showGiftForm ? <GiftForm/> : null}
        <Divider />
        <GiftList/>
      </div>]
    const loggedOutStuff = [
      <div>
        <LoginForm/>
        <SignupForm/>
      </div>
    ]

    return(
      <div>
        <NavBar/>
        {this.props.logged_in ? loggedInStuff : loggedOutStuff}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  logged_in: state.session.logged_in,
  current_email: state.session.current_email
})
export default connect(mapStateToProps)(App)
