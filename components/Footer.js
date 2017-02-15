import React, { Component } from 'react'
import { Link } from 'react-router'


const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

class Footer extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    // const { user } = this.props
    const { isAuthenticated, errorMessage, actions } = this.props

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">

            </div>

        </div>
      </nav>
    )
  }
}

export default Footer
