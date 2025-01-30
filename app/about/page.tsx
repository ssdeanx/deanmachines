"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: "4rem" }}>
          About Dean Machines
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
          Our mission is to create a comprehensive dataset for drone autonomy
          research and build an open-source autonomous drone platform.
        </Typography>
      </Box>
      <Box sx={{ mt: 12, spaceY: 12 }}>
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            sx={{ mb: 6, fontWeight: "semibold", color: "text.primary" }}
          >
            Hardware Specifications
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
            }}
          >
            <motion.div
              key="drone-platform"
              style={{ height: "100%" }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card style={{ height: "100%" }}>
                <CardHeader>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "medium", color: "text.primary" }}
                  >
                    Drone Platform
                  </Typography>
                </CardHeader>
                <CardContent sx={{ spaceY: 3, p: 6 }}>
                  5" FPV Racing Drone
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              key="ai-computer"
              style={{ height: "100%" }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card style={{ height: "100%" }}>
                <CardHeader>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "medium", color: "text.primary" }}
                  >
                    AI Computer
                  </Typography>
                </CardHeader>
                <CardContent sx={{ spaceY: 3, p: 6 }}>
                  NVIDIA Jetson Orin Nano
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              key="sensors"
              style={{ height: "100%" }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card style={{ height: "100%" }}>
                <CardHeader>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "medium", color: "text.primary" }}
                  >
                    Sensors
                  </Typography>
                </CardHeader>
                <CardContent sx={{ spaceY: 3, p: 6 }}>
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
              style={{ height: "100%" }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card style={{ height: "100%" }}>
                <CardHeader>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "medium", color: "text.primary" }}
                  >
                    Communication
                  </Typography>
                </CardHeader>
                <CardContent sx={{ spaceY: 3, p: 6 }}>
                  <ul>
                    <li>YHY 9800 Eng D SDR</li>
                    <li>433MHz Receiver</li>
                    <li>FPV Video Receiver</li>
                    <li>30ft Monopole Antenna</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 6, py: 16 }}>
        <Card sx={{ mb: 8 }}>
          <CardHeader>
            <Typography variant="h2">About DeanMachines</Typography>
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

        <Card sx={{ mb: 8 }}>
          <CardHeader>
            <Typography variant="h2">About the Creator</Typography>
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

        <Card>
          <CardHeader>
            <Typography variant="h2">Contact</Typography>
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
      </Box>
    </Box>
  );
}
