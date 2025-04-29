import {
    FETCH_ROLES_REQUEST,
    FETCH_ROLES_SUCCESS,
    FETCH_ROLES_FAILURE,
    FETCH_ROLE_BY_ID_REQUEST,
    FETCH_ROLE_BY_ID_SUCCESS,
    FETCH_ROLE_BY_ID_FAILURE,
    CREATE_ROLE,
    UPDATE_ROLE,
    DELETE_ROLE,
    UPDATE_ROLE_FIELD
  } from '../types/roleTypes';
  
  const initialState = {
    roles: [],
    role: {
      name: '',
      description: '',
      permissions: [],
    },
    loading: false,
    error: null,
  };
  
  const roleReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ROLES_REQUEST:
      case FETCH_ROLE_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_ROLES_SUCCESS:
        return {
          ...state,
          loading: false,
          roles: action.payload,
        };
      case FETCH_ROLE_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          role: action.payload,
        };
      case FETCH_ROLES_FAILURE:
      case FETCH_ROLE_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_ROLE:
        return {
          ...state,
          roles: [...state.roles, action.payload],
        };
      case UPDATE_ROLE:
        return {
          ...state,
          role: action.payload,
        };
      case DELETE_ROLE:
        return {
          ...state,
          roles: state.roles.filter((role) => role._id !== action.payload),
        };
      case UPDATE_ROLE_FIELD:
        return {
          ...state,
          role: {
            ...state.role,
            [action.payload.field]: action.payload.value,
          },
        };
      default:
        return state;
    }
  };
  
  export default roleReducer;
  