import React from 'react';


//Yelp Component renders yelp search form and results
class YelpComponent extends React.Component {
  constructor(props) {
    super(props);
    //state location= city you are searchin in
    //state results = results that returned from Yelp API (Made by us)
    this.state = { location: 'San Francisco', results: '',solutionObjects:'', currentOverlay:'' }
    //this.yelpReview.bind(this);
    this.props.addEvent.bind(this)
  }


  //Renders review for business 
  //ReviewsYelp -> 3 pics, 3 reviews, 
  // /ReviewsYelp?search=hunan-homes-restaurant-san-francisco
  yelpReview(businessesId) {
    self = this;
    //console.log(businessesId);

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log(this.responseText);
        var businessesArray = JSON.parse(this.responseText).reviews;
        //console.log(businessesArray);
        self.setState({
          currentOverlay:
          <div>
          <h3>{businessesId} </h3>
          {businessesArray[0].user.name} says {businessesArray[0].text}
          about 
          
          </div>
        })
      }
    })

    xhr.open('GET', 'http://localhost:3000/ReviewsYelp?search=' + businessesId);
    xhr.send(data);
    //console.log("clicked that guy",businessesId );

  };


  //Searches Yelp API and sets response in State
  onInputChange(term) {
    self = this;
    //console.log(term);

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log(this.responseText);

        //Todo: handle response codes from server
        //304 = Not Modified (cached version), 200 =	OK, 404 = Not Found 
        if (JSON.parse(this.responseText).total > 0) {
          var businessesArray = JSON.parse(this.responseText).businesses;

          //Iterates through the business Array results.
          //Sample returned Object:
          //{"rating": 4.0, "image_url": "..", "name": "..", "phone": "", "url": "..", 
          //"review_count": 2, "coordinates": {"latitude": 33, "longitude": 22}, "id": "..", 
          //"categories": [{"alias": "theater", "title": "Performing Arts"}], "location": {"city": 
          //"Daly City", "country": "US", "address2": "", "address3": "", "state": "CA", "address1": 
          //"", "zip_code": "94016"}}

          var solution = [];
          var solutionObjects = [];
// self.yelpReview.bind(self, businessesArray[i].id)
          for (var i = 0; i < businessesArray.length & i < 3; i++) {
            solutionObjects.push(businessesArray[i]);
            solution.push(
              <tr  placeholder={businessesArray[i].id}  onClick={self.props.addEvent.bind(self, businessesArray[i].location.address1 + ", " + businessesArray[i].location.city + ", " + businessesArray[i].location.state + " " + businessesArray[i].location.zip_code,
                businessesArray[i].name, 
                businessesArray[i].coordinates)}>
                <td> {businessesArray[i].name}  </td>
                <td> {businessesArray[i].location.city} , {businessesArray[i].location.state} </td>
                <td> {businessesArray[i].location.address1} </td>
                <td> {businessesArray[i].rating} </td>
              </tr>
            );

          }

          self.setState({
            results: <tbody> {solution} </tbody>

          });

        } else {
          self.setState({ results: <div> No results </div> });
        }

      }
    });

    xhr.open('GET', 'http://localhost:3000/BusinessYelp?term=' + term + '&location=' + this.state.location);
    xhr.send(data);
  }


  onLocationChange(term) {
    self = this;
    console.log(term);
    this.setState({ location: term });
  }



  render() {

    return (
      <div className="mainComponent">
        <h3 className="text-center">Plan Your Day</h3>
        <div className="text-center" className="col-xs-12">
         
          <form>
            <div className="location">
              <input placeholder='San Francisco' onChange={event => this.onLocationChange(event.target.value) } />
            </div>
            <div className="search">
              <input placeholder='Golden Gate Bridge' onChange={event => this.onInputChange(event.target.value) } />
            </div>
            
            <table className="table table-striped table-hover">
              <thead className="tableHeader">
                <tr className="tableHeader">
                  <th>Name </th>
                  <th>Location</th>
                  <th>Address</th>
                  <th>Rating</th>
                   
                </tr>
              </thead>
              {this.state.results}

            </table>


          </form>

          
          {this.state.currentOverlay}

          
           
        </div>

      


 
      </div>

    );
  }
}

export default YelpComponent;

