export interface D3ChartProps {
  data: number[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  lineColor?: string;
  axisColor?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

export interface DataChartDisplayProps {
  title: string;
  data: number[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  colorScale: string;
}

export interface EmailTemplateProps {
  name: string;
  email: string;
  category: string;
  message: string;
  timestamp: string;
}

export interface DroneMapProps {
  latitude: number;
  longitude: number;
  path?: { lat: number; lng: number }[];
  mapType?: "roadmap" | "satellite" | "hybrid" | "terrain";
}

export interface FormValues {
  name: string;
  email: string;
  category: string;
  message: string;
}

export interface FlightDataDisplayProps {
  distance: number;
  maxAltitude: number;
  flightTime: number;
}

export interface FPVVideoDisplayProps {
  videoUrl: string;
}

export interface IMUDataDisplayProps {
  data: {
    acceleration: { x: number; y: number; z: number };
    gyroscope: { x: number; y: number; z: number };
    magnetometer: { x: number; y: number; z: number };
  }[];
}

export interface LidarDataDisplayProps {
  data: { distance: number; strength: number }[];
}

export interface SensorData {
  timestamp: string;
  sensor: string;
  value: string;
  unit: string;
  [key: string]: string;
}

import { SwitchProps } from "@nextui-org/switch";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export interface SensorDataDisplayProps {
  title: string;
  data: { [key: string]: number };
  units?: { [key: string]: string };
}

export interface TelemetryDisplayProps {
  title: string;
  data: { [key: string]: string | number };
}

export interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export interface AboutContent {
  hardware: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
}

export interface FormData {
  name: string;
  email: string;
  category: "general" | "technical" | "bug" | "feature" | "other";
  message: string;
}

export interface DataItem {
  id: number;
  title: string;
  description: string;
}

export interface RequirementItem {
  id: number;
  title: string;
  description: string;
}
