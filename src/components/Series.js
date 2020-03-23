import React, { Component } from "react";
import Content from "../containers/Content";
import { getAllSeries } from "../actions/action";
import PropsType from "prop-types";
import { connect } from "react-redux";
class Series extends Component {
  componentDidMount() {
    this.props.getAllSeries();
  }
  render() {
    const { items, loading, error } = this.props;
    return <Content items={items} loading={loading} error={error}></Content>;
  }
}
Series.propsType = {
  series: PropsType.object.isRequired,
  getAllSeries: PropsType.func.isRequired
};
const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading,
  error: state.error
});
export default connect(mapStateToProps, { getAllSeries })(Series);
