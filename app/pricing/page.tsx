"use client";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
 
 import { title, subtitle } from "@/components/primitives";
 
 export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <h1 className={title.base} style={{color: 'hsl(var(--primary))', fontSize: title.size.lg}}>Pricing</h1>
      <p className={subtitle.base} style={{marginTop: '1rem', textAlign: 'center'}}>
        Choose the plan that&apos;s right for you.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h2 className="text-xl font-bold">Basic</h2>
          </CardHeader>
          <Divider />
          <CardContent>
            <p className="text-4xl font-bold text-blue-500">$0</p>
            <p className="text-gray-500">/month</p>
            <ul className="mt-4 space-y-2">
              <li>✅ Access to the open-source dataset</li>
              <li>✅ Community support</li>
              <li>✅ Limited sensor data access</li>
              <li>✅ Standard data formats</li>
            </ul>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className="w-full text-white"
              color="primary"
              variant="contained"
            >
              Get Started
            </Button>
          </CardActions>
        </Card>
 
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h2 className="text-xl font-bold">Pro</h2>
          </CardHeader>
          <Divider />
          <CardContent>
            <p className="text-4xl font-bold text-blue-500">$9</p>
            <p className="text-gray-500">/month</p>
            <ul className="mt-4 space-y-2">
              <li>✅ All Basic features</li>
              <li>✅ Full sensor data access</li>
              <li>✅ Advanced data formats (e.g., raw, processed)</li>
              <li>✅ Priority support</li>
              <li>✅ Early access to new features</li>
            </ul>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className="w-full text-white"
              color="primary"
              variant="contained"
            >
              Get Started
            </Button>
          </CardActions>
        </Card>
 
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h2 className="text-xl font-bold">Enterprise</h2>
          </CardHeader>
          <Divider />
          <CardContent>
            <p className="text-4xl font-bold text-blue-500">$49</p>
            <p className="text-gray-500">/month</p>
            <ul className="mt-4 space-y-2">
              <li>✅ All Pro features</li>
              <li>✅ Custom data processing</li>
              <li>✅ Dedicated support</li>
              <li>✅ On-premise deployment option</li>
              <li>✅ Integration with existing systems</li>
            </ul>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className="w-full text-white"
              color="primary"
              variant="contained"
            >
              Contact Us
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
 }
