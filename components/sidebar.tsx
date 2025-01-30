"use client";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTheme } from "@mui/material/styles";

interface SidebarProps {
  isOpen?: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const theme = useTheme();

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 240,
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[800]
              : theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      }}
    >
      <div style={{ padding: theme.spacing(2) }}>
        <Button
          sx={{
            color: theme.palette.text.secondary,
            border: "none",
            background: "none",
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.text.primary,
            },
          }}
          onClick={onClose}
        >
          Close
        </Button>
        <h2
          style={{
            marginBottom: theme.spacing(2),
            fontSize: "1.25rem",
            fontWeight: 600,
          }}
        >
          Sidebar
        </h2>
        <List>
          <ListItem>
            <Link
              sx={{
                display: "block",
                padding: theme.spacing(1, 2),
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
              href="#item1"
            >
              Item 1
            </Link>
          </ListItem>
          <ListItem>
            <Link
              sx={{
                display: "block",
                padding: theme.spacing(1, 2),
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
              href="#item2"
            >
              Item 2
            </Link>
          </ListItem>
          <ListItem>
            <Link
              sx={{
                display: "block",
                padding: theme.spacing(1, 2),
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
              href="#item3"
            >
              Item 3
            </Link>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
