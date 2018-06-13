import React from 'react'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class App extends React.Component {

  render(){
    return(
      <div>
        {this.props.logged_in ?
          <h1>you logged in</h1> :
          <div>
            <LoginForm/>
            <SignupForm/>
          </div>
        }
        <GiftForm/>
        <GiftList/>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  logged_in: state.session.logged_in
})
export default connect(mapStateToProps)(App)
