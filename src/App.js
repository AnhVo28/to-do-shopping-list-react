import React, { Component } from 'react';
import Table from './Table'




import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title : {
        unDone: "My To Do Shopping List",
        done: "Done List"

      },

      items: ['Chicken', 'Eggs', 'Milk', 'Chocolate', 'Tomatoes'],
      items2:[],
      showMess: false,
      newItem:''
    };


  }

  toogleMove = (e,index)=>{

    let value = e.target.firstChild.nodeValue;
  //Move item from unccompleted table to completed table
    this.setState ({
      items: [
              ...this.state.items.slice(0,index),
              ...this.state.items.slice(index+1)
            ]
    })


    if (value !=="×") {

      this.setState({
        items2:[...this.state.items2, value],

      })
    }


  }

  //Move item from completed table to unccompleted Table
  undoMove=(e,index)=>{
    let value = e.target.firstChild.nodeValue;

// delete items from completed table
    this.setState({
      items2:[
        ...this.state.items2.slice(0,index),
        ...this.state.items2.slice(index+1)
      ]
    })
// add the item to unccompleted table

  if (value !=="×") {
    this.setState({
      items:[...this.state.items, value ]
    })
  }
  }
// updating the input content
  changeInput=(e)=>{

    this.setState({
      newItem: e.target.value
    })
  }
// add the new item
  addItem=(e)=>{
    e.preventDefault();
    if (this.state.newItem !== "") {
      this.setState({
        items: [...this.state.items, this.state.newItem],
        showMess: false
      })
    } else {
      this.setState({
        showMess: true

      })
    }

    this.setState({
      newItem: ""
    })
  }



  render() {
    return (
    <form id="myForm" onSubmit={this.addItem} >
      <Table
        title = {this.state.title.unDone}
        items={this.state.items}
        toogleMove = {this.toogleMove}
        newItem= {this.state.newItem}
        changeInput={this.changeInput}
        addItem={this.addItem}
        showMess={this.state.showMess} />
      <div className="done-tb">
        <Table
          title = {this.state.title.done}
          items2 = {this.state.items2}
          undoMove = {this.undoMove}  />
      </div>
    </form>

    );
  }
}

export default App;
