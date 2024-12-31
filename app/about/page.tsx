import { Card, CardBody } from "@nextui-org/card";
import { motion } from "framer-motion";

import { AboutContent } from "@/types/about";

export default function AboutPage() {
  const aboutContent: AboutContent = {
    hardware: [
      {
        title: "Drone Platform",
        desc: '5" FPV Racing Drone with precision control',
      },
      {
        title: "Edge Computing",
        desc: "NVIDIA Jetson Orin Nano for real-time AI",
      },
    ],
    features: [
      {
        title: "Computer Vision",
        desc: "Real-time object detection and tracking",
      },
      {
        title: "Autonomous Flight",
        desc: "AI-powered navigation system",
      },
    ],
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
          About Dean Machines
        </h1>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl text-foreground/90 mb-4 font-semibold">
              Hardware Specifications
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {aboutContent.hardware.map((item, index) => (
                <Card
                  key={index}
                  className="bg-background/60 dark:bg-default-100/50 backdrop-blur-lg"
                >
                  <CardBody className="space-y-2">
                    <h3 className="text-lg text-foreground font-medium">
                      {item.title}
                    </h3>
                    <p className="text-base text-foreground/80">
                      {item.desc}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-fluid-xl text-foreground/90 mb-4 font-semibold">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {aboutContent.features.map((item, index) => (
                <Card
                  key={index}
                  className="bg-background/60 dark:bg-default-100/50 backdrop-blur-lg"
                >
                  <CardBody className="space-y-2">
                    <h3 className="text-fluid-lg text-foreground font-medium">
                      {item.title}
                    </h3>
                    <p className="text-fluid-base text-foreground/80">
                      {item.desc}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
