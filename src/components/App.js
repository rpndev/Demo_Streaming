import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Series from "./Series";
import Movies from "./Movies";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/series" component={Series} />
          <Route path="/movies" component={Movies} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
