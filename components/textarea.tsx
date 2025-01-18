import React from "react";
import { Textarea } from "@nextui-org/react";

export default function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex w-full max-w-[240px] flex-col gap-2">
      <Textarea
        classNames={{
          inputWrapper:
            "bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500",
        }}
        label="Message"
        labelPlacement="outside"
        placeholder="Enter your message"
        value={value}
        variant="underlined"
        onValueChange={setValue}
      />
      <p className="text-sm text-gray-600 dark:text-gray-500">
        Message value: {value}
      </p>
    </div>
  );
}
