import React, {Component} from 'react'
import { Link } from 'react-router'
// import rafting from '../assets/images/rafting_trip.jpg'
// import elissa from '../assets/images/elissa_on_car.jpg'
// import skiing from '../assets/images/skiing2.jpg'
import homeBackground from '../assets/images/main-header.jpg'

export default class Home extends Component{

  render() {
    return <div className="row text-center">
      <div id="welcome">
        <div>
        <h1>READY FOR YOUR NEXT ADVENTURE ?</h1>
          <p>
          Welcome to dirtbag guides, a service that connects you with the adventure you crave. We host wilderness guides, instructors, and everyday people with the skills and equipment to get you out exploring your world and living a fuller life. Browse our listings for FREE and see what adventures await.
          </p>
        </div>
        <button className = 'btn nav-button'>
          Browse
        </button>
      </div>
    </div>
  }
}
