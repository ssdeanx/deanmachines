"use client";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import * as React from "react";

import { GithubIcon, Logo, TwitterIcon } from "@/components/icons";
import Sidebar from "@/components/sidebar";
import { siteConfig } from "@/config/site";
import styles from "./navbar.module.css"; // Import CSS module
import { StaticThemeButton } from "./StaticThemeButton"; // Import StaticThemeButton

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "hsl(var(--background))", // Static background color
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <NextLink
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Logo />
              <span
                style={{
                  fontWeight: "bold",
                  color: "black", // Static text color
                }}
              >
                DeanMachines
              </span>
            </NextLink>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {siteConfig.navMenuItems?.map((item) => (
                <MenuItem key={item.href} onClick={handleCloseNavMenu}>
                  <Link
                    href={item.href}
                    component={NextLink}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <NextLink
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Logo />
              <span
                style={{
                  fontWeight: "bold",
                  color: "black", // Static text color
                }}
              >
                DeanMachines
              </span>
            </NextLink>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              ml: 2,
            }}
          >
            {siteConfig.navItems?.map((item) => (
              <Link
                key={item.href}
                component={NextLink}
                href={item.href}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "inherit",
                  display: "block",
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main", // Static hover color
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              className={styles.search} // Apply CSS class 'search'
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Box className={styles.searchIconWrapper}>
                {" "}
                {/* Apply CSS class 'searchIconWrapper' */}
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: styles.inputBase, // Apply CSS class 'inputBase'
                  input: styles.inputInput, // Apply CSS class 'inputInput'
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <TwitterIcon />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <GithubIcon />
            </Link>
            <StaticThemeButton /> {/* Use StaticThemeButton here */}
          </Box>
        </Toolbar>
      </Container>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </AppBar>
  );
};
