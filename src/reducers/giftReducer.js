import {FETCH_GIFTS, NEW_GIFT} from '../actions/types'

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
        gifts: action.payload
      }
    default:
      return state
  }
}
