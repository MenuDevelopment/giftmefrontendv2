import React from 'react'
import {connect} from 'react-redux'
import {fetchGifts} from '../actions/giftActions'

class GiftList extends React.Component {
  componentWillMount(){
    this.props.fetchGifts()
  }

  render(){
    const gifts = this.props.gifts.map((gift) => {
      return <li>{gift.item_name}</li>
    })
    return(
      <div>
        <h1>List of gifts</h1>
        <ul>
          {gifts}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gifts: state.gifts.gifts
})
export default connect(mapStateToProps, {fetchGifts})(GiftList)
