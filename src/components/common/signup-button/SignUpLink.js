import React from 'react'
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";

class SignUpLink extends React.Component{
  handleSignIn = () => {
    this.props.togglePage('sign-up');
  };
  render(){
    return(
      <NavLink
        className={`d-inline d-lg-none pr-lg-0 pl-3 pr-3 ${
          this.props.pageSelection === "sign-up"
            ? "nav-bar-link-active"
            : "navbar-link"
        }`}
        color="primary"
        id="navbar-signin"
        to="/signup"
        tag={Link}
        onClick={this.handleSignIn}
      >
        <i className="d-lg-none fa fa-user-plus mr-0 ml-2"/>
        ثبت نام
      </NavLink>
    );
  }
}

export default SignUpLink;
