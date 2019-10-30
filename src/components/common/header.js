import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className={'mb-4'}>
     {/*   <img
          alt="..."
          className="rounded-circle  logo header-logo"
          src={require("../../assets/img/theme/logo01.png")}
        />
        <p className="brand-title">حسابِه</p>*/}

        <p className="title-text d-inline">
          {this.props.title}
          <span className={`brand-title-inline ${this.props.needBrand === true ? '' : 'd-none'}`}> حسابِه</span>
        </p>
      </div>
    );
  }
}

export default Header;
