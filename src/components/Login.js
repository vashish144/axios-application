import React, { Component } from "react";
import LoginService from "../Service/Login-service";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // alert("login button clicked");
    LoginService.login({
      username: this.state.username,
      password: this.state.password,
    })
      .then((response) => {
        console.log("***login success ", response);
        this.props.loginEvent(response.token);
      })
      .catch((error) => {
        console.log("login failed");
      });
    // this.props.loginEvent("984jhdf");
  };
  handleReset = () => {
    this.setState({
      username: "",
      password: "",
    });
  };
  render() {
    console.log("****" + this.state.username + "****" + this.state.password);
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Login</button>
            <button type="reset" onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
