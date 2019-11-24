import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import AccountUnit from "./account-unit.js";


class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Row className='m-0'>
          <Col lg="12">
            <Row className="m-0 d-flex justify-content-center">
              <AccountUnit
                _text="میزان هزینه شخصی"
                cost='21100'
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />

              <AccountUnit
                _text="میزان هزینه گروهی"
                cost='2900'
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />

              <AccountUnit
                _text="میزان مصرف گروهی"
                cost='1111'
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />

              <AccountUnit
                _text="وضعیت نهایی"
                cost='2341'
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />
            </Row>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Profile;
