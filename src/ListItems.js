import React from 'react'


const ListItems = ({items, handleMoveItem, title, items2, handleUndoMove, deleteItem}) =>{
  if (title === "My To Do Shopping List") {

    return (
      <ul id="myUL">
        {items.map((item, index)=>(<div className="row"><li
          key ={index}
          onClick = {()=>handleMoveItem(index)}
          >{item}</li><span className="close" onClick={()=>deleteItem('items',index)} >×</span></div>))}
     </ul>
    )
  }

  return (
    <ul id="myUL2">
      {items2.map((item, index)=>
        (<div className="row"><li
        key ={index} className="checked"
        onClick={()=>handleUndoMove(index)
        }>{item}</li><span className="close" onClick={()=>deleteItem('items2',index)} >×</span></div>))}
   </ul>
  )
}


export default ListItems;
