"use client";
 import React from 'react';
 import Tooltip from '@mui/material/Tooltip';
 import Button from '@mui/material/Button';
  
 export default function CustomTooltip() {
  return (
    <Tooltip
        title={
            <div style={{ backgroundColor: 'hsl(var(--gray-100))', padding: '0.5rem', borderRadius: '0.375rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: 'hsl(var(--foreground))', dark: { backgroundColor: 'hsl(var(--gray-700))', color: 'hsl(var(--muted-foreground))' } }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                    Sensor Data
                </div>
                <div style={{ fontSize: '0.75rem' }}>
                    View real-time sensor data from the drone.
                </div>
            </div>
        }
        placement="top"
    >
        <Button
            variant="outlined"
            color="primary"
        >
            View Data
        </Button>
    </Tooltip>
  );
 }
