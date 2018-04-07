import * as ItemActionTypes from '../actiontypes/items.js'


export const addItem = (newItem)=>{
  return {
    type: ItemActionTypes.ADD_ITEM,
    newItem
  };
};

export const moveItem = (index)=>{
  return {
    type: ItemActionTypes.MOVE_ITEM,
    index
  }
}
