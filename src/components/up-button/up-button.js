import React from "react";
import { Button } from "reactstrap";
import ScrollToUp from 'react-scroll-up'
class UpButton extends React.Component {
  render() {
    return (
      <ScrollToUp showUnder={200} duration={800}>
        <Button className="p-0 up-btn-circle m-0 mr-3 mt-1" color="default">
          <i className="fa fa-arrow-up" />
        </Button>
      </ScrollToUp>
    );
  }
}
export default UpButton;
