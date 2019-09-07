import React from "react";

import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import './navbar.css'
class NavbarProfile extends React.Component {
  render() {
    return (
      <div>
        <Nav className="navbar-nav-hover align-items-lg-center" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="p-0">
              <div className="d-flex justify-content-center align-items-center">
                <span className="nav-link my-nav-link username ml-1 pl-1 ">Mollaahmadi</span>
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid"
                  src={require("../../assets/img/users/user01.jpg")}
                  style={{ width: "40px" }}
                />
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem to="/dashboard" tag={Link}>
                حساب کاربری
              </DropdownItem>
              <DropdownItem to="/" tag={Link}>
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
