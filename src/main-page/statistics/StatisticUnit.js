import React from "react";
import { Col } from "reactstrap";
import CountUp from 'react-countup';

class StatisticUnit extends React.Component {
  render() {
    return (
      <Col lg="3" xs="6" id='statis'>
        <div className="px-0">
          <img
            alt="..."
            className="rounded-circle statistic-circle-image"
            src={this.props.img_url}
          />
          <div className="pt-4 text-center">

            <p className="title">
              <CountUp delay={5} end={this.props.value} duration={2}
              start={this.props.start}/>
              {` ${this.props.title}`}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default StatisticUnit;
