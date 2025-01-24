import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
 
 export default function App() {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <Typography variant="h6" className="text-base font-medium text-foreground dark:text-muted-foreground">
          Dean Machines
        </Typography>
        <Typography variant="body2" className="text-sm text-foreground dark:text-muted-foreground">
          Autonomous FPV Drone Platform.
        </Typography>
      </div>
      <Divider sx={{ my: 2, backgroundColor: 'hsl(var(--gray-200))', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }} />
    </div>
  );
}
