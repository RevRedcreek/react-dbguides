import React, {Component} from 'react'
export default class TodoItem extends Component{

  handleComplete(){
    this.props.actions.completeTodo(this.props.todo.id)

  }

  handleDelete(){
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render(){
    return (
      <li>
        <div>{this.props.todo.text}
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <button onClick={this.handleComplete.bind(this)}>Complete</button>
        </div>
      </li>
    )
  }


}
