import React from 'react';

class YelpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location:'San Francisco', results: 'Searching..' }

  }

  handleTermChange(term) {
    console.log(term);
  }

  onInputChange(term) {
    self = this;
    console.log(term);

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);

        self.setState({ results: this.responseText });

      }
    });

    xhr.open('GET', 'http://localhost:3000/AutocompleteYelp?search=' + term);
    xhr.send(data);

  }


  onLocationChange(term) {
    self = this;
    console.log(term);
     this.setState({ location: term });

  }

  handleSearch(term) {
   console.log("Searching")
  }



  render() {

    return (
      <div>
        *YELP*
        this is the yelp component; talks with yelp API to handle searches
        i.e.https://github.com/olalonde/node-yelp for yelp search examples
        location and type (term)
        build out component to contain time and detail field;
        should be able to relay information over to our itinerary


        <div className='container'>


          <form>

          <div className="location">
              <input placeholder='San Francisco' onChange={event => this.onLocationChange(event.target.value) } />
              {this.state.location}
            </div>

            <div className="search">
              <input onChange={event => this.onInputChange(event.target.value) } />
              {this.state.results}
            </div>

          <button className='searchButton' type='button' onClick={this.handleSearch}>Search</button>


          </form>

        </div>


      </div>

    );
  }
}

export default YelpComponent;

