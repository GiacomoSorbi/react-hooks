import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./main.css";
import { Intro, MagicForm } from "../";

class Main extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/magic-form" component={MagicForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
