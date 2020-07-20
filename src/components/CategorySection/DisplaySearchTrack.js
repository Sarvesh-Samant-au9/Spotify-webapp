import React, { Component } from "react";
import { connect } from "react-redux";
import { userPlaylist, action_track_id } from "../../action/ActionFile";
import "./displayTracks.css";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import Loaders from "../Loader/Loaders";

class DisplaySearchTrack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracksInfo: "",
      modalIsOpen: false,
    };
  }

  componentDidMount = () => {
    this.props.dispatch(userPlaylist());
  };

  handleChange = (data) => {
    console.log("Each Id >>", data);
    const tInfo = this.props.tracks.tracks.items.filter((item) => {
      return item.id === data;
    });
    this.setState({
      tracksInfo: tInfo[0].id,
    });
  };
  passingTrackIdToAction = () => {
    this.props.dispatch(action_track_id(this.state.tracksInfo));
  };

  renderRecentTracks = ({ tracks }) => {
    if (tracks) {
      return tracks.tracks.items.map((item) => {
        return (
          <tr onClick={() => this.handleChange(item.id)}>
            <td>
              <img
                src={item.album.images[2].url}
                id={item.id}
                alt="categoryImage"
              />
            </td>
            <td>
              <AudiotrackIcon /> {item.name}
            </td>
            <td>{item.album.release_date}</td>
            <td>{item.popularity}</td>
            <td>{item.artists[0].name}</td>
            <td>{(item.duration_ms * 1.6667e-5).toFixed(2)}</td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div className="track_table">
        <table id="table" className="table">
          <thead>
            <tr className="heading_tr">
              <td>Poster</td>
              <td>Title</td>
              <td>Release dt.</td>
              <td>Popularity</td>
              <td>Artist</td>
              <td>Duration</td>
            </tr>
          </thead>
          <tbody>{this.renderRecentTracks(this.props)}</tbody>
        </table>
        {this.state.tracksInfo ? this.passingTrackIdToAction() : <Loaders />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uPlaylist: state.UserPlaylistReducer.userPlaylist,
  };
};
export default connect(mapStateToProps)(DisplaySearchTrack);
