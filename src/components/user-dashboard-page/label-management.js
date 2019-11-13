import React from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  InputGroup,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
  Card,
  CardBody,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";
import { GithubPicker } from "react-color";
import ColorPicker from '../common/color-picker/color-picker.js'
import reactCSS from 'reactcss'

class LabelManagement extends React.Component {
  constructor(){
    super();
    this.state={
      labels:[],
      textLabel:'',
      isTextColorDark:true,
      colorPicked:{
        r:'20',
        g:'200',
        b:'20',
        a:'1'
      }
    };
    this.handleAddLabel = this.handleAddLabel.bind(this);
  }
  handleCreateLabel = () => {
    let _labels = this.state.labels;
    _labels.push(
      {
        name: this.state.textLabel,
        color: this.state.colorPicked,
        isTextColorDark: this.state.isTextColorDark
      }
    );
    this.setState({labels: _labels});
  }
  handleInputChange = (event) => {
    this.setState({textLabel: event.target.value});
  };
  handleChangeTextColor = () => {
    this.setState({isTextColorDark: !this.state.isTextColorDark});
  };
  handleChangeColor = (color) => {
    this.setState({colorPicked: color.rgb});
  };
  componentDidMount(){
    let _labels = this.state.labels;
    this.props.currentUser.labels.forEach(label => {
      _labels.push(label);
    });
    this.setState({
      labels: _labels
    });
  }
  handleAddLabel(){

  }
  render() {
    const styles = reactCSS({
      'default':{
        color:{
          color:`${this.state.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`,
          background:`rgba(${this.state.colorPicked.r},${this.state.colorPicked.g},${this.state.colorPicked.b},${this.state.colorPicked.a})`,
        },
        textColor:{
          color:`${this.state.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`,
        }
      },
    });
    let labels = [];
    this.state.labels.forEach(label => {
      labels.push(
        <Badge
        style={{background:`rgba(${label.color.r},${label.color.g},${label.color.b},${label.color.a})`,
      color:`${label.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`}}
        color="primary"
        className="profile-label align-self-center">
          {label.name}
          <i className="fa fa-close mr-2"></i>
        </Badge>
      );
    });
    return (
      <>
      <Col lg="7" className="order-2 mt-3">
      <Card data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="shadow m-0 mt-5">
        <CardBody>
          <Form role="form" className="audit-form">
            <Row className="justify-content-center mb-3">
              <Col lg="auto">
                <FormGroup className="m-0">
                  <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-tag"/>
                    </InputGroupText>
                  </InputGroupAddon>
                    <Input
                    className="audit-input"
                    placeholder="نام برچسب"
                    onChange={this.handleInputChange} />
                  </InputGroup>
                </FormGroup>
              </Col>

              <Col lg="auto" className="d-flex align-items-center">
                <ColorPicker handleChangeColor={this.handleChangeColor}/>
                <Button
                style={styles.color}
                className="p-0 btn-circle m-0"
                onClick={this.handleChangeTextColor}>
                  <i style={styles.textColor} className="fa fa-pencil"/>
                </Button>
              </Col>

              <Col lg="auto" className="">
                <FormGroup className="m-0">
                  <Button
                  color="primary"
                  type="button"
                  onClick={this.handleCreateLabel}>
                    ایجاد برچسب
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <Row className="justify-content-start">
            <h6 className="m-0"> برچسبها:</h6>
            {labels}
          </Row>
        </CardBody>
      </Card>
      </Col>
      <Col lg="5" className="order-1">
      </Col>
      </>
    );
  }
}
export default LabelManagement;