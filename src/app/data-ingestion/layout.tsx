"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems } from "@user-interface/listitems";
import MUIDataTable from "mui-datatables";
import { TableDataInterface } from "@/lib/interfaces";
import { AppBar, Drawer } from "@/lib/material/styled.components";
import {
  InternalDataFeedColumns,
  defaultTheme,
  getMuiTheme,
  initialState,
  limit,
  title_name,
} from "@/lib/ts/internal-feed";
import { Switch, Checkbox, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import { reducer } from "@/lib/reducers/internal-feed";
import { serializeData } from "@/lib/utils/data-ingestion";

// reducer function dummy

export default function RootLayout(children: JSX.Element | JSX.Element[]) {
  const [open, setOpen] = React.useState(true);
  const [current_section, setCurrentSection] = useState<string>(
    "Source Material Feed"
  );
  const [offset, setOffset] = useState<number>(0);
  const [dataset, dispatch] = useReducer(reducer, initialState);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const switchSelection = (section_name: string) => {
    setCurrentSection(section_name);
  };

  const changePage = (page: number) => {
    const standard_offset = page * limit;
    const current_offset = offset;

    if (standard_offset - current_offset >= 0) {
      setOffset(standard_offset);
    }
  };

  const handleSwitchToggle = (payload: any) => {};

  const handleCheckboxToggle = (payload: any) => {};

  const editTextArea = (payload: any) => {};

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
    const GetDataset = async () => {
      // this is a dummy data for now
      // the idea is to make this a paginated based table so that we can load the data in chunks
      // we need to make a call to the backend to get the data with limit and offset
      try {
        const response = await fetch(
          `http://localhost:3000/api/dataset?limit=${limit}&offset=${offset}`
        );
        const data = await response.json();
        const serializedData = serializeData(data);
        if (serializedData.length > 0) {
          // we need to change the payload later
          dispatch({ type: "replace", payload: [] });
        }
      } catch {
        console.log("error while fetching data information");
      }
    };

    GetDataset();
  }, [offset]);

  const final_data = useMemo(() => {
    // the data schema is this
    // [
    //   {
    //     "column_name": "tickers",
    //     "component": "Typography",
    //     "state value": "for checkbox" or "for text input" or different components
    //   },
    //   {
    //     "column_name": "companies",
    //     "component": "Typography",
    //     "state value": "for checkbox" or "for text input" or different components
    //   },
    //   ...
    // ]
    const dummy = [...dataset];
    if (dummy.length > 0) {
      const main_data: Array<Array<string | React.ReactNode>> = [];
      dummy.forEach((inner_arr) => {
        const nested_arr: Array<string | React.ReactNode> = [];
        inner_arr.forEach((item: any) => {
          switch (item.component) {
            case "Typography":
              nested_arr.push(item.text_value);

            case "Switch":
              nested_arr.push(
                <Checkbox
                  value={item.checkbox_state}
                  onChange={() => handleCheckboxToggle("payload")}
                />
              );

            case "Checkbox":
              nested_arr.push(
                <Checkbox
                  value={item.checkbox_state}
                  onChange={() => handleCheckboxToggle("payload")}
                />
              );

            case "Link":
              nested_arr.push(
                <Link href={item.text_value}>{item.text_value}</Link>
              );

            case "Textarea":
              nested_arr.push(
                <TextareaAutosize
                  minRows={5}
                  value={item.text_value}
                  onChange={() => editTextArea("")}
                ></TextareaAutosize>
              );

            case "Badge":
              nested_arr.push("component");
          }
        });

        main_data.push(nested_arr);
      });

      return main_data;
    }
    // mapped response should be 2D array with components, text or numbers as wanted
    return dataset;
  }, [dataset]);

  return (
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
              {title_name}
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
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title="Internal Feed"
              data={final_data}
              columns={InternalDataFeedColumns}
              // @ts-ignore
              options={options}
            />
          </ThemeProvider>
        </Box>
      </Box>
    </ThemeProvider>
  );
}