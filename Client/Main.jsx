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
      }],
      toggleOptions: false,
      eventId: null
    }
  }

  deleteEvent(eventId) {
    var list = [];
    this.state.list.forEach(function(val, key) {
      if (val['key'] !== eventId) {
        list.push(val);
      }
    });
    this.setState({list: list})
  }

  editEvent(eventId) {
    this.setState({toggleOptions: !this.state.toggleOptions});
    this.setState({eventId: eventId});
  }
   
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div id="yelp" className="col-md-6">
            <YelpComponent/>
          </div>

          <div id="itinerary" className="col-md-6">
            <ItineraryComponent list={this.state.list} 
              deleteEvent={this.deleteEvent.bind(this)} 
              editEvent={this.editEvent.bind(this)}/>
          </div> 
        </div>

        <div className="col-md-12" >
          <div className="col-md-6" id="map">
            <MapComponent />
          </div>

          <div className="col-md-6" id="itineraryList">
            <ItineraryListComponent />
          </div>
        </div>

          <div id="itineraryOptions">
            <ItineraryOptionsComponent />
          </div>

      </div>
    );
  }
}

export default Main;

