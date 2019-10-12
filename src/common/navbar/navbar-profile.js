import React from "react";

import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

class NavbarProfile extends React.Component {
  render() {
    return (
      <div className='mr-auto'>
        <Nav className="navbar-nav-hover align-items-lg-center p-0" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="p-0">
              <div className="d-flex justify-content-center align-items-center">
              {/*<p className="id">mollaahmadi@</p>*/}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid navbar-profile-img"
                  src={require("../../assets/img/users/user01.jpg")}
                />

              </div>
            </DropdownToggle>
            <DropdownMenu className="profile-menu">
            <DropdownItem className="profile-item pb-0" disabled>
            <i class="fa fa-user mr-0 ml-2"/>
              mollaahmadi@
            </DropdownItem>
            <DropdownItem divider/>
              <DropdownItem className="profile-item" to="/dashboard" tag={Link}>
              <i class="fa fa-cog mr-0 ml-2"/>
                حساب کاربری
              </DropdownItem>
              <DropdownItem className="profile-item" to="/" tag={Link}>
              <i class="fa fa-sign-out mr-0 ml-2"/>
                خروج
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    );
  }
}

export default NavbarProfile;
