// fetch("http://localhost:3000/api/v2/users", { method:"POST",
// headers: {"Content-Type": "application/json"},
// body: JSON.stringify({
//     user: {email: "test@test.com",
// 	first_name: "Manuel",
// 	last_name: "Grullon",
// 	password: "test123",
// 	payment: "yeahright"}
// }) }).then(res => res.json()).then(console.log)

import React from 'react'

class SignupForm extends React.Component {

  render(){
    return(
      <div>
        <h2> Sign Up Yall </h2>
      </div>
    )
  }
}

export default SignupForm
