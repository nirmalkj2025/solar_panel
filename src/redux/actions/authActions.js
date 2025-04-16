import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from "../types/authTypes";
  
  // Dummy login (you can replace with API call later)
  export const login = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
  
    try {
      if (email === "Admin@kayjayglobal.com" && password === "Admin@123") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { email },
        });
        return { success: true };
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
      return { success: false, error: error.message };
    }
  };
  
  export const logout = () => ({ type: LOGOUT });
  