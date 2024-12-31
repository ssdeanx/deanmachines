export interface HardwareItem {
  title: string;
  desc: string;
}

export interface AboutDetail {
  title: string;
  desc: string;
}

export interface AboutContent {
  hardware: HardwareItem[];
  features: AboutDetail[];
}