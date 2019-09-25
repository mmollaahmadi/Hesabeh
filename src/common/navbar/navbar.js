import React from "react";
// import Headroom from "./headroom/Headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  NavLink,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
import NavbarProfile from "./navbar-profile.js";
import NavbarButtons from "./navbar-buttons";
import "./navbar.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSelection: "my-account"
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
      buttonsOrProfile = <NavbarProfile />;
      links = (
        <div className="d-flex justify-content-center align-items-center">
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
            className={
              pageSelection === "notifications"
                ? "navbar-link-active"
                : "navbar-link"
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
      // <header className="header-global">
      <Navbar
        className="navbar-main navbar-light navbar-transparent  pb-0 "
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
            <p className="navbar-brand-title">حسابِه</p>
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
                    <p
                      className="h1-hesabeh"
                      style={{ color: "#fff", fontSize: "29px" }}
                    >
                      حسابِه
                    </p>
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
              <div className="d-flex justify-content-center align-items-center">
                <NavLink
                  to="/support"
                  tag={Link}
                  className="navbar-link pl-3 pr-3"
                  color="primary"
                >
                  پشتیبانی
                </NavLink>
                <NavLink
                  to="/contact-us"
                  tag={Link}
                  className="navbar-link pl-3 pr-3"
                  color="primary"
                >
                  ارتباط با ما
                </NavLink>
              </div>
            </Nav>
            <Nav className="align-items-lg-center mr-lg-auto" navbar>
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
