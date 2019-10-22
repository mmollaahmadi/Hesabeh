import React from "react";

import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
} from "reactstrap";
import {Link} from "react-router-dom";

class NavBarProfile extends React.Component {
  render() {
    return (
      <>
        <Row className=" mx-0 d-lg-flex d-none flex-row-reverse">
          <Nav className="navbar-nav-hover align-items-lg-center p-0" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle nav className="p-0">
                <img
                  alt="..."
                  className="d-inline rounded-circle img-center img-fluid navbar-profile-img"
                  src={require("../../assets/img/users/user01.jpg")}
                />
              </DropdownToggle>
              <DropdownMenu className="profile-menu">
                <DropdownItem className="profile-item pb-0" disabled>
                  <i className="fa fa-user mr-0 ml-2"/>
                  mollaahmadi@
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem className="profile-item" to="/dashboard" tag={Link}>
                  <i className="fa fa-cog mr-0 ml-2"/>
                  حساب کاربری
                </DropdownItem>
                <DropdownItem className="profile-item" to="/" tag={Link}>
                  <i className="fa fa-sign-out mr-0 ml-2"/>
                  خروج
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Row>

      </>
    );
  }
}

export default NavBarProfile;
