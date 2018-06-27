import React, {Component} from "react";
class Clock extends Component{
  render(){
    return(
      <div className="clock">
        <div className="clock__days clock__box">
          <label className="clock__title">Days</label>
          <label className="clock__amount">{this.props.time.days}</label>
        </div>
        <div className="clock__hours clock__box">
          <label className="clock__title">Hrs</label>
          <label className="clock__amount">{this.props.time.hours}</label>
        </div>
        <div className="clock__minutes clock__box">
          <label className="clock__title">Mins</label>
          <label className="clock__amount">{this.props.time.minutes}</label>
        </div>
        <div className="clock__seconds clock__box">
          <label className="clock__title">Secs</label>
          <label className="clock__amount">{this.props.time.seconds}</label>
        </div>
      </div>
    );
  }
}
export default Clock;
