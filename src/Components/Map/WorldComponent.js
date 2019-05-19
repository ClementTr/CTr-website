import MapComponent from './MapComponent'
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class CustomizedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2019,
      min: 1994,
      max: 2019
    };
  }
  onSliderChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }
  onAfterChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <Slider value={this.state.value}
      min={this.state.min}
      max={this.state.max}
        onChange={this.onSliderChange}
        onAfterChange={this.onAfterChange}
      />
    );
  }
}

function WorldComponent (){
 return (
    <div>
      {/*<CustomizedSlider/>*/}
      <MapComponent/>
    </div>
 )
}


export default WorldComponent;
