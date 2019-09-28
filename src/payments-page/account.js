import React from "react";
import {
  Container
} from "reactstrap";
import Accordion from "../common/accordion/accordion.js";

class Profile extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    return (
      <section className="section">
      <Container>
        <div className="landing-position-relative">
          <section className="section pt-0 pb-200">
            <Accordion open={1}>
              <Accordion.Item>
                <Accordion.Header>
                  30000 تومان بدهکاری در 1 گروه
                </Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item>
                <Accordion.Header>
                450000 تومان طلبکاری از 7 گروه
                </Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item>
                <Accordion.Header>
                وضعیت فعلی 2000 تومان بدهکاری
                </Accordion.Header>
                <Accordion.Body>some body</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </div>
      </Container>
      </section>
    );
  }
}

export default Profile;
