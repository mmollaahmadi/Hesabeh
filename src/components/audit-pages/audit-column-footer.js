import React from 'react'
import {Col, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";

class AuditColumnFooter extends React.Component{
  render() {
    return(
      <Row className="text-center justify-content-center">
        <Col lg="12">
          <hr className="mt-5 mb-1"/>
          <Row className="text-center justify-content-between px-4">
            <NavLink
              to="/"
              tag={Link}
              activeClassName="link-active"
              className="forgot-password-footer-nav-link"
              color="primary"
            >
              حسابه
            </NavLink>
            <NavLink
              to="/register"
              tag={Link}
              activeClassName="link-active"
              className={`forgot-password-footer-nav-link ${this.props.isRegisterPage ? 'd-none' : ''}`}
              color="primary"
            >
              ثبت نام
            </NavLink>
            <NavLink
              to="/signin"
              tag={Link}
              activeClassName="link-active"
              className={`forgot-password-footer-nav-link ${this.props.isLoginPage ? 'd-none' : ''}`}
              color="primary"
            >
              ورود
            </NavLink>

            <NavLink
              to="/support"
              tag={Link}
              activeClassName="link-active"
              className="forgot-password-footer-nav-link"
              color="primary"
            >
              پشتیبانی
            </NavLink>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AuditColumnFooter;