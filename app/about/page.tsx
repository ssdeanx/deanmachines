import { AboutContent } from '@/types/about';

export default function AboutPage() {
  const aboutContent: AboutContent = {
    hardware: [
      {
        title: "Drone Platform",
        desc: "5\" FPV Racing Drone with precision control"
      },
      {
        title: "Edge Computing",
        desc: "NVIDIA Jetson Orin Nano for real-time AI"
      }
    ],
    features: [
      {
        title: "Computer Vision",
        desc: "Real-time object detection and tracking"
      },
      {
        title: "Autonomous Flight",
        desc: "AI-powered navigation system"
      }
    ]
  };
  return <div>About Page</div>;
}
