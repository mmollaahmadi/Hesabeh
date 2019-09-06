import React from 'react';
import {NavItem} from "reactstrap";

import SigninButton from "../signin-button/SigninButton.js";
import SignupButton from "../signup-button/SignupButton.js";

class NavbarButtons extends React.Component {
  render(){
    return(
      <div className="d-flex">
        <NavItem className="d-none d-lg-inline mr-lg-4">
          <SigninButton title="ورود" buttonOrLink="link"></SigninButton>
        </NavItem>
        <NavItem className="d-none d-lg-inline p-1 ">
          <SignupButton title="ثبت نام" buttonOrLink="button" />
        </NavItem>
      </div>
    );
  }
}

export default NavbarButtons;
