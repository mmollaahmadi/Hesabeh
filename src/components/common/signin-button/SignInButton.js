import React from "react";
import {Link} from "react-router-dom";
import {
  NavLink,
} from "reactstrap";

class SignInButton extends React.Component {
  handleSignIn = () => {
    this.props.togglePage('sign-in');
  };
  render() {
    return (
      <NavLink
        className={`d-inline pr-lg-0 pl-3 pr-3 ${
          this.props.pageSelection === "sign-in"
            ? "nav-bar-link-active"
            : "navbar-link"
        }`}
        color="primary"
        id="navbar-signin"
        to="/signin"
        tag={Link}
        onClick={this.handleSignIn}
      >
        <i className="d-lg-none fa fa-sign-in mr-0 ml-2"/>
        ورود
      </NavLink>


    );
  }
}

export default SignInButton;
