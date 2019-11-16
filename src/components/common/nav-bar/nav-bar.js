import React from "react";
// import Headroom from "./headroom/Headroom.js";
import {
  Collapse,
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
import "./nav-bar.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSelection: "my-account",
      collapse: false
    };

    this.resetPageSelection=this.resetPageSelection.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  handleOutsideClick(e) {
      // ignore clicks on the component itself
    //   if (this.node.contains(e.target)) {
    //     return;
    //   }
    //
    //   this.toggleCollapse();
    }
componentDidMount(){
  this.setState({
    pageSelection: this.props.selectedPage
  });
}
componentDidUpdate(prevProps){
  if(prevProps.selectedPage !== this.props.selectedPage)
  {
    this.setState({
      pageSelection: this.props.selectedPage
    });
  }
}
  togglePage = state => {
    this.props.onChangePage(state);
    this.setState({
      pageSelection: state,
      collapse: false
    });
  };

  toggleCollapse = () => {
    // if (!this.state.collapse) {
    //   // attach/remove event handler
    //   document.addEventListener('click', this.handleOutsideClick, false);
    // } else {
    //   document.removeEventListener('click', this.handleOutsideClick, false);
    // }

    this.setState({
      collapse: !this.state.collapse
    });
  };

  resetPageSelection(){
    this.setState({
      pageSelection: 'my-account'
    });
  }

  render() {
    const pageSelection = this.state.pageSelection;
    let profileToggler;
    let profile;
    let auditButtons;
    let links;
    if (this.props.isLogin === true) {
      profileToggler = <NavBarProfileToggler
      currentUser = {this.props.currentUser}
      onLogout={this.props.onLogout}
      pageSelection={this.state.pageSelection}
      resetPageSelection={this.resetPageSelection}
      togglePage={this.togglePage} />;

      profile = <NavBarProfile
      currentUser = {this.props.currentUser}
      pageSelection={this.state.pageSelection}
      onLogout={this.props.onLogout}
      resetPageSelection={this.resetPageSelection}
      togglePage={this.togglePage}
      />;
      auditButtons=null;
      links = (
        <>
          <NavLink
            to="/my-account"
            tag={Link}
            className={`d-block ml-auto pl-3 pr-3 ${
              pageSelection === "my-account"
                ? "nav-bar-link-active"
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
                ? "nav-bar-link-active"
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
            className={`d-block ml-auto pl-3 pr-3 nav-bar-link-disable ${
              pageSelection === "report" ? "nav-bar-link-active" : "navbar-link"
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
      auditButtons =  <NavBarButtons
      pageSelection={this.state.pageSelection}
      resetPageSelection={this.resetPageSelection}
      togglePage={this.togglePage}
      />;
      links = null;
    }
    return (
      // <header className="header-global">
      <div className="popover-container" ref={node => { this.node = node; }}>
      <Navbar
        className="navbar-main navbar-light navbar-transparent  pb-0 px-2 px-lg-5"
        expand="lg"
        id="navbar-main"
      >
        {/* BRAND */}
        <NavbarBrand
        className="mr-0 pt-0 pb-0"
        onClick={() => this.togglePage("Hesabeh")}
        to="/"
        tag={Link}>
          {/*  <img
            alt="..."
            className="rounded-circle  logo brand-logo"
            src={require("../../assets/img/theme/logo01.png")}
          />*/}
          <p className="navbar-brand-title">حسابِه</p>
        </NavbarBrand>

        {/* TOGGLER
        <button className="navbar-toggler" onClick={() => this.toggleCollapse()}>
          <span className="navbar-toggler-icon" />
        </button>*/}

        <button className={`navbar-toggle ${this.state.collapse ? '' : 'navbar-toggle-collapsed'}`} onClick={() => this.toggleCollapse()}>
          <span className="icon-bar top-bar" ></span>
          <span className="icon-bar middle-bar" />
          <span className="icon-bar bottom-bar" />
        </button>
        <Collapse navbar isOpen={this.state.collapse} className='px--5'>
          <Nav className="d-flex w-100 pr-0" navbar>
            {profile}
            {auditButtons}

            <Row className="order-lg-first d-lg-flex d-block justify-content-center align-items-center mx-lg-auto mx-0">
              {profileToggler}
              {links}
              <NavLink
                to="/support"
                tag={Link}
                className={`d-block ml-auto pl-3 pr-3 ${
                  pageSelection === "support"
                    ? "nav-bar-link-active"
                    : "navbar-link"
                }`}
                color="primary"
                onClick={() => this.togglePage("support")}
              >
                <i className="fa fa-life-ring d-lg-none mr-0 ml-2"/>
                پشتیبانی
              </NavLink>
              <NavLink
                to="/help"
                tag={Link}
                className={`d-block ml-auto pl-3 pr-3 ${
                  pageSelection === "help"
                    ? "nav-bar-link-active"
                    : "navbar-link"
                }`}
                color="primary"
                onClick={() => this.togglePage("help")}
              >
                <i className="fa fa-question-circle d-lg-none mr-0 ml-2"/>
                راهنما
              </NavLink>
            </Row>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
      // </header>
    );
  }
}

export default MyNavbar;
