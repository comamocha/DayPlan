// This is written in es6 syntax
import React from 'react';

// 
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''}
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

/*
    ***************************************************
     * @handleUsernameChange
     * Uses component state to update username on change
     * e = represents the event.
    *****************************************************
*/
    handleUsernameChange(e) {
      this.setState({username: e.target.value});
      console.log(this.state.username);
    }

    handlePasswordChange(e) {
      this.setState({password: e.target.value});
      console.log(this.state.password);
    }

    handleSubmit(e) {
      console.log('username: ', this.state.username, '\npassword: ', this.state.password);
    }
   render() {
      return (
         <div className='container'>
          <nav className='navigation'></nav>
            <form>
              <input className='login' placeholder='Username' onChange={this.handleUsernameChange}/>
              <input className='password' type="password" placeholder='Password' onChange={this.handlePasswordChange}/>
              <div></div>
              <button className='signIn' type='button' onClick={this.handleSubmit}>Sign In</button>
              <button className='signUp'>Create a new account</button>
              <div>{this.props.username}</div>
            </form>
         </div>
      );
   }
}

export default App;
