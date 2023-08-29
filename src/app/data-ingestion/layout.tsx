"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems } from "@user-interface/listitems";
import { AppBar, Drawer } from "@/lib/material/styled.components";
import { usePathname, useRouter } from "next/navigation";
import { defaultTheme, title_name } from "@/lib/ts/internal-feed";
import { Meta } from "@/lib/meta.component";

export const NewsletterContext = React.createContext<{
  current_selection_row: Array<string | boolean | number> | null;
  changeSelectionRow: (row: Array<string | boolean | number>) => void;
}>({
  current_selection_row: [],
  changeSelectionRow: (row) => {},
});

const RootLayout = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [open, setOpen] = React.useState(true);
  const [current_section, setCurrentSection] = useState<string>(
    "Source Material Feed"
  );
  const [current_selection_row, setCurrentSelectionRow] = useState<Array<
    string | boolean | number
  > | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const switchSelection = (section_name: string) => {
    setCurrentSection(section_name);
  };

  const changeSelectionRowNewsFeed = (
    row: Array<string | boolean | number>
  ) => {
    setCurrentSelectionRow(row);
    router.push("/data-ingestion/newslettertool");
  };

  // set the open state to false when the screen is less than 600px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathname) {
      const path = pathname.split("/");
      switch (path[2]) {
        case "sourcematerialfeed":
          setCurrentSection("Source Material Feed");
          break;
        case "dataentrytool":
          setCurrentSection("Data Entry Tool");
          break;
        case "newslettertool":
          setCurrentSection("Newsletter Tool");
          break;
        case "datametrics":
          setCurrentSection("Data Metrics");
          break;
        case "databaseactivityfeed":
          setCurrentSection("Database Activity Feed");
          break;
        default:
          setCurrentSection("Source Material Feed");
          break;
      }
    }
  }, [pathname]);

  return (
    <Meta title="Main" description="" style={{ width: "100%" }}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <CssBaseline />
          <AppBar
            position="absolute"
            open={open}
            sx={{ backgroundColor: "#180e2a" }}
          >
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, fontWeight: "bold" }}
              >
                {current_section}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <List component="nav">
              <MainListItems
                current_item={current_section}
                switch_selection={switchSelection}
              />
            </List>
          </Drawer>

          <NewsletterContext.Provider
            value={{
              current_selection_row: current_selection_row,
              changeSelectionRow: changeSelectionRowNewsFeed,
            }}
          >
            {props.children}
          </NewsletterContext.Provider>
        </Box>
      </ThemeProvider>
    </Meta>
  );
};

export default RootLayout;
