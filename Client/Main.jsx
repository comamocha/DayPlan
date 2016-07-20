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
        key: 0,
        begin: '7:00 P.M',
        end: '8:00 P.M',
        //possibly add date slot 
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'A couple friends and I are going to get wasted.'
      }, {
        key: 1,
        begin: '8:00 P.M',
        end: '12:00 P.M',
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'Continued drinking.'
      }, {
        key: 2,
        begin: '12:00 P.M',
        end: '1:00 P.M',
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'Continued drinking.'
      }, {
        key: 3,
        begin: '11:00 A.M',
        end: '12:00 P.M',
        location: '375 Bush St, San Francisco, CA 94104',
        name: 'Pagan Idol',
        description: 'Continued drinking.'
      }],
      toggleOptions: false,
      eventId: 3
    }
  }

  deleteEvent(eventId) {
    var list = [];
    var i = 0;
    this.state.list.forEach(function(val, key) {
      if (val['key'] !== eventId) {
        i++;
        val.key = i 
        list.push(val);
      }
    });
    this.setState({list: list})
  }

  editEvent(eventId) {
    this.setState({toggleOptions: !this.state.toggleOptions});
    this.setState({eventId: eventId});
  }

  receiveEditfromOptions(obj){
    var newList = [];
    this.state.list.forEach(function(val, key) {
      if (val.key !== obj.key) {  
        newList.push(val);
      } else {
        newList.push(obj)
      }
    });
    this.setState({
      list: newList,
      toggleOptions: !this.state.toggleOptions
    })
  }
   
  render() {
    var options;
    if(this.state.toggleOptions) {
      options= <ItineraryOptionsComponent 
                event={this.state.list[this.state.eventId]}
                edit={this.receiveEditfromOptions.bind(this)}/>
    } else {
      options = <div>nothing here</div>
    }
    return (
      <div>
        <div className="col-xs-12">
          <div id="yelp" className="col-xs-12 col-md-6">
            <YelpComponent/>
          </div>

          <div id="itinerary" className="col-xs-12 col-md-6">
            <ItineraryComponent list={this.state.list} 
              deleteEvent={this.deleteEvent.bind(this)} 
              editEvent={this.editEvent.bind(this)}/>
          </div> 
        </div>

        <div className="col-xs-12">
          <div className="col-xs-12 col-md-6" id="map">
            <MapComponent />
          </div>

          <div className="col-xs-12 col-md-6" id="itineraryList">
            <ItineraryListComponent />
          </div>
        </div>

          <div id="itineraryOptions">
            {options}
          </div>

      </div>
    );
  }
}

export default Main;

