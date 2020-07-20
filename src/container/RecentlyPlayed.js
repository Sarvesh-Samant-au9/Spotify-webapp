import React, { Component } from "react";
import { connect } from "react-redux";
import { recentlyPlayed } from "../action/ActionFile";
import Sidebar from "../components/Sidebar/Sidebar";
import DisplayTracks from "../components/CategorySection/DisplayTracks";
import Loaders from "../components/Loader/Loaders";
import "./recentlyPlayed.css";
import Header from "../components/Header/Header";

class RecentlyPlayed extends Component {
  componentDidMount = () => {
    this.props.dispatch(recentlyPlayed());
  };
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" style={{ padding: "0px" }}>
              <Sidebar />
            </div>
            <div className="col-md-10">
              {this.props.recentTracks ? (
                <DisplayTracks tracks={this.props.recentTracks} />
              ) : (
                <Loaders />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recentTracks: state.RecentlyPlayed.recentlyPlayed,
  };
};
export default connect(mapStateToProps)(RecentlyPlayed);
