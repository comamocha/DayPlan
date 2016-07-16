import React from 'react';

class YelpComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
             *YELP*
              this is the yelp component; talks with yelp API to handle searches
              i.e. https://github.com/olalonde/node-yelp for yelp search examples
              location and type(term)
              build out component to contain time and detail field;
              should be able to relay information over to our itinerary
        </div>
    );
  }
}

export default YelpComponent;
