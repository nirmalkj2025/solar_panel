import { useEffect, useState } from "react";
import {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole
} from "../../../../services/roleService";
import { fetchRoleByIdSuccess, fetchRolesSuccess } from "../../../../redux/actions/roleActions";
import { getAllResources } from "../../../../services/resourceService";
import { getAllActions } from "../../../../services/actionService";
import { useDispatch, useSelector } from "react-redux";

const useEditRole = ({ id }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [resources, setResources] = useState([]);
  const [actions, setActions] = useState([]);
  const currentRole = useSelector((state) => state?.role?.role);

  useEffect(() => {
    fetchRoles();
    fetchResources();
    fetchActions();
    if (id) fetchRoleById(id);
  }, [id, refetch]);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const roles = await getAllRoles();
      dispatch(fetchRolesSuccess(roles));
      setRoles(roles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRoleById = async (id) => {
    try {
      setLoading(true);
      const role = await getRoleById(id);
      setRole(role);
      dispatch(fetchRoleByIdSuccess(role));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchResources = async () => {
    try {
      const res = await getAllResources();
      setResources(res.data);
    } catch (err) {
      console.error("Failed to fetch resources:", err);
    }
  };

  const fetchActions = async () => {
    try {
      const res = await getAllActions();
      setActions(res.data);
    } catch (err) {
      console.error("Failed to fetch actions:", err);
    }
  };

  const saveOrUpdateRole = async (roleData) => {
    setLoading(true);
    setError(null);
    try {
      let response, message;
      if (currentRole._id) {
        response = await updateRole(currentRole._id, roleData);
        message = "Role updated successfully";
      } else {
        response = await createRole(roleData);
        message = "Role created successfully";
      }

      setRefetch(true);
      return { status: true, message, result: response.data };
    } catch (err) {
      return { status: false, message: err.message || err, result: null };
    } finally {
      setLoading(false);
    }
  };

  const removeRole = async (id) => {
    try {
      setLoading(true);
      const res = await deleteRole(id);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    role,
    roles,
    refetch,
    setRefetch,
    saveOrUpdateRole,
    removeRole,
    fetchRoles,
    fetchRoleById,
    resources,
    actions
  };
};

export default useEditRole;
