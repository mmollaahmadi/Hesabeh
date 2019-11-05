import React from 'react'
import {Col, Row} from "reactstrap";

class MyTableHeader extends React.Component {

  render() {
    let columns = [];
    this.props.columns.forEach((col, index, array) => {
      columns.push(
        <Col lg={col.size} className={`table-header-col ${array.length - 1 === index ? 'flex-grow-1' : ''}`}>
          <p>{col.title}</p>
        </Col>
      );
    });
    return (
      <Col lg='12' className='d-none d-lg-block px-0'>
        <Row className="table-header m-0">
          <Col  className="table-header-col px-0 check-width">
            <div
              className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin"
                type="checkbox"
                onChange={() => this.props.handleAllCheckboxesStatusChange()}
                checked={this.props.allCheckboxesStatus}
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

          {columns}

          <Col sm="12" className="table-header-line"/>
        </Row>
      </Col>
    );
  }
}

export default MyTableHeader;
