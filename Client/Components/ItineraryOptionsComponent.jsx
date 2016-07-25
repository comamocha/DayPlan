import React from 'react';

var times = [ "12:00 A.M", "1:00 A.M", "2:00 A.M",
              "3:00 A.M", "4:00 A.M", "5:00 A.M",
              "6:00 A.M", "7:00 A.M", "8:00 A.M",
              "9:00 A.M", "10:00 A.M", "11:00 A.M",
              "12:00 P.M", "1:00 P.M", "2:00 P.M",
              "3:00 P.M", "4:00 P.M", "5:00 P.M",
              "6:00 P.M", "7:00 P.M", "8:00 P.M",
              "9:00 P.M", "10:00 P.M", "11:00 P.M" ]


class ItineraryOptionsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: this.props.event.key,
      begin: this.props.event.begin,
      end: this.props.event.end,
      location: this.props.event.location,
      name: this.props.event.name,
      description: this.props.event.description
    }
  }


  //following edit functions take inputted values and stores them to the state
  editLocation(e){
    this.setState({location: e.target.value})  
  }

  editBegin(e){
    this.setState({begin: e.target.value})  
  }

  editEnd(e){
    this.setState({end: e.target.value})  
  }

  editName(e){
    this.setState({name: e.target.value})  
  }

  editDescription(e){
    this.setState({description: e.target.value})  
  }

  render() {

    //this allows us to pass the edited event back to our main.jsx state which is then reflected on our itinerary component
    var obj = this.state;
    return (
      <div >
        <form className="optionsForm">
          <div >
            <label className="optionsLabel">Name  </label>
            <p>
            <input className="optionsInput1" placeholder="name" defaultValue={this.state.name} onChange={this.editName.bind(this)}/>
            </p>
          </div>
          <div >
            <label className="optionsLabel">Location </label>
            <p>
            <input className="optionsInput2" placeholder="Location" type="text" defaultValue={this.state.location} onChange={this.editLocation.bind(this)}/>
            </p>
          </div>
          <div >
            <label className="optionsLabel">Description </label>
            <p>           
            <input className="optionsInput" placeholder="Description" defaultValue={this.state.description} onChange={this.editDescription.bind(this)}/>
            </p>
          </div>
          <div>
            <label className="optionsLabel">Begin  </label>
            <select  defaultValue={this.state.begin} onChange={this.editBegin.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
            </select >
          </div>
          <div>
            <label className="optionsLabel">End  </label>
            <select  defaultValue={this.state.end} onChange={this.editEnd.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
            </select>  
          </div>
          <button className="optionsButton btn btn-success btn-small" type="button" onClick={this.props.edit.bind(this, obj)}>Submit</button>
          <button className="optionsButton btn btn-danger btn-small" type="button" onClick={this.props.deleteEvent.bind(this, obj.key)}>Delete</button>
        </form>
      </div>
    );
  }
}

export default ItineraryOptionsComponent;