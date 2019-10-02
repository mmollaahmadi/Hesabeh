import React from "react";
import { Badge, Row, Button } from "reactstrap";
import "./chip.css";

class Chip extends React.Component {
  render() {
    let closeButton = null;
    if(this.props.haveCloseButton === 'true'){
      closeButton = (
        <Button
          className="chip-close-btn"
          color="link"
          onClick={this.props.onDelete}
        >
          <i class="fa fa-times chip-close-icon" />
        </Button>
      );
    }
    return (
      
        <Badge className="chip-body" color="default" pill>
          <Row className="m-0 d-flex align-items-center">
            <img
              alt=""
              className="rounded-circle chip-avatar"
              src={this.props.avatarSrc}
            />
            <p className="chip-label">{this.props.label}</p>
          {closeButton}
          </Row>
        </Badge>

    );
  }
}

export default Chip;
