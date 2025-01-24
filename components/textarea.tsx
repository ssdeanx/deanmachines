import React from "react";
 import TextField from '@mui/material/TextField';
  
 export default function App() {
  const [value, setValue] = React.useState("");
 
  return (
  <div className="flex w-full max-w-[240px] flex-col gap-2">
  <TextField
    multiline
    sx={{
          backgroundColor: 'hsl(var(--gray-100))',
          '&:focus': {
            boxShadow: '0 0 0 0.2rem hsl(var(--primary))',
          },
          dark: {
            backgroundColor: 'hsl(var(--gray-700))',
          }
    }}
    label="Message"
    placeholder="Enter your message"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
  <p className="text-sm text-foreground dark:text-muted-foreground">
        Message value: {value}
      </p>
    </div>
  );
 }
