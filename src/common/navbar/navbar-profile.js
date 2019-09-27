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
      <div>
        <Nav className="navbar-nav-hover align-items-lg-center" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="p-0">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid navbar-profile-img"
                  src={require("../../assets/img/users/user01.jpg")}
                />
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="profile-item" to="/dashboard" tag={Link}>
                تنظیمات حساب کاربری
              </DropdownItem>
              <DropdownItem className="text-right" to="/" tag={Link}>
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
