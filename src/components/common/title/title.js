import React from 'react';
import {Row} from 'reactstrap';

class Title extends React.Component {
  render() {
    return(
      <Row className="m-0 d-flex justify-content-center">
        <h3 className="m-0 page-title">{this.props.text}</h3>
      </Row>
    );
  }
}

export default Title;
