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

  // getEventFromItin (options) {
  //   this.setState({
  //     Location: options.location,
  //     begin: options.begin,
  //     end: options.end,
  //     Date: options.date,
  //     info: options.info,
  //     ItID: options.itId
  //   })
  // }

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
            <select defaultValue={this.state.begin} onChange={this.editBegin.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
            </select >
          </div>
          <div>
            <label>End : </label>
            <select defaultValue={this.state.end} onChange={this.editEnd.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
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