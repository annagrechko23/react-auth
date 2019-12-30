import React, { Component } from "react";
import Card from "./../kit/Card";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      select: "",
      options: ["1", "2"]
    };
  }
  handleChange = e => {
    this.setState({ email: e.target.value });
  };
  handleChangePass = e => {
    this.setState({ password: e.target.value });
  };
  handleInput = e => {
    this.setState({ select: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Playlist</h1>
        <div className="list-wrap">
          <Card
            class={"list-element"}
            image={
              "https://consequenceofsound.net/wp-content/uploads/2013/07/jayz_magnacartaholygrail_608x608.jpg?quality=80&w=608"
            }
            title={"Jay Z"}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
            }
          />
          <Card
          class={"list-element"}
            image={
              "https://consequenceofsound.net/wp-content/uploads/2013/07/jayz_magnacartaholygrail_608x608.jpg?quality=80&w=608"
            }
            title={"Jay Z"}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
            }
          />
          <Card
            class={"list-element"}
            image={
              "https://consequenceofsound.net/wp-content/uploads/2013/07/jayz_magnacartaholygrail_608x608.jpg?quality=80&w=608"
            }
            title={"Jay Z"}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
            }
          />
        </div>
      </div>
    );
  }
}

export default Login;
