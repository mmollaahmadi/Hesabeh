import React from 'react';
import {
  FormGroup,
  Input,
  InputGroup
} from "reactstrap";

class BuyListTableRow extends React.Component {
  render(){
    return(
      <tr>
      <td>1</td>

        <td>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">


            <Input
              className="signin-modal-input"
              placeholder="ایمیل / نام کاربری"
              type="email"
            />
          </InputGroup>
        </FormGroup>
        </td>

        <td>
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
        </td>
      </tr>
    );
  }
}

export default BuyListTableRow;
