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
import './footer.css';

class ContactUs extends React.Component {
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
              placeholder="ایمیل"
              type="email"
              onFocus={e => this.setState({ emailFocused: true })}
              onBlur={e => this.setState({ emailFocused: false })}
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
