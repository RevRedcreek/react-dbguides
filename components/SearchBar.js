import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

export default class SearchBar extends Component {

  render() {
    const {actions, adventures, auth, guides, errorMessage, location, params, route, routeParams, router, routes, routing} = this.props

    return (
      	<div className="row" id ="search-box">
        <div className="col-md-6">
          { location.pathname == "/adventures" && auth.isAuthenticated &&
            <Link to='adventures/create'>
                <span><i className='fa fa-plus'/></span>
            </Link>
          }
        </div>

          <div className="col-md-6">
              <div id="custom-search-input">
                  <div className="input-group col-md-12">
                      <input type="text" className="form-control input-sm" placeholder="Search by location or keyword" />
                      <span className="input-group-btn">
                          <button className="btn btn-info btn-lg" type="button">
                              <i className="glyphicon glyphicon-search"></i>
                          </button>
                      </span>
                  </div>
              </div>
          </div>
      	</div>
    )
  }
}
