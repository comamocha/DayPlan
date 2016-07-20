import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react'


class MapComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainComponent">
        <div className="actualMap">
          <h3 className="text-center">Visualize Your Day</h3>
          <Map google={this.props.google} />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy99yamlo6hMVjYfIC5IVNuomaitOMFPg'
})(MapComponent)