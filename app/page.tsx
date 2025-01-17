import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl justify-center text-center">
        <span className={title()}>Welcome to&nbsp;</span>
        <span className={title({ color: "primary" })}>Dean Machines&nbsp;</span>
        <br />
        <span className={title()}>Autonomous Drone Platform.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Building an open-source autonomous drone dataset and development
          platform.
        </div>
      </div>

      <div className="mt-8 max-w-3xl text-center">
        <h2 className={title({ size: "lg", fontWeight: "normal" })}>
          Project Overview
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Dean Machines is developing an open-source autonomous drone platform
          using a 5&quot; FPV Racing drone equipped with advanced sensors and AI
          capabilities. Our mission is to create a comprehensive dataset for
          drone autonomy research.
        </p>
      </div>

      <div className="mt-8 max-w-3xl text-center">
        <h2 className={title({ size: "lg", fontWeight: "normal" })}>
          Hardware Stack
        </h2>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <strong>Drone Platform:</strong> 5&quot; FPV Racing Drone
          </li>
          <li>
            <strong>AI Computer:</strong> NVIDIA Jetson Orin Nano
          </li>
          <li>
            <strong>Sensors:</strong>
            <ul className="ml-4 list-disc">
              <li>TFmini-S LiDAR</li>
              <li>AI-enabled Camera Module</li>
              <li>IMU/Gyroscope</li>
              <li>GPS Module</li>
            </ul>
          </li>
          <li>
            <strong>Communication:</strong>
            <ul className="ml-4 list-disc">
              <li>YHY 9800 Eng D SDR</li>
              <li>433MHz Receiver</li>
              <li>FPV Video Receiver</li>
              <li>30ft Monopole Antenna</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mt-8 max-w-3xl text-center">
        <h2 className={title({ size: "lg", fontWeight: "normal" })}>
          Data Collection Framework
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          We&apos;re building a standardized dataset including:
        </p>
        <ul className="ml-4 mt-2 list-disc text-gray-600 dark:text-gray-400">
          <li>Visual Data (RGB + Depth)</li>
          <li>LiDAR Point Clouds</li>
          <li>Radio Telemetry</li>
          <li>Flight Controller Data</li>
          <li>Environmental Metrics</li>
        </ul>
      </div>

      <div className="mt-8 flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Explore the code in <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
      <BlogList />
    </section>
  );
}
