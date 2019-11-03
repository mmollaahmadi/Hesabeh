import React from "react";
import {
  Row,
  UncontrolledTooltip, Card, CardBody, CardHeader
} from "reactstrap";
import "./group-dashboard.css";
import GroupUserUnit from './group-user-unit';

class GroupUser extends React.Component {
  render() {
    return (
      <Card data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            className=' shadow mt-0'>
        <CardHeader>
          کاربران
        </CardHeader>
        <CardBody>
          <Row className='m-0'>
            <GroupUserUnit/>
            <GroupUserUnit/>
            <GroupUserUnit/>
            <GroupUserUnit/>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default GroupUser;
