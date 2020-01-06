import React, { Component } from 'react';
import Input from './../kit/Input';
import Button from './../kit/Button';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {userActions} from './../modules/action';
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      surname: ""
    };
  }
  login = (event) => {
    let { login } = this.props;
    event.preventDefault();

    login(this.state);
  };
    
  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }
  handleChangePass = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="login-wrapper">
        <h1 className="login-title">Profile</h1>
        <form onSubmit={ this.login }>
       <Input
          inputType={"text"}
          className="wrap-input"
          value={this.state.name}
          placeholder={"Enter your name"}
          handleChange={this.handleChange}
        />
       <Input
          inputType={"text"}
          className="wrap-input"
          value={this.state.surname}
          placeholder={"Enter your surname"}
          handleChange={this.handleChange}
        />
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
          type={"submit"}
          title={"Submit"}
        />
       </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: userInfo => dispatch(userActions.signin(userInfo))
})

export default  withRouter(connect(null, mapDispatchToProps)(Profile));
