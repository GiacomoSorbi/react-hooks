import React, { Fragment } from "react";
import classnames from "classnames";
import "./radio.css";

const Radio = props => (
  <Fragment>
    <input type="radio" id={props.value} {...props} />
    <label
      className={classnames("radio", props.disabled ? "disabled" : "")}
      htmlFor={props.value}
    >
      {props.text}
    </label>
  </Fragment>
);

export default Radio;
