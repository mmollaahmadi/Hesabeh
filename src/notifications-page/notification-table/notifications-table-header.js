import React from 'react'
import {Col, Row} from "reactstrap";

class NotificationsTableHeader extends React.Component {
  render() {
    return (
      <Col lg='12' className='d-none d-lg-block px-0'>
        <Row className="payments-table-header m-0">
          <Col  className="payments-table-header-col px-0 check-width">
            <div
              className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin"
                type="checkbox"
              />
              <label
                className="custom-control-label pr-1"
                htmlFor=" customCheckLogin"
              >
                  <span className="signin-modal-text mr-3">
                  </span>
              </label>
            </div>
          </Col>

          <Col lg="1" className="payments-table-header-col">
            <p>تاریخ</p>
          </Col>
          <Col lg="8" className="payments-table-header-col">
            <p>درخواست</p>
          </Col>
          <Col lg="2" className="payments-table-header-col flex-grow-1">
            <p>عملیات</p>
          </Col>
          <Col sm="12" className="payments-table-header-line"/>
        </Row>
      </Col>
    );
  }
}

export default NotificationsTableHeader;
