export interface AboutContent {
  hardware: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
}

export interface DataChartDisplayProps {
  title: string;
  data: number[];
  xAxisLabel: string;
  yAxisLabel: string;
  colorScale?: string;
}

export interface DashboardData {
  user: {
    name: string;
    email: string;
  };
  drone: {
    status: string;
    location: string;
    battery: number;
    latitude: number;
    longitude: number;
    path: { lat: number; lng: number }[];
  };
  flightData: {
    distance: number;
    maxAltitude: number;
    duration: number;
  };
  sensorData: {
    temperature: number;
    humidity: number;
    pressure: number;
  };
  telemetryData: {
    [key: string]: string | number;
  };
  imuData: {
    acceleration: { x: number; y: number; z: number };
    gyroscope: { x: number; y: number; z: number };
    magnetometer: { x: number; y: number; z: number };
  }[];
  lidarData: { distance: number; strength: number }[];
}

export interface IconSvgProps {
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

export interface RequirementItem {
  id: number;
  title: string;
  description: string;
}

export interface DataItem {
  id: number;
  title: string;
  description: string;
}
