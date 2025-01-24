"use client";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
 
 import { title, subtitle } from "@/components/primitives";
 export default function GuidesPage() {
  const router = useRouter();
 
  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <h1 className={title.base} style={{color: 'hsl(var(--primary))', fontSize: title.size.lg}}>Guides</h1>
      <p className={subtitle.base} style={{marginTop: '1rem', textAlign: 'center'}}>
        Your comprehensive guide to getting started with the Dean Machines
        Autonomous FPV Drone Platform.
      </p>
 
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700">Project Overview</h2>
        <p className="mt-2 text-gray-600">
          Dean Machines is developing an open-source autonomous drone platform
          using a 5" FPV Racing drone equipped with advanced sensors and AI
          capabilities. Our mission is to create a comprehensive dataset for
          drone autonomy research.
        </p>
      </div>
 
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h3 className="text-xl font-bold">Setting Up Your Environment</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Learn how to set up your development environment.
            </p>
            <Button
              className="mt-4"
              color="primary"
              variant="contained"
              onClick={() => (window.location.href = "/guides/setup")}
            >
              Setup Guide
            </Button>
          </CardContent>
        </Card>
 
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h3 className="text-xl font-bold">Collecting Data</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Master the techniques for collecting high-quality drone data.
            </p>
            <Button
              color="primary"
              variant="contained"
              onClick={() => router.push("/guides/collecting-data")}
            >
              Data Collection Guide
            </Button>
          </CardContent>
        </Card>
 
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h3 className="text-xl font-bold">Submitting Data</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Follow our step-by-step guide to contribute your data.
            </p>
            <Button
              className="mt-4"
              color="primary"
              variant="contained"
              onClick={() => (window.location.href = "/guides/submitting-data")}
            >
              Data Submission Guide
            </Button>
          </CardContent>
        </Card>
      </div>
 
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-700">Quick Links</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Button
              color="primary"
              variant="text"
              onClick={() => (window.location.href = "/docs")}
            >
              Documentation
            </Button>
          </li>
          <li>
            <Button
              color="primary"
              variant="text"
              onClick={() => (window.location.href = "/blog")}
            >
              Blog
            </Button>
          </li>
          <li>
            <Button
              color="primary"
              variant="text"
              onClick={() => (window.location.href = "/data")}
            >
              Data
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
