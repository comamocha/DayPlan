import React from 'react';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        google maps should populate only items listed in our itinerary;
        each item will be represented by a pin/icon indicating location name and time
        example of google maps:
       <a href='https://postimg.org/image/jer45vu6f/' target='_blank'><img src='https://s31.postimg.org/jer45vu6f/Screen_Shot_2016_07_15_at_3_41_34_PM.png' border='0' alt='postimage'/></a>
      </div>
    );
  }
}

export default MapComponent;