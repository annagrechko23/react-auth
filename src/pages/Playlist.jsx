import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions }from './../modules/action';


import Card from "./../kit/Card";
class Playlist extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getUsers();
}

  render() {
    const { user, users } = this.props;
    console.log(user, users)
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
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state)
  const { users, authentication } = state;
console.log(users, authentication )
  return { users };
}

const actionCreators = {
  getUsers: userActions.getAll,
}
export default connect(mapStateToProps, actionCreators)(Playlist);