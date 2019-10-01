import React from "react";
import { Row, Col } from "reactstrap";

class TextBox extends React.Component {
  render() {
    return (
      <Row className="m-0 textbox">
        <Col sm="auto" className="textbox-title">
          <p className="m-0 py-1">{this.props.title}</p>
        </Col>
        <Col sm="auto" className="textbox-content">
          <p className="m-0 py-1">{this.props.content}</p>
        </Col>
      </Row>
    );
  }
}
export default TextBox;
