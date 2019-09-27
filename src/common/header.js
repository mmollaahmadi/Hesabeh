import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <img
          alt="..."
          className="rounded-circle  logo header-logo"
          src={require("../assets/img/theme/logo01.png")}
        />
        <p className="brand-title">حسابِه</p>

        <p className="title-text">{this.props.title}</p>
      </div>
    );
  }
}

export default Header;
