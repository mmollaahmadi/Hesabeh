import React from "react";
import {Row} from 'reactstrap'

import SignInButton from "../signin-button/SignInButton.js";
import SignUpButton from "../signup-button/SignupButton.js";
import SignUpLink from "../signup-button/SignUpLink.js";

class NavBarButtons extends React.Component {
  render() {
    return (
      <Row className=" m-0 d-lg-flex align-items-center">

        <SignInButton
          pageSelection={this.props.pageSelection}
          togglePage={this.props.togglePage}
        />
        <p className="d-inline d-lg-none m-0 slash">/</p>
        <SignUpButton
        pageSelection={this.props.pageSelection}
        togglePage={this.props.togglePage}
        />
        <SignUpLink
        pageSelection={this.props.pageSelection}
        togglePage={this.props.togglePage}
        />

      </Row>
    );
  }
}

export default NavBarButtons;
