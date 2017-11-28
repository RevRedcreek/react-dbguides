import React, {Component} from 'react'
import AdventureInfo from './AdventureInfo'
import AdventureInfoExpanded from './AdventureInfoExpanded'
import RingLoader from 'react-spinner'


export default class AdventureList extends Component{

  constructor(props) {
      super(props)
      this.state = {
        loading: props.adventures.isFetching
      }
    }

  render(){
    return (
      <div>
        <div  id="listView">
            {this.props.adventures.isFetching ? <RingLoader id="spinnerContainer" color={'#4286f4'} loading={this.state.loading} />:
              this.props.adventures.list.map((adventure) =>{
                if(adventure.expanded){return <AdventureInfoExpanded key={adventure.id} adventure={adventure} actions={this.props.actions}/> }
                return <AdventureInfo key={adventure.id} adventure={adventure} actions={this.props.actions}/>
              })
            }
        </div>
        <button className="fa fa-refresh" onClick={this.fetchMoreAdventures.bind(this)} id={this.props.adventures.page}></button>
      </div>

    )
  }

  fetchMoreAdventures(event){
    console.log("even.target", event.target)
    event.preventDefault()
    this.props.actions.requestAdventures(event.target.id)
  }
}
