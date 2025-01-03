import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";

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
                <Card
                  className="h-full border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50"
                  shadow="sm"
                >
                  <CardBody className="space-y-3 p-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {spec.desc}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
