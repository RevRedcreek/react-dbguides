import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'

export default class GuideInfo extends Component{

  handleComplete(){
    this.props.actions.completeGUIDE(this.props.GUIDE.id)

  }

  handleDelete(){
    this.props.actions.deleteGUIDE(this.props.GUIDE.id)
  }

  //todo - figure out why this doesnt work:
  //<img id="avatar" src={this.props.guide.avatar}/>

  render(){
    const {guide, actions} = this.props
    return (
        <div id="itemView" className="row">
          <Link to={`/guides/${guide.id}`} guide={guide} actions={actions}>
            <div className="col-sm-1">
              <FontAwesome
              className='fa-camera-retro'
              name='fa-camera-retro'
              size='5x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
              />
            </div>
            <div  className="col-sm-11">
                  <ul className='wordwrap'>
                    { Object.keys(guide).map(function (key) {
                      console.log('key: ', key);  // Returns key: 1 and key: 2
                      return (<li >{guide[key]}</li>);
                      },
                    this)}
                  </ul>
            </div>
          </Link>
        </div>
    )
  }
}
