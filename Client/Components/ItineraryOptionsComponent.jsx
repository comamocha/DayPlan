import React from 'react';

var times = [ "12:00", "1:00", "2:00",
              "3:00", "4:00", "5:00",
              "6:00", "7:00", "8:00",
              "9:00", "10:00", "11:00" ]


class ItineraryOptionsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Location: "Hollywood",
      Start: "1:00",
      End: "2:00",
      Date: "7/19/2016",
      Info: "See the stars",
      ItID: 12,
      EventId: 1
    }
  }

  getEventFromItin (options) {
    this.setState({
      Location: options.location,
      Start: options.start,
      End: options.end,
      Date: options.date,
      Info: options.info,
      ItID: options.itId
    })
  }


  // editItin(e){
  //   console.log(e.target.placeholder)
  //   this.setState({e.target.placeholder: e.target.value})  
  // }

  editLocation(e){
    this.setState({Location: e.target.value})  
  }

  editStart(e){
    this.setState({Start: e.target.value})  
  }

  editEnd(e){
    this.setState({End: e.target.value})  
  }

  editDate(e){
    this.setState({Date: e.target.value})  
  }

  editInfo(e){
    this.setState({Info: e.target.value})  
  }


  sendEventToMain(){
    //collect data from our state
    //send this date back to toplevel state so use a passed down function aka this.props.someFunction
    var obj = this.state;
    // this.props.someFunction(obj)
    console.log(obj)
  }

  render() {
    return (
      <div >
        <form >
          <div >
            <label>Location</label>
            <input placeholder="Location" type="text" defaultValue={this.state.Location} onChange={this.editLocation.bind(this)}/>
          </div>
          <div>
            <label>Start : </label>
            <select defaultValue={this.state.Start} onChange={this.editStart.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
            </select>
            <select >
              <option>A.M.</option>
              <option>P.M.</option>
            </select>
          </div>
          <div>
            <label>End : </label>
            <select defaultValue={this.state.End} onChange={this.editEnd.bind(this)}> 
              {times.map( (time) => {
                return <option>{time}</option>
              })} 
            </select>
            <select>
              <option>A.M.</option>
              <option>P.M.</option>
            </select>
          </div>
          <div >
            <label>Date :</label>
            <input placeholder="Date" defaultValue={this.state.Date} onChange={this.editDate.bind(this)}/>
          </div>
          <div >
            <label >Info</label>
            <input placeholder="Info" defaultValue={this.state.Info} onChange={this.editInfo.bind(this)}/>
          </div>
          <button type="button" onClick={this.sendEventToMain.bind(this)}>Submit</button>
          <button type="button" >Delete</button>
        </form>
      </div>
    );
  }
}

export default ItineraryOptionsComponent;