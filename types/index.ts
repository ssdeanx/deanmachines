import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
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
