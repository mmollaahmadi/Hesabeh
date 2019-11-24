import React from "react";
import { DropdownMenu, DropdownToggle, Dropdown, Input } from "reactstrap";
class InputAutoSuggestion extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      dropdownOpen: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    if (event.target.value === "") {
      this.setState({
        dropdownOpen: false
      });
    }
    else {
        this.props.handleInputChange(event.target.value);
        this.setState({
          value: event.target.value,
          dropdownOpen: true
        });
    }
  }

  toggle = () => {
      this.setState({dropdownOpen: !this.state.dropdownOpen});
  };

  componentDidUpdate(prevProps){
    if(prevProps.numberOfUsers < this.props.numberOfUsers){
      this.setState({
        value:'',
        dropdownOpen: false
      });
    }
  }
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} >
        <DropdownToggle
          tag={"div"}
          data-toggle='dropdown'
          aria-expanded={this.state.dropdownOpen}
          >
          <Input
            className="audit-input"
            placeholder="ایمیل/ نام کاربری / شماره همراه اعضا"
            type="text"
            value={this.state.value}
            onChange={this.handleOnChange}
          />
        </DropdownToggle>
        <DropdownMenu className={`${this.state.dropdownOpen ? 'd-flex' : ''}`}>
        {this.props.content}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default InputAutoSuggestion;
