import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions }from './../modules/action';


import Card from "./../kit/Card";
class Playlist extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getVendor());
  }
  render() {
    console.log(this.props.albums)


    return (
      <div>
        <h1>Playlist</h1>
        <div className="list-wrap" >


        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log(state)
  return {
    albums : state
  };
}

export default connect(mapStateToProps,null,null)(Playlist);