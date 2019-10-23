import React from "react";
// import Headroom from "./headroom/Headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,DropdownItem,
  Nav,
  Row,
  NavLink,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
import NavBarProfile from "./nav-bar-profile.js";
import NavBarButtons from "./nav-bar-buttons";
import NavBarProfileToggler from './nav-bar-profile-toggler.js'
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
    let profileToggler;
    let profile;
    let auditButtons;
    let links;
    if (this.props.isLogin === true) {
      profileToggler = <NavBarProfileToggler pageSelection={this.state.pageSelection} togglePage={this.togglePage} />;
      profile = <NavBarProfile onLogout={this.props.onLogout}/>;
      auditButtons=null;
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
            <i className="fa fa-credit-card-alt d-lg-none mr-0 ml-2"/>
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
            <i className="fa fa-bell d-lg-none mr-0 ml-2"/>
            اعلام‌ها <Badge className='notification-badge' >5</Badge>
          </NavLink>

          <NavLink
            className={`d-block ml-auto pl-3 pr-3 ${
              pageSelection === "my-groups"
                ? "nav-bar-link-active"
                : "navbar-link"
            }`}
            onClick={() => this.togglePage("my-groups")}
            color="link"
            to="/mygroups"
            tag={Link}
          >
            <i className="fa fa-users d-lg-none mr-0 ml-2"/>
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
            <i className="fa fa-line-chart d-lg-none mr-0 ml-2"/>
            گزارش
          </NavLink>
          <DropdownItem className='d-lg-none my-divider' divider />
        </>
      );
    } else {
      profile = null;
      auditButtons =  <NavBarButtons />;
      links = null;
    }
    return (
      // <header className="header-global">
      <Navbar
        className="navbar-main navbar-light navbar-transparent  pb-0 px-2 px-lg-5"
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
        <UncontrolledCollapse navbar toggler="#navbar_global" className='px--5'>
          <Nav className="d-flex w-100 pr-0" navbar>
            {profile}
            {auditButtons}

            <Row className="order-lg-first d-lg-flex d-block justify-content-center align-items-center mx-lg-auto mx-0">
              {profileToggler}
              {links}
              <NavLink
                to="/support"
                tag={Link}
                className="navbar-link d-block ml-auto pl-3 pr-3"
                color="primary"
              >
                <i className="fa fa-life-ring d-lg-none mr-0 ml-2"/>
                پشتیبانی
              </NavLink>
              <NavLink
                to="/help"
                tag={Link}
                className="navbar-link d-block pl-3 pr-3"
                color="primary"
              >
                <i className="fa fa-question-circle d-lg-none mr-0 ml-2"/>
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
