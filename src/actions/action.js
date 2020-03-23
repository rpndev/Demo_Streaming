import axios from "axios";
import { LOADING, ERROR, GET_ALL_MOVIES, GET_ALL_SERIES } from "./type";
export const loading = () => ({
  type: LOADING
});
export const getAllSeries = () => dispatch => {
  dispatch(loading());

  axios.get("http://localhost:5000/series").then(
    res => {
      dispatch({
        type: GET_ALL_SERIES,
        payload: res.data
      });
    },
    error => {
      dispatch({
        type: ERROR,
        payload: error.message
      });
    }
  );
};
export const getAllMovies = () => dispatch => {
  dispatch(loading());

  axios.get("http://localhost:5000/movies").then(
    res => {
      dispatch({
        type: GET_ALL_MOVIES,
        payload: res.data
      });
    },
    error => {
      dispatch({
        type: ERROR,
        payload: error.message
      });
    }
  );
};
