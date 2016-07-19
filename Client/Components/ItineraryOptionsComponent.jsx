import React from 'react';

var times = [ "12:00", "1:00", "2:00",
              "3:00", "4:00", "5:00",
              "6:00", "7:00", "8:00",
              "9:00", "10:00", "11:00" ]


class ItineraryOptionsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: this.props.event.key,
      begin: this.props.event.begin,
      end: "1:00 pm",
      location: this.props.event.location,
      name: this.props.event.name,
      description: this.props.event.description
    }
  }

  getEventFromItin (options) {
    this.setState({
      Location: options.location,
      begin: options.begin,
      end: options.end,
      Date: options.date,
      info: options.info,
      ItID: options.itId
    })
  }

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
    this.setState({info: e.target.value})  
  }

  render() {
    var obj = this.state;
    return (
      <div >
        <form >
          <div >
            <label>Location</label>
            <input placeholder="Location" type="text" defaultValue={this.state.location} onChange={this.editLocation.bind(this)}/>
          </div>
          <div>
            <label>Begin : </label>
            <select defaultValue={this.state.begin.split(' ')[0]} onChange={this.editBegin.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
            </select >
            <select defaultValue={this.state.begin.split(' ')[1]}>
              <option>am</option>
              <option>pm</option>
            </select>
          </div>
          <div>
            <label>End : </label>
            <select defaultValue={this.state.end.split(' ')[0]} onChange={this.editEnd.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
            </select>
            <select defaultValue={this.state.end.split(' ')[1]}>
              <option>am</option>
              <option>pm</option>
            </select>
          </div>
          <div >
            <label>Name :</label>
            <input placeholder="name" defaultValue={this.state.name} onChange={this.editName.bind(this)}/>
          </div>
          <div >
            <label >Description</label>
            <input placeholder="Description" defaultValue={this.state.description} onChange={this.editDescription.bind(this)}/>
          </div>
          <button type="button" onClick={this.props.edit.bind(this, obj)}>Submit</button>
          <button type="button" >Delete</button>
        </form>
      </div>
    );
  }
}

export default ItineraryOptionsComponent;