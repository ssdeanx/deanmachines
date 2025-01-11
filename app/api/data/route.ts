import type { DataItem } from "@/types";

import { NextResponse } from "next/server";

export async function GET() {
  const mockData: DataItem[] = [
    { id: 1, title: "Data Point 1", description: "Description 1" },
    { id: 2, title: "Data Point 2", description: "Description 2" },
  ];

  return NextResponse.json(mockData);
}
