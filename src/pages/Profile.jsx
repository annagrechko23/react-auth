import React, { Component } from "react";
import Input from "./../kit/Input";
import Button from "./../kit/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { edit, onChangeProps } from "./../modules/action";
class Profile extends Component {
  edit = event => {
    let { edit } = this.props;
    const { user } = this.props
    event.preventDefault();

    edit(user);
  };
  // componentDidMount() {
  //   const { user } = this.props;
  //   this.setState({
  //     email: user.email,
  //     name: user.name,
  //     surnname: user.surnname
  //   });
  // }
  // componentDidUpdate(nextProps) {
  //   const { user } = this.props;
  //   if (
  //     this.props.user.email !== nextProps.user.email ||
  //     this.props.user.name !== nextProps.user.name ||
  //     this.props.user.surnname !== nextProps.user.surnname
  //   ) {
  //     this.setState({
  //       email: user.email,
  //       name: user.name,
  //       surnname: user.surnname
  //     });
  //   }
  // }
  handleChange = prop => event => {
    let { onChangeProps } = this.props;
    event.preventDefault();
    onChangeProps(prop, event);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="login-wrapper">
        <h1 className="login-title">Update Profile</h1>
        <form onSubmit={this.edit}>
          <Input
            inputType={"text"}
            className="wrap-input"
            value={user.name || ''}
            placeholder={"Enter your name"}
            handleChange={this.handleChange("name")}
          />
          <Input
            inputType={"text"}
            className="wrap-input"
            value={user.surnname || ''}
            placeholder={"Enter your surname"}
            handleChange={this.handleChange("surnname")}
          />
          <Input
            inputType={"email"}
            className="wrap-input"
            value={user.email || ''}
            placeholder={"Enter your email"}
            handleChange={this.handleChange("email")}
          />
          <Button type={"submit"} title={"Submit"} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  edit: userInfo => dispatch(edit(userInfo)),
  onChangeProps: (prop, event) => dispatch(onChangeProps(prop, event))
});
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
