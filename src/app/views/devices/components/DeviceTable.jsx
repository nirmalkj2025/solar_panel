import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function DeviceTable({ rows, columns }) {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        getRowId={(row) => row.id}
      />
    </Box>
  );
}
