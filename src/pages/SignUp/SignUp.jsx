import React, { Component } from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="container">
        <SignUpForm {...this.props} />
      </div>
    );
  }
}

export default SignUpPage;