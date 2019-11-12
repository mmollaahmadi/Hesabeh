import React from "react";
import { Col, Row} from "reactstrap";

class OnBoardingUnit extends React.Component {
  render() {
    let dataAosDelay = 200;
    if(this.props.number === "1")
      dataAosDelay = 700;
    if(this.props.number === '2')
      dataAosDelay = 1200;
    if(this.props.number === '3')
      dataAosDelay = 1700;
    return (
      <Col lg="3" sm="6" xs="12" className="m-0 d-flex justify-content-center">
        <Row data-aos="fade-up"
             data-aos-duration="700"
             data-aos-delay={dataAosDelay}
             className="justify-content-center learning-card">
          <Col xs='12'>
          <img
          className="rounded-circle statistic-circle-image"
            top
            src={this.props.imageUri}
            alt=""
          />
          </Col>
          <Col xs='12' className='mt-4'>
          <span className="main-page-text p-0 mx-2 mt-4">
            {this.props._text}
          </span>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default OnBoardingUnit;
