import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, RadioGroup } from "../";
import waifu from "../../images/waifu.jpg";
import "./magic-form.css";

const radioOptions = [
  {
    name: "marital-status",
    text: "Single",
    value: "single"
  },
  {
    name: "marital-status",
    text: "Married",
    value: "married"
  },
  {
    name: "marital-status",
    text: "Widow",
    value: "widow"
  },
  {
    name: "marital-status",
    text: "I have a waifu",
    value: "waifu"
  }
];

let count = 0;

const MagicForm = props => {
  //setting up hooks
  const [firstNameValue, setFirstName] = useState("");
  const [lastNameValue, setLastName] = useState("");
  const [radioValue, setRadio] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  useEffect(() => count++);

  //passing directly the right info into them
  const setFirstNameHandler = e => {
    setFirstName(e.currentTarget.value);
  };
  const setLastNameHandler = e => {
    setLastName(e.currentTarget.value);
  };
  const setRadioHandler = e => {
    setRadio(e.currentTarget.value);
  };
  const setExtraInfoHandler = e => {
    setExtraInfo(e.currentTarget.value);
  };

  const resetFormsHandler = () =>
    [setFirstName, setLastName, setRadio, setExtraInfo].forEach(setter =>
      setter("")
    );

  return (
    <div>
      <form className="active">
        <Input
          type="text"
          isRequired
          title="First name"
          value={firstNameValue}
          onChange={setFirstNameHandler}
        />
        <Input
          type="text"
          title="Last name"
          value={lastNameValue}
          onChange={setLastNameHandler}
        />
        <RadioGroup
          disabled={!firstNameValue}
          onChange={setRadioHandler}
          radioItems={radioOptions}
          title="Marital Status:"
          value={radioValue}
        />
      </form>
      <Link className="link bottom" to="/">
        &lt;&lt;Back
      </Link>
      {firstNameValue && (
        <Fragment>
          <div class="multi-form-container">
            <form className={radioValue === "single" ? "active" : ""}>
              <div>
                {`Dear ${firstNameValue}${
                  lastNameValue ? ` ${lastNameValue}` : ""
                }, you selected ${radioValue}`}
                , please provide us with more information:
              </div>
              <Input
                type="text"
                title="Are you happy with it?"
                value={extraInfo}
                onChange={setExtraInfoHandler}
              />
            </form>
            <form className={radioValue === "married" ? "active" : ""}>
              <div>
                {`Dear ${firstNameValue}${
                  lastNameValue ? ` ${lastNameValue}` : ""
                }, you selected ${radioValue}`}
                , please provide us with more information:
              </div>
              <Input
                type="text"
                title="Would you do it again?"
                value={extraInfo}
                onChange={setExtraInfoHandler}
              />
            </form>
            <form className={radioValue === "widow" ? "active" : ""}>
              <div>
                {`Dear ${firstNameValue}${
                  lastNameValue ? ` ${lastNameValue}` : ""
                }, you selected ${radioValue}`}
                , please provide us with more information:
              </div>
              <Input
                type="text"
                title="Did you kill your spouse? We won't tell the cops, promise!"
                value={extraInfo}
                onChange={setExtraInfoHandler}
              />
            </form>
            <form className={radioValue === "waifu" ? "active" : ""}>
              <div>
                {`Dear ${firstNameValue}${
                  lastNameValue ? ` ${lastNameValue}` : ""
                }, you selected ${radioValue}`}
                : nerd!!
              </div>
              <img src={waifu} alt="shameless Otaku" />
            </form>
          </div>
          <form className="active option">
            <button onClick={resetFormsHandler}>Reset Form</button>
          </form>
        </Fragment>
      )}
      <form className="active option">
        This component was rendered {count} times
      </form>
    </div>
  );
};

export default MagicForm;
