import React, { Component, PropTypes } from 'react'

export default class SearchBar extends Component {

  render() {

    return (
      	<div className="row" id ="search-box">
          <div className="col-md-6"/>
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

// <div className="well">
//   <form className="form-inline">
//     <div className="form-group">
//       <label for="location">Location:</label>
//       <input type="location" class="form-control" id="email"/>
//     </div>
//     <div className="form-group">
//       <label for="keyword">Activity:</label>
//       <input type="keyword" class="form-control" id="keyword"/>
//     </div>
//     <button type="submit" className="btn btn-default">Search</button>
//   </form>
// </div>
// <div id="imaginary_container">
//    <div className="input-group stylish-input-group">
//        <input type="text" className="form-control"  placeholder="Search" />
//        <span className="input-group-addon">
//            <button type="submit">
//                <span className="glyphicon glyphicon-search"></span>
//            </button>
//        </span>
//    </div>
//  </div>
