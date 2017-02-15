import React, {Component} from 'react'
import AdventureInfo from './AdventureInfo'
// import MapContainer from './MapContainer'

export default class AdventureList extends Component{

  render(){
    return (
      <div>
        <div  id="listView">
            {
              this.props.adventures.list.map((adventure) =>{
                return <AdventureInfo key={adventure.id} adventure={adventure} actions={this.props.actions}/>
              })
            }
        </div>
      </div>

    )
  }


}
