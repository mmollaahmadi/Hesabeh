import React from 'react'
import Chip from "../../my-components/chip/chip";
import './user-share.css'
import {Button, Row} from "reactstrap";

export default class UserShare extends React.Component {
  render() {
    let users = [];
    if (this.props.users) {
      if (this.props.onlyAvatar) {
        this.props.users.forEach(user => {
          users.push(
            <img
              alt=""
              className="rounded-circle chip-avatar mx-1"
              src={require("../../../assets/img/users/user01.jpg")}
            />
          );
        });
      } else {
        this.props.users.forEach(user => {
          users.push(
            <div
              className={`user-col d-flex align-items-center ${this.props.suppliersOrConsumers === 'suppliers' ? 'suppliers-color' : 'consumers-color'}`}>
              <Chip
                link="/mollaahmadi.ir"
                haveCloseButton="false"
                avatarSrc={require("../../../assets/img/users/user01.jpg")}
                label={user.username}
                class="mx-1"
                // onDelete={() => this.deleteUser()}
              />
              <span className={'share-badge'}>
                {user.share} سهم
              </span>
              <span className={'share-badge'}>
                ۱۰۰۰ تومان
              </span>
              <Button
                className={`chip-close-btn ml-2 ${!this.props.deletable ? 'd-none' : ''}`}
                color="link"
                // onClick={this.props.onDelete}
              >
                <i className="fa fa-times chip-close-icon"/>
              </Button>
            </div>
          );
        });
      }
    }
    return (
      <>
        {users}
      </>
    );
  }
}