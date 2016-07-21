import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {Marker} from 'google-maps-react';


class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpMarker: null,
      itineraryMarkers: this.props.list
    }
    console.log(this.state.itineraryMarkers, '&*&*&(&*&((')
  }

    renderMarkers() {
    if (!this.state.itineraryMarkers) {return null;}
    return this.state.itineraryMarkers.map(place => {
      return <Marker 
              style='color:blue;'
              name={place.name}
              position={{lat: 37.778519, lng: -122.405640}} 
              />
    })
  }

  render() {
    return (
      <div className="mainComponent">
        <div className="actualMap">
          <h3 className="text-center">Visualize Your Day</h3>
          <Map google={this.props.google}> 
            {this.renderMarkers()}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy99yamlo6hMVjYfIC5IVNuomaitOMFPg'
})(MapComponent)