import React from "react";
import { NavItem } from "reactstrap";

import SigninButton from "../signin-button/SigninButton.js";
import SignupButton from "../signup-button/SignupButton.js";

class NavbarButtons extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <NavItem className="d-none d-lg-inline m-0">
          <SigninButton />
        </NavItem>
        {/*<NavItem className="d-none d-lg-inline m-0 mt-2">
          <p className="m-0 slash">/</p>
        </NavItem>*/}
        <NavItem className="d-none d-lg-inline p-1 m-0 ">
          <SignupButton />
        </NavItem>
      </div>
    );
  }
}

export default NavbarButtons;
