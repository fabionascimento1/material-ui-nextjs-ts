import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Maker teste para front-end",
  description: "description to SEO",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Usuários", href: "/users", icon: Person },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <DashboardIcon
                sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
              />
              <Typography variant="h6" noWrap component="div" color="black">
                Maker
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: { xs: "50px", md: DRAWER_WIDTH },
                boxSizing: "border-box",
                top: ["48px", "56px", "64px"],
                height: "auto",
                bottom: 0,
                overflowX: { xs: "hidden", md: "auto" },
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <Typography
                      sx={{ display: { xs: "none", md: "block" } }}
                      fontWeight="bold"
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: "auto" }} />
            {/*  <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <Typography
                      sx={{ display: { xs: "none", md: "block" } }}
                      fontWeight="bold"
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: { xs: "25px", md: `${DRAWER_WIDTH}px` },
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
