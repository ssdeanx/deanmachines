"use client";

import { Switch } from "@nextui-org/switch";
import { useState } from "react";
export default function ClientSwitch({ checked }: { checked: boolean }) {
  const [isChecked, setIsChecked] = useState(checked);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return <Switch checked={isChecked} className="my-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" color="primary" />;
}
