"use client";

import { useEffect } from "react";
import { Button } from "@nextui-org/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <Button
        color="primary"
        variant="shadow"
        onPress={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
}
