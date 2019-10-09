import React from "react";
import { Badge, Row, Button } from "reactstrap";
import "./chip.css";

class Chip extends React.Component {
  render() {
    let closeButton = null;
    let label = null;
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
    if(this.props.link)
    {
      label = (<Button className="chip-label-link" color="link" to={this.props.link}>{this.props.label}</Button>);
    }else{
      label =(  <p className="chip-label">{this.props.label}</p>);
    }
    const chipClassName = this.props.class;
    return (

        <Badge className={`chip-body ${chipClassName}`} color="default" pill>
          <Row className="m-0 d-flex align-items-center">
            <img
              alt=""
              className="rounded-circle chip-avatar"
              src={this.props.avatarSrc}
            />
          {label}
          {closeButton}
          </Row>
        </Badge>

    );
  }
}

export default Chip;
