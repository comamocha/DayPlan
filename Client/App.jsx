// This is written in es6 syntax
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'



class App extends React.Component {

  constructor(props) {
    super(props);
    
  }


  render() {
    return (

      <div>
        <Link to='/home'>Home</Link>&nbsp;
        <Link to='/'>App</Link>&nbsp;
        <Link to='/Login'>Login</Link>&nbsp;
        {this.props.children}
      </div>


    );
  }
}

export default App;
