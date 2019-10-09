import React from "react";
import { Col } from "reactstrap";

class StatisticUnit extends React.Component {
  render() {
    return (
      <Col lg="3" sm="6">
        <div className="px-0">
          <img
            alt="..."
            className="rounded-circle statistic-circle-image"
            src={this.props.img_url}            
          />
          <div className="pt-4 text-center">
            <p className="title">
              <span className="d-block mb-1">{this.props.text}</span>
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default StatisticUnit;
