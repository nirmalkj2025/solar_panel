import axios from "./axiosInstance";

const ACTIONS_ENDPOINT = "/actions";

const handleApiError = (err) => {
  console.error("API Error: ", err);
  if (err.response) {
    throw new Error(err.response.data.message || "Something went wrong with the server.");
  } else if (err.request) {
    throw new Error("No response received from the server. Please try again later.");
  } else {
    throw new Error(err.message || "An unexpected error occurred.");
  }
};

const apiRequest = async (method, endpoint, data = null) => {
  try {
    const response = await axios({ method, url: endpoint, data });
    return response.data;
  } catch (err) {
    handleApiError(err);
  }
};

export const getAllActions = async () => {
  return apiRequest("get", ACTIONS_ENDPOINT);
};

export const getActionById = async (id) => {
  return apiRequest("get", `${ACTIONS_ENDPOINT}/${id}`);
};

export const createAction = async (data) => {
  return apiRequest("post", ACTIONS_ENDPOINT, data);
};

export const updateAction = async (id, data) => {
  return apiRequest("put", `${ACTIONS_ENDPOINT}/${id}`, data);
};

export const deleteAction = async (id) => {
  return apiRequest("delete", `${ACTIONS_ENDPOINT}/${id}`);
};
