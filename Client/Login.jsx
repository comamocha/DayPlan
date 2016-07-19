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
         <div className='container'>
            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <label for="inputEmail" className="col-lg-2 control-label">Username</label>
                  <div className="col-lg-10">
                    <input type="text" className="form-control" id="focusedInput" placeholder="Username" onChange={this.handleUsernameChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputPassword" className="col-lg-2 control-label">Password</label>
                  <div className="col-lg-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={this.handlePasswordChange}/>
                  </div>
                </div>
                <button className='signIn btn btn-success' type='button' onClick={this.handleSubmit}>Sign In</button>
                <button className='signUp btn btn-danger'>Sign Up</button>
              </fieldset>
            </form>
         </div>
      );
    }
}

export default Login;