
import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default class AdventureInfo extends Component{

  handleComplete(){
    this.props.actions.completeADVENTURE(this.props.ADVENTURE.id)

  }

  handleDelete(){
    this.props.actions.deleteADVENTURE(this.props.ADVENTURE.id)
  }

  render(){
    // return (
    //   <li>
    //     <div>{this.props.adventure.location}
    //     </div>
    //   </li>
    // )

    // const { fetchAdventure, onSecretAdventureClick, isAuthenticated, adventure, isSecretAdventure } = this.props.actions
    const {adventure, isAuthenticated, errorMessage, isSecretQuote } = this.props
    var i = 0;
        return (
            <div id="itemView" className="row">
                <div className="col-md-4">
                  <FontAwesome
                  className='fa-camera-retro'
                  name='fa-camera-retro'
                  size='5x'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
                  />
                </div>
                <div  className="col-md-7">
                    <ul >

                      { Object.keys(this.props.adventure).map(function (key) {
                        if(key !== 'description'){ i = i + 1;
                          if(key == 'activity'){
                            return (<li ><h5 className="media-heading">{adventure[key]}</h5></li>);
                          }
                          else{return (<li >{adventure[key]}</li>);}
                        }
                        },
                      this)}
                    </ul>
                </div>
                <div  className="col-md-1">
                  <button className="fa fa-plus " onClick={this.handleExpand.bind(this)} id={adventure.id}/>
                </div>

            </div>
        )
  }

  handleExpand(event){
    event.preventDefault()
    console.log("event.target: ", event.target)
    this.props.actions.expandAdventure(event.target.id)
  }
}

// AdventureInfo.propTypes = {
//   onAdventureClick: PropTypes.func.isRequired,
//   onSecretAdventureClick: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired,
//   adventure: PropTypes.string,
//   isSecretAdventure: PropTypes.bool.isRequired
// }
