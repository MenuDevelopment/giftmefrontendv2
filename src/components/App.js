import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../actions/sessionActions'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class App extends React.Component {



  render(){
    const loggedInStuff =
      [<div>
        <h1>Currently logged in: {this.props.current_email}</h1>
        <button onClick={this.props.logOut}>Log Out</button>
        <GiftForm/>
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
        {this.props.logged_in ? loggedInStuff : loggedOutStuff}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  logged_in: state.session.logged_in,
  current_email: state.session.current_email
})
export default connect(mapStateToProps, {logOut})(App)
