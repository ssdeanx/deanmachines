import React from "react";
import { Textarea } from "@nextui-org/react";

export default function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex w-full max-w-[240px] flex-col gap-2">
      <Textarea
        label="Description"
        labelPlacement="outside"
        placeholder="Enter your description"
        value={value}
        variant="underlined"
        onValueChange={setValue}
      />
      <p className="text-sm text-gray-500">Textarea value: {value}</p>
    </div>
  );
}
