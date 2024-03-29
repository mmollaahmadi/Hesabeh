import React from "react";

import {
  DropdownItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import {Link} from "react-router-dom";
import './nav-bar.css'

class NavBarProfileToggler extends React.Component {
constructor(props){
  super(props);
  this.onLogout=this.onLogout.bind(this);
}
  onLogout(pageSelection){
    this.props.togglePage(pageSelection);
    if(pageSelection === 'exit'){
      this.props.onLogout();
      this.props.resetPageSelection();
    }
  }
  render() {
    return (
      <>
        <Row className="d-lg-none mx-0 align-items-center">
          <Col className=' pl-0'>
            <p className="text-muted  text-left mb-0 nav-bar-profile-toggle-id">{this.props.currentUser ? this.props.currentUser.username : ''}@</p>
            <p className="text-muted  text-left mb-0 nav-bar-profile-toggle-email">{this.props.currentUser ? this.props.currentUser.email : ''}</p>
          </Col>
          <Col xs='auto' className='d-flex justify-content-end'>
            <img
              alt="..."
              className="d-inline rounded-circle m-0 img-center img-fluid navbar-profile-img"
              src={require("../../../assets/img/users/user01.jpg")}
            />
          </Col>
        </Row>
        <NavLink
          className={`d-lg-none d-block ml-auto pl-3 pr-3 ${this.props.pageSelection === "settings" ? 'nav-bar-link-active' : "navbar-link"}`}
          onClick={() => this.onLogout('settings')}
          color="link"
          tag={Link}
          to="/dashboard"
        >
          <i className="fa fa-cog mr-0 ml-2"/>
          حساب کاربری
        </NavLink>
        <NavLink
          className={`d-lg-none d-block ml-auto pl-3 pr-3
          ${this.props.pageSelection === "exit" ? "navbar-link-active" : "navbar-link"}`}
          onClick={() => this.onLogout('exit')}
          color="link"
          tag={Link}
          to='/'
        >
          <i className="fa fa-sign-out mr-0 ml-2"/>
          خروج
        </NavLink>


        <DropdownItem className='d-lg-none my-divider' divider/>

      </>
    );
  }
}

export default NavBarProfileToggler;
