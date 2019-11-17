import React from 'react'
import {Col, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";

class AuditColumnFooter extends React.Component{
  render() {
    return(
      <Row className="text-center justify-content-center">
        <Col lg="12">
          <hr className="mt-5 mb-1"/>
          <Row className="text-center justify-content-center px-4">
            <NavLink
              to="/"
              tag={Link}
              activeClassName="link-active"
              className="forgot-password-footer-nav-link"
              color="primary"
              onClick={() => this.props.handleChangePage("Hesabeh")}
            >
              حسابه
            </NavLink>

            <NavLink
              to="/register"
              tag={Link}
              activeClassName="link-active"
              className={`forgot-password-footer-nav-link ${(this.props.isRegisterPage || this.props.isLogin) ? 'd-none' : ''}`}
              color="primary"
              onClick={() => this.props.handleChangePage("sign-up")}
            >
              ثبت نام
            </NavLink>
            <NavLink
              to="/login"
              tag={Link}
              activeClassName="link-active"
              className={`forgot-password-footer-nav-link ${(this.props.isLoginPage || this.props.isLogin) ? 'd-none' : ''}`}
              color="primary"
              onClick={() => this.props.handleChangePage("sign-in")}
            >
              ورود
            </NavLink>

            <NavLink
              to="/support"
              tag={Link}
              activeClassName="link-active"
              className={`forgot-password-footer-nav-link ${this.props.isSupportPage ? 'd-none' : ''}`}
              color="primary"
              onClick={() => this.props.handleChangePage("support")}
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