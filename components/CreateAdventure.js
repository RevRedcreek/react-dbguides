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
        <div id="formViewExpanded" >
          <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
            <input
            className='form-control'
            type="text"
            placeholder="Id"
            name='id'
            value={this.state.id}
            onChange={this.handleChange.bind(this)}
            />
            <br/>

            <input
            className='form-control'
            type="text"
            placeholder="Location"
            name='location'
            value={this.state.location}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="date"
            placeholder="MM/DD/YY"
            name='date'
            value={this.state.date}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Duration"
            name='duration'
            value={this.state.duration}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Activity"
            name='activity'
            value={this.state.activity}
            onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
            className='form-control'
            type="text"
            placeholder="Description"
            name='description'
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
    var change = {}
    change[event.target.name] = event.target.value
    this.setState(Object.assign(...this.state, change))
  }

  handleSubmit(event) {
    event.preventDefault()
    // const email = this.refs.email
    // const password = this.refs.password
    // const creds = { email: email.value.trim(), password: password.value.trim() }
    this.props.actions.addADVENTURE(this.state)
    this.props.router.push('/adventures')
  }
}

CreateAdventure.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
