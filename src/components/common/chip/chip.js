import React from "react";
import {Badge, Row, Button, NavLink} from "reactstrap";
import "./chip.css";
import {Link} from 'react-router-dom'

class Chip extends React.Component {
  render() {
    let closeButton = null;
    let label = null;
    if (this.props.haveCloseButton === 'true') {
      closeButton = (
        <Button
          className="chip-close-btn"
          color="link"
          onClick={this.props.onDelete}
        >
          <i className="fa fa-times chip-close-icon"/>
        </Button>
      );
    }
    if (this.props.link) {
      label = (
        <NavLink
          className="chip-label-link"
          color="primary"
          tag={Link}
          to={this.props.link}>
            {this.props.label}
        </NavLink>
      );
    } else {
      label = (<p className="chip-label">{this.props.label}</p>);
    }
    const chipClassName = this.props.class;
    return (
      <Badge
      className={`chip-body ${this.props.clickable ? 'chip-clickable' : ''} ${chipClassName}`}
      color="default"
      onClick={this.props.clickable ? this.props.onClick : null}
      pill>
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
