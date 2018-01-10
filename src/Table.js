import React from 'react'
import InputForm from './InputForm'
import ListItems from './ListItems'



const Table = ({newItem, changeInput, addItem, showMess, title, toogleMove, undoMove, items, items2}) => {

  const formEnter = title === "My To Do Shopping List"
  ? <InputForm
  newItem = {newItem}
  handleChangeInput={changeInput}
  handleAddItem={addItem}
  showMess={showMess}/>
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
      handleToogleMove = {toogleMove}
      items2 = {items2}
      handleUndoMove = {undoMove}
      />
  </div>
)

}

export default Table;
