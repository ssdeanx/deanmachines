import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="text-center">
        <h1 className={title({ size: "lg" })}>Dean Machines</h1>
        <div className={subtitle({ class: "mt-4" })}>
          Our mission is to create a comprehensive dataset for drone autonomy
          research and build an open-source autonomous drone platform.
        </div>
      </div>

      <div className="mt-8 max-w-3xl text-center">
        <h2 className={title({ size: "md", fontWeight: "normal" })}>
          About Dean Machines
        </h2>
        <div className={subtitle({ class: "mt-4" })}>
          Dean Machines is a project by Sean Dean, a software engineer with a
          passion for technology and autonomous systems. This project aims to
          create an open-source autonomous drone platform using a FPV Racing
          drone equipped with advanced sensors and AI capabilities.
        </div>
      </div>

      <div className="mt-8 max-w-3xl text-center">
        <h2 className={title({ size: "md", fontWeight: "normal" })}>
          What We Plan to Achieve
        </h2>
        <div className={subtitle({ class: "mt-4" })}>
          We are building a standardized dataset including: Visual Data (RGB +
          Depth), LiDAR Point Clouds, Radio Telemetry, Flight Controller Data,
          and Environmental Metrics. We welcome contributions to this project.
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Explore Documentation
        </Link>
      </div>
      <BlogList />
    </section>
  );
}
