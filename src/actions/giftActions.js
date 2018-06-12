import {FETCH_GIFTS, NEW_GIFT} from './types'

export const fetchGifts = () => dispatch => {
  fetch("http://localhost:3000/api/v2/gifts")
  .then(res => res.json())
  .then(gifts => dispatch({
    type: FETCH_GIFTS,
    payload: gifts
  }))
}
