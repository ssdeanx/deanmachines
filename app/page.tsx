import  Link  from '@mui/material/Link';
import Button from '@mui/material/Button';
 
 import { siteConfig } from "@/config/site";
 import { title, subtitle } from "@/components/primitives";
 import BlogList from "@/components/BlogList";
 import { RocketIcon } from "@/components/icons";
 
 export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="text-center">
        <h1 className={title.base} style={{fontSize: title.size.lg}} >Dean Machines</h1>
        <div className={subtitle.base} style={{marginTop: '1rem'}}>
          Our mission is to create a comprehensive dataset for drone autonomy
          research and build an open-source autonomous drone platform.
        </div>
      </div>
 
      <div className="mt-8 max-w-3xl text-center">
        <h2 className={title.base} style={{fontSize: title.size.md, fontWeight: title.fontWeight.normal}}>
          About Dean Machines
        </h2>
        <div className={subtitle.base} style={{marginTop: '1rem'}}>
          Dean Machines is a project by Sean Dean, a software engineer with a
          passion for technology and autonomous systems. This project aims to
          create an open-source autonomous drone platform using a FPV Racing
          drone equipped with advanced sensors and AI capabilities.
        </div>
      </div>
 
      <div className="mt-8 max-w-3xl text-center">
        <h2 className={title.base} style={{fontSize: title.size.md, fontWeight: title.fontWeight.normal}}>
          What We Plan to Achieve
        </h2>
        <div className={subtitle.base} style={{marginTop: '1rem'}}>
          We are building a standardized dataset including: Visual Data (RGB +
          Depth), LiDAR Point Clouds, Radio Telemetry, Flight Controller Data,
          and Environmental Metrics. We welcome contributions to this project.
        </div>
      </div>
 
      <div className="mt-8 flex justify-center">
        <Button
          variant="contained"
          color="primary"
          href={siteConfig.links.docs}
          component={Link}
        >
          Explore Documentation
        </Button>
      </div>
      <BlogList />
    </section>
  );
 }
