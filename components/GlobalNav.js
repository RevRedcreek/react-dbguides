import React, { Component } from 'react'
import { Link } from 'react-router'
import Login from './Login'
import Logout from './Logout'
import Logo from '../assets/images/nav-logo.png'


const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    // const { user } = this.props
    const { isAuthenticated, errorMessage, actions } = this.props

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand "><img src={Logo} width='250px'/></Link>{' '}

          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/guides" className="active" style={{ margin: '7px'}}>Guides</Link></li>
            <li><Link to="/adventures" className="active" style={{ margin: '7px'}}>Adventures</Link></li>
          </ul>
          <div style={{ float: 'right',  margin: '15px'}}>
            {!isAuthenticated &&
                      <Login
                        errorMessage={errorMessage}
                        onLoginClick={ () => actions.login()}
                      />
                    }
                    {isAuthenticated &&
                      <Logout onLogoutClick={creds => actions.logoutUser(creds)} />
                    }
            </div>

        </div>
      </nav>
    )
  }
}

export default GlobalNav