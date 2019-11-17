import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import AOS from 'aos'
import ScrollableAnchor from 'react-scrollable-anchor'
import HelpTabs from "./help-tabs"

class HelpPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'register-login'
    };
    this.handleSelectTab = this.handleSelectTab.bind(this);
    AOS.init();
  }
  handleSelectTab(){

  }
  render() {
    return (
      <ScrollableAnchor id={'help'}>
      <div className="my-body">
        <Container>
            <HelpTabs />
            <Card className='my-3'
            data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="50">
              <CardBody>
                <Row>
                  <Col lg="3" className="help-image-col">
                  <img
                    className=" number-image"
                    top
                    src={require('../../assets/img/utils/1.png')}
                    alt=""
                  />
                  </Col>
                  <Col lg="9" className="help-text-col">
                    <p className="text-justify">
                      اولین قدم ایجاد حساب کاربری توی حسابه هست. شما میتونید این
                      کارو با حساب کاربری گوگل خودتون با چند کلیک انجام بدید یا
                      با وارد کردن آدرس پست الکترونیکی خودتون و یه رمز عبور که
                      حتما شامل حروف کوچک و بزرگ انگلیسی، علائم خاص و اعداد است
                      انجام بدید.
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card className='my-3'
            data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="50">
              <CardBody>
                <Row>
                  <Col lg="9" className="help-text-col">
                    <p className="text-justify">
                      قدم بعدی وارد کردن هزینه های روزانه در حساب کاربری خودتون
                      هست. شما میتونید این کار رو از قسمت حساب من و افزودن هزینه
                      انجام بدید
                    </p>
                  </Col>
                  <Col lg="3" className="help-image-col">
                  <img
                    className=" number-image"
                    top
                    src={require('../../assets/img/utils/2.png')}
                    alt=""
                  />
                  </Col>
                </Row>
              </CardBody>
            </Card>

        </Container>
      </div>
      </ScrollableAnchor>
    );
  }
}

export default HelpPage;
