import React, { useState, useCallback } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline,
  DrawingManager,
} from "@react-google-maps/api";

interface DroneMapProps {
  latitude: number;
  longitude: number;
  path?: { lat: number; lng: number }[];
  mapType?: "roadmap" | "satellite" | "hybrid" | "terrain";
}

const DroneMap: React.FC<DroneMapProps> = ({
  latitude,
  longitude,
  path = [],
  mapType = "roadmap",
}) => {
  const [, setPolygons] = useState<any[]>([]);

  const onPolygonComplete = useCallback((polygon: any) => {
    setPolygons((current) => [...current, polygon]);
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["drawing"],
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = {
    lat: latitude,
    lng: longitude,
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Drone Location
        </h3>
      </CardHeader>
      <CardBody className="p-6">
        <GoogleMap
          center={center}
          mapContainerStyle={{ ...mapContainerStyle, height: "400px" }}
          mapTypeId={mapType}
          zoom={15}
        >
          <DrawingManager
            options={
              google && google.maps && google.maps.drawing
                ? {
                    drawingControl: true,
                    drawingControlOptions: {
                      drawingModes: [google.maps.drawing.OverlayType.POLYGON],
                    },
                    polygonOptions: {
                      fillColor: "#0000FF",
                      fillOpacity: 0.2,
                      strokeWeight: 2,
                      clickable: true,
                      editable: true,
                      zIndex: 1,
                    },
                  }
                : {}
            }
            onPolygonComplete={onPolygonComplete}
          />
          <Marker position={center} />
          {path.length > 1 && (
            <Polyline
              options={{
                strokeColor: "#FF0000",
                strokeWeight: 3,
              }}
              path={path}
            />
          )}
        </GoogleMap>
      </CardBody>
    </Card>
  );
};

export default DroneMap;
