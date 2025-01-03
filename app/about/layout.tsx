export interface AboutDetail {
  title: string;
  desc: string;
}

export interface AboutContent {
  hardware: AboutDetail[];
  features: AboutDetail[];
}
