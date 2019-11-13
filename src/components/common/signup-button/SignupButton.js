import React from "react";
import {Link} from "react-router-dom";
import {
  Button,
} from "reactstrap";
import "../modal.css";
import "../navbar/navbar.css";

class SignupButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupFormModal: false,
      email: {
        value: "",
        valid: false,
        collapse: false
      },
      password: {
        value: "",
        valid: false,
        collapse: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        collapse: false
      }
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: {
        value: event.target.value,
        valid: event.target.valid,
        collapse: event.target.collapse
      }
    });
  };
  toggle = state => {
    this.setState({
      [state]: {collapse: !this.state[state].collapse}
    });
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
handleSignUp=()=>{
  this.props.togglePage('sign-up');
};
  render() {
    return (

      <Button
        className="signup-button d-lg-inline d-none px-4 py-1"
        color="primary"
        to="/register"
        tag={Link}
        onClick={this.handleSignUp}
      >
        ثبت نام
      </Button>

    );
  }

  validateEmail = email => {
    if (!email) {
      return {
        validateStatus: "error",
        errorMsg: "Email may not be empty"
      };
    }

    const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");
    if (!EMAIL_REGEX.test(email)) {
      return {
        validateStatus: "error",
        errorMsg: "Email not valid"
      };
    }

    if (email.length > 15) {
      return {
        validateStatus: "error",
        errorMsg: `Email is too long (Maximum ${15} characters allowed)`
      };
    }

    return {
      validateStatus: null,
      errorMsg: null
    };
  };
}

export default SignupButton;
