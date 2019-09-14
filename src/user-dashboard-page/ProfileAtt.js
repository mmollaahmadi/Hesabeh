import React from 'react';
import './UserDashboard.css';
import {  
  FormGroup,
  Col,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
  //UncontrolledAlert
} from "reactstrap";
class ProfileAtt extends React.Component{
  render() {
    return(
      <Col lg="6" md="12" className="px-6">
        <FormGroup>
          <InputGroup className="input-group-alternative ">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>

            <Input
              className="profile-input"
              value={this.props.value}
              type={this.props.type}
              // {this.props.isDisabled : disabled ? null }
            />
          </InputGroup>
        </FormGroup>
      </Col>
    );
  }
}

export default ProfileAtt;
