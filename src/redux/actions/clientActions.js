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
  
  export const fetchClients = () => ({
    type: FETCH_CLIENTS_REQUEST,
  });
  
  export const fetchClientsSuccess = (clients) => ({
    type: FETCH_CLIENTS_SUCCESS,
    payload: clients,
  });
  
  export const fetchClientsFailure = (error) => ({
    type: FETCH_CLIENTS_FAILURE,
    payload: error,
  });
  
  export const fetchClientById = (id) => ({
    type: FETCH_CLIENT_BY_ID_REQUEST,
    payload: id,
  });
  
  export const fetchClientByIdSuccess = (client) => ({
    type: FETCH_CLIENT_BY_ID_SUCCESS,
    payload: client,
  });
  
  export const fetchClientByIdFailure = (error) => ({
    type: FETCH_CLIENT_BY_ID_FAILURE,
    payload: error,
  });
  
  export const createClient = (client) => ({
    type: CREATE_CLIENT,
    payload: client,
  });
  
  export const updateClient = (client) => ({
    type: UPDATE_CLIENT,
    payload: client,
  });
  
  export const deleteClient = (id) => ({
    type: DELETE_CLIENT,
    payload: id,
  });
  
  export const updateClientField = (field, value) => ({
    type: UPDATE_CLIENT_FIELD,
    payload: { field, value },
  });