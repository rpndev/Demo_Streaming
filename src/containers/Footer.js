import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebookSVG from "../assets/social/facebook-white.svg";
import twitterSVG from "../assets/social/twitter-white.svg";
import instagramSVG from "../assets/social/instagram-white.svg";

import appstoreSVG from "../assets/store/app-store.svg";
import playstoreSVG from "../assets/store/play-store.svg";
import windowstoreSVG from "../assets/store/windows-store.svg";
function Footer() {
  return (
    <nav className="Footer-Style navbar navbar-dark bg-dark">
      <div className="copyright">
        <Link to="/" className="link">
          Home
        </Link>
        <label>|</label>

        <Link to="/" className="link">
          Terms and Conditions
        </Link>
        <label>|</label>
        <Link to="/" className="link">
          Privacy Policy
        </Link>
        <label>|</label>
        <Link to="/" className="link">
          Collection Statement
        </Link>
        <label>|</label>
        <Link to="/" className="link">
          Help
        </Link>
        <label>|</label>
        <Link to="/" className="link">
          Manage Account
        </Link>
        <br />
        <p>Copyright 2016 DEMO Streaming. All Rights Reserved.</p>
        <div className="social">
          <img src={facebookSVG} alt="facebook" />
          <img src={twitterSVG} alt="twitter" />
          <img src={instagramSVG} alt="instagram" />
          <img src={appstoreSVG} alt="store" />
          <img src={playstoreSVG} alt="store" />
          <img src={windowstoreSVG} alt="store" />
        </div>
      </div>
    </nav>
  );
}

export default Footer;
