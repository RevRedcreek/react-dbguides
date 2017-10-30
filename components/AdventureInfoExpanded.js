import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'

export default class AdventureInfoExpanded extends Component{

  handleComplete(){
    this.props.actions.completeADVENTURE(this.props.ADVENTURE.id)
  }

  handleDelete(){
    this.props.actions.deleteADVENTURE(this.props.ADVENTURE.id)
  }
  //todo - figure out why this doesnt work:
  //<img id="avatar" src={this.props.guide.avatar}/>

  render(){
    return (
      <div id="expandedViewBackground">
        <div id="itemViewExpanded" className="row">
          <div className="row-sm-3">
            <FontAwesome
            className='fa-camera-retro'
            name='fa-camera-retro'
            size='5x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
            />
          </div>
          <div  className="row-sm-9">
          { Object.keys(this.props.adventure).map(function (key) {
            console.log('key: ', key);  // Returns key: 1 and key: 2
            return (<span >{this.props.adventure[key]}</span>);
            },
          this)}
          </div>
        </div>
      </div>

    )
  }


}
