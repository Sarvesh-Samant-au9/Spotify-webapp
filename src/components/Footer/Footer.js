import React, { Component } from "react";
import { connect } from "react-redux";
import "./Footer.css";

class Footer extends Component {
  renderIframe = (ID) => {
    if (ID) {
      return (
        <div className="footer">
          <iframe
            src={`https://open.spotify.com/embed/track/${ID}`}
            width="1360"
            height="50"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="description"
          ></iframe>
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    return this.renderIframe(this.props.track_id);
  }
}

const mapStateToProps = (state) => {
  return {
    track_id: state.FooterPlayerReducer.reducer_track_id,
  };
};

export default connect(mapStateToProps)(Footer);
