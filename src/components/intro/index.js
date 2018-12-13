import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../images/react-logo.svg";
import acurisLogo from "../../images/acuris-logo.svg";

const Intro = props => (
  <header className="App-header">
    <div className="spinner-container">
      <img src={reactLogo} className="App-logo-reverse" alt="react logo" />
      <img src={acurisLogo} className="App-logo" alt="acuris logo" />
    </div>
    <h1>
      h<span className="lame-pun">AC</span>k
      <span className="lame-pun">URIS</span> on hooks:{" "}
      <Link className="link" to="/magic-form">
        Go!
      </Link>
    </h1>
    <p>
      <i>
        [the pun <b>nobody</b> was waiting for]
      </i>
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Demo created via Create React App
    </a>
  </header>
);

export default Intro;
