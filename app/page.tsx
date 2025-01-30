import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        py: 8,
        md: { py: 10 },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: "4rem" }}>
          Dean Machines
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
          Our mission is to create a comprehensive dataset for drone autonomy
          research and build an open-source autonomous drone platform.
        </Typography>
      </Box>

      <Box sx={{ mt: 8, maxWidth: "70%", textAlign: "center", mx: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "normal" }}>
          About Dean Machines
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
          Dean Machines is a project by Sean Dean, a software engineer with a
          passion for technology and autonomous systems. This project aims to
          create an open-source autonomous drone platform using a FPV Racing
          drone equipped with advanced sensors and AI capabilities.
        </Typography>
      </Box>

      <Box sx={{ mt: 8, maxWidth: "70%", textAlign: "center", mx: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "normal" }}>
          What We Plan to Achieve
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
          We are building a standardized dataset including: Visual Data (RGB +
          Depth), LiDAR Point Clouds, Radio Telemetry, Flight Controller Data,
          and Environmental Metrics. We welcome contributions to this project.
        </Typography>
      </Box>

      <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          href={siteConfig.links.docs}
          component={Link}
        >
          Explore Documentation
        </Button>
      </Box>
    </Box>
  );
}
