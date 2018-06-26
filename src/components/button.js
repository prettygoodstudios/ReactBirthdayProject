import React, {Component} from "react";
const Button = (props) => {
  return(
    <button className="button" onClick={props.hanldeClick}>{props.title}</button>
  );
}
export default Button;
