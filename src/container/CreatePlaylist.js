import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "./createPlaylist.css";
import { LoginAct } from "../action/ActionFile";
import TextField from "@material-ui/core/TextField";

class CreatePlaylist extends Component {
  state = {
    name: "",
    description: "",
    public: true,
  };
  componentDidMount = () => {
    this.props.dispatch(LoginAct());
  };

  inputNameHandle = (e) => {
    let name = e.target.value;
    this.setState({
      name: name,
    });
  };
  inputDescriptionHandle = (e) => {
    let description = e.target.value;
    this.setState({
      description: description,
    });
  };

  selectHandle = (e) => {
    let preference = e.target.value;
    this.setState({
      public: preference,
    });
  };
  submitHandle = () => {
    let user_id = this.props.userInformation.id;
    const aToken = localStorage.getItem("logintoken");

    if (this.state.name !== "" && this.state.description !== "") {
      fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + aToken,
        },
        body: JSON.stringify(this.state),
      });
      alert("Playlist created");
      this.props.history.push("/library");
    } else {
      alert("Please provide all data");
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
            <div id="container" className="col-sm-10">
              <div className="container-inside">
                <form className="classes.root" noValidate autoComplete="off">
                  <TextField
                    onChange={this.inputNameHandle}
                    id="standard-basic"
                    label="Playist Name"
                  />
                  <br />
                  <TextField
                    onChange={this.inputDescriptionHandle}
                    id="standard-basic"
                    label="Description"
                  />
                </form>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ marginRight: "20px" }} className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        value="true"
                        onChange={this.selectHandle}
                        className="form-check-input"
                        name="public"
                      />
                      Public
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        value="false"
                        onChange={this.selectHandle}
                        className="form-check-input"
                        name="public"
                      />
                      Private
                    </label>
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-outline-secondary"
                  onClick={this.submitHandle}
                >
                  Create Playlist
                </button>
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
    userInformation: state.LoginReducer.userInfo,
  };
};
export default connect(mapStateToProps)(CreatePlaylist);
