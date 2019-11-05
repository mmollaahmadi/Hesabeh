import React from "react";
import { Row, Col } from "reactstrap";
import Chip from "../../common/chip/chip";

class MyTableRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {isChecked:false};
    this.handleChecked = this.handleChecked.bind(this);
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.checkedStatus !== this.props.checkedStatus && this.props.checkedStatus===true){
      this.setState({
         isChecked: true
       });
    }
    if(prevProps.checkedStatus !== this.props.checkedStatus && this.props.checkedStatus===false){
      this.setState({
         isChecked: false
       });
    }
  }
  handleChecked(){
    this.props.updateCheckboxesStatusList(this.props.data.id);
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  render() {
    let columns = [];
    this.props.data.columns.forEach(col => {
      columns.push(
        <Col
          xs={col.xs}
          lg={col.lg}
          className={col.class}
        >
          {col.value}
        </Col>
      );
    });  
    return (
      <Col xs="12"
      className={`px-2 p-lg-0 m-1 m-lg-0 ${this.state.isChecked ? 'checked' : 'un-checked'}`}>
        <Row className="m-0">
      {columns}
          <Col sm="12" className="table-row-line" />
        </Row>
      </Col>
    );
  }
}

export default MyTableRow;
