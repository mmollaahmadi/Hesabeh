import React from 'react';
import {
  Badge,
  Media,
  Button,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";
class GroupTableRow extends React.Component {
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
              بچه های اتاق 406
            </Button>
            </Media>
          </Media>
        </td>
        <td>$2,500 USD</td>
        <td>
          <div className="avatar-group">
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip742438047"
              onClick={e => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={require("../../../assets/img/theme/team-1-800x800.jpg")}
              />
            </a>
            <UncontrolledTooltip
              delay={0}
              target="tooltip742438047"
            >
              Ryan Tompson
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip941738690"
              onClick={e => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={require("../../../assets/img/theme/team-2-800x800.jpg")}
              />
            </a>
            <UncontrolledTooltip
              delay={0}
              target="tooltip941738690"
            >
              Romina Hadid
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip804044742"
              onClick={e => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={require("../../../assets/img/theme/team-3-800x800.jpg")}
              />
            </a>
            <UncontrolledTooltip
              delay={0}
              target="tooltip804044742"
            >
              Alexander Smith
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip996637554"
              onClick={e => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={require("../../../assets/img/theme/team-4-800x800.jpg")}
              />
            </a>
            <UncontrolledTooltip
              delay={0}
              target="tooltip996637554"
            >
              Jessica Doe
            </UncontrolledTooltip>
          </div>
        </td>
        <td>
          <Badge color="" className="badge-dot mr-4">
            <i className="bg-warning" />
            30000 تومان بدهکار
          </Badge>
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

export default GroupTableRow;
