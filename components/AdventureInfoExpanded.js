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
    const {adventure} = this.props

    return (
        <div id="itemViewExpanded" className="media row">
          <div className="media-left row-sm-2">
            <FontAwesome
            className='fa-camera-retro'
            name='fa-camera-retro'
            size='5x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
            />
          </div>
          <div  className="media-body row-sm-9">
          { Object.keys(this.props.adventure).map(function (key) {
            console.log('key: ', key);  // Returns key: 1 and key: 2
            if(key == 'activity'){
              return (<h4 className="media-heading">{adventure[key]}</h4>);
            }
            else{return (<li >{adventure[key]}</li>);}
            },
          this)}
          </div>
          <div className="row-sm-1">
            <button id={adventure.id} onClick={this.handleCollapse.bind(this)} className='fa fa-minus' ></button>
          </div>
        </div>

    )
  }
  handleCollapse(event){
    event.preventDefault()
    console.log("event.target: ", event.target)
    this.props.actions.collapseAdventure(event.target.id)
  }

}
