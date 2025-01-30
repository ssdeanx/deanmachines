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
import { alpha, styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import * as React from "react";

import {
  GithubIcon,
  HeartFilledIcon,
  Logo,
  TwitterIcon,
} from "@/components/icons";
import { DropdownButton, ThemeButton } from "@/components/navbar-buttons";
import Sidebar from "@/components/sidebar";
import { siteConfig } from "@/config/site";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Navbar = () => {
  const theme = useTheme();
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
        backgroundColor:
          theme?.palette?.mode === "dark"
            ? "hsl(var(--default))"
            : "hsl(var(--background))",
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
                  color: theme?.palette?.mode === "dark" ? "white" : "black",
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
                  color: theme?.palette?.mode === "dark" ? "white" : "black",
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
                    color:
                      theme?.palette?.mode === "dark"
                        ? "white"
                        : "primary.main",
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
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
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
              <ThemeButton />
            </Box>
            <Link
              component={NextLink}
              href="/dashboard"
              sx={{
                my: 2,
                mx: 2,
                color: "inherit",
                display: { xs: "none", lg: "block" },
                textDecoration: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                backgroundColor:
                  theme?.palette?.mode === "dark"
                    ? "hsl(var(--gray-700))"
                    : "hsl(var(--gray-200))",
                "&:hover": {
                  backgroundColor:
                    theme?.palette?.mode === "dark"
                      ? "hsl(var(--gray-600))"
                      : "hsl(var(--gray-300))",
                },
              }}
            >
              Dashboard
            </Link>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            </Box>
            <Link
              component={NextLink}
              href={siteConfig.links.sponsor}
              sx={{
                my: 2,
                mx: 2,
                color: "inherit",
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              <IconButton sx={{ color: "inherit" }}>
                <HeartFilledIcon />
                <Typography
                  sx={{
                    ml: 1,
                    color: theme?.palette?.mode === "dark" ? "white" : "black",
                  }}
                >
                  Sponsor
                </Typography>
              </IconButton>
            </Link>
            <Box
              sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
            >
              <IconButton sx={{ color: "white" }} onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <GithubIcon />
              </Link>
              <DropdownButton
                items={[
                  {
                    key: "light",
                    label: "Light",
                    onClick: () =>
                      document.documentElement.classList.remove("dark"),
                  },
                  {
                    key: "dark",
                    label: "Dark",
                    onClick: () =>
                      document.documentElement.classList.add("dark"),
                  },
                ]}
              />
              <ThemeButton />
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </AppBar>
  );
};
