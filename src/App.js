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

  moveItem = (index)=>{
    let value = this.state.items[index];
  //Move item from unccompleted table to completed table
    this.setState ({
      items: [
              ...this.state.items.slice(0,index),
              ...this.state.items.slice(index+1)
            ]
    })
      this.setState({
        items2:[...this.state.items2, value],
      })
  }

  //Move item from completed table to unccompleted Table
  undoMove=(index)=>{
    let value = this.state.items2[index];

// delete items from completed table
    this.setState({
      items2:[
        ...this.state.items2.slice(0,index),
        ...this.state.items2.slice(index+1)
      ]
    })
// add the item to unccompleted table

    this.setState({
      items:[...this.state.items, value ]
    })
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

 deleteItem = (nameItems, index) =>{
   this.setState ({
     [nameItems]: [
             ...this.state[nameItems].slice(0,index),
             ...this.state[nameItems].slice(index+1)
           ]
   })
 }

  render() {
    return (
      <div>
          <Table
            title = {this.state.title.unDone}
            items={this.state.items}
            moveItem = {this.moveItem}
            newItem= {this.state.newItem}
            changeInput={this.changeInput}
            showMess={this.state.showMess}
            addItem= {this.addItem}
            deleteItem={this.deleteItem}/>
          <div className="done-tb">
            <Table
              title = {this.state.title.done}
              items2 = {this.state.items2}
              undoMove = {this.undoMove}
              deleteItem={this.deleteItem} />
          </div>
        </div>

    );
  }
}

export default App;
