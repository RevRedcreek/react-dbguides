import React, { Component, PropTypes } from 'react'

export default class Login extends Component {

  render() {
    const { errorMessage } = this.props

    return (
      <div>
        <button onClick={this.handleSubmit.bind(this)} className = 'btn nav-button'>
          Login
        </button>
        {errorMessage &&
          <p>{errorMessage}</p>
        }
      </div>
    )
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
