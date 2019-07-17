import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from '../../utils/userService';

class LoginPage extends Component {
  state = {
    user: null,
    email: "",
    pw: ""
  };

  componentDidMount() {
        var self = this;
            self.setState({
               user: null
            })
    } 

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      console.log("login worked");
      this.props.handleSignupOrLogin();
      console.log("handlelogin worked");
      // Successfully signed up - show GamePage
      this.props.history.push("/");
      console.log("hi calvin");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="container">
          <div id="login-card" className="card-panel">
              <form onSubmit={this.handleSubmit}>
                  <header>Enter E-mail</header>
                    <input
                        type="email"
                        className="form-control"
                        // placeholder="Email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                        />
                  <header>Enter Password</header>
                    <input
                        type="password"
                        className="form-control"
                        // placeholder="Password"
                        value={this.state.pw}
                        name="pw"
                        onChange={this.handleChange}
                    />
                <div className="row">
                    <br/>
                    <button className="btn light-blue darken-4 col s5 m5 l5">Log In</button>
                    <div className="col s2 m2 l2"></div>
                    <Link className="btn light-blue darken-4 col s5 m5 l5" to="/signup">Sign Up</Link>
                </div>
              </form>
          </div>
      </div>
    );
  }
}

export default LoginPage;