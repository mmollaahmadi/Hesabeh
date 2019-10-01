import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import TextBox from "../common/textbox/textbox.js";

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
                      <Row className="d-flex justify-content-between">
                        <Col sm="auto" className="mt-1">
                          <TextBox
                            title="میزان هزینه شخصی"
                            content="20000 تومان"
                          />
                        </Col>
                        <Col sm="auto" className="mt-1">
                          <TextBox
                            title="میزان هزینه گروهی"
                            content="20000 تومان"
                          />
                        </Col>
                        <Col sm="auto" className="mt-1">
                          <TextBox
                            title="میزان مصرف گروهی:"
                            content="10000 تومان"
                          />
                        </Col>
                      </Row>

                      <Row className="hr"></Row>

                      <Row className="p-0 d-flex justify-content-center">
                        <Col sm="auto" className="mt-1">
                          <TextBox
                            title="وضعیت نهایی:"
                            content="10000 تومان طلبکار"
                          />
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
