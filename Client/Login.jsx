import React, {Component} from 'react';

class Login extends React.Component {


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
        <div>
          <div id="videoBackgroundContainer">
            <video id="videoBackground" autoPlay muted loop>
              <source src="./lib/video/slowmoheadla.mp4" type="video/mp4" />
              <source src="./lib/video/slowmoheadla.ogv" type="video/ogv" />
              Your browser doesn't support HTML5 video.
            </video>
          </div>
          <div id="loginForm" className="col-xs-10 col-xs-offset-1 col-sm-8 
              col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <form className="form-horizontal col-xs-8 col-xs-offset-2">
              <fieldset>
                <div className="form-group">
                  <label className="control-label">Username</label>
                  <div>
                    <input type="text" className="form-control" placeholder="Username" onChange={this.handleUsernameChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Password</label>
                  <div>
                    <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange}/>
                  </div>
                </div>
                <button className='signIn btn btn-success' type='button' onClick={this.handleSubmit}>Sign In!</button>
                <div className="row">
                  <label className="control-label">Not a member?</label>
                </div>
                <div className="row">
                  <button className='signUp btn btn-danger'>Sign Up!</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      );
    }
}

export default Login;