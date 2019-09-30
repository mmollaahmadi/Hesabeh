import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

class Profile extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

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
                      <Row>
                        <Col lg="4" className="pr-5">
                          <p className="profile-data-title">
                            میزان هزینه شخصی:
                          </p>
                          <h3 className="profile-data-value">20000 تومان</h3>
                        </Col>
                        <Col lg="4" className="pr-5">
                          <p className="profile-data-title">
                            میزان هزینه گروهی
                          </p>
                          <h3 className="profile-data-value">20000 تومان</h3>
                        </Col>
                        <Col lg="4" className="pr-5">
                          <p className="profile-data-title">
                            میزان مصرف گروهی:
                          </p>
                          <h3 className="profile-data-value">10000 تومان</h3>
                        </Col>
                      </Row>

                      <Row className="hr"></Row>
                      
                      <Row>
                        <Col lg="4" className="pr-5">
                          <p className="profile-data-title">وضعیت نهایی:</p>
                          <h3 className="profile-data-value">
                            10000 تومان طلبکار
                          </h3>
                        </Col>
                      </Row>
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
