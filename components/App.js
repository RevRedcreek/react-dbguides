import React, {Component} from 'react'
import TextInput from './TodoInput'
import TodoList from './TodoList'
import UserInfo from './UserInfo'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class App extends Component{

  render(){
    return (
      <div className = 'appComponent'>
        <div> Todo List </div>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <TextInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )

  }

}
function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
