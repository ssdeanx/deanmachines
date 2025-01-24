"use client";
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
 
 import { title, subtitle } from "@/components/primitives";
 import { RocketIcon } from "@/components/icons";
 
 const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
 };
 
 export default function AboutPage() {
  return (
    <>
      <div className="text-center">
        <h1 className={title.base} style={{fontSize: title.size.lg}}>
          <RocketIcon className="mr-2 inline-block" size={30} />
          About Dean Machines
        </h1>
        <div className={subtitle.base} style={{marginTop: '1rem'}}>
          Our mission is to create a comprehensive dataset for drone autonomy
          research and build an open-source autonomous drone platform.
        </div>
      </div>
      <section className="mt-12 space-y-12">
        <motion.div variants={itemVariants}>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Hardware Specifications
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              key="drone-platform"
              className="h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full card">
                <CardHeader>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                    Drone Platform
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  5" FPV Racing Drone
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              key="ai-computer"
              className="h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full card">
                <CardHeader>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                    AI Computer
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  NVIDIA Jetson Orin Nano
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              key="sensors"
              className="h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full card">
                <CardHeader>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                    Sensors
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  <ul>
                    <li>TFmini-S LiDAR</li>
                    <li>AI-enabled Camera Module</li>
                    <li>IMU/Gyroscope</li>
                    <li>GPS Module</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              key="communication"
              className="h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full card">
                <CardHeader>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                    Communication
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  <ul>
                    <li>YHY 9800 Eng D SDR</li>
                    <li>433MHz Receiver</li>
                    <li>FPV Video Receiver</li>
                    <li>30ft Monopole Antenna</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <Card className="mb-8 card">
          <CardHeader>
            <h2>About DeanMachines</h2>
          </CardHeader>
          <CardContent>
            DeanMachines is a web application built with Next.js, React, NextUI,
            and Tailwind CSS. Its primary purpose is to serve as a platform to
            track and report on an FPV (First-Person View) autonomous drone
            project. The web application provides a user interface for
            interacting with the project, viewing data, managing user
            applications, and accessing documentation.
          </CardContent>
        </Card>
 
        <Card className="mb-8 card">
          <CardHeader>
            <h2>About the Creator</h2>
          </CardHeader>
          <CardContent>
            Hi, I&apos;m Sean Dean, the creator of DeanMachines. I have a
            passion for technology and autonomous systems, and this project is
            the the culmination of my interests in drone technology and web
            development. With a background in software engineering, I aim to
            create create innovative solutions that push the boundaries of
            what&apos;s with autonomous drones.
          </CardContent>
        </Card>
 
        <Card className="card">
          <CardHeader>
            <h2>Contact</h2>
          </CardHeader>
          <CardContent>
            If you have any questions or would like to get in touch, feel free
            to reach out to me via email at{" "}
            <Link color="primary" href="mailto:ssdeanx@gmail.com">
              ssdeanx@gmail.com
            </Link>
            .
          </CardContent>
        </Card>
      </section>
    </>
  );
 }
