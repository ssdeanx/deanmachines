import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import Plot from 'react-plotly.js';

interface LidarDataDisplayProps {
  data: { distance: number; strength: number }[];
}

const LidarDataDisplay: React.FC<LidarDataDisplayProps> = ({ data }) => {
    const [colorScale, setColorScale] = useState('Viridis');

    const x = data.map((point) => point.distance * Math.cos(point.strength));
    const y = data.map((point) => point.distance * Math.sin(point.strength));
    const z = data.map((point) => point.strength);

  return (
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">Lidar Data</h3>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="flat" size="sm" className="capitalize">
              Color Scale
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Color Scale"
            onAction={(key) => setColorScale(String(key))}
          >
            <DropdownItem key="Viridis">Viridis</DropdownItem>
            <DropdownItem key="Plasma">Plasma</DropdownItem>
            <DropdownItem key="Magma">Magma</DropdownItem>
            <DropdownItem key="Inferno">Inferno</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="p-6">
        <Plot
          data={[
            {
              x: x,
              y: y,
              z: z,
              mode: 'markers',
              type: 'scatter3d',
              marker: {
                size: 3,
                color: z,
                colorscale: colorScale,
              },
            },
          ]}
          layout={{
            margin: {
              l: 0,
              r: 0,
              b: 0,
              t: 0,
            },
            scene: {
              xaxis: { title: 'X' },
              yaxis: { title: 'Y' },
              zaxis: { title: 'Strength' },
            },
          }}
          style={{ width: '100%', height: '400px' }}
        />
      </CardBody>
    </Card>
  );
};

export default LidarDataDisplay;
