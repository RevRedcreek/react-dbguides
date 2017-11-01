import React, { Component, PropTypes } from 'react'

export default class CreateAdventure extends Component {

  constructor(props, context){
      super(props, context)
      this.state = {
        location: '',
        date: '',
        duration: '',
        activity: '',
        description:'',
        id: 1
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
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="date"
            placeholder="MM/DD/YY"
            value={this.state.date}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Duration"
            value={this.state.duration}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Activity"
            value={this.state.activity}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Description"
            value={this.state.description}
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
    this.props.addADVENTURE()
    console.log('create adventure button pressed')
    event.preventDefault()
  }
}

CreateAdventure.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
