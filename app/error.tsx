"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

export default function Error({ error }: { error: Error; _reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        py: 8,
        md: { py: 10 },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "blue" }}>
        Try again
      </Typography>
      <Button variant="contained" color="primary">
        Try again
      </Button>
    </Box>
  );
}
