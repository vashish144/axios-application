import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Login from "./components/Login";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
    };
  }
  onLoginSuccess = (token) => {
    // alert("onLogin success in app.js          " + token);
    this.setState = {
      token: token,
    };
  };
  render() {
    if (!this.state.token) {
      return <Login loginEvent={this.onLoginSuccess} />;
    }
    return <h1>Landing Page</h1>;
  }
}

export default App;
