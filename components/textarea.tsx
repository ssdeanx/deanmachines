import React from "react";
import { Textarea } from "@nextui-org/react";

export default function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex w-full max-w-[240px] flex-col gap-2">
      <Textarea
        classNames={{
          inputWrapper:
            "bg-[hsl(var(--gray-100))] dark:bg-[hsl(var(--gray-700))] focus:ring-2 focus:ring-[hsl(var(--primary))]",
        }}
        label="Message"
        labelPlacement="outside"
        placeholder="Enter your message"
        value={value}
        variant="underlined"
        onValueChange={setValue}
      />
        <p className="text-sm text-foreground dark:text-muted-foreground">
        Message value: {value}
      </p>
    </div>
  );
}
