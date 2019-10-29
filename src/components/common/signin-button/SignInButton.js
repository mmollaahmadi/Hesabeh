import React from "react";
import {Link} from "react-router-dom";
import {
  NavLink,
} from "reactstrap";

class SignInButton extends React.Component {  
  render() {
    return (


      <NavLink
        className="navbar-link d-inline pl-3 pr-3 pr-lg-0"
        color="primary"
        id="navbar-signin"
        to="/signin"
        tag={Link}
      >
        <i className="d-lg-none fa fa-sign-in mr-0 ml-2"/>
        ورود
      </NavLink>


    );
  }
}

export default SignInButton;