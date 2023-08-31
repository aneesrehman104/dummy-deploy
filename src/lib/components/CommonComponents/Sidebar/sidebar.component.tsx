import React, { Fragment } from "react";
import currntTabIcon from "@public/currntTabIcon.svg";
import Image from "next/image";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { motion } from "framer-motion";
import "./sidebar.css";
import { SidebarItem, SidebarState } from "@/lib/ts/interface";
import { sidebarItem } from "@/lib/ts/constants";

const drawerWidth = 240;

interface ScreenDrawerProps {
  isSidebarOpen: boolean;
  pathname: string;
  handleListItemButton: (item: SidebarItem) => void;
  isOpen: SidebarState;
  handleSubItemClick: (subitem: SidebarItem) => void;
  selected_id?: string;
}

export const MediumScreenDrawer: React.FC<{
  isSidebarOpen: boolean;
  children: React.ReactNode;
}> = ({ isSidebarOpen, children }) => {
  return (
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
      <Box sx={{ overflow: "auto" }}>{children}</Box>
    </Drawer>
  );
};

export const DrawerList: React.FC<ScreenDrawerProps> = ({
  pathname,
  selected_id,
  isOpen,
  handleListItemButton,
  handleSubItemClick,
}) => {
  return (
    <List>
      {sidebarItem.map((item, index) => (
        <Fragment key={item.id}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ListItem>
              <ListItemButton onClick={() => handleListItemButton(item)}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale up effect on hover
                  className={
                    isOpen[item.id] || item.id === selected_id
                      ? "currentTabStyle"
                      : "tabStyle"
                  }
                >
                  {item.id === "overview" ||
                  item.id === "watchlist" || item.id === "newsletters" ? null : isOpen[item.id] ? (
                    <Image
                      src={currntTabIcon}
                      alt="footerImage"
                      style={{ transform: "rotate(90deg)" }}
                      width={8}
                      height={12}
                    />
                  ) : (
                    <Image
                      src={currntTabIcon}
                      alt="footerImage"
                      width={8}
                      height={12}
                    />
                  )}
                  &nbsp; &nbsp;{item.name}
                </motion.div>
              </ListItemButton>
            </ListItem>
          </motion.div>
          {item.items && isOpen[item.id] ? (
            <List>
              {item.items.map((subItem) => (
                <motion.div
                  key={subItem.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ListItem
                    key={subItem.id}
                    style={{ paddingTop: 3, paddingBottom: 3 }}
                  >
                    <ListItemButton onClick={() => handleSubItemClick(subItem)}>
                      <motion.div
                        whileHover={{ scale: 1.05 }} // Scale up effect on hover
                        className={
                          subItem.pathname === pathname
                            ? "currentTabStyleLine"
                            : "tabStyle"
                        }
                      >
                        {subItem.name}
                      </motion.div>
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          ) : null}
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export const ScreenDrawer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
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
      <Box>{children}</Box>
    </Drawer>
  );
};
