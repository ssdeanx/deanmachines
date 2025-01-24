"use client";

import { useState } from "react";
import Button from '@mui/material/Button';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
    >
        Data Points Collected: {count}
    </Button>
  );
};
