import React, {Component} from 'react'

export default class UserLogin extends Component{

  constructor(props, context){
    super(props, context)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange (event) {
   this.setState({[event.target.name]: event.target.value})
 }

 render () {
   return (
     <form onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
       Email: <input type="text" email="email" /><br/>
       Password: <input type="text" name="password" /><br/>
       <button type="submit">Login</button>
     </form>
   )
 }

  handleSubmit(event){
    this.props.actions.requestLogin(this.state)
    event.preventDefault()
  }
}
