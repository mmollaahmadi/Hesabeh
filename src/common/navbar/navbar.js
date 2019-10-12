import React from "react";
// import Headroom from "./headroom/Headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,DropdownItem,
  Nav,
  Container,
  Button,
  Row,
  NavLink,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
import NavBarProfile from "./navbar-profile.js";
import NavBarButtons from "./nav-bar-buttons";
import "./navbar.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSelection: "my-account",
      collapsed: true,
      setCollapsed: true
    };
  }

  togglePage = state => {
    this.setState({
      pageSelection: state
    });
  };

  componentDidMount() {
    // let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    // headroom.init();
  }

  render() {
    const pageSelection = this.state.pageSelection;
    let buttonsOrProfile;
    let links;
    if (this.props.isLogin === "true") {
      buttonsOrProfile = <NavBarProfile />;
      links = (
        <>
          <NavLink
            to="/my-account"
            tag={Link}
            className={`d-block ml-auto pl-3 pr-3 ${
              pageSelection === "my-account"
                ? "navbar-link-active"
                : "navbar-link"
            }`}
            color="primary"
            onClick={() => this.togglePage("my-account")}
          >
            حساب من
          </NavLink>
          <NavLink
            className={`d-block ml-auto pl-3 pr-3 ${
              pageSelection === "notifications"
                ? "navbar-link-active"
                : "navbar-link"
            }`}
            onClick={() => this.togglePage("notifications")}
            color="link"
            to="/notifications"
            tag={Link}
          >
            اعلام‌ها <Badge color="warning">4</Badge>
          </NavLink>

          <NavLink
            className={`d-block ml-auto pl-3 pr-3 ${
              pageSelection === "my-groups"
                ? "navbar-link-active"
                : "navbar-link"
            }`}
            onClick={() => this.togglePage("my-groups")}
            color="link"
            to="/mygroups"
            tag={Link}
          >
            گروه‌های من
          </NavLink>
          <NavLink
            className={`d-block ml-auto pl-3 pr-3 ${
              pageSelection === "report" ? "navbar-link-active" : "navbar-link"
            }`}
            onClick={() => this.togglePage("report")}
            color="link"
            tag={Link}
            disabled
          >
            گزارش
          </NavLink>
        </>
      );
    } else {
      buttonsOrProfile = <NavBarButtons />;
      links = null;
    }
    return (
      // <header className="header-global">
      <Navbar
        className="navbar-main navbar-light navbar-transparent  pb-0 px-5"
        expand="lg"
        id="navbar-main"
      >
        {/* BRAND */}
        <NavbarBrand className="mr-0 pt-0 pb-0" to="/" tag={Link}>
          {/*  <img
            alt="..."
            className="rounded-circle  logo brand-logo"
            src={require("../../assets/img/theme/logo01.png")}
          />*/}
          <p className="navbar-brand-title">حسابِه</p>
        </NavbarBrand>

        {/* TOGGLER */}
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="d-flex w-100 pr-0" navbar>
            {buttonsOrProfile}
            <Row className="order-lg-first d-lg-flex d-block justify-content-center align-items-center mx-lg-auto mx-0">
              {links}
              <DropdownItem className='d-lg-none my-divider' divider />
              <NavLink
                to="/support"
                tag={Link}
                className="navbar-link d-block ml-auto pl-3 pr-3"
                color="primary"
              >
                پشتیبانی
              </NavLink>
              <NavLink
                to="/help"
                tag={Link}
                className="navbar-link d-block pl-3 pr-3"
                color="primary"
              >
                راهنما
              </NavLink>
            </Row>
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
      // </header>
    );
  }
}

export default MyNavbar;
