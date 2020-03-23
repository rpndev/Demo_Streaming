import {
  ERROR,
  LOADING,
  GET_ALL_MOVIES,
  GET_ALL_SERIES
} from "../actions/type";

const initialState = {
  items: [],
  loading: false,
  error: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_ALL_SERIES:
      console.log(action.payload);

      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
