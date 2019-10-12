import React from 'react'
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";

class SignUpLink extends React.Component{
  render(){
    return(
      <NavLink
        className="navbar-link d-inline d-lg-none pl-3 pr-3"
        color="primary"
        id="navbar-signin"
        to="/signup"
        tag={Link}
      >
        ثبت نام
      </NavLink>
    );
  }
}

export default SignUpLink;