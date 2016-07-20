import React from 'react';

class ItineraryListComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainComponent">
        <h3 className="text-center">Your Itineraries</h3>
                  *LIST OF ITINERARIES COMPONENT*
            List of all of our itineraries we have created.
            example: array of objects  display: is date and title
      </div>
    );
  }
}

export default ItineraryListComponent;