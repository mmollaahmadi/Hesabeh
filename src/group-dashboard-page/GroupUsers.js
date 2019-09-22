import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Button,
  UncontrolledTooltip
} from "reactstrap";
import "./group-dashboard.css";

class GroupUser extends React.Component {
  render() {
    return (
      <Col lg="auto" className="mt-3">
        <Card className="user-status w-auto">
          <Row>
            <p className="card-profile-name">محمد ملااحمدی</p>
            <Button className="p-0 plus-btn-circle m-0 mr-3 mt-1" color="primary">
              <i className="fa fa-dollar"></i>
            </Button>
            <Button className="p-0 plus-btn-circle m-0 mr-2 mt-1" color="primary">
              <i className="fa fa-plus"></i>
            </Button>
          </Row>
          <Row>
            <Col lg="auto">
              <div className="card-profile-image">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle card-profile-image"
                    src={require("../assets/img/users/user01.jpg")}
                  />
                </a>
              </div>
            </Col>
            <Col lg="auto" className="pr-0">
              <div>
                <Badge className="status-text" href="#" color="info">
                  mollaahmadi@
                </Badge>
              </div>
              <div>
                <Badge className="status-text" color="success">
                  پرداخت: 30000 تومان
                </Badge>

                <Badge className="status-text mr-2" color="danger">
                  مصرف: 40000 تومان
                </Badge>
              </div>
              <div>
                <Badge className="status-text" color="warning">
                  وضعیت: 10000 تومان بدهکار
                </Badge>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button
              className="card-profile-social-network-link"
              color="link"
              href="https://twitter.com/creativetim"
              id="tooltip126536702"
              target="_blank"
            >
              <i className=" fa fa-twitter card-profile-social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip126536702">
              Follow us
            </UncontrolledTooltip>
            <Button
              className=" card-profile-social-network-link"
              color="link"
              href="https://www.facebook.com/creativetim"
              id="tooltip383967593"
              target="_blank"
            >
              <i className=" fa fa-facebook-square card-profile-social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip383967593">
              Like us
            </UncontrolledTooltip>
            <Button
              className=" card-profile-social-network-link"
              color="link"
              href="https://dribbble.com/creativetim"
              id="tooltip568564532"
              target="_blank"
            >
              <i className=" fa fa-dribbble card-profile-social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip568564532">
              Follow us
            </UncontrolledTooltip>
            <Button
              className=" card-profile-social-network-link"
              color="link"
              href="https://github.com/creativetimofficial"
              id="tooltip626177562"
              target="_blank"
            >
              <i className=" fa fa-github card-profile-social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip626177562">
              Star on Github
            </UncontrolledTooltip>
            <Button
              className="card-profile-social-network-link"
              color="link"
              href="https://instagram.com/creativetimofficial"
              id="tooltip13"
              target="_blank"
            >
              <i className=" fa fa-instagram card-profile-social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip13">
              Follow Us
            </UncontrolledTooltip>

          </Row>
        </Card>
      </Col>
    );
  }
}

export default GroupUser;
