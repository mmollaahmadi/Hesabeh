import React from "react";
import { Col, Row } from "reactstrap";

class UserUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isChecked: false
    };
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
  }
  handleCheckedChange(id){
    this.props.updateSelectedUsersList(id);
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  componentDidMount() {
    this.setState({
      user: this.props.user
    });
  }
  render() {
    let user = this.state.user;
    return (
      <Col xs={"12"} sm={"6"} className="my-1 px-1">
        <Row className="py-1 justify-content-center group-unit-card">
          <Col className="table-header-col px-0 check-width">
            <div className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id={this.props.user ? 'user_'+this.props.user.id : ""}
                type="checkbox"
                checked={this.props.user ? this.props.user.checked : false}
                onChange={() => this.handleCheckedChange(user.id)}
              />
              <label
                className="custom-control-label pr-1"
                htmlFor={this.props.user ? 'user_'+this.props.user.id : ""}
              >
                <span className="signin-modal-text mr-3"></span>
              </label>
            </div>
          </Col>

          <Col xs="3" className="px-0">
            <img
              className="rounded-circle group-unit-circle-image"
              top
              src={this.props.imageUri}
              alt=""
            />
          </Col>
          <Col xs="7" className="group-unit-name my-auto d-block px-1">
            <span className="group-unit-name-text d-block m-0">
              {user ? user.name : "hi"}
            </span>
            <span className="group-unit-username-text d-block m-0 mt-1">
              {user ? user.username : "hi"}@
            </span>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default UserUnit;
