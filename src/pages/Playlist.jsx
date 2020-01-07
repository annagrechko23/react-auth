import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAlbums, checkFavourite } from './../modules/action';
import { withRouter } from 'react-router-dom';
import { Card } from "./../kit";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Playlist extends Component {

  componentDidMount() {
    let { getAlbums } = this.props;
    getAlbums();
  }
  markFavourite = (album) => {
    console.log(album)
    const fav = album.favourite = !album.favourite
    let { checkFavourite } = this.props;
    checkFavourite({
      author: album.author,
				description: album.description,
				favourite: fav,
				id: album.id,
				image: album.image,
				name: album.name

    });
  };


  render() {
    const { albums } = this.props;

    return (
      <div>
        <h1>Playlist</h1>
        <div className="list-wrap" >
          {albums && albums.map((album) =>
            <Card
              class={"list-element"}
              key={album.id}
              title={album.name}
              image={album.image}
              content={album.description}
              icon={faHeart}
              color={album.favourite ? 'red' : 'gray'}
              markFavourite={() => this.markFavourite(album)}

            />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    albums: state.albums
  };
}
const mapDispatchToProps = (dispatch) => {
  return { 
    getAlbums: () => dispatch(getAlbums()),
    checkFavourite: (id, album) => dispatch(checkFavourite(id, album)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Playlist));