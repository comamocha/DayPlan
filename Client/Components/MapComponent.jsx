import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {Marker} from 'google-maps-react';


class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpMarker: null
    }
  }

    renderMarkers(itineraryMarkers) {
    if (!itineraryMarkers) {return null;}
    return (
      itineraryMarkers.map(place => {
        console.log(place)
        return <Marker 
                name={place.name}
                position={{lat: place.gps.latitude, lng: place.gps.longitude}} 
                />
      })
    )
  }

  render() {
    var itineraryMarkers = this.props.list;
    return (
      <div className="mainComponent">
        <div className="actualMap">
          <h3 className="text-center">Visualize Your Day</h3>
          <Map google={this.props.google}> 
            {this.renderMarkers(itineraryMarkers)}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy99yamlo6hMVjYfIC5IVNuomaitOMFPg'
})(MapComponent)