"use client";
 
 import { useEffect } from "react";
 import Button from '@mui/material/Button';
 
 export default function Error({ error }: { error: Error; _reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);
 
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-2xl font-bold text-blue-500">Try again</h2>
      <Button variant="contained" color="primary">Try again</Button>
    </div>
  );
 }
