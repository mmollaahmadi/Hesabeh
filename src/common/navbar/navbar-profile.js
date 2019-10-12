import React from "react";

import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Button,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

class NavbarProfile extends React.Component {
  render() {
    return (
      <>
      <Row className=" mx-0 d-flex flex-row-reverse">
        <Nav className="navbar-nav-hover align-items-lg-center p-0" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="p-0">
              <i class="fa fa-sign-out mr-0 ml-2 d-lg-none" />
              <i class="fa fa-cog mr-0 ml-2 d-lg-none" />
              <p className="text-muted d-inline d-lg-none ml-2" disabled>mollaahmadi@</p>
              <img
                alt="..."
                className="d-inline rounded-circle img-center img-fluid navbar-profile-img"
                src={require("../../assets/img/users/user01.jpg")}
              />
            </DropdownToggle>
            <DropdownMenu className="profile-menu">
              <DropdownItem className="profile-item pb-0" disabled>
                <i class="fa fa-user mr-0 ml-2" />
                mollaahmadi@
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="profile-item" to="/dashboard" tag={Link}>
                <i class="fa fa-cog mr-0 ml-2" />
                حساب کاربری
              </DropdownItem>
              <DropdownItem className="profile-item" to="/" tag={Link}>
                <i class="fa fa-sign-out mr-0 ml-2" />
                خروج
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Row>
      <DropdownItem className='d-lg-none my-divider' divider />
      </>
    );
  }
}

export default NavbarProfile;
