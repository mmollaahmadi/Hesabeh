import React from 'react';
import {Row, Col, Button} from 'reactstrap'
import Chip from '../common/chip/chip'

class PaymentsTableRow extends React.Component {
  render(){

    let consumers = [];
    this.props.data.consumers.forEach(consumer => {
      consumers.push(  <Chip
          link="/mollaahmadi.ir"
          haveCloseButton="false"
          avatarSrc={require("../assets/img/users/user01.jpg")}
          label={consumer.username}
          // onDelete={() => this.deleteUser()}
        />);
    });
    return(
      <Row className="notifications-table-row">
        <Col lg="1" className="date-request">
          <span>{this.props.data.date}</span>
        </Col>
        <Col lg="2" className="justify-content-center d-flex my-auto">
          <span>
            {this.props.data.name}
          </span>
        </Col>
        <Col lg="2" className="justify-content-center d-flex my-auto">
          <span>{this.props.data.value}</span>
        </Col>

        <Col lg="3" className="justify-content-center d-flex my-auto">
          <span className="user-sender">
            <Chip
              link="/mollaahmadi.ir"
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={this.props.data.group}
              // onDelete={() => this.deleteUser()}
            />
          </span>
        </Col>

        <Col lg="3" className="justify-content-center d-flex my-auto">
          <span className="user-sender">{consumers}</span>
        </Col>
        <Col lg="1" className="justify-content-center d-block my-auto">
          <Button className="payments-table-row-btn" color="primary">
            <i class="fa fa-eye"/>
          </Button>
          <Button className="payments-table-row-btn" color="default">
            <i class="fa fa-pencil"/>
          </Button>
        </Col>
        <Col sm="11" className="ntr-hr"></Col>
      </Row>
    );
  }
}

export default PaymentsTableRow;
