import React, { Fragment, useState } from "react";
import footerLogo from "../../../../public/footerLogo.svg";
import currntTabIcon from "../../../../public/currntTabIcon.svg";
import { useRouter } from "next/navigation";
import Footer from "../Footer";
import Image from "next/image";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./AuthenticatedNavbar.css";
import dynamic from "next/dynamic";

const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));

const drawerWidth = 240;
const sidebarItem = [
  {
    name: "Homes",
    pathname: "/home",
    id: "home",
  },
  {
    name: "IPOs",
    pathname: "/ipos",
    id: "ipos",
  },
  {
    name: "SPACs",
    pathname: "/spacs",
    id: "spacs",
  },
  {
    name: "MERGERS",
    pathname: "/mergers",
    id: "mergers",
  },
];

interface Props {
  selected_id?: string;
  children?: any;
  window?: () => Window;
}

export default function AuthenticatedNavbar(props: Props) {
  const router = useRouter();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(750));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div className="headerMainDiv">
          <div className="headerInnerDiv">
            <div style={{ display: "flex", alignItems: "center" }}>
              {isMediumScreen ? (
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleSidebar}
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              ) : null}
              <Image
                src={footerLogo}
                alt="footerImage"
                width={148}
                height={21}
              />
            </div>
            <div className="textStyle cursorPointer">
              <span>Sign up</span> / <span>Sign In</span>
            </div>
          </div>
        </div>
      </AppBar>
      {isMediumScreen ? (
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#D2ECF9",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {sidebarItem.map((item, index) => (
                <Fragment key={item.id}>
                  <ListItem>
                    <ListItemButton onClick={() => router.push(item.pathname)}>
                      <div
                        className={
                          item.id === props.selected_id
                            ? "currentTabStyle"
                            : "tabStyle"
                        }
                      >
                        {item.id === props.selected_id ? (
                          <Image
                            src={currntTabIcon}
                            alt="footerImage"
                            width={8}
                            height={12}
                          />
                        ) : (
                          " "
                        )}
                        &nbsp; &nbsp;{item.name}
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#D2ECF9",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {sidebarItem.map((item, index) => (
                <Fragment key={item.id}>
                  <ListItem>
                    <ListItemButton onClick={() => router.push(item.pathname)}>
                      <div
                        className={
                          item.id === props.selected_id
                            ? "currentTabStyle"
                            : "tabStyle"
                        }
                      >
                        {item.id === props.selected_id ? (
                          <Image
                            src={currntTabIcon}
                            alt="footerImage"
                            width={8}
                            height={12}
                          />
                        ) : (
                          " "
                        )}
                        &nbsp; &nbsp;{item.name}
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {props.children}
        <Footer />
      </Box>
    </Box>
  );
}
