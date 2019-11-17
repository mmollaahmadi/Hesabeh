import React from 'react'
import {Col, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";
import './help.css'

class HelpTabs extends React.Component{
  render() {
    return(
      <Row className="text-center justify-content-center">
        <Col lg="12">
          <Row className="text-center justify-content-center px-4">
            <NavLink
              // to="/"
              // tag={Link}
              activeClassName="link-active"
              className="help-tabs-nav-link"
              color="primary"
              onClick={() => this.props.handleChangePage("register-login")}
            >
              ثبت نام و ورود
            </NavLink>

            <NavLink
              // to="/register"
              // tag={Link}
              activeClassName="link-active"
              className={`help-tabs-nav-link ${(this.props.isRegisterPage || this.props.isLogin) ? 'd-none' : ''}`}
              color="primary"
              onClick={() => this.props.handleChangePage("groups")}
            >
              گروه ها
            </NavLink>
            <NavLink
              // to="/login"
              // tag={Link}
              activeClassName="link-active"
              className={`help-tabs-nav-link ${(this.props.isLoginPage || this.props.isLogin) ? 'd-none' : ''}`}
              color="primary"
              onClick={() => this.props.handleChangePage("payments")}
            >
              هزینه ها
            </NavLink>
            <NavLink
              // to="/login"
              // tag={Link}
              activeClassName="link-active"
              className={`help-tabs-nav-link ${(this.props.isLoginPage || this.props.isLogin) ? 'd-none' : ''}`}
              color="primary"
              onClick={() => this.props.handleChangePage("payments")}
            >
              اعلام ها
            </NavLink>
          </Row>
          <hr className="mt-1 mb-4"/>
        </Col>
      </Row>
    );
  }
}

export default HelpTabs;