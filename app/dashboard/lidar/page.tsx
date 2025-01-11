"use client";

import React from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const Lidar3DPage = () => {
  const mockLidarData = {
    x: [1, 2, 3, 4, 5],
    y: [6, 7, 2, 4, 5],
    z: [1, 8, 3, 6, 7],
    mode: "markers" as const,
    type: "scatter3d" as const,
    marker: {
      size: 8,
      color: [1, 2, 3, 4, 5],
      colorscale: "Viridis",
    },
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Lidar 3D Point Cloud</h1>
      <Plot
        data={[mockLidarData]}
        layout={{
          margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
          },
        }}
      />
    </div>
  );
};

export default Lidar3DPage;
