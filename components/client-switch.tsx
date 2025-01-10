"use client";

import { Switch } from "@nextui-org/switch";

import { useState } from 'react';
export default function ClientSwitch({ checked }: { checked: boolean }) {
  const [isChecked, setIsChecked] = useState(checked);
  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Switch checked={isChecked} className="my-4" onChange={onChange} />
  );
}
