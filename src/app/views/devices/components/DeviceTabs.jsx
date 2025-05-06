import { Tabs, Tab, Box } from '@mui/material';

export default function DeviceTabs({ deviceTypes, selectedTab, handleTabChange }) {
  return (
    <Box sx={{ px: 3, py: 2, bgcolor: '#f5f5f5', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {deviceTypes.map((type) => (
          <Tab key={type} value={type} label={type} />
        ))}
      </Tabs>
    </Box>
  );
}
