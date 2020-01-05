import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from './../modules/action';
import { withRouter } from 'react-router-dom';

import Card from "./../kit/Card";
class Playlist extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getAlbums());
  }
  render() {
    const { albums } = this.props;

    return (
      <div>
        <h1>Playlist</h1>
        <div className="list-wrap" >
          {albums.albums && albums.albums.map((a) =>
            <Card
              key={a.id}
              title={a.name}
              image={a.image}
              content={a.description}
            />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    albums: state
  };
}

export default withRouter(connect(mapStateToProps, null, null)(Playlist));