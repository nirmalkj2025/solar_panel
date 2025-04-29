import axios from "./axiosInstance";

const RESOURCES_ENDPOINT = "/resources";

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

export const getAllResources = async () => {
  return apiRequest("get", RESOURCES_ENDPOINT);
};

export const getResourceById = async (id) => {
  return apiRequest("get", `${RESOURCES_ENDPOINT}/${id}`);
};

export const createResource = async (data) => {
  return apiRequest("post", RESOURCES_ENDPOINT, data);
};

export const updateResource = async (id, data) => {
  return apiRequest("put", `${RESOURCES_ENDPOINT}/${id}`, data);
};

export const deleteResource = async (id) => {
  return apiRequest("delete", `${RESOURCES_ENDPOINT}/${id}`);
};
