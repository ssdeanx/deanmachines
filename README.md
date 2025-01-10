# Dean Machines: Autonomous FPV Drone Platform

<p align="center">

![Dean Machines](./public/logo.png)

[![Next.js](https://img.shields.io/badge/next.js-14-black)](https://nextjs.org/)
[![NextUI](https://img.shields.io/badge/NextUI-2.0-blue)](https://nextui.org)
[![Python](https://img.shields.io/badge/Python-3.9-green)](https://python.org)
[![P l a t e   o f   n a c h o s   w i t h   t o p p i n g s .
](https://img.shields.io/badge/NVIDIA-Orin%20Nano-green)](https://developer.nvidia.com/embedded-computing)

## Open-Source Autonomous Drone Platform

</p>

## 🚁 Project Overview

Dean Machines is developing an open-source autonomous drone platform using a 5" FPV Racing drone equipped with advanced sensors and AI capabilities. Our mission is to create a comprehensive dataset for drone autonomy research.

### Hardware Stack

- **Drone Platform**: 5" FPV Racing Drone
- **AI Computer**: NVIDIA Jetson Orin Nano
- **Sensors**:
  - TFmini-S LiDAR
  - AI-enabled Camera Module
  - IMU/Gyroscope
  - GPS Module
- **Communication**:
  - YHY 9800 Eng D SDR
  - 433MHz Receiver
  - FPV Video Receiver
  - 30ft Monopole Antenna

### Data Collection Framework

We're building a standardized dataset including:

- Visual Data (RGB + Depth)
- LiDAR Point Clouds
- Radio Telemetry
- Flight Controller Data
- Environmental Metrics

## 🛠️ Technical Architecture

### Onboard Systems

- NVIDIA Orin Nano for real-time processing
- Custom sensor fusion pipeline
- Edge AI inference
- Real-time telemetry streaming
  
### Ground Station

- SDR signal processing
- Real-time data visualization
- Neural network training
- Dataset validation tools

## 📊 Dataset Contribution

### Requirements

1. Hardware Compatibility
2. Sensor Calibration
3. Data Format Standards
4. Quality Metrics
5. Validation Process

## 📊 Dataset Contribution Guidelines

### Required Hardware Configuration

- 5" FPV Racing Drone Frame
- NVIDIA Jetson Orin Nano
- TFmini-S LiDAR Sensor
- HD FPV Camera (>720p)
- GPS Module (uBlox NEO-M8N or better)
- IMU (MPU6050 or better)
- SDR (YHY 9800 or compatible)

### Data Collection Requirements

```typescript
interface DroneDataPoint {
  timestamp: number;        // Unix timestamp (ms)
  gps: {
    lat: number;           // Latitude
    lon: number;           // Longitude
    alt: number;           // Altitude (m)
    accuracy: number;      // GPS accuracy (m)
  };
  imu: {
    acceleration: Vec3;    // m/s²
    gyroscope: Vec3;      // rad/s
    magnetometer: Vec3;    // μT
  };
  lidar: {
    distance: number;      // Distance in meters
    strength: number;      // Signal strength
  };
  camera: {
    resolution: string;    // "1280x720"
    fps: number;          // Frames per second
    format: string;       // "h264"
  };
  radio: {
    frequency: number;    // MHz
    signalStrength: number; // dBm
    bandwidth: number;    // MHz
  };
}
```

### Data Submission Process

1. **Data Collection**
   - Minimum 10 minutes of continuous flight
   - Various flight patterns required:
     - Hover
     - Forward flight
     - Figure-8
     - Obstacle navigation

2. **Data Validation**

   ```bash
   # Validate dataset structure
   npm run validate-dataset path/to/data
   
   # Generate validation report
   npm run generate-report
   ```

3. **Submission Format**

   ```plaintext
   dataset/
   ├── metadata.json       # Flight information
   ├── raw/               # Raw sensor data
   │   ├── camera/        # Video streams
   │   ├── lidar/         # LiDAR point clouds
   │   ├── imu/           # IMU readings
   │   └── radio/         # SDR captures
   └── processed/         # Processed data
       ├── trajectory/    # Flight path
       ├── obstacles/     # Detected obstacles
       └── annotations/   # Manual annotations
   ```

### Quality Standards

- Camera: 720p minimum at 30fps
- LiDAR: 100Hz minimum sampling rate
- IMU: 200Hz minimum sampling rate
- GPS: 10Hz minimum update rate
- Radio: 433MHz band captures at 2MSPS

### Review Process

1. Automated validation check
2. Data quality assessment
3. Manual review by core team
4. Integration into main dataset

View Full Documentation on our [GitHub Wiki](https://github.com/your-username/your-repo/wiki)

## 🔧 Development

```bash
# Website Development (Next.js)
npm run dev

# Python CV Pipeline (Coming Soon)
python3 setup.py develop
```

## 🤝 Contributing

We welcome contributions to Dean Machines! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information.

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[View Full Requirements](./docs/REQUIREMENTS.md)
