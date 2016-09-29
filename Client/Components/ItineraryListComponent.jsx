import React from 'react';

class ItineraryListComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itineraries: [{key: 0, name: 'Go to the famous bridge!', activities: [{name: 'golden gate', begin: '8AM', end: '1PM', gps: {lat: 37.8199, long: 122.4783}}]}, {key: 1, name: 'Check out Coit Tower!', activities: [{name: 'coit tower', begin: '1:30PM', end: '4PM', gps: {lat: 37.8024, long: 122.4058}}]}]
    }

    this.getItinerary.bind(this);
  }

  componentDidMount() {
    var self = this;
    self.getItinerary();
  }

  createXmlHttpRequestObject() {
    var xmlHttp;
    if(window.XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
    } else {
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
  }

  getItinerary() {
    var xhr = this.createXmlHttpRequestObject();
    var self = this;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        self.setState({
          itineraries: JSON.parse(this.responseText)
        })  
      }
    })
    xhr.open("GET", "http://127.0.0.1:3000/list");
    xhr.send(null); 
  }

  onItineraryClick(activities) {
    this.props.updateActivities(activities);
  }

  renderItineraries() {
    if (!this.state.itineraries) {return null;}
    return this.state.itineraries.map(itin => {
     return( <tr className='itinerary'> 
        <td>{itin.name}</td>
        <td><button type="button" className="btn btn-xs btn-success" name="edit" onClick={this.onItineraryClick.bind(this, itin.activities)}>Open Itinerary</button></td>
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
              <th>Open Itinerary</th>
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