import React, { Component } from 'react';
import Input from './../kit/Input'
import Select from './../kit/Select'
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

  render() {
    return (
      <div className="App">
       <Input
          inputType={"email"}
          name={"email"}
          title={"email"}
          value={this.state.email}
          placeholder={"Enter your email"}
          handleChange={this.handleChange}
        />
       <Input
          inputType={"password"}
          name={"password"}
          title={"password"}
          value={this.state.password}
          placeholder={"Enter your password"}
          handleChange={this.handleChangePass}
        />
         <Select
          title={"Gender"}
          name={"gender"}
          options={this.state.options}
          value={this.state.select}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />
      </div>
    );
  }
}

export default Login;
