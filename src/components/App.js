import React from 'react'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import GiftList from './GiftList'

class App extends React.Component {

  render(){
    return(
      <div>
        <h1>Sup Yall</h1>
        <LoginForm/>
        <SignupForm/>
        <GiftList/>
      </div>
    )
  }

}


export default App
