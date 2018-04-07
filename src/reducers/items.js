import * as ItemActionTypes from '../actiontypes/items.js'

const initialState =  ['Chicken', 'Eggs', 'Milk', 'Chocolate', 'Tomatoes'];

export default function items(state = initialState, action){
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM:
      return
        [...state, action.newItem]

      break;
    case ItemActionTypes.MOVE_ITEM:
      return
      [...state.slice(0, action.index), ...state.slice(action.index+1)]
      break;
    default:
      return state;

  }
}
