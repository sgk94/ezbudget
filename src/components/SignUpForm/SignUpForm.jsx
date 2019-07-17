import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from '../../utils/userService';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConf: ""
    };
  }

  handleChange = e => {
    // this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      console.log("signup worked");
      this.props.handleSignupOrLogin();
      console.log("handlesignup worked");
      // Successfully signed up - show GamePage
      // this.props.history.push("/");
      window.location = "/";
      console.log("window worked");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this.props.updateMessage(err.message);
      console.log("shit broke");
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
     <>   
        <h1>Sign Up</h1>
      <div id="signup-card" className="card-panel">
        <form onSubmit={this.handleSubmit} autoComplete="new-password">
            <header>Name</header>
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                />
            <br/>
            <header>Email</header>
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            <br/>
            <header>Password</header>
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            <br/>
            <header>Confirm Password</header>
              <input
                type="password"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            <div className="row">
            <br/>
              <button className="btn light-blue darken-4 col s5 m5 l5" disabled={this.isFormInvalid()}>
                Sign Up
              </button>
              <div className="col s2 m2 l2"></div>
              <Link className="btn light-blue darken-4 col s5 m5 l5" to="/login">Cancel</Link>
            </div>
          </form>
      </div>
      </>
    );
  }
}

export default SignupForm;