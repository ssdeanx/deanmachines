import { NextResponse } from "next/server";

interface SensorData {
  temperature: number;
  humidity: number;
  pressure: number;
  altitude: number;
}

export async function GET() {
  const sensorData: SensorData = {
    temperature: Math.random() * 30,
    humidity: Math.random() * 100,
    pressure: 990 + Math.random() * 30,
    altitude: Math.random() * 200,
  };

  return NextResponse.json(sensorData);
}
