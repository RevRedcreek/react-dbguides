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
    var i = 0;

    return (
        <div id="itemView" className="row">
            <div className="col-sm-2">
              <FontAwesome
              className='fa-camera-retro'
              name='fa-camera-retro'
              size='5x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
              />
            </div>
            <div  className="col-sm-9">
                  <ul className='wordwrap'>
                    { Object.keys(guide).map(function (key) {
                      i = i + 1;
                      if(key == 'username'){
                        return (<li ><h5 className="media-heading">{guide[key]}</h5></li>);
                      }
                      else{return (<li >{guide[key]}</li>);}
                      },
                    this)}
                  </ul>
            </div>
        <div>
          <button className="fa fa-plus col-sm-1 " onClick={this.handleExpand.bind(this)} id={guide.id}/>
        </div>

        </div>
    )
  }

  handleExpand(event){
    event.preventDefault()
    console.log("event.target: ", event.target)
    this.props.actions.expandGUIDE(event.target.id)
  }
}

// <div id="itemView" className="row">
//   <Link to={`/guides/${guide.id}`} guide={guide} actions={actions}>
//     <div className="col-sm-1">
//       <FontAwesome
//       className='fa-camera-retro'
//       name='fa-camera-retro'
//       size='5x'
//       style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  padding: '10px' }}
//       />
//     </div>
//     <div  className="col-sm-11">
//           <ul className='wordwrap'>
//             { Object.keys(guide).map(function (key) {
//               i = i + 1;
//               return (<li key={i} >{guide[key]}</li>);
//               },
//             this)}
//           </ul>
//     </div>
//   </Link>
// </div>
