import React from "react";
import Headroom from "./headroom/Headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  NavLink  
} from "reactstrap";

import { Link } from "react-router-dom";

// import NavbarOurSocialNetworks from "./NavbarOurSocialNetworks.js";
import NavbarProfile from "./NavbarProfile.js";
import NavbarButtons from "./NavbarButtons.js";
import './navbar.css';

class MyNavbar extends React.Component {
  state = {
    formModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    let buttonsOrProfile;
    let links;
    if (this.props.isLogin === "true") {
      buttonsOrProfile = <NavbarProfile />;
      links = (
        <div className="d-flex justify-content-center align-items-center">


        <Button
          className="text-secondary"
          color="link"
          to="/mygroups"
          tag={Link}
        >
          حساب من
        </Button>
          <Button
            className="text-secondary"
            color="link"
            to="/mygroups"
            tag={Link}
          >
            گروه‌های من
          </Button>
          <Button
            className="text-secondary"
            color="link"
            to="/mygroups"
            tag={Link}
          >
            گزارش
          </Button>
        </div>
      );
    } else {
      buttonsOrProfile = <NavbarButtons />;
      links = null;
    }
    return (
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            {/* BRAND */}
            <NavbarBrand className="mr-0 pt-0 pb-0" to="/" tag={Link}>
              {/* <img
                  alt="..."
                  src={require("../../assets/img/brand/argon-react-white.png")}
              /> */}
              <h1 style={{color: "#f98b00"}}>حسابِه</h1>
            </NavbarBrand>
            {/* TOGGLER */}
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar_global">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">

                      <img
                        alt="..."
                        src={require("../../assets/img/brand/hesabeh-white.png")}
                      />
                      <p className="h1-hesabeh" style={{color: "#fff" , fontSize:"29px"}}>حسابِه</p>
                    </Link>
                  </Col>

                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>

                {links}

              </Nav>
              <Nav className="align-items-lg-center mr-lg-auto" navbar>
              <div className="d-flex justify-content-center align-items-center">
              <NavLink
                className="nav-link pl-3 pr-3 my-nav-link"
                color="primary"
                id="navbar-signin"
                onClick={() => this.toggleModal("loginFormModal")}
              >
                پشتیبانی
              </NavLink>
              </div>
                {/*<NavbarOurSocialNetworks />*/}
                {buttonsOrProfile}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default MyNavbar;
