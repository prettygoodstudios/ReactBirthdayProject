import React, {Component} from "react";
const ChangeDate = (props) => {
  return(
    <button className="change-date" onClick={() => props.handleClick()}><i className="far fa-calendar-alt"></i>{props.title}</button>
  );
}
export default ChangeDate;
