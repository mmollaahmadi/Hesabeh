import React from "react";
import { Col } from "reactstrap";

class StatisticUnit extends React.Component {
  render() {
    return (
      <Col lg="3" sm="6">
        <div className="px-0">
          <img
            alt="..."
            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
            src={this.props.img_url}
            style={{
              width: "140px",
              borderStyle: "solid",
              borderColor: "#fff",
              borderWidth: "2px"
            }}
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
