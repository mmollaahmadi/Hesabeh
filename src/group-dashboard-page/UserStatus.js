import React from 'react';
import {Button, Col} from 'reactstrap';

class UserStatus extends React.Component {
  render(){
    return(
      <Col className="mb-5 mb-lg-5" lg="3" md="4" sm="6">
        <div className="px-4">
          <img
            alt="..."
            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
            src={require("../assets/img/theme/team-3-800x800.jpg")}
            style={{ width: "100px" }}
          />
          <div className="pt-4 text-center">
            <h5 className="title">
              <span className="d-block mb-1">Ryan Tompson</span>
              <small className="h6 text-muted">Web Developer</small>
            </h5>
            <div className="mt-3">
              <Button
                className="btn-icon-only rounded-circle"
                color="warning"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="warning"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook" />
              </Button>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="warning"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-dribbble" />
              </Button>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default UserStatus;
