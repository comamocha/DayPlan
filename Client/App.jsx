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

        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/'>App</Link></li>
            <li><Link to='/Login'>Login</Link></li>
          </ul>
        </nav>

        <div id="main">
            {this.props.children}
        </div>

        <footer>
          <p>© 2016 COMAMOCHA, Inc.</p>
        </footer>

      </div>


    );
  }
}

export default App;
