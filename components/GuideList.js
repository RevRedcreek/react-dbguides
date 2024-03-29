import React, {Component} from 'react'
import GuideInfo from './GuideInfo'
import GuideInfoExpanded from '../components/GuideInfoExpanded'

export default class GuideList extends Component{
  render(){
    return (
      <div>
        <div  id="listView">
          <ul>
            {
              this.props.guides.list.map((guide) =>{
                if(guide.expanded){return <GuideInfoExpanded key={guide.id} guide={guide} actions={this.props.actions}/> }
                return <GuideInfo key={guide.id} guide={guide} actions={this.props.actions}/>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
