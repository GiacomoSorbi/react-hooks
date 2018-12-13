import React, { Fragment } from "react";
import classnames from "classnames";
import "./input.css";

const Input = props => (
  <Fragment>
    <label
      className={classnames(
        "input",
        props.className,
        props.isRequired ? "required" : ""
      )}
      for={props.title}
    >
      {props.title}
    </label>
    <input id={props.title} {...props} />
  </Fragment>
);

export default Input;
