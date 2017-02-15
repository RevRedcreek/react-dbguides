import React, {Component} from 'react'

export default class CreateUser extends Component{

  constructor(props, context){
    super(props, context)
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword:''
    }


  }

  handleChange (event) {
   console.log('old state:', this.state)
   this.setState({[event.target.name]: event.target.value})
   console.log('new state:', this.state)

 }

 render () {
   return (
     <form onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
       Name: <input type="text" name="firstName" /><br/>
       Last Name: <input type="text" name="lastName" /><br/>
       Email: <input type="email" name="email" /><br/>
       Password: <input type="text" name="password" /><br/>
       Confirm Password: <input type="text" name="confirmPassword" /><br/>
       <button type="submit">Sign Up!</button>
     </form>
   )
 }

  handleSubmit(event){
    this.props.actions.createNewUser(this.state)
    // this.props.addADVENTURE(this.state.inputText)
    console.log('submit button pressed')
    event.preventDefault()
  }
}
