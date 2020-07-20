import React from "react";
import accessUrl from "../../config/loginUrl";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="row no-gutters">
      <div className="col-md-6 no-gutters">
        <div className="leftSide">
          <div className="logoC">
            <div className="logoWrapper">
              <img
                src="https://ik.imagekit.io/beevfgcytiq/Audiophile/shared/tablet/tr:r-10/men-using-product.jpg?ik-sdk-version=react-1.1.0"
                alt="logoImage"
                className="img-fluid logoImage"
              />
              <h3>Endless Music</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 no-gutters">
        <div className="rightSide">
          <div className="rightContainer">
            <div className="heading">
              <h3>
                Live Music <br />
                Love Music, <br />
                Be the Music <br />
              </h3>
              <div className="makerNlogin">
                <a id="loginBox" href={`${accessUrl}`}>
                  Login Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="animation-area">
          <ul class="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
