import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <button className="button-normal" onClick={props.handleSubmit}>
      {props.buttonName}
    </button>
  );
};

export default Button;
