import React from 'react'
import {connect} from 'react-redux'
import {fetchGifts} from '../actions/giftActions'
import {Card} from 'semantic-ui-react'
import GiftCardView from './GiftCardView'
import GiftViewMain from './GiftViewMain'

class GiftList extends React.Component {

  componentWillMount(){
    this.props.fetchGifts()
  }

  render(){
    const gifts = this.props.gifts.map((gift) => {
      return  <GiftCardView key={gift.id} gift={gift}/>
    })
    return(
      <div>
        {this.props.selectedGift ? <GiftViewMain gift={this.props.selectedGift}/> : null}
        <h1>List of gifts</h1>
        <Card.Group centered>
          {gifts}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gifts: state.gifts.gifts,
  selectedGift: state.gifts.selectedGift
})
export default connect(mapStateToProps, {fetchGifts})(GiftList)
