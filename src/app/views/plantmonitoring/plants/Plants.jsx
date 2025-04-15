import React, { useState } from "react";
import {
  Box,
  styled,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import PlantList from "./PlantList";
import AddPlant from "./AddPlant";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

export default function Plants() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Solar", path: "/solar" }, { name: "Plants" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard
          title={
            <Box display="flex" justifyContent="space-between" alignItems="center">
              All Plants
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Plant
              </Button>
            </Box>
          }
        >
          <PlantList />
        </SimpleCard>
      </Stack>

      {/* Add Plant Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Add New Plant
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <AddPlant onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}
