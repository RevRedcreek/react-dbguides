import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'

export default class GuideInfo extends Component{

  handleComplete(){
    this.props.actions.completeADVENTURE(this.props.ADVENTURE.id)

  }

  handleDelete(){
    this.props.actions.deleteADVENTURE(this.props.ADVENTURE.id)
  }

  render(){
    return (
      <li>
      <div id="itemView" className="row">
        <div className="col-sm-3">
        <FontAwesome
        className='fa-camera-retro'
        name='fa-camera-retro'
        size='5x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
      />
        <img id="avatar" src={this.props.guide.avatar}/>
        </div>
        <div  className="col-sm-9">
          <ul className='wordwrap'>
            { Object.keys(this.props.guide).map(function (key) {
              console.log('key: ', key);  // Returns key: 1 and key: 2
              return (<li >{this.props.guide[key]}</li>);
              },
            this)}
          </ul>
        </div>
      </div>
      </li>
    )
  }


}
