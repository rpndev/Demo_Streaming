import React, { Component } from "react";
import { Link } from "react-router-dom";
import Series from "../assets/series.png";
import Movies from "../assets/movies.png";
class Navbar extends Component {
  render() {
    return (
      <div
        style={{ marginTop: "30px", textAlign: "left", marginLeft: "100px" }}
      >
        <Link to="/series">
          <img src={Series} alt="series" />
        </Link>
        <Link to="/movies">
          <img src={Movies} alt="movies" style={{ marginLeft: "30px" }} />
        </Link>
      </div>
    );
  }
}

export default Navbar;
