import React, { Component, PropTypes } from 'react'

export default class RegisterUser extends Component {

  constructor(props, context){
      super(props, context)
      this.state = {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword:'',
        email: ''
      }
    }

  render() {
    const { errorMessage } = this.props

    return (
      <div id="expandedViewBackground" >
        <div id="itemViewExpanded" >
          <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
            <input
            className='form-control'
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="password"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input type="submit" text="Submit" />
          </form>
        </div>
      </div>

    )
  }

 handleChange (event) {
   console.log('old state:', this.state)
   this.setState({[event.target.name]: event.target.value})
   console.log('new state:', this.state)

 }
  handleSubmit(event) {
    // const email = this.refs.email
    // const password = this.refs.password
    // const creds = { email: email.value.trim(), password: password.value.trim() }
    this.props.onLoginClick()
    console.log('submit button pressed')
    event.preventDefault()
  }
}

RegisterUser.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
