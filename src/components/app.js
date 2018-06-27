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
      },
      age: 0
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
      let age = Math.floor((now-bDay.getTime())/(1000*60*60*24*365));
      let currentMonth = today.getMonth();
      let currentDay = today.getDate();
      let birthMonth = bDay.getMonth();
      let birthDay = bDay.getDate();
      if(birthMonth > currentMonth){
        bDay.setFullYear(today.getFullYear());
      }else if (birthMonth < currentMonth){
        bDay.setFullYear(today.getFullYear()+1);
      }else if(birthDay < currentDay){
        bDay.setFullYear(today.getFullYear()+1);
      }else if(birthDay == currentDay){
        bDay.setFullYear(today.getFullYear()+1);
      }else{
        bDay.setFullYear(today.getFullYear());
      }
      let countDownDate = bDay.getTime();
      let waitTime = this.calculateTimeDifference(countDownDate,now);
      this.setState({
        timeRemaing: waitTime,
        age: age
      });
    }, 500);
  }
  calculateTimeDifference = (first,second) => {
    let distance = first - second;
    let days = Math.floor(distance / (1000*24*60*60));
    let hours = Math.floor((distance % (1000*24*60*60)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) / (1000));
    return {days, hours, minutes, seconds};
  }
  intToPlace(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }
  getBirthDay = (date) => {
    let month = (date != undefined) ? date.getMonth()+1 : 1;
    let day = (date != undefined) ? date.getDate() : 1;
    return `${month}/${day}`;
  }
  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }
  renderItems = () => {
    return (this.state.active) ? [<Clock time={this.state.timeRemaing} key="0"/>,<label className="grid__remaining" key="1">Remaing until your {this.intToPlace(this.state.age)} birthday</label>] : <Picker startDate={this.state.startDate} callback={this.handleChange}/>;
  }
  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>
        {!this.state.active ? <Button title="Generate Countdown" handleClick={() => this.handleGenerate()}/> : <ChangeDate title="Change Date"  handleClick={() => this.handleGenerate()}/>}
        <LargeText date={this.getBirthDay(this.state.startDate.toDate())}/>
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
