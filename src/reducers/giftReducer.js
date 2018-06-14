import {FETCH_GIFTS, NEW_GIFT, SET_GIFT} from '../actions/types'

const initialState = {
  gifts: [],
  newGift: {},
  selectedGift: {},
}

export default function(state=initialState, action){
  switch(action.type) {
    case FETCH_GIFTS:
      return {
        ...state,
        gifts: action.payload,
        selectedGift: action.payload[0]
      }
    case SET_GIFT:
      return{
        ...state,
        selectedGift: action.payload
      }
    default:
      return state
  }
}
