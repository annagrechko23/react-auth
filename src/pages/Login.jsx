import React, { Component } from 'react';
import Input from './../kit/Input'
import Select from './../kit/Select'
import Button from './../kit/Button'
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      select: '',
      options: [
        '1', '2'
      ]
    };
  }
  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }
  handleChangePass = (e) => {
    this.setState({ password: e.target.value });
  }
  handleInput = (e) =>  {
    this.setState({ select: e.target.value });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }
  render() {
    return (
      <div className="login-wrapper">
        <h1 className="login-title">Login</h1>
       <Input
          inputType={"email"}
          className="wrap-input"
          value={this.state.email}
          placeholder={"Enter your email"}
          handleChange={this.handleChange}
        />
       <Input
          inputType={"password"}
          className="wrap submit"
          value={this.state.password}
          placeholder={"Enter your password"}
          handleChange={this.handleChangePass}
        />
         <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
        />
      </div>
    );
  }
}

export default Login;
