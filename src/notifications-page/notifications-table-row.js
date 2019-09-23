import React from 'react';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
class NotificationsTableRow extends React.Component {
  render(){
    return(
      <tr>
      <td>1</td>
        <td>

        <Media className="align-items-center">

          <a
            className="avatar rounded-circle mr-3"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            <img
              alt="..."
              src={require("../assets/img/theme/bootstrap.jpg")}
            />
          </a>
          <Media>
          <Button
            className="text-primary"
            color="link"
            to="/group-dashboard"
            tag={Link}
          >
            mollaahmadi@
          </Button>

          </Media>

        </Media>

        </td>
        <td>
        <Media className="align-items-center">
        به گروه
          <a
            className="avatar rounded-circle mr-3"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            <img
              alt="..."
              src={require("../assets/img/theme/bootstrap.jpg")}
            />
          </a>
          <Media>
          <Button
            className="text-primary"
            color="link"
            to="/group-dashboard"
            tag={Link}
          >
            بچه های اتاق 406
          </Button>

          </Media>
          بپیوندید.
        </Media>

        </td>

        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={e => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
              پرداخت بدهی
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                ارسال درخواست
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    );
  }
}

export default NotificationsTableRow;
