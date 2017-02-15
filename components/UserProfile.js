import React, {Component} from 'react'
export default class UserProfile extends Component{

  render(){
    return (
      <div>
        {Object.keys(this.props.user).map((key) => {
            return <div key={this.props.user.id} key={key}>{key} : {this.props.user[key]}</div>
          })
        }
      </div>

    )
  }


}
