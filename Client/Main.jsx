import React from 'react';
import YelpComponent from './Components/YelpComponent.jsx';
import ItineraryComponent from './Components/ItineraryComponent.jsx';
import MapComponent from './Components/MapComponent.jsx';
import ItineraryListComponent from './Components/ItineraryListComponent.jsx';
import ItineraryOptionsComponent from './Components/ItineraryOptionsComponent.jsx';
import ToggleDisplay from 'react-toggle-display';



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
        val.key = i 
        i++;
        list.push(val);
      }
    });
    this.setState({list: list})
  }

  deleteEventOnOptions(eventId) {
    var list = [];
    var i = 0;
    this.state.list.forEach(function(val, key) {
      if (val['key'] !== eventId) {
        val.key = i; 
        i++;
        list.push(val);
      }
    });
    this.setState(
      {list: list,
       toggleOptions: !this.state.toggleOptions
      }
    )
  }

  editEvent(eventId) {
    this.setState({
      eventId: eventId,
      toggleOptions: !this.state.toggleOptions
    });
  }

  receiveEditfromOptions(obj){
    //rebuild itinerary; newList will contain new itinerary with edits
    var newList = [];
    this.state.list.forEach(function(val, key) {
    //iterate over original itinerary and add all non-edited events back as they were
      if (val.key !== obj.key) {  
        newList.push(val);
      } else {
        //this adds edited event to our rebuilt itinerary 
        newList.push(obj)
      }
    });
    //set the state with the new updated itinerary and toggledisplay to hide Itoptions component and show main components
    this.setState({
      list: newList,
      toggleOptions: !this.state.toggleOptions
    })
    console.log(this.state)
  }
   
  render() {
    //options contains our IToptions component w/functionality
    //if we are editing/creating an event then toggleOptions returns true
    //this provides Itoptions component the proper event using eventId to edit
    var options;
    if(this.state.toggleOptions) {
      options= <ItineraryOptionsComponent 
                event={this.state.list[this.state.eventId]}
                deleteEvent={this.deleteEventOnOptions.bind(this)}
                edit={this.receiveEditfromOptions.bind(this)}/>
    }
    return (
      <div>

        <ToggleDisplay show={!this.state.toggleOptions}>
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
            <MapComponent list={this.state.list}/>
          </div>

          <div className="col-xs-12 col-md-5 col-md-offset-7" id="itineraryList">
            <ItineraryListComponent />
          </div>

        </div>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.toggleOptions}>
          <div id="itineraryOptions" >
            {options}
          </div>

        </ToggleDisplay>

      </div>
    );
  }
}

export default Main;

