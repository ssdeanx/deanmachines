"use client";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
 
 import { title, subtitle } from "@/components/primitives";
 import { BookOpenIcon } from "@/components/icons";
 
 export default function DocsPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className={title.base} style={{fontSize: title.size.lg}}>
          <BookOpenIcon className="mr-2 inline-block" size={30} />
          Documentation
        </h1>
        <div className={subtitle.base} style={{marginTop: '1rem'}}>
          Explore the documentation for the Dean Machines project.
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="card">
          <CardHeader  >
            <Typography variant="h6" component="h3" className="text-xl font-semibold">
              Getting Started
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-500">
              New to Dean Machines? Check out our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/getting-started"
              >
                Getting Started Guide
              </Link>{" "}
              to learn the basics.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardHeader>
            <Typography variant="h6" component="h3" className="text-xl font-semibold">
              API Reference
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-500">
              Explore our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/api-reference"
              >
                API Reference
              </Link>{" "}
              for detailed information on our API endpoints.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardHeader>
            <Typography variant="h6" component="h3" className="text-xl font-semibold">
              Contribution Guidelines
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-500">
              Interested in contributing? Read our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/contribution-guidelines"
              >
                Contribution Guidelines
              </Link>{" "}
              to learn how you can help.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardHeader>
            <Typography variant="h6" component="h3" className="text-xl font-semibold">
              NVIDIA Orin Nano
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-500">
              Learn about using the NVIDIA Orin Nano with PyTorch and TensorFlow
              in our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/nvidia-orin"
              >
                NVIDIA Orin Nano Guide
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <h2 className="mt-6 text-xl font-semibold">Quick Links</h2>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-500">
        <li>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
            href="/data"
          >
            Data
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
            href="/requirements"
          >
            Requirements
          </Link>
        </li>
      </ul>
    </div>
  );
 }
