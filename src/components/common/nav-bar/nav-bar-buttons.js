import React from "react";
import {Button, NavLink, Row} from 'reactstrap'
import {Link} from "react-router-dom";

class NavBarButtons extends React.Component {

  togglePage=(page)=>{
    this.props.togglePage(page);
  };
  render() {
    return (
      <Row className=" m-0 d-lg-flex align-items-center">

        <NavLink
          className={`d-inline pr-lg-0 pl-3 pr-3 ${
            this.props.pageSelection === "sign-in"
              ? "nav-bar-link-active"
              : "navbar-link"
          }`}
          color="primary"
          id="navbar-signin"
          to="/login"
          tag={Link}
          onClick={() => this.togglePage('sign-in')}
        >
          <i className="d-lg-none fa fa-sign-in mr-0 ml-2"/>
          ورود
        </NavLink>

        <p className="d-inline d-lg-none m-0 slash">/</p>

        <Button
          className="signup-button d-lg-inline d-none px-4 py-1"
          color="primary"
          to="/register"
          tag={Link}
          onClick={() => this.togglePage('sign-up')}
        >
          ثبت نام
        </Button>

        <NavLink
          className={`d-inline d-lg-none pr-lg-0 pl-3 pr-3 ${
            this.props.pageSelection === "sign-up"
              ? "nav-bar-link-active"
              : "navbar-link"
          }`}
          color="primary"
          to="/register"
          tag={Link}
          onClick={() => this.togglePage('sign-up')}
        >
          <i className="d-lg-none fa fa-user-plus mr-0 ml-2"/>
          ثبت نام
        </NavLink>

      </Row>
    );
  }
}

export default NavBarButtons;
