import React from 'react'

class GiftForm extends React.Component{
  state = {
    item_name: "",
    item_link: "",
    item_description: "",
    item_price: "",
    end_date: ""
  }

  render(){
    return(
      <form>
        <h2>Plan a new gift!</h2>
      </form>
    )
  }
}

export default GiftForm
