import {FETCH_GIFTS, NEW_GIFT} from './types'

export const fetchGifts = () => dispatch => {
  fetch("http://localhost:3000/api/v2/gifts")
  .then(res => res.json())
  .then(gifts => dispatch({
    type: FETCH_GIFTS,
    payload: gifts
  }))
}

export const newGift = (gift) => dispatch => {
  fetch("http://localhost:3000/api/v2/gifts", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(gift)
  })
  .then(res => res.json())
  .then(gift => console.log)
}
