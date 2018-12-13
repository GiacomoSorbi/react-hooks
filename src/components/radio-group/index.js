import React, { Fragment } from "react";
import { Radio } from "../";

const RadioGroup = props => (
  <Fragment>
    <h4>{props.title}</h4>
    {props.radioItems.map(item => (
      <Radio
        key={item.value}
        checked={item.value === props.value}
        disabled={props.disabled}
        {...item}
        onChange={props.onChange}
      />
    ))}
  </Fragment>
);

export default RadioGroup;
