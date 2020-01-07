import React, { Component } from 'react';
import Input from './../kit/Input';
import Button from './../kit/Button';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { edit } from './../modules/action';
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:  this.props.user.email,
      name:  this.props.user.name,
      surnname:  this.props.user.surnname,
    };
  }
  edit = (event) => {
    let { edit } = this.props;
    event.preventDefault();

    edit(this.state);
  };
    
  handleChangeEmail = (event) => {
    event.persist();
    this.setState(prevState => ({ email: prevState.email}));
    console.log(event)
  }
  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  }
  handleChangeSurname = (e) => {
    this.setState({ surnname: e.target.value });
  }
  render() {
    const { user } = this.props
    return (
      <div className="login-wrapper">
        <h1 className="login-title">Update Profile</h1>
        <form onSubmit={ this.edit }>
       <Input
          inputType={"text"}
          className="wrap-input"
          value={user.name}
          placeholder={"Enter your name"}
          handleChange={this.handleChangeName}
        />
       <Input
          inputType={"text"}
          className="wrap-input"
          value={user.surnname}
          placeholder={"Enter your surname"}
          handleChange={this.handleChangeSurname}
        />
       <Input
          inputType={"email"}
          className="wrap-input"
          value={user.email}
          placeholder={"Enter your email"}
          handleChange={this.handleChangeEmail}
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
  edit: userInfo => dispatch(edit(userInfo))
})
const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  };
}
export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
