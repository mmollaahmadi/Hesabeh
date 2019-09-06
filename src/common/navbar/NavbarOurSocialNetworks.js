import React from "react";
import { NavItem, NavLink, UncontrolledTooltip } from "reactstrap";
class NavbarOurSocialNetworks extends React.Component {
  render() {
    return (
      <div className="d-lg-flex d-sm-inline ">
        <NavItem className="mr-0 ml-4">
          <NavLink
            className="nav-link-icon pt-0 pb-0"
            href="https://www.facebook.com/creativetim"
            id="tamas"
            target="_blank"
          >
            <span className="nav-link-inner--text social-network-icon ml-2">
              021-66843101
            </span>
            <i className="fa fa-phone-square social-network-icon" />
          </NavLink>
          {/*<UncontrolledTooltip delay={0} target="tamas">
            پشتیبانی
          </UncontrolledTooltip>*/}
        </NavItem>
        <NavItem className="mr-0">
          <NavLink
            className="nav-link-icon pt-0 pb-0"
            href="https://www.facebook.com/creativetim"
            id="tooltip333589074"
            target="_blank"
          >
            <i className="fa fa-facebook-square social-network-icon" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              Facebook
            </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip333589074">
            Like us on Facebook
          </UncontrolledTooltip>
        </NavItem>

        <NavItem className="mr-0">
          <NavLink
            className="nav-link-icon pt-0 pb-0"
            href="https://www.instagram.com/creativetimofficial"
            id="tooltip356693867"
            target="_blank"
          >
            <i className="fa fa-instagram social-network-icon" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              Instagram{" "}
            </span>{" "}
          </NavLink>{" "}
          <UncontrolledTooltip delay={0} target="tooltip356693867">
            Follow us on Instagram{" "}
          </UncontrolledTooltip>{" "}
        </NavItem>

        <NavItem className="mr-0">
          <NavLink
            className="nav-link-icon pt-0 pb-0"
            href="https://twitter.com/creativetim"
            id="tooltip184698705"
            target="_blank"
          >
            <i className="fa fa-twitter-square social-network-icon" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              Twitter{" "}
            </span>{" "}
          </NavLink>{" "}
          <UncontrolledTooltip delay={0} target="tooltip184698705">
            Follow us on Twitter{" "}
          </UncontrolledTooltip>{" "}
        </NavItem>

        <NavItem className="mr-0">
          <NavLink
            className="nav-link-icon pt-0 pb-0"
            href="https://github.com/creativetimofficial/argon-design-system-react"
            id="tooltip112445449"
            target="_blank"
          >
            <i className="fa fa-whatsapp social-network-icon" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              Whatsapp
            </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip112445449">
            Star us on Whatsapp
          </UncontrolledTooltip>
        </NavItem>
      </div>
    );
  }
}

export default NavbarOurSocialNetworks;
