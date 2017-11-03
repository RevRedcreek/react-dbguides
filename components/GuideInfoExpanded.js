import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'

export default class GuideInfoExpanded extends Component{

  render(){
    const {guide} = this.props
    console.log(guide)
    return (
        <div id="itemViewExpanded" className="row">
          <div className="row-sm-3">
            <FontAwesome
            className='fa-camera-retro'
            name='fa-camera-retro'
            size='5x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '1%' }}
            />
          </div>
          <div  className="row-sm-9">
          </div>
          <button id={guide.id} onClick={this.handleCollapse.bind(this)} ><i className='fa fa-minus'></i></button>
        </div>
    )
  }
  handleCollapse(event){
    event.preventDefault()
    console.log("event.target: ", event.target)
    this.props.actions.collapseGuide(event.target.id)
  }
}

// {
//   this.props.guides.list.map((guide) =>{
//     return <GuideInfo key={guide.id} guide={guide} actions={this.props.actions}/>
//   })
// }
// { Object.keys(guide).map(function (key) {
//   console.log('key: ', key);  // Returns key: 1 and key: 2
//   return (<li >{guide[key]}</li>);
//   },
// this)}
