import { useEffect, useState } from 'react';
import { getAllRoles, getRoleById, createRole, updateRole, deleteRole } from '../../../../../services/rolesService';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoleByIdSuccess, fetchRolesSuccess } from '../../../../../redux/actions/roleActions';

const useEditRole = ({ id }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const currentRole = useSelector((state) => state.role.role);

  useEffect(() => {
    fetchRoles();
    if (id) {
      fetchRoleById(id);
    }
  }, [id, refetch]);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const roles = await getAllRoles();
      dispatch(fetchRolesSuccess(roles));
      setRoles(roles);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchRoleById = async (id) => {
    try {
      setLoading(true);
      const role = await getRoleById(id); // API call
      setRole(role); // local state (optional, if needed)
      dispatch(fetchRoleByIdSuccess(role)); // ✅ set in Redux
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveOrUpdateRole = async (roleData) => {
    setLoading(true);
    setError(null); // Clear previous errors if any
    try {
      let response;
      let status, message, result;
      if (currentRole._id) {
        response = await updateRole(currentRole._id, roleData);
        message = "Role updated successfully";
        status = true;
        result = response.data;
      } else {
        response = await createRole(roleData);
        message = "Role created successfully";
        status = true;
        result = response.data;
      }

      // Mark for refetch after successful update or creation
      setRefetch(true);
      return { status, message, result };
    } catch (err) {
      console.error('Error saving or updating role:', err.message || err);
      return { status: false, message: err.message || err, result: null };
      setError(err);
      throw err;
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
  };
};

export default useEditRole;
