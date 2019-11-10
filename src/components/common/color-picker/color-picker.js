import React from 'react'
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state={
      displayColorPicker: false,
      color:{
        r:'20',
        g:'200',
        b:'20',
        a:'1'
      }
    };
  }
  handleClick = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    });
  };
  handleClose = () => {
    this.setState({
      displayColorPicker: false
    });
  };
  handleChange = (color) => {
    if(this.props.handleChangeColor)
      this.props.handleChangeColor(color);
    this.setState({color: color.rgb});
  };
  render(){
    const styles = reactCSS({
      'default':{
        color:{
          width:'36px',
          height:'14px',
          borderRadius:'2px',
          background:`rgba(${this.state.color.r},${this.state.color.g},${this.state.color.b},${this.state.color.a})`,
        },
      swatch:{
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',

        cursor: 'pointer'
      },
      popover:{
        position: 'absolute',
        zIndex: '2',
      },
      cover:{
        position: 'fixed',
        top:'0px',
        right:'0px',
        bottom:'0px',
        left:'0px',
      },
    },
    });
    return(
      <div className="py-auto my-auto mx-2">
        <div className="my-auto" style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color}/>
        </div>
        {this.state.displayColorPicker ?
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={this.state.color} onChange={this.handleChange} />
          </div> : null}
      </div>
    );
  }
}

export default ColorPicker;
