import React, {Component} from 'react'
export default class TodoInput extends Component{

  constructor(props, context){
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
        type="text"
        placeholder="What do you need to do?"
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}
        />
        <input type="submit" text="Submit" />
      </form>

      </div>
    )
  }
  handleChange(event){
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event){
    this.props.addTodo(this.state.inputText)
    console.log('submit button pressed')
    event.preventDefault()
  }
}
