import React from 'react';
import YelpComponent from './YelpComponent.jsx';
import ItineraryComponent from './ItineraryComponent.jsx';
import MapComponent from './MapComponent.jsx'
import ItineraryListComponent from './ItineraryListComponent.jsx'

class Main extends React.Component {
   
    render() {
        return (
            <div>
            <div>
              <YelpComponent/>
            </div>
            <div>
              <ItineraryComponent/>
            </div>
              
            <div>
     
              <MapComponent/>
            </div>
            <div>
              <ItineraryListComponent/>
            </div>
               </div>
        );
    }
}

export default Main;

