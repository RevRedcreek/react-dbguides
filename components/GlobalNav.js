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
        <div className="container-fluid" id = "globalNav">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand "><img src={Logo} width='250px'/></Link>{' '}

          </div>
          <ul className="nav navbar-nav navbar-left">
            <li><Link to="/guides" onlyActiveOnIndex="true" style={{ margin: '7px'}}>Guides</Link></li>
            <li><Link to="/adventures" onlyActiveOnIndex="true" style={{ margin: '7px'}}>Adventures</Link></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login" onlyActiveOnIndex="true" style={{ margin: '7px'}} >Login <div className='fa fa-sign-in'/> </Link></li>
            <li><Link to="/signup" onlyActiveOnIndex="true" style={{ margin: '7px'}} >Sign Up <div className='fa fa-user-plus'/> </Link></li>
          </ul>


        </div>
      </nav>
    )
  }
}

// <div style={{ float: 'right',  margin: '15px'}}>
//   {!isAuthenticated &&
//             <Login
//               errorMessage={errorMessage}
//             />
//           }
//           {isAuthenticated &&
//             <Logout onLogoutClick={creds => actions.logoutUser(creds)} />
//           }
//   </div>
export default GlobalNav
