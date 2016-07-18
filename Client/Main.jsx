import React from 'react';
import YelpComponent from './YelpComponent.jsx';
import ItineraryComponent from './ItineraryComponent.jsx';
import MapComponent from './MapComponent.jsx'
import ItineraryListComponent from './ItineraryListComponent.jsx'
import ItineraryOptionsComponent from './ItineraryOptionsComponent.jsx'


class Main extends React.Component {
   
    render() {
        return (
            <div>
            <div id="yelp">
              <YelpComponent/>
            </div>
            <div id="itinerary">
              <ItineraryComponent/>
            </div>
              
            <div>
     
              <MapComponent id="map"/>
            </div>
            <div>
              <ItineraryListComponent id="itineraryList"/>
            </div>
            <div>
              <ItineraryOptionsComponent id="itineraryOptions"/>
            </div>
               </div>

        );
    }
}

export default Main;

