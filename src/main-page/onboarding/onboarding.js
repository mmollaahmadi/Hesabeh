import React from "react";
import { Col } from "reactstrap";

class Onboarding extends React.Component {
  render() {
    return (
      <Col lg="4" sm="6" xs="12" className="m-0 d-flex justify-content-center">
        <div className="px-0">
          <img
            alt="..."
            className="rounded img-center img-fluid m-0"
            src={this.props.imageUri}
            style={{
              width: "fill"
            }}
          />
          <div className="pt-4 text-center">
            <p className="title">
              <span className="d-block mb-1">{this.props._text}</span>
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default Onboarding;
