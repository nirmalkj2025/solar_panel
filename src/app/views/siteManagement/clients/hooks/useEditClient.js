import { useEffect, useState } from 'react';
import {getAllClients, getClientById,createClient,updateClient,deleteClient} from '../../../../../services/clientsService';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClientByIdSuccess, fetchClientsSuccess } from '../../../../../redux/actions/clientActions';
const useEditClient = ({id}) => {
const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const currentClient = useSelector((state) => state.client.client);
  useEffect(() => {
    fetchClients();
    if (id) {
      fetchClientById(id);
    }
  }, [id, refetch]);
  const fetchClients = async () => {
    try {
      setLoading(true);
      const clients = await getAllClients();
      dispatch(fetchClientsSuccess(clients));
      console.log("clients", clients);
      setClients(clients);
    //   return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchClientById = async (id) => {
    try {
      setLoading(true);
      const client = await getClientById(id); // API call
      console.log("client", client);
      setClient(client); // local state (optional, if needed)
      dispatch(fetchClientByIdSuccess(client)); // ✅ set in Redux
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveOrUpdateClient = async (clientData) => {
    setLoading(true);
    setError(null); // Clear previous errors if any
    // console.log("clientData", currentClient);
    try {
      let response;
      let status, message, result;
      if (currentClient._id) {
        response = await updateClient(currentClient._id, currentClient);
        message= "Client updated successfully";
        status=true
        result= response.data;
      } else {
        response = await createClient(currentClient);
        message= "Client created successfully";
        status=true
        result= response.data;
      }
  
      // Mark for refetch after successful update or creation
      setRefetch(true);
      return {status, message, result}; // Return the response or any other data you need
    } catch (err) {
      // Handle and optionally log the error
      console.error('Error saving or updating client:', err.message || err);
      return {status: false, message: err.message || err, result: null};
      setError(err);
      throw err; // Re-throw to allow caller to react (optional)
    } finally {
      // Ensure loading is disabled even if an error occurs
      setLoading(false);
    }
  };


  const removeClient = async (id) => {
    try {
      setLoading(true);
      const res = await deleteClient(id);
      console.log("client deleted successfully", res);
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
    client,
    clients,
    refetch,
    setRefetch,
    saveOrUpdateClient,
    removeClient,
    fetchClients,
    fetchClientById,
  };
};

export default useEditClient;
