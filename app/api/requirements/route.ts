import type { RequirementItem } from "@/types";

import { NextResponse } from "next/server";

export async function GET() {
  const mockData: RequirementItem[] = [
    {
      id: 1,
      title: "Hardware Compatibility",
      description: "Ensure your hardware is compatible with the platform.",
    },
    {
      id: 2,
      title: "Sensor Calibration",
      description: "Calibrate your sensors for accurate data collection.",
    },
    {
      id: 3,
      title: "Data Format Standards",
      description: "Adhere to the specified data format standards.",
    },
  ];

  return NextResponse.json(mockData);
}
