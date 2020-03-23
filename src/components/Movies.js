import React, { Component } from "react";
import Content from "../containers/Content";
import { getAllMovies } from "../actions/action";
import PropsType from "prop-types";
import { connect } from "react-redux";
class Movies extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }
  render() {
    const { items, loading, error } = this.props;
    return <Content items={items} loading={loading} error={error}></Content>;
  }
}
Movies.propsType = {
  series: PropsType.object.isRequired,
  getAllSeries: PropsType.func.isRequired
};
const mapStateToProps = state => ({
  items: state.items
});
export default connect(mapStateToProps, { getAllMovies })(Movies);
