import React from 'react';
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Button,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";
class PaymentsTableRow extends React.Component {
  render(){
    return(
      <tr>
      <td>1</td>
        <td scope="row">
          شامپو صحت
        </td>
        <td>5000 تومان</td>
        <td>
        شخصی
        </td>
        <td>
          -
        </td>
        <td className="text-right">

          <i className="fa fa-trash mx-1" />

          <i className="fa fa-edit mx-1" />
          <i className="fa fa-eye mx-1" />
        </td>
      </tr>
    );
  }
}

export default PaymentsTableRow;
