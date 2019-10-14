import React from 'react'
import {Col, Row} from "reactstrap";

class PaymentsTableHeader extends React.Component{
  render() {
    return(
      <Col lg='12' className='d-none d-lg-block px-0'>
        <Row className="notifications-table-header m-0">
          <Col lg="1" className="notifications-table-header-col">


              <div
                className="p-0 custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label pr-1"
                  htmlFor=" customCheckLogin"
                >
                  <span className="signin-modal-text mr-4">

                  </span>
                </label>
              </div>



          </Col>
          <Col lg="1" className="notifications-table-header-col">
            <p>ردیف</p>
          </Col>
          <Col lg="1" className="notifications-table-header-col">
            <p>تاریخ</p>
          </Col>
          <Col lg="3" className="notifications-table-header-col">
            <p>نام</p>
          </Col>

          <Col lg="2" className="notifications-table-header-col">
            <p>قیمت</p>
          </Col>
          <Col lg="2" className="notifications-table-header-col">
            <p>انجام دهمدگان</p>
          </Col>
            <Col lg="2" className="notifications-table-header-col">
              <p>انجام دهمدگان</p>
            </Col>
          <Col sm="11" className="ntr-hr"/>
        </Row>
      </Col>
    );
  }
}

export default PaymentsTableHeader;
