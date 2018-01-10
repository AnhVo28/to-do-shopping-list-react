import React from 'react'


const ListItems = ({items, handleToogleMove, title, items2, handleUndoMove}) =>{
  if (title === "My To Do Shopping List") {

    return (
      <ul id="myUL">
        {items.map((item, index)=><li
          key ={index}
          onClick = {(e)=>handleToogleMove(e,index)}
          >{item}<span className="close">×</span></li>)}
     </ul>
    )
  }

  return (
    <ul id="myUL2">
      {items2.map((item, index)=><li
        key ={index} className="checked"
        onClick={(e)=>handleUndoMove(e,index)
        }>{item}<span className="close">×</span></li>)}
   </ul>
  )
}


export default ListItems;
