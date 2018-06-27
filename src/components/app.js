import React, { Component } from 'react';
import Moment from "moment";
import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
import ChangeDate from "./changeDate";
import LargeText from "./largeText";

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
      active: false,
      startDate: Moment(),
      timeRemaing: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  }
  handleGenerate = () => {
    this.setState({
      active: (this.state.active) ? false : true
    });
    let x = setInterval(() => {
      let bDay = this.state.startDate.toDate();
      let today = new Date();
      let now = new Date().getTime();
      let currentMonth = today.getMonth();
      let currentDay = today.getDay();
      let birthMonth = bDay.getMonth();
      let birthDay = bDay.getDay();
      if(birthMonth > currentMonth){
        bDay.setFullYear(today.getFullYear());
      }else if (birthMonth < currentMonth){
        bDay.setFullYear(today.getFullYear()+1);
      }else if(birthDay < currentDay){
        bDay.setFullYear(today.getFullYear()+1);
      }else{
        bDay.setFullYear(today.getFullYear());
      }
      let countDownDate = bDay.getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000*24*60*60));
      let hours = Math.floor((distance % (1000*24*60*60)) / (1000*60*60));
      let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      let seconds = Math.floor((distance % (1000*60)) / (1000));
      this.setState({
        timeRemaing: {
          days,
          hours,
          minutes,
          seconds
        }
      });
      console.log(`There are ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} left.`);
    }, 500);
  }
  handleChange = (date) => {
    console.log(`The date is ${date}`);
    this.setState({
      startDate: date
    });
  }
  renderItems = () => {
    return (this.state.active) ? [<Clock time={this.state.timeRemaing}/>,<label className="grid__remaining">Remaing until your 21st birthday</label>] : <Picker startDate={this.state.startDate} callback={this.handleChange}/>;
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
