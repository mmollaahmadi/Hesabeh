import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge
} from "reactstrap";

class Profile extends React.Component {
    render() {
    return (
      <section className="section pt-0">
        <Container>
          <div className="landing-position-relative">
            <section className="section pt-0 pb-2">
              <Row>
                <Col lg="12">
                  <Card className="card-profile shadow mt-5">
                    <CardHeader>وضعیت کلی</CardHeader>
                    <CardBody>
                      <Row className="d-flex justify-content-center">
                        <Col lg="3" className="">
                          <Badge className="profile-data-title" color="danger">
                            میزان هزینه شخصی
                          </Badge>
                          <h3 className="profile-data-value">20000 تومان</h3>
                        </Col>
                        <Col lg="3" className="">
                          <Badge className="profile-data-title" color="danger">
                            میزان هزینه گروهی
                          </Badge>
                          <h3 className="profile-data-value">20000 تومان</h3>
                        </Col>
                        <Col lg="3" className="">
                          <Badge className="profile-data-title" color="success">
                            میزان مصرف گروهی:
                          </Badge>
                          <h3 className="profile-data-value mr-3">10000 تومان</h3>
                        </Col>
                        <Col lg="3" className="">
                          <Badge className="profile-data-title" color="warning">وضعیت نهایی:</Badge>
                          <h3 className="profile-data-value">
                            10000 تومان طلبکار
                          </h3>
                        </Col>
                      </Row>

                      <Row className="hr"/>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </section>
          </div>
        </Container>
      </section>
    );
  }
}

export default Profile;
