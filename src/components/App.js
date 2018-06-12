import React from 'react'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class App extends React.Component {

  render(){
    return(
      <div>
        <h1>Sup Yall</h1>
        <LoginForm/>
        <SignupForm/>
        <GiftForm/>
        <GiftList/>
      </div>
    )
  }

}


export default App
