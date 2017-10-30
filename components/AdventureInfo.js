
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

        return (
            <div id="itemView" className="row">
              <Link to={`/adventures/${adventure.id}`} adventure={`${adventure}`}>
                <div className="col-sm-1">
                  <FontAwesome
                  className='fa-camera-retro'
                  name='fa-camera-retro'
                  size='5x'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
                  />
                </div>
                <div  className="col-sm-11">
                  <div className="media">
                    <div className="media-left">
                      <ul className='wordwrap'>
                        { Object.keys(this.props.adventure).map(function (key) {
                          console.log('key: ', key);  // Returns key: 1 and key: 2
                          return (<li >{this.props.adventure[key]}</li>);
                          },
                        this)}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
        )
  }
}

// AdventureInfo.propTypes = {
//   onAdventureClick: PropTypes.func.isRequired,
//   onSecretAdventureClick: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired,
//   adventure: PropTypes.string,
//   isSecretAdventure: PropTypes.bool.isRequired
// }
