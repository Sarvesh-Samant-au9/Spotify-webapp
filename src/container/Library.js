import React, { Component } from "react";
import { userPlaylist } from "../action/ActionFile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import "./library.css";
import Loaders from "../components/Loader/Loaders";
import Header from "../components/Header/Header";

class Library extends Component {
  componentDidMount = () => {
    this.props.dispatch(userPlaylist());
  };

  renderPlaylist = (data) => {
    if (data) {
      return data.items.map((item) => {
        return (
          <div className="category" id="display">
            <div>
              <h3>{item.name}</h3>
              <Link to={`/categoryplaylist/${item.id}`}>
                {item.images[0] ? (
                  <img
                    src={item.images[0].url}
                    className="category-image"
                    alt="categoryImage"
                  />
                ) : (
                  <img className="category-image" alt="categoryImage" />
                )}
              </Link>
              {item.description}
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" style={{ padding: "0" }}>
              <Sidebar />
            </div>
            <div className="col-sm-10" style={{ marginBottom: "80px" }}>
              <h1>Playlist</h1>
              <div className="renderPlaylist">
                {this.props.uPlaylist ? (
                  this.renderPlaylist(this.props.uPlaylist)
                ) : (
                  <Loaders />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    uPlaylist: state.UserPlaylistReducer.userPlaylist,
  };
};
export default connect(mapStateToProps)(Library);
