import React from 'react'
import InputForm from './InputForm'
import ListItems from './ListItems'



const Table = ({newItem, changeInput, showMess, title, moveItem, undoMove, items, items2, addItem, deleteItem}) => {

  const formEnter = title === "My To Do Shopping List"
  ? <InputForm
  newItem = {newItem}
  handleChangeInput={changeInput}
  showMess={showMess}
  addItem={addItem}
  />
  :
  false;

return(
  <div className="container">
    <div id="myDIV" className="header">
      <h2 style={{margin:"5px"}}>
        {title}
      </h2>
      {formEnter}
    </div>
    <ListItems
      title = {title}
      items = {items}
      handleMoveItem = {moveItem}
      items2 = {items2}
      handleUndoMove = {undoMove}
      deleteItem={deleteItem}
      />
  </div>
)

}

export default Table;
