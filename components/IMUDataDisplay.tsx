import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import Plot from 'react-plotly.js';

interface IMUDataDisplayProps {
  data: { acceleration: { x: number, y: number, z: number }, gyroscope: { x: number, y: number, z: number }, magnetometer: { x: number, y: number, z: number } }[];
}

const IMUDataDisplay: React.FC<IMUDataDisplayProps> = ({ data }) => {
    const [dataType, setDataType] = useState<'acceleration' | 'gyroscope' | 'magnetometer'>('acceleration');

    const x = data.map((point) => (point[dataType] as any).x);
    const y = data.map((point) => (point[dataType] as any).y);
    const z = data.map((point) => (point[dataType] as any).z);

    const title = dataType.charAt(0).toUpperCase() + dataType.slice(1);

    return (
        <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
            <CardHeader className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">IMU Data</h3>
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="flat" size="sm" className="capitalize">
                            Data Type
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Data Type"
                        onAction={(key) => setDataType(key as 'acceleration' | 'gyroscope' | 'magnetometer')}
                    >
                        <DropdownItem key="acceleration">Acceleration</DropdownItem>
                        <DropdownItem key="gyroscope">Gyroscope</DropdownItem>
                        <DropdownItem key="magnetometer">Magnetometer</DropdownItem>
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
                                colorscale: 'Viridis',
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
                            xaxis: { title: `X ${title}` },
                            yaxis: { title: `Y ${title}` },
                            zaxis: { title: `Z ${title}` },
                        },
                    }}
                    style={{ width: '100%', height: '400px' }}
                />
            </CardBody>
        </Card>
    );
};

export default IMUDataDisplay;
