import React from 'react';

class ItineraryEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <tr>
          <td>{this.props.eventInfo['begin']}</td>
          <td>{this.props.eventInfo['end']}</td>
          <td>{this.props.eventInfo['location']}</td>
          <td>{this.props.eventInfo['name']}</td>
          <td>{this.props.eventInfo['description']}</td>
          <td><button type="button" className="btn btn-xs btn-warning" name="edit" onClick={this.props.editEvent.bind(this, this.props.eventInfo['key'])}>Edit</button></td>
          <td><button type="button" className="btn btn-xs btn-danger" name="delete" onClick={this.props.deleteEvent.bind(this, this.props.eventInfo['key'])}>Delete</button></td>
      </tr>
    );
  }
}

class ItineraryComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  createXmlHttpRequestObject() {
    //xmlHttpRequest works for nearly everything but Internet Explorer
    //ActiveXObject works for Internet Explorer
    var xmlHttp;
    if(window.XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
    } else {
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
  }

  saveItinerary() {
    var data = "data=" + JSON.stringify({name: 'matt', list: this.props.list});
    var xhr = this.createXmlHttpRequestObject();
    xhr.withCredentials = false;
    xhr.open("POST", "http://52.90.139.249:3000/list");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }

  render() {

    return (
      <div className="mainComponent">
        <h3 className="text-center">Edit Your Plans</h3>

        <table className="table table-striped table-hover">
          <thead className="tableHeader">
            <tr className="tableHeader">
              <th>Begin</th>
              <th>End</th>
              <th>Location</th>
              <th>Name</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(event =>
              <ItineraryEvent key={event.key} eventInfo={event}
                editEvent={this.props.editEvent}
                deleteEvent={this.props.deleteEvent}/>
            )}
        </tbody>
        </table>
        <div className="center-align">
          <button className="btn btn-success"
            onClick={this.saveItinerary.bind(this)}
          >Save Itinerary</button>
        </div>
      </div>
    )
  }
};

export default ItineraryComponent;
