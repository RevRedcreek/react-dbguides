import React, { Component } from 'react'
import { Link } from 'react-router'
import Logo from '../dist/public/icons/nav-logo.png'
require('../assets/stylesheets/main.scss')

class Dashboard extends Component {
  render() {
    const { courses } = this.props

    return (
      <div>
        <h2>Welcome the Dirtbag Guides</h2>
        <p>
          This is where we tell people about dirtbag guides.
        </p>
        <h2>Adventures</h2>{' '}
        <ul>
          {this.props.adventures.map(adventure => (
            <li key={adventure.id}>
              <Link to={`/adventures/${adventure.id}`}>{adventure.location}</Link>
            </li>
          ))}
        </ul>
        <div>
          <img src={require='../dist/public/icons/nav-logo.png'} width='27px'/>
        </div>
      </div>
    )
  }
}

export default Dashboard
