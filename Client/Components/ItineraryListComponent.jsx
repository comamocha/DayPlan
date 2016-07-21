import React from 'react';

class ItineraryListComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itineraries: [{name: 'fun', startTime: '9:00AM', endTime: '10:00PM'}]
    }
  }

  getItinerary() {
    $.ajax({
      url: '/list',
      type: 'GET',
      success: function(data) {
        this.setState({
          itineraries: data
        })
      },
      error: function(xhr, status, err) {
        console.error('/list', status, err.toString());
      }
    });
  }

  renderItineraries() {
    if (!this.state.itineraries) {return null;}
    return this.state.itineraries.map(itin => {
     return( <tr className='itinerary'> 
        <td>{itin.name}</td>
        <td>{itin.startTime}</td>
        <td>{itin.endTime}</td>
      </tr> )
    })
  }

  render() {
    return (
      <div className="mainComponent">
        <h3 className="text-center">Your Itineraries</h3>
        <table className="table table-striped table-hover">
          <thead className="tableHeader">
            <tr className="tableHeader">
              <th>Name</th>
              <th>Begin</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItineraries()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default ItineraryListComponent;