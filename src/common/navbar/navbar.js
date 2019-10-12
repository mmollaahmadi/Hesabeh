import React from "react";
// import Headroom from "./headroom/Headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Button,
  NavLink,
  Badge
} from "reactstrap";
import {Link} from "react-router-dom";
import NavBarProfile from "./navbar-profile.js";
import NavBarButtons from "./nav-bar-buttons";
import "./navbar.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSelection: "my-account",
      collapsed:true,
      setCollapsed:true
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
      buttonsOrProfile = <NavBarProfile/>;
      links = (
        <div className="d-lg-flex d-block justify-content-center align-items-center">
          <Button
            color="link"
            className={
              pageSelection === "my-account"
                ? "navbar-link-active"
                : "navbar-link"
            }
            to="/my-account"
            tag={Link}
            onClick={() => this.togglePage("my-account")}
          >
            حساب من
          </Button>
          <Button
            className={`d-block ${
              pageSelection === "notifications"
                ? "navbar-link-active"
                : "navbar-link"}`
            }
            onClick={() => this.togglePage("notifications")}
            color="link"
            to="/notifications"
            tag={Link}
          >
            اعلام‌ها <Badge color="warning">4</Badge>
          </Button>

          <Button
            className={
              pageSelection === "my-groups"
                ? "navbar-link-active"
                : "navbar-link"
            }
            onClick={() => this.togglePage("my-groups")}
            color="link"
            to="/mygroups"
            tag={Link}
          >
            گروه‌های من
          </Button>
          <Button
            className={
              pageSelection === "report" ? "navbar-link-active" : "navbar-link"
            }
            onClick={() => this.togglePage("report")}
            color="link"
            tag={Link}
            disabled
          >
            گزارش
          </Button>
        </div>
      );
    } else {
      buttonsOrProfile = <NavBarButtons/>;
      links = null;
    }
    return (
       // <header className="header-global">
      <Navbar
        className="navbar-main navbar-light navbar-transparent  pb-0 "
        expand="lg"
        id="navbar-main"
      >
        <Container>

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
            <Nav className="d-flex w-100" navbar>
              {links}
              <div className="d-lg-flex  justify-content-center align-items-center">
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
              </div>
              {buttonsOrProfile}
            </Nav>

          </UncontrolledCollapse>
        </Container>
      </Navbar>
    // </header>
    );
  }
}

export default MyNavbar;
