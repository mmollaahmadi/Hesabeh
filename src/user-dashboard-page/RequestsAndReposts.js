import React from "react";
import { Card, Row, Col } from "reactstrap";
import classnames from "classnames";
import {
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

import Requests from "./requests/Requests.js";
import Reports from "./reports/Reports.js";
import './UserDashboard.css';

class RequestsAndReposts extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <Row className="justify-content-center">
        <Col lg="10">
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row p-1 pr-sm-3 pl-sm-3"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
            <NavItem className="p-0 pl-lg-2">
              <NavLink
                aria-selected={this.state.iconTabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.iconTabs === 1
                })}
                onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 ml-3" />
                گزارش مالی
              </NavLink>
            </NavItem>

              <NavItem className="p-0 pr-lg-2">
                <NavLink
                  aria-selected={this.state.iconTabs === 2}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: this.state.iconTabs === 2
                  })}
                  onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-bell-55 ml-3" />
                  درخواستها
                </NavLink>
              </NavItem>

            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
              <TabPane tabId="iconTabs1">
                <Reports />
              </TabPane>

                <TabPane tabId="iconTabs2">
                  <Requests />
                </TabPane>

              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default RequestsAndReposts;
