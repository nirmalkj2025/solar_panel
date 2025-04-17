import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import useEditClient from "./hooks/useEditClient";
import { useDispatch, useSelector } from 'react-redux';
import { updateClient, updateClientField } from '../../../../redux/actions/clientActions';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Client Name is required"),
  contactPerson: Yup.string().required("Contact Person is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
});

const AddEditClient = ({ open, handleClose, initialData, onSave }) => {
    const dispatch = useDispatch();
  const {
    loading,
    error,
    saveOrUpdateClient,
    // onChange
    // deleteClient
  } = useEditClient({id: null});
  const client = useSelector((state) => state.client.client); // Adjust the selector as necessary
  const formik = useFormik({
    initialValues: {
      name: client?.name || "",
      contactPerson: client?.contactPerson || "",
      email: client?.email || "",
      phone: client?.phone || "",
      address: client?.address || "",   
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let response = await saveOrUpdateClient(values);
        let {status, result, message }= response;
        if (status) { 
        //  update redux client state to {}
        dispatch(updateClient({})); // Update Redux state
        handleClose();
        resetForm();
        onSave(message);
        }
     
      } catch (err) {
        console.error("Submission error:", err);
      }
    },
    enableReinitialize: true,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateClientField(name, value)); // Update Redux state
    formik.handleChange(e); // Update Formik state
  };
//   useEffect(() => {
//     if (client) {
//       formik.setValues(client);
//     }
//   }, [client]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{client ? "Edit Client" : "Add Client"}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Client Name"
                fullWidth
                value={formik.values.name}
                onChange={handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="contactPerson"
                label="Contact Person"
                fullWidth
                value={formik.values.contactPerson}
                onChange={handleChange}
                error={formik.touched.contactPerson && Boolean(formik.errors.contactPerson)}
                helperText={formik.touched.contactPerson && formik.errors.contactPerson}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="phone"
                label="Phone"
                fullWidth
                value={formik.values.phone}
                onChange={handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                fullWidth
                value={formik.values.email}
                onChange={handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Address"
                fullWidth
                multiline
                rows={3}
                value={formik.values.address}
                onChange={handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={18} /> : null}
          >
            {client ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddEditClient;
