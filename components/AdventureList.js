import React, {Component} from 'react'
import { Link } from 'react-router'
import AdventureInfo from './AdventureInfo'

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
        <Link to='adventures/create'><span><i className='fa fa-plus'/></span></Link>
      </div>

    )
  }
}
