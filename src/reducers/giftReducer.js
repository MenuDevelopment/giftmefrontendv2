import {FETCH_GIFTS, NEW_GIFT, SET_GIFT, NEW_PLEDGE, EDIT_PLEDGE} from '../actions/types'

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
        selectedGift: action.payload[0],
        pledgeAmount: action.payload[0].pledge_amount
      }
    case SET_GIFT:
      return{
        ...state,
        selectedGift: action.payload,
        pledgeAmount: action.payload.pledge_amount
      }
    case EDIT_PLEDGE:
      console.log(action.payload);
      let updatedSelectedGift = {...state.selectedGift}
      updatedSelectedGift.pledges = [...state.selectedGift.pledges]
      let pledgeToBeUpdated = updatedSelectedGift.pledges.find((pledge) => {
        return pledge.user_id === action.payload.user_id
      })
      console.log(pledgeToBeUpdated);
      let index = updatedSelectedGift.pledges.indexOf(pledgeToBeUpdated)
      console.log(index);
      updatedSelectedGift.pledges[index] = action.payload
      console.log(updatedSelectedGift);
      return{
        ...state,
        selectedGift: updatedSelectedGift
      }
      case NEW_PLEDGE:
      console.log("WHY MUST I CRY");
        return{
          ...state,
          selectedGift: {...state.selectedGift,
          pledges: [...state.selectedGift.pledges].push(action.payload)},
          pledgeAmount: state.pledgeAmount + action.payload.amount
        }
    default:
      console.log(state);
      return state
  }
}
