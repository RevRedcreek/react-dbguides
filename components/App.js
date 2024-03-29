import React, {Component, PropTypes} from 'react'
import GlobalNav from './GlobalNav'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import SearchBar from './SearchBar'
import FontAwesome from 'react-fontawesome'
require('../assets/stylesheets/main.scss')

class App extends Component{

  render(){
    //pass props to children
    let childrenWithProps //expecting home, guidelist, or adventure list components
    if (this.props.children){
      childrenWithProps = React.Children.map(this.props.children,
         (child) => React.cloneElement(child, {...this.props}));
    }
    const {actions, adventures, auth, guides, errorMessage, location, params, route, routeParams, router, routes, routing} = this.props

    return (
      <div>
        <GlobalNav
          isAuthenticated={auth.isAuthenticated}
          errorMessage={errorMessage}
          user={auth.user}
          actions={actions}
        />

        <div className="row homepage">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <SearchBar
            auth={auth}
            errorMessage={errorMessage}
            user={auth.user}
            actions={actions}
            location={location}
            />
              {childrenWithProps}
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    )//return
  }//render
}

App.propTypes = {
  auth: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    user : PropTypes.object
  }),
  guides: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired
  }),
  adventures: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired
  }),
  errorMessage: PropTypes.string
}

function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
