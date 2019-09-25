import "core-js/stable";
import "regenerator-runtime/runtime";
import "whatwg-fetch";

import React from "react";
import ReactDOM from "react-dom";

import Display from "./components/Display";
import Buttons from "./components/Buttons";

import store from "./store";
import { Provider } from "react-redux";

function Counter() {
  return (
    <Provider store={store}>
      <Display />
      <Buttons />
    </Provider>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
