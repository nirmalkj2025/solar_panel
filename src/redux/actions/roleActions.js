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
  
  export const fetchRoles = () => ({
    type: FETCH_ROLES_REQUEST,
  });
  
  export const fetchRolesSuccess = (roles) => ({
    type: FETCH_ROLES_SUCCESS,
    payload: roles,
  });
  
  export const fetchRolesFailure = (error) => ({
    type: FETCH_ROLES_FAILURE,
    payload: error,
  });
  
  export const fetchRoleById = (id) => ({
    type: FETCH_ROLE_BY_ID_REQUEST,
    payload: id,
  });
  
  export const fetchRoleByIdSuccess = (role) => ({
    type: FETCH_ROLE_BY_ID_SUCCESS,
    payload: role,
  });
  
  export const fetchRoleByIdFailure = (error) => ({
    type: FETCH_ROLE_BY_ID_FAILURE,
    payload: error,
  });
  
  export const createRole = (role) => ({
    type: CREATE_ROLE,
    payload: role,
  });
  
  export const updateRole = (role) => ({
    type: UPDATE_ROLE,
    payload: role,
  });
  
  export const deleteRole = (id) => ({
    type: DELETE_ROLE,
    payload: id,
  });
  
  export const updateRoleField = (field, value) => ({
    type: UPDATE_ROLE_FIELD,
    payload: { field, value },
  });
  