import React, { Component } from 'react';
import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      active: false
    }
  }
  handleGenerate = () =>{
    this.setState({
      active: (this.state.active) ? false : true
    })
  }
  renderItems = () => {
    let it = (this.state.active) ? <Clock /> : <Picker />;
    return it;
  }
  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>
        <Button title="Generate Countdown" hanldeClick={this.handleGenerate}/>
        <div className="grid__skew-dark-one">
        </div>
        <div className="grid__skew-dark-two">
        </div>
        <div className="grid__skew-dark-three">
        </div>
        <div className="grid__skew-light-one">
        </div>
        <div className="grid__skew-light-two">
        </div>
        <div className="grid__skew-light-three">
        </div>
        {this.renderItems()}
      </div>
    );
  }
}
