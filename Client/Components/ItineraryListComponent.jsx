import React from 'react';

class ItineraryListComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itineraries: [{key: 0, name: 'fun', list: [{fun: 'golden gate'}]}, {key: 1, name: 'More fun', list: [{fun: 'coit tower'}]}]
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
    xhr.open("GET", "http://52.90.139.249:3000/list");
    xhr.send(null);
  }

  onItineraryClick(activities) {
    console.log(activities);
    this.props.updateActivities(activities);
  }

  renderItineraries() {
    console.log(this.state.itineraries, '##########$#$#$#$#$#$#$#$#$#$#$')
    if (!this.state.itineraries) {return null;}
    return this.state.itineraries.map(itin => {
      console.log(itin);
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
