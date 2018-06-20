import {FETCH_GIFTS, NEW_GIFT, SET_GIFT, NEW_PLEDGE, EDIT_PLEDGE} from './types'

export const fetchGifts = () => dispatch => {
  fetch("http://localhost:3000/api/v2/gifts")
  .then(res => res.json())
  .then(gifts => dispatch({
    type: FETCH_GIFTS,
    payload: gifts
  }))
}

export const newGift = (giftData) => dispatch => {
  fetch("http://localhost:3000/api/v2/gifts", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({gift: giftData})
  })
  .then(res => res.json())
  .then(gift => console.log)
}

export const setGift = (gift) => dispatch => {
  dispatch({
    type: SET_GIFT,
    payload: gift
  })
}

export const newPledge = (pledgeData) => dispatch => {
  fetch("http://localhost:3000/api/v2/pledges", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({pledge: pledgeData})
  })
  .then(res => res.json())
  .then(pledgeData => {
    dispatch({
      type: NEW_PLEDGE,
      payload: pledgeData
    })
  })
}

export const editPledge = (pledgeData) => dispatch =>{
  fetch(`http://localhost:3000/api/v2/pledges/${pledgeData.id}`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({pledge: pledgeData})
  })
  .then(res => res.json())
  .then(pledgeData => console.log)
}
