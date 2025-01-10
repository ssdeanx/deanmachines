import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";

import { aboutContent } from "../../constants";

import { title } from "@/components/primitives";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className={title()}>About</h1>
      </div>
      <section className="space-y-12">
        <motion.div variants={itemVariants}>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Hardware Specifications
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutContent.hardware.map((spec) => (
              <motion.div
                key={spec.title}
                className="h-full"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
                  <CardHeader>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                      {spec.title}
                    </h3>
                  </CardHeader>
                  <CardBody className="space-y-3 p-6">{spec.desc}</CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <Card className="mb-8">
          <CardHeader>
            <h2>About DeanMachines</h2>
          </CardHeader>
          <CardBody>
            DeanMachines is a web application built with Next.js, React, NextUI,
            and Tailwind CSS. Its primary purpose is to serve as a platform to
            track and report on an FPV (First-Person View) autonomous drone
            project. The web application provides a user interface for
            interacting with the project, viewing data, managing user
            applications, and accessing documentation.
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <h2>About the Creator</h2>
          </CardHeader>
          <CardBody>
            Hi, I&apos;m Sean Dean, the creator of DeanMachines. I have a
            passion for passion for passion for technology and autonomous
            systems, and this project is the culmination of my interests in
            drone technology and web development. With a background in software
            engineering, I aim to create innovative solutions that push the
            boundaries of what&apos;s possible with autonomous drones.
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2>Contact</h2>
          </CardHeader>
          <CardBody>
            If you have any questions or would like to get in touch, feel free
            to reach out to me via email at{" "}
            <Link color="primary" href="mailto:ssdeanx@gmail.com">
              ssdeanx@gmail.com
            </Link>
            .
          </CardBody>
        </Card>
      </section>
    </>
  );
}
