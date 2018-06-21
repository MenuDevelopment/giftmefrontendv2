import {FETCH_GIFTS, NEW_GIFT, SET_GIFT, NEW_PLEDGE, EDIT_PLEDGE, LOG_OUT, SHOW_ADD_PLEDGE, SHOW_EDIT_PLEDGE} from '../actions/types'

const initialState = {
  gifts: [],
  newGift: {},
  selectedGift: {},
  pledgeAmount: 0,
  pledges: [],
  showAddPledge: false,
  showEditPledge: false,
}

export default function(state=initialState, action){
  switch(action.type) {
    case FETCH_GIFTS:
      return {
        ...state,
        gifts: action.payload,
        selectedGift: action.payload[0],
        pledgeAmount: action.payload[0].pledge_amount,
        pledges: action.payload[0].pledges
      }
    case SET_GIFT:
      return{
        ...state,
        selectedGift: action.payload,
        pledgeAmount: action.payload.pledge_amount,
        pledges: action.payload.pledges,
        showAddPledge: false,
        showEditPledge: false,
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
        return{
          ...state,
          showAddPledge: false,
          showEditPledge: false,
          pledges: [...state.selectedGift.pledges, action.payload],
          pledgeAmount: state.pledgeAmount + action.payload.amount
        }
      case LOG_OUT:
        return initialState
      case SHOW_ADD_PLEDGE:
        return{
          ...state,
          showAddPledge: true
        }
      case SHOW_EDIT_PLEDGE:
        return{
          ...state,
          showEditPledge: true
        }
    default:
      return state
  }
}
