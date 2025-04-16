import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from "../types/authTypes";
  
  const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  