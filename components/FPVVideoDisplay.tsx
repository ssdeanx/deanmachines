import React, { useState } from "react";
import { Card, CardHeader, CardBody, Spinner } from "@nextui-org/react";

interface FPVVideoDisplayProps {
  videoUrl: string;
}

const FPVVideoDisplay: React.FC<FPVVideoDisplayProps> = ({ videoUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setError("Error loading video.");
  };

  return (
    <Card className="card">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          FPV Video
        </h3>
      </CardHeader>
      <CardBody className="p-6">
        {isLoading ? (
          <div className="flex justify-center p-8">
            <Spinner color="primary" label="Loading video..." />
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          videoUrl && (
            <video
              controls
              className="aspect-video"
              width="100%"
              onError={handleVideoError}
              onLoadedData={handleVideoLoad}
            >
              <source src={videoUrl} type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          )
        )}
      </CardBody>
    </Card>
  );
};

export default FPVVideoDisplay;
