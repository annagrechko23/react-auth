import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions }from './../modules/action';


import Card from "./../kit/Card";
class Playlist extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getVendor();
}

  render() {
    const albums = this.props;
    console.log(Object.entries(albums))
    return (
      <div>
        <h1>Playlist</h1>
        <div className="list-wrap" >
         {Object.entries(albums).map((card) =>

            <Card
              key={card.id}
            class={"list-element"}
            image={card.image}
            title={card.author}
            content={card.description}
            />
          )}

        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state ;
}

const actionCreators = {
  getVendor: userActions.getVendor,
}
export default connect(mapStateToProps, actionCreators)(Playlist);