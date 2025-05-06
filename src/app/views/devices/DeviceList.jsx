import React, { useState } from 'react';
import {
  Box, TextField, Select, MenuItem, InputLabel, FormControl, Typography, Tabs, Tab,  Container, Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ErrorIcon from '@mui/icons-material/Error';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DataGrid } from '@mui/x-data-grid';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeviceTabs from './components/DeviceTabs';
import DeviceFilters from './components/DeviceFilters';
import DeviceTable from './components/DeviceTable';
// Device types
const deviceTypes = ['Inverter', 'Meter', 'Logger', 'SMB', 'Battery', 'Weather Station', 'Other'];
const plants = ['Plant A', 'Plant B', 'Plant C'];
const statuses = ['Online', 'Offline', 'Fault', 'Maintenance'];

const mockDevices = [
  {
    id: 1,
    name: 'Inverter 1',
    type: 'Inverter',
    model: 'SMA Sunny Tripower 15000TL',
    serialNumber: 'INV123456',
    status: 'Online',
    nominalPower: '15 kW',
    realTimePower: '12.5 kW',
    dailyYield: '85 kWh',
    plant: 'Plant A',
    lastSeen: '5 min ago',
    location: 'Site 1',
  },
  {
    id: 2,
    name: 'Meter 1',
    type: 'Meter',
    model: 'ABB A43 315-100',
    serialNumber: 'MET654321',
    status: 'Offline',
    nominalPower: 'N/A',
    realTimePower: 'N/A',
    dailyYield: 'N/A',
    plant: 'Plant B',
    lastSeen: '10 min ago',
    location: 'Site 2',
  },
  {
    id: 3,
    name: 'Logger 1',
    type: 'Logger',
    model: 'Fronius Datamanager 2.0',
    serialNumber: 'LOG112233',
    status: 'Online',
    nominalPower: 'N/A',
    realTimePower: 'N/A',
    dailyYield: 'N/A',
    plant: 'Plant C',
    lastSeen: '2 min ago',
    location: 'Site 3',
  },
  {
    id: 4,
    name: 'SMB 1',
    type: 'SMB',
    model: 'Huawei SmartLogger 3000A',
    serialNumber: 'SMB445566',
    status: 'Fault',
    nominalPower: '50 kW',
    realTimePower: '0 kW',
    dailyYield: '0 kWh',
    plant: 'Plant A',
    lastSeen: '1 min ago',
    location: 'Site 4',
  },
  {
    id: 5,
    name: 'Battery 1',
    type: 'Battery',
    model: 'Tesla Powerpack 2',
    serialNumber: 'BAT778899',
    status: 'Maintenance',
    nominalPower: '210 kWh',
    realTimePower: '50 kW',
    dailyYield: '300 kWh',
    plant: 'Plant B',
    lastSeen: '20 min ago',
    location: 'Site 5',
  },
  {
    id: 6,
    name: 'Weather Station 1',
    type: 'Weather Station',
    model: 'Kipp & Zonen SOLYS2',
    serialNumber: 'WS990011',
    status: 'Online',
    nominalPower: 'N/A',
    realTimePower: 'N/A',
    dailyYield: 'N/A',
    plant: 'Plant C',
    lastSeen: '3 min ago',
    location: 'Site 6',
  },
  {
    id: 7,
    name: 'Other Device',
    type: 'Other',
    model: 'Custom Device X1',
    serialNumber: 'OTH334455',
    status: 'Offline',
    nominalPower: '5 kW',
    realTimePower: '0 kW',
    dailyYield: '15 kWh',
    plant: 'Plant A',
    lastSeen: '15 min ago',
    location: 'Site 7',
  },
];
const modelOptions = [...new Set(mockDevices.map((device) => device.model))];

const DeviceList = () => {
  const [search, setSearch] = useState('');
  const [filterPlant, setFilterPlant] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedTab, setSelectedTab] = useState('Inverter');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredDevices = mockDevices.filter(device =>
    (device.type === selectedTab) &&
    (filterPlant ? device.plant === filterPlant : true) &&
    (filterStatus ? device.status === filterStatus : true) &&
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      field: 'name',
      headerName: 'Device Name',
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',    // vertical center
            justifyContent: 'space-between', // push text and icon apart
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            px: 1,
            '&:hover': {
              color: 'primary.main',  // change text + icon color on hover
            },
          }}
          onClick={(e) => {
            e.stopPropagation();
            console.log('Device clicked:', params.row);
          }}
        >
          <Typography variant="body2" noWrap>
            {params.value}
          </Typography>
          <ChevronRightIcon fontSize="small" />
        </Box>
      )
    },
    { field: 'model', headerName: 'Device Model', flex: 1 },
    { field: 'serialNumber', headerName: 'Device S/N', flex: 1 },
    {
      field: 'status',
      headerName: 'Device Status',
      flex: 1,
renderCell: (params) => {
      const status = params.value;
      let buttonProps = {
        icon: null,
        label: '',
        color: 'default',
        variant: 'outlined', // Default button style
      };

      // Customize button based on status
      if (status === 'Online') {
        buttonProps.icon = <CheckCircleIcon color="success" />;
        buttonProps.label = 'Normal';
        buttonProps.color = 'success';
      } else if (status === 'Offline') {
        buttonProps.icon = <OfflineBoltIcon color="error" />;
        buttonProps.label = 'Offline';
        buttonProps.color = 'error';
      } else if (status === 'Fault') {
        buttonProps.icon = <ErrorIcon color="error" />;
        buttonProps.label = 'Fault';
        buttonProps.color = 'error';
      } else if (status === 'Maintenance') {
        buttonProps.icon = <BuildIcon color="warning" />;
        buttonProps.label = 'Maintenance';
        buttonProps.color = 'warning';
      } else {
        buttonProps.label = status; // Fallback for undefined statuses
      }

      return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',    // vertical center
          justifyContent: 'space-between', // push text and icon apart
          width: '100%',
          height: '100%',
          px: 1,
        }}
       
      >
        <Button
          variant={buttonProps.variant}
          size="small"
          // disabled
          startIcon={buttonProps.icon}
          color={buttonProps.color}
          sx={{
            textTransform: 'none', // Keep label as typed
            fontSize: '0.75rem',   // Smaller text size for cleaner look
            padding: '4px 12px',    // Tighter padding for better layout
            display: 'flex',        // Ensure content is aligned properly
            alignItems: 'center',   // Vertically center the content
            justifyContent: 'space-between', // Distribute text and icon
            borderRadius: '16px',  // Rounded corners for button
            userSelect: 'none', // Prevent text selection on double click
          }}
        >
          {buttonProps.label}
        </Button>
        </Box>
      );
    },
    },
    { field: 'nominalPower', headerName: 'Nominal Power', flex: 1 },
    { field: 'realTimePower', headerName: 'Real-time Power', flex: 1 },
    { field: 'dailyYield', headerName: 'Daily Yield', flex: 1 },
    { field: 'plant', headerName: 'Associated Plant', flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            console.log('Action button clicked for row:', params.row);
          }}
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  const handleSearch = ({ plant, deviceName, deviceModel }) => {
    console.log('Searching with:', { plant, deviceName, deviceModel });
    // apply filtering logic here
  };
  return (
    <Container maxWidth="" sx={{ mt: 5, mb: 0 }}>
    <Paper
      elevation={3}
      sx={{ p: 0, minHeight: '75vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}
    >
      <DeviceTabs
        deviceTypes={deviceTypes}
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
      />
      <DeviceFilters
        plants ={plants}
        deviceModels={modelOptions}
       onSearch={handleSearch}
      />
      <DeviceTable rows={filteredDevices} columns={columns} />
    </Paper>
  </Container>
  );
};

export default DeviceList;
