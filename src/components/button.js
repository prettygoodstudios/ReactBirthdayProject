import React, {Component} from "react";
const Button = (props) => {
  return(
    <button className="button" onClick={() => props.handleClick()}>{props.title}</button>
  );
}
export default Button;
