"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
      className="bg-primary-500 text-white shadow-md transition-colors duration-200 hover:bg-primary-600"
      radius="full"
      onPress={() => setCount(count + 1)}
    >
      Data Points Collected: {count}
    </Button>
  );
};
