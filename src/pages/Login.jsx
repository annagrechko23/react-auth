import React, { Component } from 'react';
import Input from './../kit/Input';
import Button from './../kit/Button';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import { history } from './../modules/history';
import { withRouter } from 'react-router-dom';
import {userActions} from './../modules/action';
const cookies = new Cookies();
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
    componentDidMount() {
        console.log(this.props);
        if(cookies.get('token')){
            history.push('/playlist');
        }
    }

    handleSubmit = event => {
    event.preventDefault();
    this.props.signin(this.state)
  }
  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }
  handleChangePass = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="login-wrapper">
        <h1 className="login-title">Login</h1>
        <form onSubmit={ this.handleSubmit }>
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
  signin: userInfo => dispatch(userActions.signin(userInfo))
})

export default  withRouter(connect(null, mapDispatchToProps)(Login));
