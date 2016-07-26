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
      list: [],
      toggleOptions: false,
      eventId: 3,
      itineraryName: 'testItin'
    }
  }

  //build out an add event function
  //passed down to yelp; which on click will add event to list
    //should provide adress, name of location, and gps coordinates
  //it will also toggleOptions to populate edit screen for event

  addEvent(address, name, gps){
    //create event obj to add to List in State
    var obj = {
      key: this.state.list.length,
      begin: '',
      end: '',
      location: address,
      name: name,
      description: '',
      gps: gps
    }
    //copy down original list into addToList
    var addToList = this.state.list.slice();
    //add new event to addToList
    addToList.push(obj)
    //use this.setState to add newly modified itinerary
    //also add EventId so edit component can grab right event to edit
    //toggleOptions switchs view to our edit screen
    this.setState({
      list: addToList,
      eventId: obj.key,
      toggleOptions: !this.state.toggleOptions
    })
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

  openItin(eventId) {
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

  updateItineraryActivities(activities) {
    this.setState({list: activities})
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
            <YelpComponent addEvent={this.addEvent.bind(this)}/>
          </div>

          <div id="itinerary" className="col-xs-12 col-md-6">
            <ItineraryComponent list={this.state.list} name={this.state.itineraryName}
              deleteEvent={this.deleteEvent.bind(this)}
              editEvent={this.editEvent.bind(this)}/>
          </div>

        </div>

        <div className="col-xs-12">
        <div className="col-xs-12 col-md-5" id="map">
          <MapComponent list={this.state.list}/>
        </div>

        <div className="col-xs-12 col-md-5 col-md-offset-2" id="itineraryList">
          <ItineraryListComponent updateActivities={this.updateItineraryActivities.bind(this)}/>
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

