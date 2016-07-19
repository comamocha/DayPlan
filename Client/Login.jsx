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
         <div id="loginForm" className="col-md-6 col-md-offset-3">
            <form className="form-horizontal col-md-8 col-md-offset-2">
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
      );
    }
}

export default Login;