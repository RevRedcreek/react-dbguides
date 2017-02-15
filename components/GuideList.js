import React, {Component} from 'react'
import GuideInfo from './GuideInfo'

export default class GuideList extends Component{

  render(){
    return (
      <div>
        <div  id="listView">
          <ul>
            {
              this.props.guides.list.map((guide) =>{
                return <GuideInfo key={guide.id} guide={guide} actions={this.props.actions}/>
              })
            }
          </ul>
        </div>
      </div>

    )
  }


}
