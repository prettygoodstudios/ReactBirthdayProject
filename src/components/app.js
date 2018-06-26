import React, { Component } from 'react';
import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
import ChangeDate from "./changeDate";
import LargeText from "./largeText";
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
    return (this.state.active) ? [<Clock />,<label className="grid__remaining">Remaing until your 21st birthday</label>] : <Picker />;
  }
  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>
        {!this.state.active ? <Button title="Generate Countdown" handleClick={() => this.handleGenerate()}/> : <ChangeDate title="Change Date"  handleClick={() => this.handleGenerate()}/>}
        <LargeText />
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
