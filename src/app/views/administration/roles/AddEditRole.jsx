import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stack,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
// import useEditRole from "./hooks/useEditRole"; // adjust path if needed
import useEditRole from "../hooks/useEditRole";
const statusOptions = ["Active", "Inactive"];

const validationSchema = Yup.object({
  roleName: Yup.string().required("Role name is required"),
  status: Yup.string().required("Status is required"),
  description: Yup.string()
});

export default function AddEditRole({ open, onClose, onSubmit, initialData = {} }) {
  const { resources, actions } = useEditRole({ id: initialData?._id });

  const availableResources = resources.map((r) => r.name);
  const availableActions = actions.map((a) => a.name);

  const formik = useFormik({
    initialValues: {
      roleName: initialData?.roleName || "",
      status: initialData?.status || "Active",
      description: initialData?.description || "",
      permissions: initialData?.permissions || []
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      onClose();
    }
  });

  const isChecked = (resource, action) =>
    formik.values.permissions.find((p) => p.resource === resource)?.actions.includes(action) ||
    false;

  const isAllChecked = (resource) =>
    availableActions.every((action) => isChecked(resource, action));

  const handlePermissionChange = (resource, action, checked) => {
    const updated = [...formik.values.permissions];
    const index = updated.findIndex((p) => p.resource === resource);

    if (index > -1) {
      const actions = new Set(updated[index].actions);
      checked ? actions.add(action) : actions.delete(action);

      if (actions.size === 0) updated.splice(index, 1);
      else updated[index].actions = Array.from(actions);
    } else if (checked) {
      updated.push({ resource, actions: [action] });
    }

    formik.setFieldValue("permissions", updated);
  };

  const handleSelectAll = (resource, checked) => {
    const updated = [...formik.values.permissions];
    const index = updated.findIndex((p) => p.resource === resource);

    if (checked) {
      if (index > -1) updated[index].actions = [...availableActions];
      else updated.push({ resource, actions: [...availableActions] });
    } else if (index > -1) {
      updated.splice(index, 1);
    }

    formik.setFieldValue("permissions", updated);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{initialData?._id ? "Edit Role" : "Add Role"}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Role Name"
              name="roleName"
              value={formik.values.roleName}
              onChange={formik.handleChange}
              error={formik.touched.roleName && Boolean(formik.errors.roleName)}
              helperText={formik.touched.roleName && formik.errors.roleName}
            />

            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                label="Status"
              >
                {statusOptions.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              multiline
              minRows={3}
            />

            <Box>
              <Typography variant="h6" mt={2}>
                Permissions
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {availableResources.map((resource) => (
                <Box key={resource}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={1}
                    pl={2}
                    borderRadius={2}
                    bgcolor="#f5f5f5"
                    border="1px solid #e0e0e0"
                  >
                    <Typography variant="subtitle2" fontWeight="bold">
                      {resource.toUpperCase()}
                    </Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isAllChecked(resource)}
                          onChange={(e) => handleSelectAll(resource, e.target.checked)}
                        />
                      }
                      label="Select All"
                    />
                  </Box>
                  <FormGroup row sx={{ pl: 2 }}>
                    {availableActions.map((action) => (
                      <FormControlLabel
                        key={`${resource}-${action}`}
                        control={
                          <Checkbox
                            checked={isChecked(resource, action)}
                            onChange={(e) =>
                              handlePermissionChange(resource, action, e.target.checked)
                            }
                          />
                        }
                        label={action.charAt(0).toUpperCase() + action.slice(1)}
                      />
                    ))}
                  </FormGroup>
                </Box>
              ))}
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {initialData?._id ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
