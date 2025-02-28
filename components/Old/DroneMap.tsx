import React, { useState, useCallback } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
    <Card className="card">
      <CardHeader>
        <Typography variant="h6" component="h3" className="text-xl font-medium text-foreground dark:text-muted-foreground">
          Drone Location
        </Typography>
      </CardHeader>
      <CardContent className="p-6">
        <GoogleMap
          center={center}
          mapContainerStyle={{ ...mapContainerStyle, height: "400px", width: '100%' }}
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
                      fillColor: "primary",
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
                strokeColor: "secondary",
                strokeWeight: 3,
              }}
              path={path}
            />
          )}
        </GoogleMap>
      </CardContent>
    </Card>
  );
};
 
export default DroneMap;
