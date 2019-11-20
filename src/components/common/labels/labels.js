import React from 'react'
import {Badge} from "reactstrap";
import reactCSS from 'reactcss'

export default class Labels extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isTextColorDark: true,
      colorPicked: {
        r: '20',
        g: '200',
        b: '20',
        a: '1'
      }
    };
  }
  render() {
    const styles = reactCSS({
      'default': {
        color: {
          color: `${this.state.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`,
          background: `rgba(${this.state.colorPicked.r},${this.state.colorPicked.g},${this.state.colorPicked.b},${this.state.colorPicked.a})`,
        },
        textColor: {
          color: `${this.state.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`,
        }
      },
    });
    let labels = [];
    if (this.props.labels) {
      this.props.labels.forEach(label => {
        labels.push(
          <Badge
            style={{
              background: `rgba(${label.color.r},${label.color.g},${label.color.b},${label.color.a})`,
              color: `${label.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`
            }}
            color="primary"
            className="profile-label align-self-center px-2">
            {label.name}
            <i className={`fa fa-close mr-3 profile-label-close-btn ${!this.props.hasClose ? 'd-none' : ''}`}
              // onClick={() => this.handleDeleteLabel(label.id)}
            />
          </Badge>
        );
      });
    }
    return(
      <>
      {labels}
      </>
    );
  }
}