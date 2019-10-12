import React from "react";
import {Link} from "react-router-dom";
import {
  NavLink,
} from "reactstrap";

class SignInButton extends React.Component {
  state = {
    loginFormModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    return (


      <NavLink
        className="navbar-link d-inline pl-3 pr-3"
        color="primary"
        id="navbar-signin"
        // onClick={() => this.toggleModal("loginFormModal")}
        to="/signin"
        tag={Link}
      >
        ورود
      </NavLink>


    );
  }
}

export default SignInButton;
