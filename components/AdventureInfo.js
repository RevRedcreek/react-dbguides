
import React, {Component, PropTypes} from 'react'
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

    const { fetchAdventure, onSecretAdventureClick, isAuthenticated, adventure, isSecretAdventure } = this.props.actions

        return (
          <div id="itemView">
            <div className='col-sm-3'>
              <button onClick={fetchAdventure} className="btn btn-primary">
                Get Adventure
              </button>
            </div>

            { isAuthenticated &&
              <div className='col-sm-3'>
                <button onClick={onSecretAdventureClick} className="btn btn-warning">
                  Get Secret Adventure
                </button>
              </div>
            }

            <div className='col-sm-6'>
              { adventure && !isSecretAdventure &&
                <div>
                  <blockadventure>{adventure}</blockadventure>
                </div>
              }

              { adventure && isAuthenticated && isSecretAdventure &&
                <div>
                  <span className="label label-danger">Secret Adventure</span>
                  <hr/>
                  <blockadventure>
                    {adventure}
                  </blockadventure>
                </div>
              }
            </div>
          </div>
        )
  }
}

AdventureInfo.propTypes = {
  onAdventureClick: PropTypes.func.isRequired,
  onSecretAdventureClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  adventure: PropTypes.string,
  isSecretAdventure: PropTypes.bool.isRequired
}
