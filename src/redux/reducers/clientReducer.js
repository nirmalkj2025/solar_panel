import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_SUCCESS,
    FETCH_CLIENTS_FAILURE,
    FETCH_CLIENT_BY_ID_REQUEST,
    FETCH_CLIENT_BY_ID_SUCCESS,
    FETCH_CLIENT_BY_ID_FAILURE,
    CREATE_CLIENT,
    UPDATE_CLIENT,
    DELETE_CLIENT,
    UPDATE_CLIENT_FIELD
  } from '../types/clientTypes';
  
  const initialState = {
    clients: [],
    client: {
      name: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
    },
    loading: false,
    error: null,
  };
  
  const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CLIENTS_REQUEST:
      case FETCH_CLIENT_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CLIENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          clients: action.payload,
        };
      case FETCH_CLIENT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          client: action.payload,
        };
      case FETCH_CLIENTS_FAILURE:
      case FETCH_CLIENT_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_CLIENT:
        return {
          ...state,
          clients: [...state.clients, action.payload],
        };
      case UPDATE_CLIENT:
        return {
          ...state,
          client: action.payload,
        };
      case DELETE_CLIENT:
        return {
          ...state,
          clients: state.clients.filter((client) => client._id !== action.payload),
        };
      case UPDATE_CLIENT_FIELD:
        return {
          ...state,
          client: {
            ...state.client,
            [action.payload.field]: action.payload.value,
          },
        };
      default:
        return state;
    }
  };
  
  export default clientReducer;
  