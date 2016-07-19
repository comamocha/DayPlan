import React from 'react';
import YelpComponent from './Components/YelpComponent.jsx';
import ItineraryComponent from './Components/ItineraryComponent.jsx';
import MapComponent from './Components/MapComponent.jsx'
import ItineraryListComponent from './Components/ItineraryListComponent.jsx'
import ItineraryOptionsComponent from './Components/ItineraryOptionsComponent.jsx'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
        key: 1,
        begin: '7:00pm',
        end: '8:15pm',
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'A couple friends and I are going to get wasted.'
      }, {
        key: 2,
        begin: '8:15pm',
        end: '12:00pm',
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'Continued drinking.'
      }, {
        key: 3,
        begin: '12:00pm',
        end: '12:00pm',
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'Continued drinking.'
      }, {
        key: 4,
        begin: '1:00am',
        end: '12:00pm',
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'Continued drinking.'
      }]
    }
  }
   
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div id="yelp" className="col-md-6">
            <YelpComponent/>
          </div>

          <div id="itinerary" className="col-md-6">
            <ItineraryComponent list={this.state.list}/>
          </div> 
        </div>

        <div className="col-md-12">
          <div className="col-md-6">
            <MapComponent id="map"/>
          </div>

          <div className="col-md-6">
            <ItineraryListComponent id="itineraryList"/>
          </div>
        </div>

          <div>
            <ItineraryOptionsComponent id="itineraryOptions"/>
          </div>

      </div>
    );
  }
}

export default Main;

