import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header_style navbar navbar-dark bg-primary">
        <Link to="/">
          <h1 className="demo_style">DEMO Streaming</h1>
        </Link>
        <div style={{ marginRight: "20px" }}>
          <Link to="/login" className="login">
            Log in
          </Link>
          <Link to="/free" className="free_trial">
            Start your free trial
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="demo_style">Popular Titles</h1>
      </nav>
    </>
  );
}

export default Header;
