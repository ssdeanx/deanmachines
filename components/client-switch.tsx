"use client";

import { useState } from "react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ClientSwitch({ checked }: { checked: boolean }) {
    const [isChecked, setIsChecked] = useState(checked);
    const onChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={isChecked}
                    onChange={onChange}
                    color="primary"
                />
            }
            label="Switch"
        />
    );
}
