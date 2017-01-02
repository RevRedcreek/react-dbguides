import React, {Component} from 'react'
export default class UserInfo extends Component{

  handleNewId(){
    this.props.actions.createNewUserId()
  }
  handleNewIdIfOdd(){
    this.props.actions.createNewUserIdIfOdd()
  }
  handleNewIdASync(){
    this.props.actions.createNewUserIdASync()
  }
  render(){
    return (
      <li>
        <div>
        <div>username: {this.props.user.username}</div>
        <div>id: {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update Id</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>New ID if odd</button>
        <button onClick={this.handleNewIdASync.bind(this)}>New ID Async</button>
        </div>
      </li>
    )
  }


}
