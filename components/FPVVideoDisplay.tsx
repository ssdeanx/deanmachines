import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface FPVVideoDisplayProps {
  videoUrl: string;
}

const FPVVideoDisplay: React.FC<FPVVideoDisplayProps> = ({ videoUrl }) => {
  return (
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          FPV Video
        </h3>
      </CardHeader>
      <CardBody className="p-6">
        <video controls width="100%" height="400px">
          <source src={videoUrl} type="video/mp4" />
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      </CardBody>
    </Card>
  );
};

export default FPVVideoDisplay;
