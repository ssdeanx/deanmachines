"use client";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
 
 import { Providers } from "../providers";
 import Typography from '@mui/material/Typography';
 
 interface RequirementsLayoutProps {
  children: React.ReactNode;
 }
 
 export default function RequirementsLayout({
  children,
}: RequirementsLayoutProps) {
  return (
    <Providers>
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8" style={{flexGrow: 1}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {/* Header Section */}
            <header style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <Typography variant="h4" component="h1" style={{fontWeight: 'bold', letterSpacing: '-0.025em'}}>
                Project Requirements
              </Typography>
              <Typography variant="body1" style={{fontSize: '1.125rem', color: 'hsl(var(--gray-600))'}}>
                Essential guidelines and requirements for participating in the
                DeanMachines project
              </Typography>
            </header>
 
            {/* Content Section */}
            <section>
              <Card className="mb-6">
                <CardHeader>
                  <Typography variant="h6" component="h3" className="text-xl font-semibold">
                    Requirements
                  </Typography>
                </CardHeader>
                <CardContent>
                  <ul style={{listStyleType: 'disc', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <li>Hardware Compatibility</li>
                    <li>Sensor Calibration</li>
                    <li>Data Format Standards</li>
                    <li>Quality Metrics</li>
                    <li>Validation Process</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="mb-6">
                <CardHeader>
                  <Typography variant="h6" component="h3" className="text-xl font-semibold">
                    Hardware Requirements
                  </Typography>
                </CardHeader>
                <CardContent>
                  <ul style={{listStyleType: 'disc', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <li>5" FPV Racing Drone Frame</li>
                    <li>NVIDIA Jetson Orin Nano</li>
                    <li>TFmini-S LiDAR Sensor</li>
                    <li>HD FPV Camera ({">"}720p)</li>
                    <li>GPS Module (uBlox NEO-M8N or better)</li>
                    <li>IMU (MPU6050 or better)</li>
                    <li>SDR (YHY 9800 or compatible)</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="mb-6">
                <CardHeader>
                  <Typography variant="h6" component="h3" className="text-xl font-semibold">
                    Participation Requirements
                  </Typography>
                </CardHeader>
                <CardContent>
                  <ul style={{listStyleType: 'disc', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <li>Commit to minimum 5 hours per week</li>
                    <li>Willingness to share and document findings</li>
                    <li>Active participation in project discussions</li>
                    <li>Follow safety guidelines and regulations</li>
                  </ul>
                </CardContent>
              </Card>
 
              <Card className="mb-6">
                <CardHeader>
                  <Typography variant="h6" component="h3" className="text-xl font-semibold">
                    Next Steps
                  </Typography>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    If you meet these requirements and are interested in joining
                    the project:
                  </p>
                  <ol style={{listStyleType: 'decimal', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <li>
                      Review the complete{" "}
                      <Link href="/docs">documentation</Link>
                    </li>
                    <li>
                      Check the{" "}
                      <Link href="/guides">getting started guide</Link>
                    </li>
                    <li>
                      Submit your application through the{" "}
                      <Link href="/contact">contact form</Link>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>
 
            {children}
 
            {/* Footer Section */}
            <footer style={{marginTop: '3rem', borderTop: '1px solid hsl(var(--gray-200))', paddingTop: '1.5rem'}}>
              <Typography variant="body2" style={{color: 'hsl(var(--gray-500))'}}>
                For questions about requirements, please contact us through the{" "}
                <Link  href="/contact" style={{color: 'hsl(var(--primary))'}}>
                  contact form
                </Link>
                .
              </Typography>
            </footer>
          </div>
        </main>
      </div>
    </Providers>
  );
}
