import React, { Component } from "react";
import './TodoForm.css'
import { v4 as uuidv4 } from 'uuid';


class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            todo:[],
        }
        this.formSubmitted = this.formSubmitted.bind(this);
        // this.toggoleTodoItem = this.toggoleTodoItem.bind(this);
    }

  formSubmitted(e) {
    e.preventDefault();
    // console.log("hey your form is submitted!");
    // console.log("input value", e.target.newTodo.value);

    this.setState({todo: this.state.todo.concat(e.target.newTodo.value)});
  }
  render() {
      console.log("this is todo list",this.state.todo)
    return (
      <div>
        <h1>Hey here we add Todo</h1>
        <form onSubmit={this.formSubmitted}>
          <label>New Todo</label>
          <input name="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
            {this.state.todo.map((item,index)=>{
                return(
                    <div className="container">
                         <li key={uuidv4()}>{index}{item}</li>
                         <span type="button">done</span>
                    </div>
                );
            })
            }
        </ul>
      </div>
    );
  }
}

export default TodoForm;
