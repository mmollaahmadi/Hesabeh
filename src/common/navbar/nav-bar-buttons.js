import React from "react";
import {Row} from 'reactstrap'

import SignInButton from "../signin-button/SignInButton.js";
import SignUpButton from "../signup-button/SignupButton.js";
import SignUpLink from "../signup-button/SignUpLink.js";

class NavBarButtons extends React.Component {
  render() {
    return (
      <Row className="order-last m-0 d-lg-flex align-items-center">

        <SignInButton/>
        <p className="d-inline d-lg-none m-0 slash">/</p>
        <SignUpButton/>
        <SignUpLink/>

      </Row>
    );
  }
}

export default NavBarButtons;
