import React from 'react'
import {Col, Row} from "reactstrap";

class GroupUnit extends React.Component{
  
  render() {
    return(
      <Col xs={'12'} sm={'6'} lg={'4'}>
        <Row className='pt-1 justify-content-center group-unit-card'>
          <Col xs="12 mt-3">
            <img
              className="rounded-circle group-unit-circle-image"
              top
              src={this.props.imageUri}
              alt=""
            />
          </Col>
          <Col xs="12" className="group-unit-name mt-2 d-flex justify-content-center">
                                          <p className='group-unit-name-text m-0'>
                                           {this.props.groupName}
                                          </p>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default GroupUnit;
