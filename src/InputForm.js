import React from 'react';
import styled, {css} from 'styled-components';


const InputForm =({newItem, handleChangeInput, showMess, addItem})=> {

    const Button = styled.button`
        padding: 10px;
        width: 25%;
        background: #d9d9d9;
        color: #555;
        float: left;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;

    `;
    const feedback = showMess ? <p id="feedback">You can't leave this empty.</p> : false;

    return(
        <form id="myForm" onSubmit={addItem} >
        <input type="text" id="myInput" placeholder="Item..." value={newItem} onChange={(e)=>handleChangeInput(e)}/>
        <Button type="submit" id="btn-add" className="addBtn" >Add</Button>
    {feedback}
  </form>
    )

}

export default InputForm;
