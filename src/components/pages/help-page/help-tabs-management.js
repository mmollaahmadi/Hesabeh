import React from 'react'
import {Button, Col, Row} from "reactstrap";
// import {Link} from "react-router-dom";
import './help.css'

class HelpTabsManagement extends React.Component{
  render() {
    return(
      <Row data-aos="fade-down"
           data-aos-duration="700"
           data-aos-delay="0"
           className="text-center justify-content-center">
        <Col lg="12">
          <Row className="text-center justify-content-center px-4">
            <Button
              color={'primary'}
              className={`help-btn-circle ${this.props.selectedTab === 'register-login' ? 'help-btn-circle-active' : ''}`}
              onClick={() => this.props.handleSelectTab("register-login")}
            >
              <p className={'help-btn-circle-text'}>ثبت نام</p>
              <p className={'help-btn-circle-text'}>ورود</p>
            </Button>

            <Button
              color={'primary'}
              className={`help-btn-circle ${this.props.selectedTab === 'groups' ? 'help-btn-circle-active' : ''}`}
              onClick={() => this.props.handleSelectTab("groups")}
            >
              گروه ها
            </Button>

            <Button
              color={'primary'}
              className={`help-btn-circle ${this.props.selectedTab === 'payments' ? 'help-btn-circle-active' : ''}`}
              onClick={() => this.props.handleSelectTab("payments")}
            >
              هزینه ها
            </Button>

            <Button
              color={'primary'}
              className={`help-btn-circle ${this.props.selectedTab === 'notifications' ? 'help-btn-circle-active' : ''}`}
              onClick={() => this.props.handleSelectTab("notifications")}
            >
              اعلام ها
            </Button>
          </Row>
          <hr className="mt-1 mb-4"/>
        </Col>
      </Row>
    );
  }
}

export default HelpTabsManagement;