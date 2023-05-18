import React, { useState } from "react";
import footerLogo from "../../../asserts/images/footerLogo.svg";
import currntTabIcon from "../../../asserts/images/currntTabIcon.svg";
import { useRouter } from "next/router";
import Footer from "../Footer";
import Image from "next/image";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./AuthenticatedNavbar.css";
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
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div className="headerMainDiv">
          <div className="headerInnerDiv">
            <div>
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
              <>
                <ListItem key={item.id}>
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
              </>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {props.children}
        <Footer />
      </Box>
    </Box>
  );
}
