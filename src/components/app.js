import React, { Component } from 'react';
import Moment from "moment";
import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
import ChangeDate from "./changeDate";
import LargeText from "./largeText";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      active: false,
      startDate: Moment()
    }
  }
  handleGenerate = () =>{
    this.setState({
      active: (this.state.active) ? false : true
    });
    console.log(`Start: ${this.state.startDate}`);
    let countDownDate = this.state.startDate.toDate().getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000*24*60*60));
      let hours = Math.floor((distance % (1000*24*60*60)) / (1000*60*60));
      let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      console.log(`There are ${days} days, ${hours} hours and ${minutes} left.`);
    }, 500);
  }
  handleChange = (date) => {
    console.log(`The date is ${date}`);
    this.setState({
      startDate: date
    });
  }
  renderItems = () => {
    return (this.state.active) ? [<Clock />,<label className="grid__remaining">Remaing until your 21st birthday</label>] : <Picker callback={this.handleChange}/>;
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
