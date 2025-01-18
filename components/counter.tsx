"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
      className="bg-[hsl(var(--primary))] text-white shadow-md transition-colors duration-200 hover:bg-[hsl(var(--primary-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
      radius="full"
      onPress={() => setCount(count + 1)}
    >
      Data Points Collected: {count}
    </Button>
  );
};
