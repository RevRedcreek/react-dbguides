import React, {Component} from 'react'
import GOOGLE_MAPS_API from '../.env'
import Map from './Map'
import {GoogleApiWrapper} from 'google-maps-react'



export class MapContainer extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div style={style}>
        <Map google={this.props.google}>

        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBuWnUQVyydJgvgjVfCHwglZEBxZ7U86V0'
})(MapContainer)
