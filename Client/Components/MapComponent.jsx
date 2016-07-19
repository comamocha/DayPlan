import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react'


class MapComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="actualMap">
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy99yamlo6hMVjYfIC5IVNuomaitOMFPg'
})(MapComponent)