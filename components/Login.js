import React, { Component, PropTypes } from 'react'

export default class Login extends Component {

  constructor(props, context){
      super(props, context)
      this.state = {
        inputEmail: '',
        inputPassword : ''
      }
    }

  render() {
    const { errorMessage } = this.props

    return (
      <div id="expandedViewBackground" >
        <div id="formViewExpanded" >
          <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
            <input
            className='form-control'
            type="text"
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.handleEmailChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Password"
            value={this.state.inputPassword}
            onChange={this.handleInputPassword.bind(this)}
            />
            <br/>

            <input type="submit" text="Submit" />
          </form>
        </div>
      </div>

    )
  }

  handleEmailChange(event){
    this.setState({
      inputEmail: event.target.value
    })
  }
  handleInputPassword(event){
    this.setState({
      inputPassword: event.target.value
    })
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

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
