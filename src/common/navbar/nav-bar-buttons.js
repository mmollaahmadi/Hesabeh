import React from "react";


import SignInButton from "../signin-button/SignInButton.js";
import SignUpButton from "../signup-button/SignupButton.js";
import SignUpLink from "../signup-button/SignUpLink.js";

class NavBarButtons extends React.Component {
  render() {
    return (
      <div className="d-lg-flex mr-lg-auto align-items-center">

        <SignInButton/>
        <p className="d-inline d-lg-none m-0 slash">/</p>
        <SignUpButton/>
        <SignUpLink/>

      </div>
    );
  }
}

export default NavBarButtons;
