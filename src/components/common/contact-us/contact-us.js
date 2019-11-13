import React from "react";
import classnames from "classnames";
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import './contact-us.css';

class ContactUs extends React.Component {
  constructor(){
    super();
    this.state={
      email:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      email: event.target.value
    });
  }
  componentDidMount(){
    this.setState({
      email: this.props.currentUser ? this.props.currentUser.email : ''
    });
  }
  state = {};
  render() {
    return (
      <div>
        <FormGroup
          className={classnames(
            {
              focused: this.state.emailFocused
            },
            "mb-2 contactus-form"
          )}
        >
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
            className=" cuntactus-input cuntactus-email-input"
              placeholder="رایانامه"
              type="email"
              value={this.state.email}
              onFocus={e => this.setState({ emailFocused: true })}
              onBlur={e => this.setState({ emailFocused: false })}
              onChange={this.handleChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-2 p-0">
          <Input
            className="form-control-alternative cuntactus-input"
            cols="80"
            name="name"
            placeholder="متن پیام"
            rows="2"
            size="md"
            type="textarea"
          />
        </FormGroup>
        <div>
          <Button
            block
            className="btn-round"
            color="default"
            size="ms"
            type="button"
          >
            ارسال پیام
          </Button>
        </div>
      </div>
    );
  }
}

export default ContactUs;
