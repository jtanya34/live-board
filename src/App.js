import React, { Component } from "react";
import MainApp from "./components/index";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}
